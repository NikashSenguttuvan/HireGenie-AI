import { useState } from "react";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

import { askAI } from "../../services/askService";

const ChatInput = ({ resumeId, messages, setMessages }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const question = input.trim();

    if (!question) return;

    if (!resumeId) {
      toast.error("Please upload a resume first.");
      return;
    }

    // User message
    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const response = await askAI(resumeId, question);

      const aiMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer,
        createdAt: Date.now(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Unable to get AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-slate-700 bg-[#151C2E] p-5">
      <div className="flex items-end gap-3">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about your resume..."
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          className="
            flex-1
            resize-none
            rounded-xl
            border
            border-slate-700
            bg-[#0F172A]
            p-4
            text-white
            placeholder:text-slate-500
            focus:border-blue-500
            focus:outline-none
            disabled:opacity-50
          "
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            p-4
            text-white
            transition-all
            duration-200
            hover:scale-105
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
