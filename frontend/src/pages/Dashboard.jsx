import { FileText, Target, Briefcase, MessageSquare } from "lucide-react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentResume from "../components/dashboard/RecentResume";
import AIInsights from "../components/dashboard/AIInsights";

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="ATS Score"
          value="92%"
          subtitle="+4% this week"
          icon={Target}
        />

        <StatCard
          title="Resumes"
          value="8"
          subtitle="Uploaded"
          icon={FileText}
        />

        <StatCard
          title="JD Matches"
          value="14"
          subtitle="Completed"
          icon={Briefcase}
        />

        <StatCard
          title="AI Chats"
          value="35"
          subtitle="Questions asked"
          icon={MessageSquare}
        />
      </div>

      <div className="mt-8">
        <QuickActions />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentResume />

        <AIInsights />
      </div>
    </div>
  );
}
