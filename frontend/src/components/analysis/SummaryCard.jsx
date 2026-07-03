import Card from "../common/Card";

export default function SummaryCard({ summary }) {
  return (
    <Card>
      <h2 className="mb-4 text-xl font-semibold">Professional Summary</h2>

      <p className="leading-8 text-slate-300">{summary}</p>
    </Card>
  );
}
