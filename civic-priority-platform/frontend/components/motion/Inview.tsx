"use client";
import { useEffect, useRef, useState } from "react";
import { useSpring, SpringConfig } from "@/lib/useSpring";

export function Inview({
  children,
  delayIn = 0,
  y = 28,
  config = { tension: 200, friction: 26 },
  className = "",
}: {
  children: React.ReactNode;
  delayIn?: number;
  y?: number;
  config?: SpringConfig;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const [opacity, setOpacityTarget] = useSpring(0, config);
  const [translateY, setYTarget] = useSpring(y, config);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            window.setTimeout(() => {
              setOpacityTarget(1);
              setYTarget(0);
            }, delayIn);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayIn]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity, transform: `translateY(${translateY}px)` }}
    >
      {children}
    </div>
  );
}
