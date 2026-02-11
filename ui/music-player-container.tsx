"use client";
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import components
import MusicPlayer from "./music-player";
import PlayButton from "./play-button";
// import definitions
import { Song, Release } from "../lib/definitions";
// import data
import { releases } from "../lib/po-data";

export default function MusicPlayerContainer({ release }: { release: Release }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  
  const handlePlay = (song: Song) => {
    track("play_song", {
      song_title: song.title,
      release_title: release.title,
    });
    setCurrentSong(song);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-6 lg:px-0">
      <Image
        src={release.cover_image}
        alt={`${release.title} cover art`}
        width={300}
        height={300}
        className="rounded-2xl shadow-lg shadow-blue-300/50 border-2 border-[rgba(255,255,255,0.3)]"
      />
      <h2 className="text-3xl font-bold mt-4">{release.title}</h2>
      <p className="text-sm text-gray-400">{release.year}</p>
      <p className="text-center mt-4">{release.description}</p>
      <div className="mt-6 w-full">
        {release.tracks.map((song) => (
          <div key={song.track_number} className="flex items-center justify-between mb-4 p-4 bg-black/50 rounded-lg shadow-md shadow-black/20">
            <div>
              <p className="text-lg font-semibold">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist} - {song.length}</p>
            </div>
            <PlayButton song={song} onPlay={handlePlay} />
          </div>
        ))}
      </div>
      {currentSong && <MusicPlayer song={currentSong} />}
    </div>
  );
}
