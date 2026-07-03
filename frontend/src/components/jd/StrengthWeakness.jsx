import ListCard from "../analysis/ListCard";

export default function StrengthWeakness({ result }) {
  if (!result) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ListCard title="Strengths" items={result.strengths} />

      <ListCard
        title="Weaknesses"
        items={result.weaknesses}
        iconColor="text-orange-400"
      />
    </div>
  );
}
