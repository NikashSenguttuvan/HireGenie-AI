import api from "./api";

export const uploadResume = async (file, onUploadProgress) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/api/resume/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (event) => {
      if (event.total) {
        const progress = Math.round((event.loaded * 100) / event.total);
        onUploadProgress?.(progress);
      }
    },
  });

  return response.data;
};

export const analyzeResume = async (resumeId, jobRole) => {
  const response = await api.post("/api/resume/analyze", {
    resume_id: resumeId,
    job_role: jobRole,
  });

  return response.data;
};
