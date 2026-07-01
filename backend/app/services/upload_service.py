import os
import shutil
import uuid

from app.rag.pdf_loader import load_pdf
from app.rag.text_splitter import split_documents
from app.rag.vector_store import (
    create_vector_store,
    save_vector_store
)


class UploadService:

    DOCUMENT_DIR = "documents"
    VECTOR_DIR = "vectorstore"

    @staticmethod
    def process_upload(file):

        os.makedirs(UploadService.DOCUMENT_DIR, exist_ok=True)
        os.makedirs(UploadService.VECTOR_DIR, exist_ok=True)

        document_id = str(uuid.uuid4())

        extension = os.path.splitext(file.filename)[1]

        stored_filename = f"{document_id}{extension}"

        pdf_path = os.path.join(
            UploadService.DOCUMENT_DIR,
            stored_filename
        )

        with open(pdf_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        docs = load_pdf(pdf_path)

        chunks = split_documents(docs)

        vectorstore = create_vector_store(chunks)

        index_name = document_id

        save_vector_store(
            vectorstore,
            os.path.join(
                UploadService.VECTOR_DIR,
                index_name
            )
        )

        return {
            "document_id": document_id,
            "original_filename": file.filename
        }