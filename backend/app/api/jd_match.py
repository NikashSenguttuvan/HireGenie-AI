import os

from fastapi import APIRouter, HTTPException

from app.models.jd_match_models import JDMatchRequest
from app.services.jd_match_service import JDMatchService

router = APIRouter(
    prefix="/jd-match",
    tags=["JD Matcher"]
)

UPLOAD_FOLDER = "uploads/resumes"

jd_match_service = JDMatchService()


@router.post("/analyze")
async def analyze_jd_match(request: JDMatchRequest):

    resume_path = os.path.join(
        UPLOAD_FOLDER,
        f"{request.resume_id}.pdf"
    )

    if not os.path.exists(resume_path):
        raise HTTPException(
            status_code=404,
            detail="Resume not found."
        )

    result = jd_match_service.analyze(
        resume_path=resume_path,
        job_description=request.job_description
    )

    return result