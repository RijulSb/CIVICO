import Link from "next/link";

const navigation = [
  { label: "Explore", href: "/explore" },
  { label: "Priorities", href: "/priorities" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Reports", href: "/reports" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="CIVICO home"
        >
          <span className="text-xl font-bold tracking-tight text-slate-950">
            CIVICO
          </span>
        </Link>

        {/* Primary navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Primary citizen action */}
        <Link
          href="/report"
          className="rounded-lg bg-slate-200
           px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-500"
        >
          Report an Issue
        </Link>
      </nav>
    </header>
  );
}
