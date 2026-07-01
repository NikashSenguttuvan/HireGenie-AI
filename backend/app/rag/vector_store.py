from langchain_community.vectorstores import FAISS

from app.rag.embeddings import embeddings


def create_vector_store(chunks):

    vectorstore = FAISS.from_documents(
        documents=chunks,
        embedding=embeddings
    )

    return vectorstore


def save_vector_store(vectorstore, path: str):

    vectorstore.save_local(path)


def load_vector_store(path: str):

    return FAISS.load_local(
        path,
        embeddings,
        allow_dangerous_deserialization=True
    )