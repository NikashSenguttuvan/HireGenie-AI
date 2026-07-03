from pydantic import BaseModel
from typing import List


class JDMatchRequest(BaseModel):
    resume_id: str
    job_description: str


class JDMatchResponse(BaseModel):
    ats_match_score: int
    keyword_match_score: int
    experience_match_score: int

    matched_skills: List[str]
    missing_skills: List[str]

    strengths: List[str]
    weaknesses: List[str]

    recommendations: List[str]

    final_verdict: str