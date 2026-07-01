import os

from app.rag.vector_store import load_vector_store
from app.rag.retriever import get_retriever

from app.prompts.rag_prompt import rag_prompt
from app.services.langchain_service import llm


class RAGService:

    VECTOR_DIR = "vectorstore"

    @staticmethod
    def ask(document_id: str, question: str):

        vectorstore = load_vector_store(
            os.path.join(
                RAGService.VECTOR_DIR,
                document_id
            )
        )

        retriever = get_retriever(vectorstore)

        docs = retriever.invoke(question)

        context = "\n\n".join(
            doc.page_content
            for doc in docs
        )

        chain = rag_prompt | llm

        response = chain.invoke(
            {
                "context": context,
                "question": question
            }
        )

        return response.content