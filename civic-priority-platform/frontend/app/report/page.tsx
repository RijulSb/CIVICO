"use client";

import { useEffect, useState } from "react";
import CitizenSubmissionForm from "@/components/forms/CitizenSubmissionForm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
//import StarfieldBackground from "@/components/three/StarFieldBackground";
import LenisProvider from "@/components/providers/LenisProvider";
import GrainOverlay from "@/components/effects/GrainOverlay";
import AdaptiveFontScale from "@/components/effects/AdaptiveFontScale";
import { Inview } from "@/components/motion/Inview";
import { StackedLines } from "@/components/motion/StackedLines";
import { WordReveal } from "@/components/motion/WordReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Mic, Sparkles, ShieldCheck } from "lucide-react";

export default function CitizenPwaPage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // hero reveal gate — mirrors the loader hand-off in the source spec
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <LenisProvider>
      <AdaptiveFontScale />
      <div className="relative flex min-h-screen flex-col text-[#F2F2F2]">
        {/* <StarfieldBackground /> */}
        <GrainOverlay />

        <Header />

        <main className="relative z-10 flex-1 px-[0.5rem] py-[2.5rem] sm:px-[0.75rem]">
          <div className="mx-auto max-w-lg space-y-[2rem]">
            {/* Hero */}
            <div className="text-center">
              <Inview
                delayIn={0}
                y={20}
                config={{ tension: 200, friction: 22 }}
              >
                <div className="mx-auto mb-[1rem] flex h-14 w-14 items-center justify-center rounded-2xl bg-[--brand] text-white shadow-md">
                  <Mic className="h-7 w-7" />
                </div>
              </Inview>

              <h1 className="text-[2.5rem] font-medium uppercase leading-[0.9] tracking-[-0.02em] text-[#F2F2F2] sm:text-[3.5rem]">
                <WordReveal
                  text="Citizen Priority Intake"
                  wordStagger={140}
                  duration={1100}
                  ready={ready}
                />
              </h1>

              <div className="mt-[0.5rem]">
                <StackedLines
                  lines={["Voice & Vernacular", "PWA System"]}
                  stagger={110}
                  baseDelay={350}
                  duration={900}
                  ready={ready}
                  className="mx-auto text-[0.7rem] uppercase tracking-[0.15em] text-[--ink-soft]"
                />
              </div>

              <Inview
                delayIn={650}
                y={16}
                config={{ tension: 200, friction: 26 }}
                className="mt-[1.25rem] flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.1em]"
              >
                <Eyebrow tone="light">
                  <Sparkles className="h-3 w-3 text-[--brand-light]" /> AI Voice
                  Analysis
                </Eyebrow>
                <Eyebrow tone="light">
                  <ShieldCheck className="h-3 w-3 text-emerald-400" /> Offline
                  Auto-Sync
                </Eyebrow>
              </Inview>
            </div>

            {/* Form — staggered rise-in like Programs rows (i × 90ms) */}
            <Inview delayIn={0} config={{ tension: 190, friction: 26 }}>
              <CitizenSubmissionForm />
            </Inview>
          </div>
        </main>

        <Inview delayIn={0} config={{ tension: 190, friction: 26 }}>
          <Footer />
        </Inview>
      </div>
    </LenisProvider>
  );
}
