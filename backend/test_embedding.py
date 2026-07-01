from app.rag.embeddings import embeddings

vector = embeddings.embed_query(
    "Machine Learning"
)

print(len(vector))

print(vector[:10])