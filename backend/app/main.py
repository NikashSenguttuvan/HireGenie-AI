from fastapi import FastAPI

from app.api.chat import router as chat_router
from app.api.upload import router as upload_router
from app.api.ask import router as ask_router

app = FastAPI(
    title="HireGenie AI",
    version="1.0.0",
    description="AI Campus Placement Assistant"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to HireGenie AI 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }


app.include_router(
    chat_router,
    prefix="/api",
    tags=["Chat"]
)

app.include_router(
    upload_router,
    prefix="/api",
    tags=["Upload"]
)

app.include_router(
    ask_router,
    prefix="/api",
    tags=["Ask"]
)