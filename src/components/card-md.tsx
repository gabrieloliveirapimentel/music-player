import { useContext } from "react";
import { MusicContext } from "../context/types";
import { Player } from "./player";

export function CardMd() {
  const { img, title, artist } = useContext(MusicContext);

  return (
    <div className="flex flex-col gap-7 bg-[#2A2141] dark:bg-[#E1E1E6] rounded-xl p-9 h-[260px] max-sm:h-auto max-sm:p-7">
      <div className="flex flex-row gap-6 max-md:items-center">
        <img src={img} alt="Music Cover" className="w-[80px] max-md:h-[80px]" />
        <div>
          <h1>{title}</h1>
          <h2>{artist}</h2>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-10">
        <Player />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex rounded-full h-1.5 bg-[#d9d9d977] dark:bg-[#2a214175]">
          <div className="bg-[#E1E1E6] dark:bg-[#2A2141] h-1.5 rounded-full w-[80%]" />
        </div>
        <div className="flex justify-between opacity-60">
          <span>03:20</span> <span>00:12</span>
        </div>
      </div>
    </div>
  );
}
