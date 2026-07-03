export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-xl font-bold text-white shadow-lg">
        H
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">HireGenie</h1>

        <p className="text-xs text-slate-400">AI Recruitment Assistant</p>
      </div>
    </div>
  );
}
