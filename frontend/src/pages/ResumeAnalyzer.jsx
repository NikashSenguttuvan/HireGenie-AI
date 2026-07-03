import { useState } from "react";
import toast from "react-hot-toast";

import { useResume } from "../context/ResumeContext";

import DashboardLayout from "../layouts/DashboardLayout";

import UploadBox from "../components/resume/UploadBox";
import FilePreview from "../components/resume/FilePreview";
import UploadProgress from "../components/resume/UploadProgress";
import AnalyzeButton from "../components/resume/AnalyzeButton";

import Button from "../components/common/Button";

import AnalysisHero from "../components/analysis/AnalysisHero";
import ScoreCard from "../components/analysis/ScoreCard";
import SummaryCard from "../components/analysis/SummaryCard";
import ListCard from "../components/analysis/ListCard";
import SkillTags from "../components/analysis/SkillTags";
import AIRecommendations from "../components/analysis/AIRecommendations";

import { uploadResume, analyzeResume } from "../services/resumeService";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [jobRole, setJobRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const { resumeId, setResumeId, resumeName, setResumeName } = useResume();

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a resume.");
      return;
    }

    try {
      setLoading(true);

      const response = await uploadResume(file, setProgress);

      setResumeId(response.resume_id);
      setResumeName(response.filename);

      toast.success("Resume uploaded successfully!");
    } catch (error) {
      toast.error(error.response?.data?.detail || "Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!resumeId) {
      toast.error("Upload a resume first.");
      return;
    }

    if (!jobRole.trim()) {
      toast.error("Enter a Job Role.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeResume(resumeId, jobRole);

      setAnalysis(result);

      toast.success("Analysis completed!");
    } catch (error) {
      toast.error(error.response?.data?.detail || "Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <AnalysisHero />

      <UploadBox onFileSelect={setFile} />

      <div className="mt-6">
        <FilePreview file={file} />
      </div>

      {resumeName && (
        <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
          <p className="font-medium text-green-400">✓ Current Resume</p>

          <p className="mt-1 text-slate-300">{resumeName}</p>
        </div>
      )}

      {progress > 0 && <UploadProgress progress={progress} />}

      <div className="mt-6">
        <input
          type="text"
          placeholder="Job Role (Example: AI Engineer)"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            p-4
            text-white
            outline-none
            transition
            focus:border-blue-500
          "
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <Button onClick={handleUpload} disabled={loading}>
          Upload Resume
        </Button>

        <AnalyzeButton onClick={handleAnalyze} disabled={loading} />
      </div>

      {loading && (
        <div className="mt-8 rounded-2xl border border-blue-500/30 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-blue-400">
            🤖 HireGenie AI
          </h2>

          <p className="mt-2 text-slate-400">Analyzing your resume...</p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-full animate-pulse rounded-full bg-blue-500"></div>
          </div>

          <div className="mt-6 space-y-2 text-slate-300">
            <p>✓ Reading Resume</p>

            <p>✓ Extracting Skills</p>

            <p>✓ Calculating ATS Score</p>

            <p>✓ Generating AI Recommendations</p>
          </div>
        </div>
      )}

      {analysis && (
        <div className="mt-10 space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <ScoreCard title="ATS Score" score={analysis.ats_score} />

            <ScoreCard
              title="Interview Readiness"
              score={analysis.interview_readiness}
            />
          </div>

          <SummaryCard summary={analysis.summary} />

          <div className="grid gap-6 lg:grid-cols-2">
            <ListCard title="Strengths" items={analysis.strengths} />

            <ListCard
              title="Weaknesses"
              items={analysis.weaknesses}
              iconColor="text-orange-400"
            />
          </div>

          <SkillTags title="Missing Skills" skills={analysis.missing_skills} />

          <AIRecommendations items={analysis.recommendations} />
        </div>
      )}
    </DashboardLayout>
  );
}
