"use client";
import { useEffect } from "react";

export default function AdaptiveFontScale() {
  useEffect(() => {
    const FONT_BASE = 16;
    const BASE_W = 1920;
    const COEF = 0.6666;

    const update = () => {
      const reduction = ((BASE_W - window.innerWidth) / BASE_W) * 100 * COEF;
      const size = FONT_BASE - (FONT_BASE * reduction) / 100;
      if (size > FONT_BASE) {
        document.documentElement.style.fontSize = `${size}px`;
      } else {
        document.documentElement.style.removeProperty("font-size");
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
}
