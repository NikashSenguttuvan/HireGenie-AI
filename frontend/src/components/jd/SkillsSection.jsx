import SkillTags from "../analysis/SkillTags";

export default function SkillsSection({ result }) {
  if (!result) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <SkillTags title="Matched Skills" skills={result.matched_skills} />

      <SkillTags title="Missing Skills" skills={result.missing_skills} />
    </div>
  );
}
