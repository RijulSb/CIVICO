"use client";
import { useEffect, useState } from "react";

export function WordReveal({
  text,
  wordStagger = 140,
  duration = 1100,
  className = "",
  ready = true,
}: {
  text: string;
  wordStagger?: number;
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

  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-top"
        >
          <span
            className="inline-block"
            style={{
              transform: play ? "translateY(0)" : "translateY(115%)",
              opacity: play ? 1 : 0,
              transition: `transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${
                i * wordStagger
              }ms, opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${
                i * wordStagger
              }ms`,
            }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}
