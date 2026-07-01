from fastapi import APIRouter

from app.models.ask_models import (
    AskRequest,
    AskResponse
)

from app.services.rag_service import RAGService

router = APIRouter()


@router.post(
    "/ask",
    response_model=AskResponse
)
def ask_question(request: AskRequest):

    answer = RAGService.ask(
        request.document_id,
        request.question
    )

    return AskResponse(
        answer=answer
    )