import { useRef, useState, useEffect, useCallback } from "react";

export interface SpringConfig {
  tension: number;
  friction: number;
}

export function useSpring(initial: number, config: SpringConfig) {
  const [value, setValue] = useState(initial);
  const state = useRef({ x: initial, v: 0, target: initial });
  const raf = useRef<number | undefined>(undefined);
  const animateRef = useRef<() => void>(() => undefined);

  const animate = useCallback(() => {
    const s = state.current;
    const dt = 1 / 60;
    const force = -config.tension * (s.x - s.target) - config.friction * s.v;
    s.v += force * dt;
    s.x += s.v * dt;
    setValue(s.x);
    if (Math.abs(s.target - s.x) > 0.001 || Math.abs(s.v) > 0.001) {
      raf.current = requestAnimationFrame(() => animateRef.current());
    }
  }, [config.friction, config.tension]);

  useEffect(() => {
    animateRef.current = animate;
  }, [animate]);

  const setTarget = useCallback((target: number) => {
    state.current.target = target;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => animateRef.current());
  }, []);

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return [value, setTarget] as const;
}
