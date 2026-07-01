from app.config import GEMINI_API_KEY

from langchain_google_genai import ChatGoogleGenerativeAI
from app.prompts.placement_prompt import placement_prompt


llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=GEMINI_API_KEY,
    temperature=0.7,
)

chain = placement_prompt | llm 


def chat(message: str):

    response = chain.invoke(
        {
            "question": message
        }
    )

    return response.content

