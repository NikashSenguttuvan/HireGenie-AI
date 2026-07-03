import Card from "../common/Card";
import { Lightbulb } from "lucide-react";

export default function AIRecommendations({ items }) {
  return (
    <Card>
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
        <Lightbulb className="text-yellow-400" />
        AI Recommendations
      </h2>

      <div className="space-y-4">
        {items?.map((item, index) => (
          <div key={index} className="rounded-xl bg-slate-800 p-4">
            💡 {item}
          </div>
        ))}
      </div>
    </Card>
  );
}
