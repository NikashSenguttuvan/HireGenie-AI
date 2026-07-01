from langchain_core.output_parsers import PydanticOutputParser
from app.models.analysis_models import SkillAnalysis

parser = PydanticOutputParser(
    pydantic_object=SkillAnalysis
)