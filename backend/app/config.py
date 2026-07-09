from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    # ==========================
    # Gemini
    # ==========================
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

    # ==========================
    # Database
    # ==========================
    DATABASE_URL = os.getenv(
        "DATABASE_URL",
        "sqlite:///./hiregenie.db"
    )

    # ==========================
    # JWT
    # ==========================
    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "change_this_secret"
    )

    ALGORITHM = os.getenv(
        "ALGORITHM",
        "HS256"
    )

    ACCESS_TOKEN_EXPIRE_MINUTES = int(
        os.getenv(
            "ACCESS_TOKEN_EXPIRE_MINUTES",
            60
        )
    )


settings = Settings()