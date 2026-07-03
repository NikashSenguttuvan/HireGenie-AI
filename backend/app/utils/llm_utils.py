import json

from app.services.langchain_service import invoke_llm


def invoke_json(prompt: str) -> dict:
    """
    Invoke Gemini through LangChain and return parsed JSON.
    """

    response = invoke_llm(prompt)

    response = response.strip()

    # Remove markdown code fences
    if response.startswith("```json"):
        response = response.replace("```json", "")

    if response.startswith("```"):
        response = response.replace("```", "")

    if response.endswith("```"):
        response = response.replace("```", "")

    response = response.strip()

    return json.loads(response)