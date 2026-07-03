import Button from "../common/Button";

export default function AnalyzeButton({ onClick, disabled }) {
  return (
    <Button onClick={onClick} className="mt-6 w-full" disabled={disabled}>
      Analyze Resume
    </Button>
  );
}
