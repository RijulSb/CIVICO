"use client";
import { useRef, useState, useEffect, useCallback } from "react";

export interface SpringConfig {
  tension: number;
  friction: number;
}

export function useSpring(initial: number, config: SpringConfig) {
  const [value, setValue] = useState(initial);
  const state = useRef({ x: initial, v: 0, target: initial });
  const raf = useRef<number | undefined>(undefined);

  const animate = useCallback(() => {
    const s = state.current;
    const dt = 1 / 60;
    const force = -config.tension * (s.x - s.target) - config.friction * s.v;
    s.v += force * dt;
    s.x += s.v * dt;
    setValue(s.x);
    if (Math.abs(s.target - s.x) > 0.001 || Math.abs(s.v) > 0.001) {
      raf.current = requestAnimationFrame(animate);
    }
  }, [config.tension, config.friction]);

  const setTarget = useCallback(
    (t: number) => {
      state.current.target = t;
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(animate);
    },
    [animate],
  );

  useEffect(() => {
    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, []);

  return [value, setTarget] as const;
}
