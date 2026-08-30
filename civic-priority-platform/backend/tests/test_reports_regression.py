from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def _run_id() -> str:
    response = client.get("/api/v1/reports/source-runs?constituency=khordha")
    assert response.status_code == 200
    return response.json()["runs"][0]["runId"]


def test_generate_decision_brief_requires_api_key() -> None:
    response = client.post(
        "/api/v1/reports",
        json={"runId": _run_id(), "title": "Test brief"},
    )
    assert response.status_code == 401


def test_generate_decision_brief_accepts_api_key_and_language() -> None:
    response = client.post(
        "/api/v1/reports",
        headers={"X-API-Key": "dev"},
        json={"runId": _run_id(), "title": "ଖୋର୍ଦ୍ଧା ସଂକ୍ଷିପ୍ତ", "language": "or"},
    )
    assert response.status_code == 201
    assert response.json()["language"] == "or"


def test_preview_localizes_status_and_provenance() -> None:
    response = client.get(f"/api/v1/reports/preview?runId={_run_id()}&language=hi")
    assert response.status_code == 200
    payload = response.json()
    assert payload["language"] == "hi"
    assert payload["status"] == "प्रारूप अनुशंसा - प्राधिकरण की समीक्षा आवश्यक"
    assert any("सत्यापित नागरिक" in item for item in payload["provenance"])


def test_cors_allows_loopback_port_3002() -> None:
    response = client.options(
        "/api/v1/reports",
        headers={
            "Origin": "http://127.0.0.1:3002",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "x-api-key,content-type",
        },
    )
    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "http://127.0.0.1:3002"


def test_submission_contract_accepts_location_provenance() -> None:
    from app.schemas.submissions import SubmissionRequest

    payload = SubmissionRequest.model_validate(
        {
            "language": "odia",
            "submission_type": "text",
            "content": "ପାଣି ରାସ୍ତାରେ ବହୁଛି",
            "location": {
                "ward": "ward-14",
                "block": "Khordha Block",
                "latitude": 20.2961,
                "longitude": 85.8245,
                "accuracy_m": 12.5,
                "timestamp": "2026-08-30T10:00:00Z",
                "custom_text": "Ward 14, beside the water tank",
            },
            "custom_location_text": "Ward 14, beside the water tank",
            "gps_accuracy_m": 12.5,
            "gps_timestamp": "2026-08-30T10:00:00Z",
            "consent": True,
        }
    )
    assert payload.location.accuracy_m == 12.5
    assert payload.custom_location_text == "Ward 14, beside the water tank"
