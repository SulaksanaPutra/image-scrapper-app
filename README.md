# ClassifyKit

> AI message-classification engine and backend starter built with FastAPI, featuring continuous dataset ingestion, automated model retraining, versioned registry management, and dual-engine inference.

---

## Features

- **FastAPI Endpoints:** Production-ready `/classify`, `/data`, `/retrain`, `/jobs/{id}`, and `/health` REST interfaces with interactive OpenAPI documentation.
- **Dynamic Dataset Training:** Auto-extracts target classification labels dynamically from SQLite/PostgreSQL databases or raw CSV seed files without hardcoded categories.
- **Dual Training Engine:** Fine-tune deep learning models via **DistilBERT** (PyTorch / HuggingFace Transformers) or train lightweight **Scikit-Learn** TF-IDF + LogisticRegression baseline models.
- **Model Registry & Auto-Promotion:** Manages versioned model artifacts under `models/v1.0.0...` and automatically promotes high-performing candidates (`f1_macro >= 0.75`).
- **Asynchronous Retraining Worker:** Executes training pipelines asynchronously via non-blocking thread-pool execution, tracking step-by-step progress and live metrics in SQLite.
- **Human Correction Ingestion:** Ingests human feedback corrections via `/data` to continuously enrich dataset quality and trigger retraining on demand.

---

## Tech Stack

- **Core Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python 3.10+)
- **ML & NLP Engines:** [PyTorch](https://pytorch.org/), [Transformers](https://huggingface.co/docs/transformers/index), [Scikit-Learn](https://scikit-learn.org/)
- **Storage & Database:** [SQLAlchemy](https://www.sqlalchemy.org/) (SQLite / PostgreSQL)
- **Data Validation:** [Pydantic](https://docs.pydantic.dev/) (v2+)
- **Testing & Containerization:** [Pytest](https://docs.pytest.org/), [Docker](https://www.docker.com/)

---

## Project Structure

```text
ClassifyKit/
├── app/
│   ├── main.py              # FastAPI application entrypoint & lifespan lifecycle
│   ├── config.py            # Environment configuration (Pydantic Settings)
│   ├── schemas.py           # Pydantic request/response data contracts
│   ├── deps.py              # FastAPI dependency injection setup
│   ├── routes/
│   │   ├── classify.py      # POST /classify endpoint
│   │   ├── data.py          # POST /data and GET /data feedback endpoints
│   │   ├── retrain.py       # POST /retrain asynchronous trigger endpoint
│   │   └── jobs.py          # GET /jobs/{job_id} status tracking endpoint
│   └── services/
│       ├── storage.py       # Database storage layer (SQLite / PostgreSQL)
│       ├── model_registry.py# Versioned model artifact registry manager
│       ├── inference.py     # Thread-safe model loading & inference engine
│       └── job_runner.py    # Asynchronous thread-pool retraining job runner
├── training/
│   ├── train.py             # CLI entrypoint for model training pipelines
│   ├── dataset.py           # Dataset loader & dynamic label encoder
│   ├── metrics.py           # Evaluation metrics helper (F1 macro, accuracy)
│   └── save_artifacts.py    # Model artifact serialization helper
├── data/
│   └── raw/
│       └── seed_dataset.csv # Initial seed dataset
├── prompts/
│   ├── labeler_prompt.txt   # Prompt template for LLM zero-shot classification
│   └── retrain_prompt.txt   # Prompt template for LLM workflow orchestration
├── models/                  # Registry directory for versioned model artifacts
├── tests/
│   ├── test_api.py          # REST API integration test suite
│   └── test_training.py     # End-to-end training pipeline unit tests
├── Dockerfile               # Multi-stage production container configuration
├── requirements.txt         # Python project dependencies
├── .env.example             # Environment configuration variables template
└── README.md                # Project documentation & reference guide
```

---

## Architecture & Data Flow

ClassifyKit uses a modular service architecture to isolate HTTP transport, storage persistence, model inference, and asynchronous training loops:

```text
               +-------------------------+
               | Incoming Client Request |
               +------------+------------+
                            |
               +------------v------------+
               | FastAPI Router / CORS   |
               +-----+-------------+-----+
                     |             |
     POST /classify  |             | POST /data, POST /retrain, GET /jobs
                     v             v
      +--------------+--+       +--+-------------------+
      | Thread-Safe     |       | Dataset Collection & |
      | Inference Engine|       | Retrain Management   |
      +--------------+--+       +----------+-----------+
                     |                     |
                     |                     v
                     |          +----------+-----------+
                     |          | Storage Layer        |
                     |          | (SQLite / Postgres)  |
                     |          +----------+-----------+
                     |                     |
                     v                     v
      +--------------+--+       +----------+-----------+
      | Model Registry  |       | Async Job Runner     |
      | (v1.0.0)        |       | (Thread Pool Worker) |
      +-----------------+       +----------+-----------+
                                           |
                                           v
                                +----------+-----------+
                                | Dual Training Engine |
                                | (DistilBERT / Sklearn|
                                +----------+-----------+
                                           |
                                           v
                                +----------+-----------+
                                | Model Registry &     |
                                | Auto-Promotion Guard |
                                +----------------------+
```

---

## Usage Examples & Case Breakdown

### 1. Real-Time Text Message Classification
- **Where to use:** Ingesting incoming user feedback, support tickets, or automated messages to route them to appropriate departments.
- **What problem this covers:** Resolves text intents in real time via thread-safe active model inference with confidence scoring.

```json
// POST /classify
{
  "text": "I cannot reset my password"
}
```

```json
// Response
{
  "label": "account",
  "confidence": 0.97,
  "model_version": "v1.0.0"
}
```

### 2. Continuous Dataset Collection & Human Corrections
- **Where to use:** Capturing user feedback corrections or domain-specific labeled samples from manual reviewers.
- **What problem this covers:** Persists new training data directly to SQLite/PostgreSQL to prevent dataset stale-outs.

```json
// POST /data
{
  "text": "My invoice is missing from the billing tab",
  "label": "billing",
  "source": "human_correction"
}
```

```json
// Response
{
  "status": "saved",
  "row_id": 451
}
```

### 3. Asynchronous Model Retraining Trigger
- **Where to use:** Initiating retraining runs without blocking HTTP API requests or holding long open connections.
- **What problem this covers:** Dispatches retraining tasks to a background thread worker pool and yields an immediate `job_id` tracking handle.

```json
// POST /retrain
{
  "dataset_version": "latest",
  "engine": "sklearn"
}
```

```json
// Response
{
  "status": "queued",
  "job_id": "job_20260730_12345"
}
```

### 4. Asynchronous Retraining Progress & Metric Tracking
- **Where to use:** Polling background job completion status, live step progress, and resulting metric performance.
- **What problem this covers:** Provides full visibility into training accuracy and F1 macro scores before model deployment.

```bash
# Poll job status via REST API
curl -X GET http://localhost:8000/jobs/job_20260730_12345
```

```json
// Response
{
  "job_id": "job_20260730_12345",
  "status": "completed",
  "progress": 100,
  "current_step": "finished",
  "model_version": "v1.0.0_20260730_12345",
  "metrics": {
    "accuracy": 0.92,
    "f1_macro": 0.89
  }
}
```

### 5. Zero-Downtime Model Registry Promotion
- **Where to use:** Automatically evaluating new model builds and updating active inference pointers.
- **What problem this covers:** Promotes candidates to `models/v1.0.0` only when evaluation meets thresholds (`f1_macro >= 0.75`), hot-reloading inference seamlessly.

---

## API Blueprint & Endpoints

### Classification Engine
- `POST /classify` — Classifies input text and returns label prediction, confidence score, and active model version.

### Dataset & Feedback Management
- `POST /data` — Ingests new training samples or human feedback corrections into the dataset database.
- `GET /data` — Retrieves dataset rows with optional filtering by label or source.

### Asynchronous Retraining & Worker Tracking
- `POST /retrain` — Triggers background model retraining pipeline asynchronously.
- `GET /jobs/{job_id}` — Checks retraining progress, execution status, and validation metrics.

### System & Operations
- `GET /health` — Returns system status and active model registry details.

---

## Development & Setup

### 1. Local Environment Setup

Clone repository, configure virtual environment, and install dependencies:

```bash
git clone https://github.com/SulaksanaPutra/classify-kit.git
cd classify-kit

# Create & activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Running FastAPI Dev Server

Start local application server with auto-reload at `http://localhost:8000`:

```bash
uvicorn app.main:app --reload --port 8000
```

Access Interactive API Documentation at [http://localhost:8000/docs](http://localhost:8000/docs).

### 3. CLI Retraining Execution

Train baseline model via command line interface:

```bash
python training/train.py --output-dir models/v1.0.0 --engine sklearn
```

### 4. Running Integration & Unit Tests

Run test suite via `pytest`:

```bash
pytest -v
```

### 5. Production Docker Environment

Build and run production container:

```bash
docker build -t classify-kit .
docker run -d -p 8000:8000 classify-kit
```

---

## Developer & Contact

- **Developer:** [Bayu Aksana](https://bayuaksana.com/)
- **Website:** [bayuaksana.com](https://bayuaksana.com/)
- **Email:** [info@bayuaksana.com](mailto:info@bayuaksana.com)
- **GitHub Profile:** [github.com/SulaksanaPutra](https://github.com/SulaksanaPutra)

---

## License

[MIT License](LICENSE) © 2026 Bayu Aksana
