export default function UploadProgress({ progress }) {
  return (
    <div className="mt-6">
      <div className="h-3 rounded-full bg-slate-700">
        <div
          className="h-3 rounded-full bg-blue-500 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-2 text-sm text-slate-400">{progress}%</p>
    </div>
  );
}
