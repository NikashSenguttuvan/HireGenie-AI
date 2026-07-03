from app.models.resume_models import ResumeAnalysisResponse
from app.prompts.resume_prompt import get_resume_analysis_prompt
from app.services.resume_parser import ResumeParser
from app.utils.llm_utils import invoke_json


class ResumeService:

    def __init__(self):
        self.parser = ResumeParser()

    def analyze_resume(self, resume_path: str, job_role: str):

        parsed_resume = self.parser.parse(resume_path)

        prompt = get_resume_analysis_prompt(
            parsed_resume.model_dump(),
            job_role,
        )

        data = invoke_json(prompt)

        return ResumeAnalysisResponse(**data)