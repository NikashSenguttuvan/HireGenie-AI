import Card from "../common/Card";
import CircularProgress from "../common/CircularProgress";

export default function ScoreCard({ title, score }) {
  const status =
    score >= 85
      ? "Excellent"
      : score >= 70
        ? "Good"
        : score >= 50
          ? "Average"
          : "Needs Improvement";

  const color =
    score >= 85
      ? "#22c55e"
      : score >= 70
        ? "#3b82f6"
        : score >= 50
          ? "#f59e0b"
          : "#ef4444";

  const description =
    score >= 85
      ? "Your resume is highly competitive."
      : score >= 70
        ? "Strong resume with room for improvement."
        : score >= 50
          ? "Improve skills and projects to increase your score."
          : "Significant improvements are recommended.";

  return (
    <Card className="flex flex-col items-center rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      <h2 className="mb-6 text-2xl font-bold text-white">{title}</h2>

      <CircularProgress value={score} color={color} />

      <span
        className={`
          mt-6 rounded-full px-5 py-2 text-sm font-semibold
          ${
            status === "Excellent"
              ? "bg-green-500/20 text-green-400"
              : status === "Good"
                ? "bg-blue-500/20 text-blue-400"
                : status === "Average"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
          }
        `}
      >
        {status}
      </span>

      <p className="mt-5 text-center text-sm leading-6 text-slate-400">
        {description}
      </p>
    </Card>
  );
}
