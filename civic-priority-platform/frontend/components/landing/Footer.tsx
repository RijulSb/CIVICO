import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Report an Issue", href: "/report" },
  { label: "Explore", href: "/explore" },
  { label: "Priorities", href: "/priorities" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Reports", href: "/reports" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
              aria-label="CIVICO home"
            >
              CIVICO
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              A civic development intelligence platform designed to connect
              community voices with better-informed development planning.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Platform</h2>

            <nav
              aria-label="Footer navigation"
              className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CIVICO. Built for people-centered
            development planning.
          </p>
        </div>
      </div>
    </footer>
  );
}
