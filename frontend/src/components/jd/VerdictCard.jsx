import Card from "../common/Card";
import { Award } from "lucide-react";

export default function VerdictCard({ verdict }) {
  if (!verdict) return null;

  return (
    <Card className="border-yellow-500/20">
      <div className="flex items-center gap-3 mb-5">
        <Award className="text-yellow-400" size={30} />

        <h2 className="text-2xl font-bold">Final Verdict</h2>
      </div>

      <p className="leading-8 text-slate-300">{verdict}</p>
    </Card>
  );
}
