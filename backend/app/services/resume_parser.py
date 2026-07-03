import re
import fitz  # PyMuPDF

from app.models.resume_models import ParsedResume


class ResumeParser:

    def extract_text(self, pdf_path: str) -> str:
        """
        Extract plain text from a PDF using PyMuPDF.
        """

        doc = fitz.open(pdf_path)

        text = ""

        for page in doc:
            text += page.get_text()

        doc.close()

        return text

    def clean_text(self, text: str) -> str:
        """
        Clean extracted text.
        """

        text = text.replace("\t", " ")
        text = re.sub(r"\n+", "\n", text)
        text = re.sub(r" +", " ", text)

        return text.strip()

    def extract_email(self, text: str):

        match = re.search(
            r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
            text,
        )

        return match.group(0) if match else None

    def extract_phone(self, text: str):

        match = re.search(
            r"(\+91[\-\s]?)?[6-9]\d{9}",
            text,
        )

        return match.group(0) if match else None

    def extract_name(self, text: str):

        lines = text.split("\n")

        for line in lines[:10]:
            line = line.strip()

            if len(line.split()) <= 4 and len(line) > 3:
                return line

        return None

    def extract_section(self, text, section_names):

        lines = text.split("\n")

        collected = []

        capture = False

        for line in lines:

            lower = line.lower().strip()

            if any(sec.lower() == lower for sec in section_names):
                capture = True
                continue

            if capture:

                if (
                    lower in [
                        "education",
                        "experience",
                        "projects",
                        "skills",
                        "certifications",
                        "achievements",
                        "languages",
                        "interests",
                    ]
                ):
                    break

                if line.strip():
                    collected.append(line.strip())

        return collected

    def parse(self, pdf_path: str) -> ParsedResume:

        raw = self.extract_text(pdf_path)

        text = self.clean_text(raw)

        parsed = ParsedResume()

        parsed.name = self.extract_name(text)

        parsed.email = self.extract_email(text)

        parsed.phone = self.extract_phone(text)

        parsed.skills = self.extract_section(
            text,
            ["skills", "technical skills"],
        )

        parsed.education = self.extract_section(
            text,
            ["education"],
        )

        parsed.projects = self.extract_section(
            text,
            ["projects"],
        )

        parsed.experience = self.extract_section(
            text,
            ["experience", "work experience"],
        )

        parsed.certifications = self.extract_section(
            text,
            ["certifications", "certificates"],
        )

        parsed.achievements = self.extract_section(
            text,
            ["achievements"],
        )

        return parsed