import { useRef, useState } from "react";
import Animations from "./components/Animations";
import ValentineQuestion from "./components/ValentineQuestion";
import YayStage from "./components/YayStage";
import LoveNoteStage from "./components/LoveNoteStage";
import FinalStage from "./components/FinalStage";

export default function App() {
  const [stage, setStage] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* 🎵 GLOBAL BACKGROUND MUSIC (ONLY ONE) */}
      <audio ref={audioRef} src="/love-music.mp3" loop />

      <Animations />

      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center p-4">
        {stage === 0 && (
          <ValentineQuestion onYes={() => setStage(1)} />
        )}

        {stage === 1 && (
          <YayStage
            next={() => {
              startMusic();     // 🎶 START MUSIC HERE
              setStage(2);
            }}
          />
        )}

        {stage === 2 && (
          <LoveNoteStage next={() => setStage(3)} />
        )}

        {stage === 3 && <FinalStage />}
      </div>
    </>
  );
}
