import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownMessage({ content }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-4 text-3xl font-bold text-white">{children}</h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-3 mt-6 text-2xl font-semibold text-white">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-2 mt-5 text-xl font-semibold text-white">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-4 leading-8 text-slate-300">{children}</p>
          ),

          ul: ({ children }) => (
            <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-300">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-4 list-decimal space-y-2 pl-6 text-slate-300">
              {children}
            </ol>
          ),

          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-blue-500 pl-4 italic text-slate-400">
              {children}
            </blockquote>
          ),

          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!inline && match) {
              return (
                <SyntaxHighlighter
                  language={match[1]}
                  style={oneDark}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "18px",
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }

            return (
              <code className="rounded bg-slate-800 px-2 py-1 text-blue-300">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
