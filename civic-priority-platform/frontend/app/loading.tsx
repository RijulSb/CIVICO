export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <section className="flex w-full max-w-md flex-col items-center gap-6 px-6 text-center">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-muted border-t-primary animate-spin" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Loading CIVICO
          </h1>

          <p className="text-sm text-muted-foreground">
            Preparing the civic workspace...
          </p>
        </div>
      </section>
    </main>
  );
}
