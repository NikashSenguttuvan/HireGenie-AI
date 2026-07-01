import google.generativeai as genai

from app.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_response(message: str) -> str:
    response = model.generate_content(message)
    return response.text