import os
import uuid
from fastapi import UploadFile


def generate_file_id() -> str:
    """
    Generate a unique file ID.
    """
    return str(uuid.uuid4())


def get_file_extension(filename: str) -> str:
    """
    Get the file extension.
    Example:
        resume.pdf -> pdf
    """
    return filename.split(".")[-1].lower()


def build_file_path(
    upload_folder: str,
    file_id: str,
    extension: str,
) -> str:
    """
    Build the complete file path.
    """

    filename = f"{file_id}.{extension}"

    return os.path.join(upload_folder, filename)


async def save_uploaded_file(
    file: UploadFile,
    upload_folder: str,
) -> dict:
    """
    Save uploaded file.
    """

    # Create the upload folder if it doesn't exist
    os.makedirs(upload_folder, exist_ok=True)

    file_id = generate_file_id()

    extension = get_file_extension(file.filename)

    file_path = build_file_path(
        upload_folder,
        file_id,
        extension,
    )

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    return {
        "file_id": file_id,
        "filename": file.filename,
        "extension": extension,
        "file_path": file_path,
    }


def file_exists(file_path: str) -> bool:
    """
    Check whether a file exists.
    """
    return os.path.exists(file_path)