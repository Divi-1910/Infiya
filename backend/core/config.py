from pydantic_settings import BaseSettings
from typing import List, Optional
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

class Settings(BaseSettings):
    """Application settings and configuration"""
    
    APP_NAME: str = "Infiya"
    APP_VERSION: str = "1.0.0"
    APP_DESCRIPTION: str = "Backend API for Infiya"
    
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    
    MONGODB_URL: str = "mongodb://localhost:27017"
    MONGODB_NAME: str = "Infiya"
    
    GOOGLE_CLIENT_ID: str = "dummy_client_id"
    JWT_SECRET_KEY: str = "Divyansh"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_DAYS: int = 7
    
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:3000", 
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000"
    ]
    
    REDIS_URL: str = "redis://localhost:6378"
    
    API_VERSION: str = "v1"
    API_PREFIX: str = "/api"
    
    LOG_LEVEL: str = "INFO"
    LOG_FORMAT: str = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    
    SECRET_KEY: str = "dummy_secret_key"
    
    AI_PIPELINE_URL: str = "http://localhost:8080"
    AI_PIPELINE_TIMEOUT: int = 300
    
    REDIS_STREAMS_URL: str = "redis://localhost:6378"
    REDIS_MEMORY_URL: str = "redis://localhost:6380"
    WORKFLOW_MANAGER_URL: str = "http://localhost:8080"
    
    class Config:
        env_file = os.path.join(BASE_DIR, ".env")
        env_file_encoding = "utf-8"
        case_sensitive = True
        
    def is_development(self) -> bool:
        """Check if running in development mode"""
        return self.ENVIRONMENT.lower() in ["development", "dev", "local"]
    
    def is_production(self) -> bool:
        """Check if running in production mode"""
        return self.ENVIRONMENT.lower() in ["production", "prod"]
        
    def get_database_url(self) -> str:
        """Get the complete database URL"""
        return f"{self.MONGODB_URL}/{self.MONGODB_NAME}"

settings = Settings()

if settings.JWT_SECRET_KEY and settings.JWT_SECRET_KEY != "dummy_secret_key":
    settings.SECRET_KEY = settings.JWT_SECRET_KEY
