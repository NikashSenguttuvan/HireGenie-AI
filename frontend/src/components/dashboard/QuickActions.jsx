import { Upload, ScanSearch, Briefcase, MessageSquare } from "lucide-react";

import Card from "../common/Card";
import Button from "../common/Button";

export default function QuickActions() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">Quick Actions</h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Button className="flex items-center justify-center gap-2">
          <Upload size={18} />
          Upload
        </Button>

        <Button className="flex items-center justify-center gap-2">
          <ScanSearch size={18} />
          Analyze
        </Button>

        <Button className="flex items-center justify-center gap-2">
          <Briefcase size={18} />
          Match JD
        </Button>

        <Button className="flex items-center justify-center gap-2">
          <MessageSquare size={18} />
          AI Chat
        </Button>
      </div>
    </Card>
  );
}
