const suggestions = [
  "Improve my resume",
  "What skills are missing?",
  "Generate interview questions",
  "Explain my ATS score",
];

const SuggestedQuestions = () => {
  return (
    <div className="border-t border-slate-700 bg-[#151C2E] px-6 py-5">
      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            className="
              rounded-full
              border
              border-slate-700
              bg-[#1E293B]
              px-4
              py-2
              text-sm
              font-medium
              text-slate-300
              transition-all
              duration-200
              hover:border-blue-500
              hover:bg-blue-600
              hover:text-white
              "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
