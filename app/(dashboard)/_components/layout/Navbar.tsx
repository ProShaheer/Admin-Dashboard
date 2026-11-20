import Link from "next/link";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <h2 className="text-lg font-semibold text-slate-800">Dashboard</h2>

      <div className="flex items-center gap-4">
        <Link
          href="/notifications"
          className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100"
        >
          <Bell size={20} />
          <span className="absolute right-1 top-1 size-2 rounded-full bg-red-500" />
        </Link>
      </div>
    </header>
  );
}