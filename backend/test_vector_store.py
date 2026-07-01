from app.rag.pdf_loader import load_pdf
from app.rag.text_splitter import split_documents
from app.rag.vector_store import create_vector_store

docs = load_pdf("test.pdf")

chunks = split_documents(docs)

db = create_vector_store(chunks)

print("Vector Store Created Successfully!")

print(db.index.ntotal)