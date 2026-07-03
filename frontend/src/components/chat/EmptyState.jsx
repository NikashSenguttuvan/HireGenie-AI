import { Bot } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl">
        <Bot size={46} className="text-white" />
      </div>

      <h2 className="mt-8 text-4xl font-bold text-white">
        Welcome to HireGenie AI
      </h2>

      <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
        Ask questions about your uploaded resume, improve ATS compatibility,
        discover missing skills, prepare for interviews, and receive AI-powered
        career guidance.
      </p>
    </div>
  );
}
