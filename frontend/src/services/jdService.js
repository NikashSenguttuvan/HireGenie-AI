import api from "./api";

export const analyzeJD = async (resumeId, jobDescription) => {
  const response = await api.post("/api/jd-match/analyze", {
    resume_id: resumeId,
    job_description: jobDescription,
  });

  return response.data;
};
