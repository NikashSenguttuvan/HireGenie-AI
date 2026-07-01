from app.services.rag_service import RAGService

rag = RAGService("test.pdf")

answer = rag.ask(
    "Explain Object-Oriented Programming"
)

print(answer)