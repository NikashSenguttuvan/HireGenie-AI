def get_jd_match_prompt(parsed_resume: dict, job_description: str) -> str:
    return f"""
You are an expert ATS Resume Evaluator and Technical Recruiter.

Compare the following resume against the given Job Description.

Resume:

{parsed_resume}

Job Description:

{job_description}

Return ONLY valid JSON in the following format:

{{
    "ats_match_score": 0,
    "keyword_match_score": 0,
    "experience_match_score": 0,

    "matched_skills": [],
    "missing_skills": [],

    "strengths": [],
    "weaknesses": [],

    "recommendations": [],

    "final_verdict": ""
}}

Scoring Rules:

ATS Match Score:
0-100

Keyword Match Score:
0-100

Experience Match Score:
0-100

Evaluate:

- Technical Skills
- Experience
- Projects
- Education
- Certifications
- ATS Keywords

Return JSON only.
"""