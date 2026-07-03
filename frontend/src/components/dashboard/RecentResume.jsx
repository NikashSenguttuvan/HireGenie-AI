import Card from "../common/Card";
import { FileText } from "lucide-react";

export default function RecentResume() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">Recent Resume</h2>

      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-blue-600/20 p-3">
          <FileText className="text-blue-400" />
        </div>

        <div>
          <h3 className="font-semibold">Software_Engineer.pdf</h3>

          <p className="text-sm text-slate-400">Uploaded 2 minutes ago</p>
        </div>
      </div>
    </Card>
  );
}
