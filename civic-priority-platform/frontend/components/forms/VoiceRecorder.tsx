"use client";

import * as React from "react";
import { Mic, Square, Trash2, Play, Pause, Radio, Languages, Sparkles } from "lucide-react";

export interface VoiceRecorderProps {
  onRecordingComplete: (file: File) => void;
  onClear?: () => void;
  maxDurationSeconds?: number;
  disabled?: boolean;
  className?: string;
}

type RecorderState = "idle" | "requesting" | "recording" | "recorded" | "denied";

export function VoiceRecorder({
  onRecordingComplete,
  onClear,
  maxDurationSeconds = 180,
  disabled = false,
  className = "",
}: VoiceRecorderProps) {
  const [state, setState] = React.useState<RecorderState>("idle");
  const [elapsed, setElapsed] = React.useState(0);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [detectedLanguage, setDetectedLanguage] = React.useState<string | null>(null);
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

  const drawWaveform = () => {
    if (!canvasRef.current || !analyserRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      if (!analyserRef.current) return;
      analyserRef.current.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;
        ctx.fillStyle = "#e25a45";
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 2;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();
  };

  const startRecording = async () => {
    setState("requesting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Setup Web Audio API Wave Visualizer
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioContextRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyserRef.current = analyser;

      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
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

        // Simulated AI Indic Language Detector (Odia / Hindi / English)
        const sampleLangs = ["Odia (ଓଡ଼ିଆ)", "Hindi (हिंदी)", "English"];
        const detected = sampleLangs[Math.floor(Math.random() * sampleLangs.length)];
        setDetectedLanguage(detected);

        stream.getTracks().forEach((t) => t.stop());
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        if (audioContextRef.current) audioContextRef.current.close();

        onRecordingComplete(file);
      };

      recorderRef.current = recorder;
      recorder.start();
      setState("recording");
      setElapsed(0);
      drawWaveform();

      timerRef.current = window.setInterval(() => {
        setElapsed((prev) => {
          const next = prev + 1;
          if (next >= maxDurationSeconds) recorder.stop();
          return next;
        });
      }, 1000);
    } catch {
      setState("denied");
    }
  };

  const stopRecording = () => {
    recorderRef.current?.stop();
    stopTimer();
  };

  const clear = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setState("idle");
    setElapsed(0);
    setDetectedLanguage(null);
    setIsPlaying(false);
    onClear?.();
  };

  const togglePlayback = () => {
    if (!audioElemRef.current) return;
    if (isPlaying) {
      audioElemRef.current.pause();
      setIsPlaying(false);
    } else {
      audioElemRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  React.useEffect(() => {
    return () => {
      stopTimer();
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  return (
    <div className={`flex flex-col gap-3 rounded-xl border border-[#171817]/20 bg-[#eeede9] p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs text-[#171817]">
          <Radio className="h-4 w-4 text-[#e25a45] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">Audio Studio</span>
        </div>
        {detectedLanguage && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1c2d1c] px-3 py-1 font-mono text-xs text-[#eeede9]">
            <Sparkles className="h-3 w-3 text-[#e25a45]" />
            <span>{detectedLanguage}</span>
          </div>
        )}
      </div>

      {/* Waveform Visualizer Canvas */}
      <div className="relative flex h-16 w-full items-center justify-center rounded-lg border border-[#171817]/10 bg-[#1c2d1c]/5 px-4 overflow-hidden">
        {state === "recording" ? (
          <canvas ref={canvasRef} width={300} height={48} className="w-full h-12" />
        ) : state === "recorded" ? (
          <div className="flex items-center gap-1 w-full justify-center">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-[#171817]/40 rounded-full"
                style={{ height: `${Math.max(12, Math.sin(i * 0.5) * 40)}px` }}
              />
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-[#777872]">
            Tap the large button below to speak your report
          </p>
        )}
      </div>

      {/* Large Touch Target Controls (>56px height) */}
      {state === "idle" && (
        <button
          type="button"
          onClick={startRecording}
          disabled={disabled}
          className="flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-[#e25a45] text-white font-semibold text-lg shadow-md transition hover:bg-[#d44833] active:scale-[0.99] disabled:opacity-50"
        >
          <Mic className="h-6 w-6" />
          <span>Record Voice Note (Tap to Speak)</span>
        </button>
      )}

      {state === "recording" && (
        <button
          type="button"
          onClick={stopRecording}
          className="flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-[#171817] text-white font-semibold text-lg shadow-md transition hover:bg-[#353833] active:scale-[0.99]"
        >
          <Square className="h-6 w-6 text-[#e25a45] fill-current" />
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
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlayback}
              className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-[#171817] text-white font-medium text-base shadow-sm hover:bg-[#353833]"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              <span>{isPlaying ? "Pause Playback" : "Listen to Recording"}</span>
            </button>
            <button
              type="button"
              onClick={clear}
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100"
              title="Delete recording"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {state === "denied" && (
        <div className="rounded-lg bg-red-50 p-3 text-xs text-red-600">
          Microphone access denied. Please grant permission to record audio.
        </div>
      )}
    </div>
  );
}

export default VoiceRecorder;
