import { useContext } from "react";
import { MusicContext } from "../context/types";
import { Player } from "./player";

export function CardSm() {
  const { img, title, artist } = useContext(MusicContext);

  return (
    <div className="flex flex-col gap-7 bg-[#2A2141] dark:bg-[#E1E1E6] rounded-xl p-9 ">
      <div className="flex flex-row gap-6">
        <img src={img} alt="Music Cover" className="w-[80px]" />
        <div>
          <h1>{title}</h1>
          <h2>{artist}</h2>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-10">
        <Player />
      </div>
    </div>
  );
}
