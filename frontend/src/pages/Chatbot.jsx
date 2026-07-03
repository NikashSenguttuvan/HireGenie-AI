import { useState } from "react";

import { useResume } from "../context/ResumeContext";

import ChatWindow from "../components/chat/ChatWindow";

export default function Chatbot() {
  const { resumeId } = useResume();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNewChat = () => {
    if (messages.length === 0) return;

    const confirmed = window.confirm(
      "Start a new conversation? Current chat will be cleared.",
    );

    if (confirmed) {
      setMessages([]);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-700 bg-[#0B1020] overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-700 bg-[#151C2E] px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">HireGenie AI</h1>

            <p className="mt-2 text-slate-400">
              Ask anything about your uploaded resume.
            </p>
          </div>

          <button
            onClick={handleNewChat}
            className="rounded-lg border border-slate-700 bg-[#1E293B] px-4 py-2 text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            + New Chat
          </button>
        </div>
      </div>

      <ChatWindow
        resumeId={resumeId}
        messages={messages}
        setMessages={setMessages}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}
