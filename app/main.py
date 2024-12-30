from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.services.storage import init_db
from app.services.inference import inference_engine
from app.schemas import HealthResponse
from app.routes import classify, data, retrain, jobs

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup sequence: initialize DB and load active model into memory
    init_db()
    inference_engine.load_active_model()
    yield

app = FastAPI(
    title=settings.APP_NAME,
    description="Reusable AI Message-Classification Starter FastAPI Service",
    version="1.0.0",
    lifespan=lifespan
)

# CORS Middleware setup
origins = [o.strip() for o in settings.ALLOWED_ORIGINS.split(",") if o.strip()]
is_wildcard = "*" in origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins else ["*"],
    allow_credentials=not is_wildcard,  # Spec requirement: false if origins is '*'
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Router Modules
app.include_router(classify.router)
app.include_router(data.router)
app.include_router(retrain.router)
app.include_router(jobs.router)

@app.get("/health", response_model=HealthResponse, tags=["Health"])
def health_check():
    return HealthResponse(
        status="ok",
        model_loaded=inference_engine.model is not None or inference_engine.engine_type != "baseline",
        active_version=inference_engine.current_version
    )
