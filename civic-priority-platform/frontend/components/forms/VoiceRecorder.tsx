"use client";

import * as React from "react";
import {
  Mic,
  Square,
  Trash2,
  Play,
  Pause,
  Radio,
  Sparkles,
  Loader2,
} from "lucide-react";

export type IntakeLanguage = "odia" | "hindi" | "english";

export interface VoiceRecorderProps {
  onRecordingComplete: (file: File) => void;
  onClear?: () => void;
  language?: IntakeLanguage;
  maxDurationSeconds?: number;
  disabled?: boolean;
  className?: string;
}

const languageLabels: Record<IntakeLanguage, string> = {
  odia: "Odia",
  hindi: "Hindi",
  english: "English",
};

type RecorderState =
  | "idle"
  | "requesting"
  | "recording"
  | "recorded"
  | "denied";

export function VoiceRecorder({
  onRecordingComplete,
  onClear,
  language = "english",
  maxDurationSeconds = 120,
  disabled = false,
  className = "",
}: VoiceRecorderProps) {
  const [state, setState] = React.useState<RecorderState>("idle");
  const [elapsed, setElapsed] = React.useState(0);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const recorderRef = React.useRef<MediaRecorder | null>(null);
  const chunksRef = React.useRef<Blob[]>([]);
  const streamRef = React.useRef<MediaStream | null>(null);
  const timerRef = React.useRef<number | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const animFrameRef = React.useRef<number | null>(null);
  const audioElemRef = React.useRef<HTMLAudioElement | null>(null);

  const stopTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const cleanupAudio = () => {
    stopTimer();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (animFrameRef.current !== null)
      cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = null;
    if (audioContextRef.current) void audioContextRef.current.close();
    audioContextRef.current = null;
    analyserRef.current = null;
  };

  const drawWaveform = () => {
    if (!canvasRef.current || !analyserRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const analyser = analyserRef.current;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const render = () => {
      if (!analyserRef.current) return;
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / dataArray.length) * 2.5;
      let x = 0;
      for (const value of dataArray) {
        const barHeight = (value / 255) * canvas.height;
        ctx.fillStyle = "#e25a45";
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 2;
      }
      animFrameRef.current = requestAnimationFrame(render);
    };
    render();
  };

  const startRecording = async () => {
    if (
      typeof navigator === "undefined" ||
      !navigator.mediaDevices?.getUserMedia
    ) {
      setState("denied");
      return;
    }
    setState("requesting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const audioContext = new (
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      )();
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyserRef.current = analyser;

      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });
        const file = new File([blob], `civico-voice-${Date.now()}.webm`, {
          type: blob.type,
        });
        setAudioUrl(URL.createObjectURL(blob));
        setState("recorded");
        cleanupAudio();
        onRecordingComplete(file);
      };

      recorderRef.current = recorder;
      recorder.start();
      setState("recording");
      setElapsed(0);
      drawWaveform();
      timerRef.current = window.setInterval(() => {
        setElapsed((previous) => {
          const next = previous + 1;
          if (next >= maxDurationSeconds) recorder.stop();
          return next;
        });
      }, 1000);
    } catch {
      cleanupAudio();
      setState("denied");
    }
  };

  const stopRecording = () => {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    stopTimer();
  };

  const clear = () => {
    const audio = audioElemRef.current;
    audio?.pause();
    audio?.removeAttribute("src");
    audio?.load();
    setAudioUrl(null);
    setState("idle");
    setElapsed(0);
    setIsPlaying(false);
    onClear?.();
  };

  const togglePlayback = () => {
    const audio = audioElemRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      void audio.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  React.useEffect(
    () => () => {
      cleanupAudio();
      const audio = audioElemRef.current;
      audio?.pause();
      audio?.removeAttribute("src");
      audio?.load();
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    },
    [audioUrl],
  );

  return (
    <div
      className={`flex min-w-0 flex-col gap-3 rounded-xl border border-[#171817]/20 bg-[#eeede9] p-3 sm:p-4 ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-[#171817]">
          <Radio
            className="h-4 w-4 shrink-0 animate-pulse text-[#e25a45]"
            aria-hidden="true"
          />
          <span className="truncate font-semibold uppercase tracking-wider">
            Audio Studio
          </span>
        </div>
        <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#1c2d1c] px-2.5 py-1 font-mono text-[10px] text-[#eeede9]">
          <Sparkles className="h-3 w-3 text-[#e25a45]" aria-hidden="true" />
          <span>Intake: {languageLabels[language]}</span>
        </div>
      </div>

      <div className="relative flex h-16 w-full items-center justify-center overflow-hidden rounded-lg border border-[#171817]/10 bg-[#1c2d1c]/5 px-4">
        {state === "recording" ? (
          <canvas
            ref={canvasRef}
            width={300}
            height={48}
            className="h-12 w-full"
            aria-label="Recording waveform"
          />
        ) : state === "recorded" ? (
          <div
            className="flex w-full items-center justify-center gap-1"
            aria-label="Recording ready"
          >
            {Array.from({ length: 28 }).map((_, index) => (
              <div
                key={index}
                className="w-1.5 rounded-full bg-[#171817]/40"
                style={{
                  height: `${Math.max(12, Math.sin(index * 0.5) * 40)}px`,
                }}
              />
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-[#777872]">
            Tap below to record your report in {languageLabels[language]}.
          </p>
        )}
      </div>

      {state === "idle" && (
        <button
          type="button"
          onClick={startRecording}
          disabled={disabled}
          className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#e25a45] px-3 text-base font-semibold text-white shadow-md transition hover:bg-[#d44833] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Mic className="h-6 w-6 shrink-0" aria-hidden="true" />
          <span>Record Voice Note</span>
        </button>
      )}

      {state === "requesting" && (
        <button
          type="button"
          disabled
          className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#e25a45] px-3 text-base font-semibold text-white opacity-70"
        >
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          <span>Requesting microphone…</span>
        </button>
      )}

      {state === "recording" && (
        <button
          type="button"
          onClick={stopRecording}
          className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#171817] px-3 text-base font-semibold text-white shadow-md transition hover:bg-[#353833] active:scale-[0.99]"
        >
          <Square
            className="h-6 w-6 fill-current text-[#e25a45]"
            aria-hidden="true"
          />
          <span>Stop Recording ({formatTime(elapsed)})</span>
        </button>
      )}

      {state === "recorded" && audioUrl && (
        <div className="flex flex-col gap-2">
          <audio
            ref={audioElemRef}
            src={audioUrl}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={togglePlayback}
              className="flex min-h-14 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#171817] px-3 text-base font-medium text-white hover:bg-[#353833]"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
              <span className="truncate">
                {isPlaying ? "Pause Playback" : "Listen to Recording"}
              </span>
            </button>
            <button
              type="button"
              onClick={clear}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100"
              title="Delete recording"
              aria-label="Delete recording"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {state === "denied" && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 p-3 text-xs text-red-600"
        >
          Microphone access is unavailable. You can continue with typed text or
          a photo.
        </div>
      )}
    </div>
  );
}

export default VoiceRecorder;
