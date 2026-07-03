import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeId, setResumeId] = useState("");
  const [resumeName, setResumeName] = useState("");

  return (
    <ResumeContext.Provider
      value={{
        resumeId,
        setResumeId,
        resumeName,
        setResumeName,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
