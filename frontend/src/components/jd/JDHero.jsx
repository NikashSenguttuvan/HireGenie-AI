import { BriefcaseBusiness } from "lucide-react";

export default function JDHero() {
  return (
    <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <div className="flex items-center gap-4">
        <BriefcaseBusiness className="text-blue-400" size={36} />

        <div>
          <h1 className="text-4xl font-bold">Job Description Matcher</h1>

          <p className="mt-2 text-slate-400">
            Compare your resume against any job description and receive
            AI-powered compatibility insights.
          </p>
        </div>
      </div>
    </div>
  );
}
