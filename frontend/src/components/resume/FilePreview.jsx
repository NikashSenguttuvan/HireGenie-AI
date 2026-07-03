import Card from "../common/Card";
import { FileText } from "lucide-react";

export default function FilePreview({ file }) {
  if (!file) return null;

  return (
    <Card>
      <div className="flex items-center gap-4">
        <FileText size={40} className="text-blue-400" />

        <div>
          <h2 className="font-semibold">{file.name}</h2>

          <p className="text-slate-400">{(file.size / 1024).toFixed(2)} KB</p>
        </div>
      </div>
    </Card>
  );
}
