import { CardLg } from "../components/card-lg";
import { CardMd } from "../components/card-md";
import { CardSm } from "../components/card-sm";

import { MusicProvider } from "../context/music-context";

export function Layout() {
  return (
    <MusicProvider>
      <div className="flex flex-row gap-8 max-md:flex-col max-md:gap-4 max-md: p-2 dark:bg-white">
        <CardLg />
        <div className="flex flex-col gap-8 max-md:gap-4">
          <CardMd />
          <CardSm />
        </div>
      </div>
    </MusicProvider>
  );
}
