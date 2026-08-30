import json

import httpx
from app.core.config import settings
from app.core.script_utils import sanitize_odia_text

GROQ_CHAT_URL = "https://api.groq.com/openai/v1/chat/completions"

async def analyze_complaint(text: str, language: str, custom_location: str | None, latitude: float | None, longitude: float | None) -> dict | None:
    if not settings.groq_api_key or not text.strip():
        return None
    
    clean_text = sanitize_odia_text(text) if language.lower() == "odia" else text
    prompt = {
        "language": language,
        "complaint": clean_text[:6000],
        "custom_location": custom_location or None,
        "gps": {"lat": latitude, "lng": longitude} if latitude is not None and longitude is not None else None,
        "instruction": (
            "Extract the civic issue and problem location from text. Do not invent places. "
            "Return formatted_text in the input language. "
            "CRITICAL: If the language is Odia, all Odia text MUST use Odia script (ଓଡ଼ିଆ ଲିପି), NEVER use Bengali script (বাংলা)."
        ),
    }
    schema = {
        "issue_type": "string or null",
        "problem_location": "string or null",
        "urgency": "low|medium|high|unknown",
        "urgency_reason": "string or null",
        "beneficiaries_estimate": "string or null",
        "formatted_text": "string"
    }
    try:
        async with httpx.AsyncClient(timeout=18) as client:
            response = await client.post(GROQ_CHAT_URL, headers={"Authorization": f"Bearer {settings.groq_api_key}"}, json={
                "model": "llama-3.1-8b-instant",
                "temperature": 0.1,
                "response_format": {"type": "json_object"},
                "messages": [
                    {"role": "system", "content": "You are CIVICO's multilingual civic issue extraction service. Output only valid JSON matching this shape: " + json.dumps(schema)},
                    {"role": "user", "content": json.dumps(prompt, ensure_ascii=False)},
                ],
            })
            response.raise_for_status()
            content = response.json()["choices"][0]["message"]["content"]
            result = json.loads(content)
            if isinstance(result, dict):
                if language.lower() == "odia":
                    for k in ("problem_location", "formatted_text", "urgency_reason"):
                        if isinstance(result.get(k), str):
                            result[k] = sanitize_odia_text(result[k])
                return result
    except (httpx.HTTPError, KeyError, TypeError, ValueError):
        return None
    return None
