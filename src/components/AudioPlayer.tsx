"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Pause, Play, RotateCcw, RotateCw, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  downloadable?: boolean;
}

const formatTime = (time: number) => {
  if (!Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export function AudioPlayer({ audioUrl, title, downloadable = true }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onMeta = () => setDuration(audio.duration);
    const onTime = () => setCurrentTime(audio.currentTime);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onError = () => setError("This recording could not be loaded.");
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
      audio.removeEventListener("error", onError);
    };
  }, [audioUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      // Pause any other FORGE players on the page
      for (const el of document.querySelectorAll("audio")) if (el !== audio) el.pause();
      audio.play().catch(() => setError("Playback was blocked. Try again or download the file."));
    } else {
      audio.pause();
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    seek(Math.max(0, Math.min(duration || 0, audio.currentTime + seconds)));
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (error) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
        <p className="text-sm text-foreground/80">{error}</p>
        {downloadable && (
          <a
            href={audioUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-label text-sm font-semibold text-white hover:bg-primary/90"
          >
            <Download className="h-4 w-4" /> Download audio
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-muted/60 p-4">
      {/* biome-ignore lint/a11y/useMediaCaption: lecture audio, no captions available */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
        </button>

        <div className="min-w-0 flex-1">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={1}
            value={currentTime}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Seek"
            className="forge-range w-full"
            style={{ ["--pct" as string]: `${pct}%` }}
          />
          <div className="mt-1 flex justify-between font-label text-[11px] font-medium tabular-nums text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{duration ? formatTime(duration) : "--:--"}</span>
          </div>
        </div>

        <div className="hidden items-center gap-1 sm:flex">
          <IconBtn label="Back 15 seconds" onClick={() => skip(-15)}>
            <RotateCcw className="h-4 w-4" />
          </IconBtn>
          <IconBtn label="Forward 15 seconds" onClick={() => skip(15)}>
            <RotateCw className="h-4 w-4" />
          </IconBtn>
          <IconBtn label={isMuted ? "Unmute" : "Mute"} onClick={toggleMute}>
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </IconBtn>
        </div>
      </div>

      <style jsx>{`
        .forge-range {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            hsl(var(--primary)) 0%,
            hsl(var(--primary)) var(--pct),
            #dddddd var(--pct),
            #dddddd 100%
          );
          cursor: pointer;
        }
        .forge-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: hsl(var(--primary));
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        .forge-range::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: hsl(var(--primary));
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}

function IconBtn({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-white hover:text-primary"
    >
      {children}
    </button>
  );
}
