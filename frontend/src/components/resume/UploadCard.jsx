import Card from "../common/Card";

export default function UploadCard({ children }) {
  return (
    <Card className="mb-8">
      <h2 className="mb-6 text-2xl font-semibold">Upload Resume</h2>

      {children}
    </Card>
  );
}
