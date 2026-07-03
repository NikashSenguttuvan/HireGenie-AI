from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.chat import router as chat_router
from app.api.upload import router as upload_router
from app.api.ask import router as ask_router
from app.api.resume import router as resume_router
from app.api.jd_match import router as jd_match_router

app = FastAPI(
    title="HireGenie AI",
    version="1.0.0",
    description="AI Campus Placement Assistant"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

app.include_router(
    resume_router,
    prefix="/api",
    tags=["Resume"]
)

app.include_router(
    jd_match_router,
    prefix="/api",
    tags=["JD Matcher"]
)