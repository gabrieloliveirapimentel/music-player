import { useContext } from "react";
import { MusicContext } from "../context/types";
import { Player } from "./player";

export function CardLg() {
  const { img, title, artist } = useContext(MusicContext);

  return (
    <div className="flex flex-col gap-7 bg-[#2A2141] dark:bg-[#E1E1E6] rounded-xl px-9 py-14  h-[500px] max-md:h-auto max-md:items-center max-md:px-12 max-md:py-10 ">
      <img src={img} alt="Music Cover" />
      <div className="flex flex-col max-md:items-center">
        <h1>{title}</h1>
        <h2>{artist}</h2>
      </div>

      <div className="flex flex-row justify-between items-center max-md:w-[80%]">
        <Player />
      </div>

      <div className="flex flex-col gap-3 bg-red max-md:w-[80%]">
        <div className="flex rounded-full h-1.5 bg-[#d9d9d977] dark:bg-[#2a214175]">
          <div className="bg-[#E1E1E6] dark:bg-[#2A2141] h-1.5 rounded-full w-[80%]" />
        </div>
        <div className="flex justify-between opacity-60 ">
          <span>03:20</span> <span>00:12</span>
        </div>
      </div>
    </div>
  );
}
