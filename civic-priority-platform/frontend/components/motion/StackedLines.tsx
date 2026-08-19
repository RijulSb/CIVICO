"use client";
import { useEffect, useState } from "react";

export function StackedLines({
  lines,
  stagger = 120,
  baseDelay = 0,
  duration = 950,
  className = "",
  ready = true,
}: {
  lines: string[];
  stagger?: number;
  baseDelay?: number;
  duration?: number;
  className?: string;
  ready?: boolean;
}) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setPlay(true), 30);
    return () => clearTimeout(t);
  }, [ready]);

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden pb-[0.14em]">
          <span
            className="block"
            style={{
              transform: play ? "translateY(0)" : "translateY(115%)",
              opacity: play ? 1 : 0,
              transition: `transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${
                baseDelay + i * stagger
              }ms, opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${
                baseDelay + i * stagger
              }ms`,
            }}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}
