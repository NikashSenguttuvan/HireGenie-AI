import api from "./api";

export const askAI = async (documentId, question) => {
  const { data } = await api.post("/api/ask", {
    document_id: documentId,
    question,
  });

  return data;
};
