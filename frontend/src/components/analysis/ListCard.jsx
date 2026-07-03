import Card from "../common/Card";
import { CheckCircle, AlertTriangle, Sparkles } from "lucide-react";

export default function ListCard({
  title,
  items = [],
  iconColor = "text-green-400",
}) {
  const isStrength = title === "Strengths";
  const isWeakness = title === "Weaknesses";
  const isRecommendation =
    title === "Grammar Suggestions" || title === "AI Recommendations";

  return (
    <Card
      className={`
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${
          isStrength
            ? "border-green-500/20 hover:border-green-500/40"
            : isWeakness
              ? "border-orange-500/20 hover:border-orange-500/40"
              : "border-slate-700 hover:border-blue-500/40"
        }
      `}
    >
      <div className="mb-6 flex items-center gap-3">
        {isStrength && <CheckCircle className="text-green-400" size={24} />}

        {isWeakness && <AlertTriangle className="text-orange-400" size={24} />}

        {isRecommendation && <Sparkles className="text-yellow-400" size={24} />}

        <h2
          className={`
            text-2xl font-bold
            ${
              isStrength
                ? "text-green-400"
                : isWeakness
                  ? "text-orange-400"
                  : "text-white"
            }
          `}
        >
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-slate-500">No information available.</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-3
                rounded-xl
                bg-slate-800/50
                p-4
                transition-all
                duration-300
                hover:bg-slate-800
              "
            >
              <CheckCircle
                size={18}
                className={`${iconColor} mt-1 flex-shrink-0`}
              />

              <p className="leading-7 text-slate-300">{item}</p>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
