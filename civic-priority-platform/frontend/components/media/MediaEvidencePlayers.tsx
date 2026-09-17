"use client";

import * as React from "react";
import {
  AlertTriangle,
  Download,
  ExternalLink,
  Pause,
  Play,
  Video as VideoIcon,
  Volume2,
} from "lucide-react";

interface AudioEvidencePlayerProps {
  src: string;
  className?: string;
  label?: string;
}

export function AudioEvidencePlayer({
  src,
  className = "",
  label = "Voice Recording",
}: AudioEvidencePlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState<number | null>(null);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setHasError(false);
    setCurrentTime(0);
    setDuration(null);
    setIsPlaying(false);
  }, [src]);

  const fmt = (secs: number | null) => {
    if (secs == null || !isFinite(secs) || isNaN(secs) || secs <= 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const updateDuration = React.useCallback(() => {
    const el = audioRef.current;
    if (el && isFinite(el.duration) && !isNaN(el.duration) && el.duration > 0) {
      setDuration(el.duration);
    }
  }, []);

  const handleTimeUpdate = React.useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    setCurrentTime(el.currentTime);
    if (!duration || !isFinite(duration) || duration <= 0) {
      updateDuration();
    }
  }, [duration, updateDuration]);

  const togglePlay = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
    } else {
      try {
        setHasError(false);
        await el.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio playback notice:", err);
        setHasError(true);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = audioRef.current;
    if (!el) return;
    const t = parseFloat(e.target.value);
    el.currentTime = t;
    setCurrentTime(t);
  };

  return (
    <div
      className={`rounded-xl border border-red-200/80 bg-red-50/50 p-2.5 sm:p-3 text-xs ${className}`}
    >
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={updateDuration}
        onDurationChange={updateDuration}
        onCanPlay={updateDuration}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onError={() => {
          setHasError(true);
        }}
        className="hidden"
      />

      <div className="flex items-center justify-between mb-2">
        <span className="inline-flex items-center gap-1.5 font-bold text-[#e25a45]">
          <Volume2 className="h-4 w-4" /> {label}
        </span>
        <span className="rounded bg-red-100/90 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#e25a45]">
          {duration && duration > 0 ? fmt(duration) : "Audible"}
        </span>
      </div>

      {hasError ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-[11px] text-amber-900 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 font-semibold">
            <Volume2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
            <span>Voice recording player:</span>
          </div>
          <audio controls src={src} className="w-full h-8 mt-1" preload="metadata">
            Your browser does not support the audio element.
          </audio>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1 font-bold text-[#e25a45] hover:underline mt-0.5"
          >
            <Download className="h-3 w-3" /> Download voice recording{" "}
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e25a45] text-white shadow-sm transition hover:bg-[#d44833] active:scale-95"
          >
            {isPlaying ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="h-3.5 w-3.5 translate-x-0.5" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={duration && duration > 0 ? duration : 10}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="h-1.5 flex-1 cursor-pointer accent-[#e25a45] bg-red-200/60 rounded-lg"
          />
          <span className="font-mono text-[11px] text-[#171817]/70 shrink-0 w-20 text-right">
            {fmt(currentTime)} / {duration && duration > 0 ? fmt(duration) : "--:--"}
          </span>
        </div>
      )}
    </div>
  );
}

interface VideoEvidencePlayerProps {
  src: string;
  className?: string;
  label?: string;
  poster?: string;
}

export function VideoEvidencePlayer({
  src,
  className = "",
  label = "Video Evidence",
  poster,
}: VideoEvidencePlayerProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-50 ${className}`}
    >
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200 bg-white text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 text-[11px]">
          <VideoIcon className="h-3.5 w-3.5 text-slate-500" /> {label}
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#e25a45] hover:underline"
        >
          View full / Download <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {hasError ? (
        <div className="p-4 bg-amber-50/90 text-xs text-amber-900 space-y-2">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Video codec not supported in browser</p>
              <p className="text-[11px] text-amber-800/80 mt-0.5">
                Download and open with any media player (VLC, Windows Media Player).
              </p>
            </div>
          </div>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-amber-300 px-3 py-1.5 font-bold text-amber-900 shadow-sm transition hover:bg-amber-100/50"
          >
            <Download className="h-3.5 w-3.5" /> Open / Download Video File
          </a>
        </div>
      ) : (
        <div className="relative bg-black">
          <video
            controls
            preload="metadata"
            playsInline
            src={src}
            poster={poster}
            onError={() => setHasError(true)}
            className="w-full max-h-56 object-contain"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}
    </div>
  );
}