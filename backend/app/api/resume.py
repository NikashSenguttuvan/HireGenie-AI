import os

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

# RAG Imports
from app.rag.pdf_loader import load_pdf
from app.rag.text_splitter import split_documents
from app.rag.vector_store import (
    create_vector_store,
    save_vector_store,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume Analyzer"]
)

UPLOAD_FOLDER = "uploads/resumes"
VECTORSTORE_FOLDER = "vectorstore"

resume_service = ResumeService()


# ---------------------------------------
# Upload Resume
# ---------------------------------------

@router.post("/upload", response_model=ResumeUploadResponse)
async def upload_resume(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF resumes are allowed."
        )

    # Save PDF
    saved_file = await save_uploaded_file(
        file=file,
        upload_folder=UPLOAD_FOLDER,
    )

    # Build uploaded PDF path
    resume_path = build_file_path(
        UPLOAD_FOLDER,
        saved_file["file_id"],
        "pdf",
    )

    try:
        # Load PDF
        docs = load_pdf(resume_path)

        # Split into chunks
        chunks = split_documents(docs)

        # Create embeddings
        vectorstore = create_vector_store(chunks)

        # Save FAISS index
        save_vector_store(
            vectorstore,
            os.path.join(
                VECTORSTORE_FOLDER,
                saved_file["file_id"],
            )
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to create AI index: {str(e)}"
        )

    return ResumeUploadResponse(
        resume_id=saved_file["file_id"],
        filename=saved_file["filename"],
        message="Resume uploaded and indexed successfully."
    )


# ---------------------------------------
# Analyze Resume
# ---------------------------------------

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