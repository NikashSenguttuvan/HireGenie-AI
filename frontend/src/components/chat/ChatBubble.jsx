import { Bot, User, Copy } from "lucide-react";
import toast from "react-hot-toast";

import MarkdownMessage from "./MarkdownMessage";

export default function ChatBubble({ role, content }) {
  const isUser = role === "user";

  const copyMessage = async () => {
    await navigator.clipboard.writeText(content);
    toast.success("Copied!");
  };

  return (
    <div className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-blue-600
            to-indigo-600
          "
        >
          <Bot size={20} className="text-white" />
        </div>
      )}

      <div
        className={`
          relative
          max-w-4xl
          rounded-2xl
          border
          px-6
          py-5
          ${
            isUser
              ? "border-blue-500 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              : "border-slate-700 bg-[#1B2335]"
          }
        `}
      >
        {isUser ? (
          <p>{content}</p>
        ) : (
          <>
            <MarkdownMessage content={content} />

            <button
              onClick={copyMessage}
              className="
                absolute
                right-4
                top-4
                rounded-lg
                p-2
                text-slate-400
                transition
                hover:bg-slate-700
                hover:text-white
              "
            >
              <Copy size={16} />
            </button>
          </>
        )}
      </div>

      {isUser && (
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-blue-600
          "
        >
          <User size={20} className="text-white" />
        </div>
      )}
    </div>
  );
}
