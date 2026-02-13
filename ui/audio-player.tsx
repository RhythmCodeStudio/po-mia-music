"use client";
// import from next
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { RxPlay, RxPause } from "react-icons/rx";
import { Song } from "@/lib/definitions";
// import images
import poLogo from "@/public/logos/pomia-horizontal-logo-black.png";

export default function SimpleAudioPlayer({ song }: { song: Song }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newProgress = Number(e.target.value);
    audioRef.current.currentTime = (newProgress / 100) * duration;
    setProgress(newProgress);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const updateProgress = () => {
      const { currentTime, duration } = audioElement;
      const newProgress = (currentTime / duration) * 100 || 0;
      setProgress(newProgress);
    };

    const updateDuration = () => {
      setDuration(audioElement.duration || 0);
    };

    audioElement.addEventListener("timeupdate", updateProgress);
    audioElement.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
      audioElement.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.play().catch(() => {});
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  if (!song || !song.src) {
    return <div className="text-gray-400">No song available</div>;
  }

  return (
    <div className="px-6 flex flex-col items-center gap-4 w-full max-w-2xl mx-auto p-2 rounded-4xl shadow-lg rainbow-gradient shadow-white border-2 border-[rgba(255,255,255,0.3)] relative">
      <audio ref={audioRef} src={`${song.src}`} controls={false} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={poLogo}
          alt="po mia logo"
          width={2213}
          height={725}
          className="opacity-20 max-w-xs"
          sizes="(max-width: 640px) 100vw, 40vw"
        />
      </div>
      <div className="text-center bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl px-4 mt-1">
        <h3 className="text-lg font-semibold text-shadow-black-background-black font-indie-flower tracking-widest">
          {song.title || "Untitled"}
        </h3>
      </div>

      <div className="w-full">
        <input
          className="w-full h-2 bg-[rgba(255,255,255,0.3)] rounded-lg appearance-none cursor-pointer shadow shadow-black "
          type="range"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <div className="flex justify-between text-sm text-shadow-black-background-black px-2">
          <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <button
        onClick={handlePlayPause}
        className="flex items-center justify-center icon-shadow hover:scale-105 active:scale-95 text-white rounded-full transition-colors"
        title={isPlaying ? "Pause" : "Play"}>
        {isPlaying ? <RxPause size={32} /> : <RxPlay size={32} />}
      </button>
    </div>
  );
}
