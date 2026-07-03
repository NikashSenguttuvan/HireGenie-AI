def get_resume_analysis_prompt(parsed_resume: dict, job_role: str) -> str:
    return f"""
You are an expert ATS Resume Analyzer and Senior Technical Recruiter.

Analyze the following resume for the job role:

{job_role}

Resume Data:

{parsed_resume}

Return ONLY valid JSON.

JSON format:

{{
    "ats_score": 0,
    "interview_readiness": 0,
    "summary": "",
    "strengths": [],
    "weaknesses": [],
    "missing_skills": [],
    "grammar_suggestions": [],
    "improved_bullet_points": [],
    "recommended_projects": [],
    "final_verdict": ""
}}

Scoring Rules:

ATS Score:
0-100

Interview Readiness:
0-100

The ATS score should consider:

- Skills match
- Projects
- Education
- Experience
- Keywords
- Resume quality

Missing skills should be based on the requested job role.

Return JSON only.
"""