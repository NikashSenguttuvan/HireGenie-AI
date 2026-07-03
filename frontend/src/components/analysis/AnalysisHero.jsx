import { Download } from "lucide-react";
import Button from "../common/Button";

export default function AnalysisHero() {
  return (
    <div className="mb-8 flex flex-col justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 lg:flex-row lg:items-center">
      <div>
        <h1 className="text-4xl font-bold">Resume Analyzer</h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Upload your resume and receive AI-powered ATS scoring, interview
          readiness, strengths, weaknesses, missing skills and personalized
          recommendations.
        </p>
      </div>

      <Button className="flex items-center gap-2">
        <Download size={18} />
        Download Report
      </Button>
    </div>
  );
}
