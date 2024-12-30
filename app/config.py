import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    APP_NAME: str = "ClassifyKit"
    APP_ENV: str = "development"
    DEBUG: bool = True
    PORT: int = 8000
    HOST: str = "0.0.0.0"

    DATABASE_URL: str = "sqlite:///./classifykit.db"

    MODEL_REGISTRY_DIR: str = "./models"
    ACTIVE_MODEL_VERSION: str = "v1.0.0"
    DEFAULT_BASE_MODEL: str = "distilbert-base-uncased"
    DEFAULT_ENGINE: str = "sklearn"  # 'sklearn' or 'transformer'

    AUTO_PROMOTE_F1_THRESHOLD: float = 0.75

    # Training Hyperparameters
    TRAIN_BATCH_SIZE: int = 8
    TRAIN_EPOCHS: int = 3
    LEARNING_RATE: float = 2e-5
    MAX_SEQ_LENGTH: int = 128
    TEST_SPLIT_RATIO: float = 0.2
    DEVICE: str = "auto"  # 'auto', 'cpu', 'cuda', 'mps'

    # Security & CORS
    ALLOWED_ORIGINS: str = "*"

    GEMINI_API_KEY: str = ""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()
