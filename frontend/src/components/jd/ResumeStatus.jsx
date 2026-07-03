import Card from "../common/Card";
import { CheckCircle } from "lucide-react";

export default function ResumeStatus({ resumeId, resumeName }) {
  return (
    <Card className="mb-8">
      {resumeId ? (
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-400" />

          <div>
            <h2 className="font-semibold">Resume Ready</h2>

            <p className="text-slate-400">{resumeName}</p>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-semibold">No Resume Uploaded</h2>

          <p className="text-slate-400">Upload a resume first.</p>
        </div>
      )}
    </Card>
  );
}
