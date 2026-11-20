import Link from "next/link";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [{ label: "Dashboard", href: "/" }];

export default function Sidebar() {
  return (
    <aside className="w-60 border-r border-slate-200 bg-white p-4">
      <h1 className="text-xl font-bold text-indigo-600">AceMaster</h1>

      <nav className="mt-6 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}