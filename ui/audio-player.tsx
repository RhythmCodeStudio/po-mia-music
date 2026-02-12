"use client";

import { useState, useRef, useEffect } from "react";
import { RxPlay, RxPause } from "react-icons/rx";
import { Song } from "@/lib/definitions";

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
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <audio
        ref={audioRef}
        src={`${song.src}`}
        controls={false}
      />

      <div className="text-center">
        <h3 className="text-lg font-semibold text-black">
          {song.title || "Untitled"}
        </h3>
      </div>

      <div className="w-full space-y-2">
        <input
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          type="range"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <div className="flex justify-between text-sm text-gray-600 px-2">
          <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <button
        onClick={handlePlayPause}
        className="flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
        title={isPlaying ? "Pause" : "Play"}>
        {isPlaying ? (
          <RxPause size={32} />
        ) : (
          <RxPlay size={32} />
        )}
      </button>
    </div>
  );
}