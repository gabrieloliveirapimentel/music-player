import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { useContext } from "react";
import { MusicContext } from "../context/types";

export function Player() {
  const { isPlaying, handlePlayPause } = useContext(MusicContext);

  return (
    <>
      <TbPlayerTrackPrevFilled size={24} />
      <button onClick={handlePlayPause}>
        {isPlaying ? (
          <TbPlayerPauseFilled size={24} />
        ) : (
          <TbPlayerPlayFilled size={24} />
        )}
      </button>
      <TbPlayerTrackNextFilled size={24} />
    </>
  );
}
