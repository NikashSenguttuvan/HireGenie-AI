import { useState } from "react";
import toast from "react-hot-toast";
import { useResume } from "../context/ResumeContext";

import JDHero from "../components/jd/JDHero";
import ResumeStatus from "../components/jd/ResumeStatus";
import JDInput from "../components/jd/JDInput";
import JDScoreCards from "../components/jd/JDScoreCards";
import VerdictCard from "../components/jd/VerdictCard";
import SkillsSection from "../components/jd/SkillsSection";
import StrengthWeakness from "../components/jd/StrengthWeakness";
import Recommendations from "../components/jd/Recommendations";

import Button from "../components/common/Button";

import { analyzeJD } from "../services/jdService";

export default function JDMatcher() {
  const { resumeId, resumeName } = useResume();

  const [jobDescription, setJobDescription] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeId) {
      toast.error(
        "Please upload a resume from the Resume Analyzer page first.",
      );
      return;
    }

    if (!jobDescription.trim()) {
      toast.error("Paste a Job Description.");
      return;
    }

    try {
      setLoading(true);

      const response = await analyzeJD(resumeId, jobDescription);

      console.log("===== JD RESPONSE =====");
      console.log(response);

      setResult(response);

      toast.success("JD Analysis Complete!");
    } catch (error) {
      console.error("JD Error:", error);

      console.error("Response:", error.response);

      console.error("Data:", error.response?.data);

      toast.error(
        error.response?.data?.detail || error.message || "Analysis failed.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <JDHero />

      <ResumeStatus resumeId={resumeId} resumeName={resumeName} />

      <div className="mb-6">
        <JDInput value={jobDescription} onChange={setJobDescription} />
      </div>

      <Button onClick={handleAnalyze}>Analyze Match</Button>

      {loading && <div className="mt-8">AI Matching Resume...</div>}

      {result && (
        <div className="mt-10 space-y-8">
          <JDScoreCards result={result} />

          <VerdictCard verdict={result.final_verdict} />

          <SkillsSection result={result} />

          <StrengthWeakness result={result} />

          <Recommendations result={result} />
        </div>
      )}
    </div>
  );
}
