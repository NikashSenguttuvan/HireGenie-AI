from fastapi import APIRouter
from app.models.chat_models import ChatRequest, ChatResponse
from app.services.langchain_service import chat as llm_chat

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    reply = llm_chat(request.message)
    return ChatResponse(reply=reply)