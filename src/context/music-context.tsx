import { useState } from "react";
import { MusicContext, MusicContextProps } from "./types";

import img from "../assets/music-cover.png";

export function MusicProvider({ children }: MusicContextProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const title = "Acorda Devinho";
  const artist = "DJ Rocketseat";

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  return (
    <MusicContext.Provider
      value={{ img, title, artist, isPlaying, handlePlayPause }}
    >
      {children}
    </MusicContext.Provider>
  );
}
