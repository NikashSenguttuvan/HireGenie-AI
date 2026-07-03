from pydantic import BaseModel
from typing import List, Optional


# ---------- Upload Response ----------

class ResumeUploadResponse(BaseModel):
    resume_id: str
    filename: str
    message: str


# ---------- Analyze Request ----------

class ResumeAnalyzeRequest(BaseModel):
    resume_id: str
    job_role: str


# ---------- Parsed Resume ----------

class ParsedResume(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None

    skills: List[str] = []

    education: List[str] = []

    experience: List[str] = []

    projects: List[str] = []

    certifications: List[str] = []

    achievements: List[str] = []


# ---------- Bullet Point Improvement ----------

class BulletPointImprovement(BaseModel):
    original: str
    improved: str


# ---------- Analysis Response ----------

class ResumeAnalysisResponse(BaseModel):

    ats_score: int

    interview_readiness: int

    summary: str

    strengths: List[str]

    weaknesses: List[str]

    missing_skills: List[str]

    grammar_suggestions: List[str]

    improved_bullet_points: List[BulletPointImprovement]

    recommended_projects: List[str]

    final_verdict: str