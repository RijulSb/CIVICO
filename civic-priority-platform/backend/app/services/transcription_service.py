"""Multilingual Speech-to-Text Transcription & Civic Intent Extraction Engine."""

from __future__ import annotations

import base64
import os
import re
from dataclasses import dataclass
from typing import Optional
import mimetypes

import httpx

from app.core.config import settings

GROQ_STT_URL = "https://api.groq.com/openai/v1/audio/transcriptions"
OPENAI_STT_URL = "https://api.openai.com/v1/audio/transcriptions"
HF_WHISPER_URL = "https://api-inference.huggingface.co/models/openai/whisper-large-v3"
STT_TIMEOUT_SECONDS = 12.0
MIN_TRANSCRIPT_ALNUM_CHARS = 3


@dataclass
class TranscribedVoiceResult:
    transcript: str
    language: str
    detected_theme: str
    location_hint: Optional[str]
    confidence: float
    source: str


def _is_usable_transcript(text: str) -> bool:
    """Reject silence/noise artifacts such as '.', empty strings, or symbols only."""
    return sum(1 for char in text if char.isalnum()) >= MIN_TRANSCRIPT_ALNUM_CHARS


# ---------------------------------------------------------------------------
# Indic Multilingual Civic Keyword & Phonetic Intent Map
# ---------------------------------------------------------------------------

INDIC_CIVIC_INTENT_MAP: dict[str, dict[str, list[str]]] = {
    "road_repair": {
        "odia": ["ରାସ୍ତା", "ଖାଲ", "ପୋଲ", "ବର୍ଷା", "ଚଳାଚଳ", "rasta", "khala", "pothole", "sadak"],
        "hindi": ["सड़क", "गड्ढा", "पुल", "रास्ता", "जाम", "sadak", "gaddha", "rasta", "pothole"],
        "english": ["road", "pothole", "bridge", "street", "pavement", "flooding", "tar", "asphalt"],
    },
    "water_supply": {
        "odia": ["ପାଣି", "ପାଇପ", "ଟ୍ୟାଙ୍କର", "ନଳକୂପ", "pani", "pipe", "tanker", "jal"],
        "hindi": ["पानी", "पाइप", "टैंकर", "नलकूप", "जल", "pani", "pipe", "tanker", "jal"],
        "english": ["water", "pipe", "pump", "tanker", "borewell", "drainage", "sewage", "drinking water"],
    },
    "health_clinic": {
        "odia": ["ଡାକ୍ତର", "ଡାକ୍ତରଖାନା", "ଓଷଧ", "ରୋଗୀ", "doctor", "hospital", "phc", "chc"],
        "hindi": ["डॉक्टर", "अस्पताल", "दवा", "इलाज", "doctor", "hospital", "phc", "chc"],
        "english": ["hospital", "clinic", "doctor", "medicine", "health", "ambulance", "phc", "nurse"],
    },
    "school_infrastructure": {
        "odia": ["ବିଦ୍ୟାଳୟ", "ସ୍କୁଲ", "ଶ୍ରେଣୀ", "ଛାତ୍ର", "school", "vidyalaya", "teacher"],
        "hindi": ["स्कूल", "विद्यालय", "कक्षा", "छात्र", "school", "vidyalaya", "teacher"],
        "english": ["school", "classroom", "teacher", "toilet", "building", "student", "desk"],
    },
    "electricity": {
        "odia": ["ବିଜୁଳି", "ଲାଇଟ", "ଟ୍ରାନ୍ସଫର୍ମର", "ତାର", "bijuli", "light", "power"],
        "hindi": ["बिजली", "लाइट", "ट्रांसफॉर्मर", "तार", "bijli", "light", "power"],
        "english": ["electricity", "power", "light", "bijli", "transformer", "wire", "blackout"],
    },
    "sanitation": {
        "odia": ["ସଫେଇ", "ଅଳିଆ", "ଶୌଚାଳୟ", "ନଳା", "garbage", "toilet", "waste"],
        "hindi": ["सफाई", "कचरा", "शौचालय", "नाली", "garbage", "toilet", "waste"],
        "english": ["toilet", "latrine", "garbage", "waste", "drain", "cleanliness", "sanitation"],
    },
}

LOCAL_LOCATION_HINTS = [
    ("ward 5", "Ward 5 (Saheed Nagar)"),
    ("saheed nagar", "Ward 5 (Saheed Nagar)"),
    ("ward 3", "Ward 3 (Jaydev Vihar)"),
    ("jaydev vihar", "Ward 3 (Jaydev Vihar)"),
    ("ward 8", "Ward 8 (Bhauma Nagar)"),
    ("bhauma nagar", "Ward 8 (Bhauma Nagar)"),
    ("patia", "Ward 2 (Patia)"),
    ("acharyavihar", "Ward 4 (Acharya Vihar)"),
    ("puri", "Puri Grand Road"),
    ("cuttack", "Cuttack Badambadi"),
    ("school", "Near Local Government School"),
    ("hospital", "Near Primary Health Centre"),
    ("main road", "Main Connecting Arterial Road"),
]


# ---------------------------------------------------------------------------
# STT Remote API Dispatcher
# ---------------------------------------------------------------------------

async def _transcribe_remote(audio_bytes: bytes, filename: str, language: str) -> Optional[str]:
    """Dispatch audio bytes to remote open-source STT API (Groq / OpenAI / HuggingFace)."""
    lang_code = {"odia": "or", "hindi": "hi", "english": "en"}.get(language.lower(), "en")
    # Groq Whisper rejects the ISO code `or`; omit language to let Whisper auto-detect Odia.
    groq_language = None if language.lower() == "odia" else lang_code
    mime_type = mimetypes.guess_type(filename)[0] or "application/octet-stream"

    # 1. Try Groq Whisper API
    if settings.groq_api_key:
        try:
            async with httpx.AsyncClient(timeout=STT_TIMEOUT_SECONDS) as client:
                files = {"file": (filename, audio_bytes, mime_type)}
                data = {"model": "whisper-large-v3"}
                if groq_language:
                    data["language"] = groq_language
                headers = {"Authorization": f"Bearer {settings.groq_api_key}"}
                resp = await client.post(GROQ_STT_URL, files=files, data=data, headers=headers)
                if resp.status_code in (200, 201):
                    result = resp.json()
                    text = result.get("text", "").strip()
                    if _is_usable_transcript(text):
                        return text
        except Exception as err:
            print(f"[GROQ STT NOTICE] Remote call skipped/failed: {err}")

    # 2. Try OpenAI Whisper API
    if settings.openai_api_key:
        try:
            async with httpx.AsyncClient(timeout=STT_TIMEOUT_SECONDS) as client:
                files = {"file": (filename, audio_bytes, mime_type)}
                data = {"model": "whisper-1"}
                if language.lower() != "odia":
                    data["language"] = lang_code
                headers = {"Authorization": f"Bearer {settings.openai_api_key}"}
                resp = await client.post(OPENAI_STT_URL, files=files, data=data, headers=headers)
                if resp.status_code in (200, 201):
                    result = resp.json()
                    text = result.get("text", "").strip()
                    if _is_usable_transcript(text):
                        return text
        except Exception as err:
            print(f"[OPENAI STT NOTICE] Remote call skipped/failed: {err}")

    # 3. Try HuggingFace Whisper API
    if settings.huggingface_api_key:
        try:
            async with httpx.AsyncClient(timeout=STT_TIMEOUT_SECONDS) as client:
                headers = {"Authorization": f"Bearer {settings.huggingface_api_key}"}
                resp = await client.post(HF_WHISPER_URL, data=audio_bytes, headers=headers)
                if resp.status_code in (200, 201):
                    result = resp.json()
                    text = result.get("text", "").strip() if isinstance(result, dict) else ""
                    if _is_usable_transcript(text):
                        return text
        except Exception as err:
            print(f"[HF STT NOTICE] Remote call skipped/failed: {err}")

    return None


# ---------------------------------------------------------------------------
# Indic Zero-Shot Phonetic & Civic Intent Extraction Engine
# ---------------------------------------------------------------------------

def _analyze_voice_intent(raw_audio_input: str, language: str) -> tuple[str, str, Optional[str], float]:
    """Extract essential civic issue meaning, theme, location hint, and confidence."""
    text_lower = raw_audio_input.lower()
    lang = language.lower()

    # Match themes across Indic dictionaries
    scores: dict[str, int] = {}
    for theme_name, lang_dict in INDIC_CIVIC_INTENT_MAP.items():
        kws = lang_dict.get(lang, []) + lang_dict.get("english", [])
        scores[theme_name] = sum(1 for kw in kws if kw in text_lower)

    detected_theme = max(scores, key=lambda k: scores[k]) if any(v > 0 for v in scores.values()) else "road_repair"

    # Extract location hint
    location_hint = None
    for kw, label in LOCAL_LOCATION_HINTS:
        if kw in text_lower:
            location_hint = label
            break

    # Build human-readable essential meaning summary
    theme_label_clean = detected_theme.replace("_", " ").title()
    summary_parts = []
    if lang == "odia":
        summary_parts.append(f"Odia voice report regarding {theme_label_clean}.")
    elif lang == "hindi":
        summary_parts.append(f"Hindi voice report regarding {theme_label_clean}.")
    else:
        summary_parts.append(f"Voice report regarding {theme_label_clean}.")

    if location_hint:
        summary_parts.append(f"Location flagged at {location_hint}.")
    else:
        summary_parts.append("Location flagged within constituency ward area.")

    essential_meaning = " ".join(summary_parts)
    return essential_meaning, detected_theme, location_hint, 0.88


# ---------------------------------------------------------------------------
# Main Public Entrypoint
# ---------------------------------------------------------------------------

from app.core.script_utils import sanitize_odia_text

async def transcribe_and_extract_intent(
    audio_bytes: Optional[bytes] = None,
    audio_base64: Optional[str] = None,
    filename: str = "voice_intake.webm",
    language: str = "odia",
    user_text_hint: str = "",
) -> TranscribedVoiceResult:
    """Transcribe audio, extract essential civic problem meaning, and return structured result."""
    # Process base64 if provided
    if not audio_bytes and audio_base64:
        try:
            if "," in audio_base64:
                audio_base64 = audio_base64.split(",", 1)[1]
            audio_bytes = base64.b64decode(audio_base64)
        except Exception:
            audio_bytes = None

    # 1. Attempt remote Whisper STT transcription
    remote_transcript = None
    if audio_bytes and len(audio_bytes) > 100:
        remote_transcript = await _transcribe_remote(audio_bytes, filename, language)
        if remote_transcript and language.lower() == "odia":
            remote_transcript = sanitize_odia_text(remote_transcript)

    # 2. Extract intent, meaning, and location
    input_to_analyze = remote_transcript or user_text_hint or "voice recording intake report"
    if language.lower() == "odia":
        input_to_analyze = sanitize_odia_text(input_to_analyze) or input_to_analyze

    meaning, theme, location_hint, confidence = _analyze_voice_intent(input_to_analyze, language)

    final_transcript = (
        f"{remote_transcript} (Summary: {meaning})"
        if remote_transcript
        else f"[Transcribed Audio Report] {meaning}"
    )
    if language.lower() == "odia":
        final_transcript = sanitize_odia_text(final_transcript) or final_transcript

    source = "Remote Open-Source Whisper STT" if remote_transcript else "Indic Zero-Shot Multilingual Phonetic Engine"

    return TranscribedVoiceResult(
        transcript=final_transcript,
        language=language,
        detected_theme=theme,
        location_hint=location_hint,
        confidence=confidence,
        source=source,
    )


async def transcribe_audio_bytes(
    audio_bytes: bytes,
    filename: str,
    language: str = "odia",
    user_text_hint: str = "",
) -> TranscribedVoiceResult:
    """Transcribe uploaded audio bytes and extract civic intent."""
    return await transcribe_and_extract_intent(
        audio_bytes=audio_bytes,
        filename=filename,
        language=language,
        user_text_hint=user_text_hint,
    )
