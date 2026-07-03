from app.models.jd_match_models import JDMatchResponse
from app.prompts.jd_match_prompt import get_jd_match_prompt
from app.services.resume_parser import ResumeParser
from app.utils.llm_utils import invoke_json


class JDMatchService:

    def __init__(self):
        self.parser = ResumeParser()

    def analyze(self, resume_path: str, job_description: str):

        parsed_resume = self.parser.parse(resume_path)

        prompt = get_jd_match_prompt(
            parsed_resume.model_dump(),
            job_description,
        )

        data = invoke_json(prompt)

        return JDMatchResponse(**data)