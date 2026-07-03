import { Send } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="border-t border-slate-700 bg-[#151C2E] p-5">
      <div className="flex items-end gap-3">
        <textarea
          rows={1}
          placeholder="Ask anything about your resume..."
          className="flex-1 resize-none rounded-xl border p-3 outline-none focus:border-blue-500"
        />

        <button
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
          "
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
