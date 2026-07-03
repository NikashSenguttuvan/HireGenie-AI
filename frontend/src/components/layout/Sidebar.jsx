import {
  LayoutDashboard,
  FileText,
  Briefcase,
  MessageSquare,
  History,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Resume Analyzer",
    icon: FileText,
    path: "/resume",
  },
  {
    title: "JD Matcher",
    icon: Briefcase,
    path: "/matcher",
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
    path: "/chat",
  },
  {
    title: "History",
    icon: History,
    path: "/history",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen">
      <div className="p-6">
        <Logo />
      </div>

      <nav className="px-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
