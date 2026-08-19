import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <section className="mx-auto flex max-w-xl flex-col items-center gap-8 px-8 text-center">
        <div>
          <p className="text-7xl font-black tracking-tight text-primary">404</p>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Page Not Found</h1>

          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Return to Home
        </Link>
      </section>
    </main>
  );
}
