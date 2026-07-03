import ScoreCard from "../analysis/ScoreCard";

export default function JDScoreCards({ result }) {
  if (!result) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <ScoreCard title="ATS Match" score={result.ats_match_score} />

      <ScoreCard title="Keyword Match" score={result.keyword_match_score} />

      <ScoreCard
        title="Experience Match"
        score={result.experience_match_score}
      />
    </div>
  );
}
