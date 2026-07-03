import ScoreCard from "../analysis/ScoreCard";
import SkillTags from "../analysis/SkillTags";
import AIRecommendations from "../analysis/AIRecommendations";
import ListCard from "../analysis/ListCard";

export default function MatchResult({ result }) {
  if (!result) return null;

  return (
    <div className="mt-10 space-y-8">
      <ScoreCard title="Match Score" score={result.match_score} />

      <SkillTags title="Matched Skills" skills={result.matched_skills} />

      <SkillTags title="Missing Skills" skills={result.missing_skills} />

      <AIRecommendations items={result.recommendations} />

      <ListCard title="Summary" items={[result.summary]} />
    </div>
  );
}
