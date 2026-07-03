import { useEffect, useRef } from "react";

import EmptyState from "./EmptyState";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import ThinkingBubble from "./ThinkingBubble";

export default function ChatWindow({
  resumeId,
  messages,
  setMessages,
  loading,
  setLoading,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <>
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

            {loading && <ThinkingBubble />}

            <div ref={bottomRef} />
          </div>
        )}
      </div>

      <SuggestedQuestions />

      <ChatInput
        resumeId={resumeId}
        setMessages={setMessages}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}
