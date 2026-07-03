import { UploadCloud } from "lucide-react";

export default function UploadBox({ onFileSelect }) {
  const handleChange = (e) => {
    if (e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <label
      className="
      flex
      cursor-pointer
      flex-col
      items-center
      justify-center
      rounded-2xl
      border-2
      border-dashed
      border-slate-700
      bg-slate-900
      p-16
      transition
      hover:border-blue-500
      hover:bg-slate-800
    "
    >
      <UploadCloud size={60} className="text-blue-400" />

      <h2 className="mt-6 text-2xl font-bold">Drag & Drop Resume</h2>

      <p className="mt-2 text-slate-400">or click to browse files</p>

      <p className="mt-4 text-sm text-slate-500">PDF • DOCX</p>

      <input
        hidden
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
      />
    </label>
  );
}
