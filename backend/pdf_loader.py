from app.rag.pdf_loader import load_pdf

docs = load_pdf("test.pdf")

print(docs[0])

from app.rag.pdf_loader import load_pdf
from app.rag.text_splitter import split_documents

docs = load_pdf("test.pdf")

chunks = split_documents(docs)

print(f"Pages: {len(docs)}")
print(f"Chunks: {len(chunks)}")

print("\nFirst Chunk:\n")
print(chunks[0].page_content)