import { useEffect, useRef } from "react";

import EmptyState from "./EmptyState";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";

export default function ChatWindow({ messages, setMessages }) {
  const bottomRef = useRef(null);

  // Auto-scroll whenever a new message is added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <>
      {/* Messages */}
      <div
        className="
          flex-1
          overflow-y-auto
          px-8
          py-6
          bg-[radial-gradient(circle_at_top,#172554_0%,#0B1020_60%)]
        "
      >
        {messages.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}

            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Suggested Questions */}
      <SuggestedQuestions />

      {/* Chat Input */}
      <ChatInput messages={messages} setMessages={setMessages} />
    </>
  );
}
