import os
import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "model_loaded" in data
    assert "active_version" in data

def test_classify_endpoint():
    response = client.post("/classify", json={"text": "I cannot reset my password"})
    assert response.status_code == 200
    data = response.json()
    assert "label" in data
    assert "confidence" in data
    assert "model_version" in data
    assert isinstance(data["confidence"], float)

def test_classify_empty_text():
    response = client.post("/classify", json={"text": ""})
    assert response.status_code == 400

def test_data_collection_and_listing():
    # Submit data
    post_res = client.post("/data", json={
        "text": "My invoice has an error",
        "label": "billing",
        "source": "unit_test"
    })
    assert post_res.status_code == 200
    post_data = post_res.json()
    assert post_data["status"] == "saved"
    assert "row_id" in post_data

    # Retrieve data with pagination
    get_res = client.get("/data?limit=10&offset=0")
    assert get_res.status_code == 200
    get_data = get_res.json()
    assert get_data["total"] > 0
    assert get_data["limit"] == 10
    assert get_data["offset"] == 0
    assert any(msg["text"] == "My invoice has an error" for msg in get_data["messages"])

def test_retrain_and_job_status():
    retrain_res = client.post("/retrain", json={"engine": "sklearn", "dataset_version": "test_v1"})
    assert retrain_res.status_code == 200
    job_id = retrain_res.json()["job_id"]
    assert job_id.startswith("job_")

    job_res = client.get(f"/jobs/{job_id}")
    assert job_res.status_code == 200
    job_data = job_res.json()
    assert job_data["job_id"] == job_id
    assert job_data["status"] in ["pending", "running", "completed"]
