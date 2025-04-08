import { createContext } from "react";

export interface MusicContextProps {
    children: React.ReactNode;
}

export const MusicContext = createContext({} as {
    img: string;
    title: string;
    artist: string;
    isPlaying: boolean;
    handlePlayPause: () => void;
});