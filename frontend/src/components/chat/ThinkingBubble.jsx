import { Bot } from "lucide-react";

export default function ThinkingBubble() {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
        <Bot size={20} className="text-white" />
      </div>

      <div className="rounded-2xl border border-slate-700 bg-[#1B2335] px-6 py-5">
        <p className="mb-3 font-medium text-white">HireGenie AI</p>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
            style={{ animationDelay: "0.3s" }}
          ></span>

          <span className="ml-2 text-sm text-slate-400">Thinking...</span>
        </div>
      </div>
    </div>
  );
}
