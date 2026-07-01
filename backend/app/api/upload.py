from fastapi import APIRouter, UploadFile, File

from app.models.upload_models import UploadResponse
from app.services.upload_service import UploadService

router = APIRouter()


@router.post("/upload", response_model=UploadResponse)
async def upload_pdf(
    file: UploadFile = File(...)
):

    result = UploadService.process_upload(file)

    return UploadResponse(
        message="Document indexed successfully",
        document_id=result["document_id"],
        filename=result["original_filename"]
    )