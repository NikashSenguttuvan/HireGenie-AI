import AIRecommendations from "../analysis/AIRecommendations";

export default function Recommendations({ result }) {
  if (!result) return null;

  return <AIRecommendations items={result.recommendations} />;
}
