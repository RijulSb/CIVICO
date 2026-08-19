export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-[--ink-soft]" : "text-white/70"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "dark" ? "bg-[--brand]" : "bg-[--brand-light]"
        }`}
      />
      {children}
    </span>
  );
}
