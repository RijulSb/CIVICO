"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    let raf = 0;

    import("lenis")
      .then(({ default: Lenis }) => {
        if (!isMounted) return;
        const lenis = new Lenis({
          lerp: 0.08,
          smoothWheel: true,
        });
        lenisRef.current = lenis;
        document.documentElement.classList.add("lenis");

        const loop = (time: number) => {
          lenis.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      })
      .catch((err) => {
        console.warn("Lenis smooth scroll initialization skipped:", err);
      });

    return () => {
      isMounted = false;
      if (raf) cancelAnimationFrame(raf);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        document.documentElement.classList.remove("lenis");
      }
    };
  }, []);

  return <>{children}</>;
}
