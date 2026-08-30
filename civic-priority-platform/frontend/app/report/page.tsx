"use client";

import { useEffect, useState } from "react";
import CitizenSubmissionForm from "@/components/forms/CitizenSubmissionForm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    const timer = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LenisProvider>
      <AdaptiveFontScale />
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white text-[#171817]">
        <GrainOverlay />
        <Header />

        <main className="relative z-10 flex-1 px-3 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-3xl space-y-8 sm:space-y-10">
            <div className="text-center">
              <Inview
                delayIn={0}
                y={20}
                config={{ tension: 200, friction: 22 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e25a45] text-white shadow-md">
                  <Mic className="h-7 w-7" aria-hidden="true" />
                </div>
              </Inview>

              <h1 className="text-[clamp(2.25rem,11vw,3.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.02em] text-[#e25a45]">
                <WordReveal
                  text="Citizen Priority Intake"
                  wordStagger={140}
                  duration={1100}
                  ready={ready}
                />
              </h1>

              <div className="mt-2">
                <StackedLines
                  lines={["Voice & Vernacular", "PWA System"]}
                  stagger={110}
                  baseDelay={350}
                  duration={900}
                  ready={ready}
                  className="mx-auto text-[0.7rem] uppercase tracking-[0.15em] text-[#5f6368]"
                />
              </div>

              <Inview
                delayIn={650}
                y={16}
                config={{ tension: 200, friction: 26 }}
                className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.1em]"
              >
                <Eyebrow tone="dark">
                  <Sparkles className="h-3 w-3 text-[--brand-light]" /> AI Voice
                  Analysis
                </Eyebrow>
                <Eyebrow tone="dark">
                  <ShieldCheck className="h-3 w-3 text-emerald-400" /> Offline
                  Auto-Sync
                </Eyebrow>
              </Inview>
            </div>

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
