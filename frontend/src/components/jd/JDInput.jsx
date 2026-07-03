export default function JDInput({ value, onChange }) {
  return (
    <textarea
      rows={12}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste the complete Job Description here..."
      className="
        w-full
        rounded-2xl
        border
        border-slate-700
        bg-slate-900
        p-5
        text-white
        outline-none
        resize-none
        transition
        focus:border-blue-500
      "
    />
  );
}
