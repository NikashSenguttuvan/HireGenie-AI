import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-900 px-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Search size={20} className="text-slate-400" />

        <input
          placeholder="Search..."
          className="bg-transparent outline-none text-white"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-slate-300" />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            N
          </div>

          <div>
            <h2 className="font-semibold">Nikash</h2>

            <p className="text-xs text-slate-400">AI Engineer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
