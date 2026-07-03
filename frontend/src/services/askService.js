import api from "./api";

export const askResume = async (documentId, question) => {
  const response = await api.post("/api/ask", {
    document_id: documentId,
    question,
  });

  return response.data;
};
