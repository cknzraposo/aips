import Link from "next/link";

const navItems = [
  { href: "/baseline", label: "Baseline" },
  { href: "/compare", label: "Compare" },
  { href: "/evidence", label: "Evidence" },
  { href: "/methodology", label: "Methodology" },
  { href: "/glossary", label: "Glossary" }
];

export default function SiteHeader() {
  return (
    <header className="border-b border-ink/15 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg border border-ink/20 bg-canvas text-center text-xs font-semibold leading-9 text-ink">
            NZ
          </div>
          <div>
            <p className="font-display text-lg text-ink">AI Policy Sandbox</p>
            <p className="text-xs tracking-[0.12em] text-steel uppercase">Aotearoa New Zealand</p>
          </div>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-ink/15 bg-white/80 p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-steel transition hover:bg-ink hover:text-canvas"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
