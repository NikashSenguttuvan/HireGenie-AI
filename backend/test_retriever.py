from app.rag.pdf_loader import load_pdf
from app.rag.text_splitter import split_documents
from app.rag.vector_store import create_vector_store
from app.rag.retriever import get_retriever

docs = load_pdf("test.pdf")

chunks = split_documents(docs)

db = create_vector_store(chunks)

retriever = get_retriever(db)

results = retriever.invoke("What is Object-Oriented Programming?")

print(f"Retrieved {len(results)} chunks\n")

for i, doc in enumerate(results, start=1):
    print(f"Chunk {i}")
    print("-" * 50)
    print(doc.page_content[:300])   # first 300 chars
    print()