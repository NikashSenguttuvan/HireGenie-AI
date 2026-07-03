from fastapi import APIRouter, UploadFile, File, HTTPException

from app.models.resume_models import (
    ResumeUploadResponse,
    ResumeAnalyzeRequest,
)

from app.services.resume_service import ResumeService
from app.utils.file_utils import (
    save_uploaded_file,
    build_file_path,
    file_exists,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume Analyzer"]
)

UPLOAD_FOLDER = "uploads/resumes"

resume_service = ResumeService()


# -----------------------------
# Upload Resume
# -----------------------------

@router.post("/upload", response_model=ResumeUploadResponse)
async def upload_resume(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF resumes are allowed."
        )

    saved_file = await save_uploaded_file(
        file=file,
        upload_folder=UPLOAD_FOLDER,
    )

    return ResumeUploadResponse(
        resume_id=saved_file["file_id"],
        filename=saved_file["filename"],
        message="Resume uploaded successfully."
    )


# -----------------------------
# Analyze Resume
# -----------------------------

@router.post("/analyze")
async def analyze_resume(request: ResumeAnalyzeRequest):

    resume_path = build_file_path(
        UPLOAD_FOLDER,
        request.resume_id,
        "pdf",
    )

    if not file_exists(resume_path):
        raise HTTPException(
            status_code=404,
            detail="Resume not found."
        )

    result = resume_service.analyze_resume(
        resume_path=resume_path,
        job_role=request.job_role,
    )

    return result