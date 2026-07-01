from pydantic import BaseModel
from typing import List


class SkillAnalysis(BaseModel):
    strengths: List[str]
    weaknesses: List[str]
    interview_tip: str