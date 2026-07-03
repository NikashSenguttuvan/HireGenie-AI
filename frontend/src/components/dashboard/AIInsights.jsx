import Card from "../common/Card";
import { CheckCircle } from "lucide-react";

const insights = [
  "Resume is ATS Friendly",
  "Add Docker to your skills",
  "Improve professional summary",
  "Include leadership experience",
];

export default function AIInsights() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">AI Insights</h2>

      <div className="space-y-4">
        {insights.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-400" />

            <p className="text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
