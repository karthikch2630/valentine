import { useEffect } from "react";
import { fireHeartConfetti } from "./heartConfetti";

const FinalStage = () => {
  useEffect(() => {
    fireHeartConfetti();
  }, []);

  return (
    <div className="w-full max-w-xl animate-fadeIn relative">
      <div className="relative bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-12 shadow-[0_40px_120px_-30px_rgba(236,72,153,0.45)] text-center border border-white/50">
        {/* HEADLINE */}
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent animate-fadeInUp">
          I choose you
          <span className="font-light"> ♡</span>
        </h2>

        {/* ICON */}
        <div className="text-[6.5rem] mb-10 animate-softBounce">
          💞
        </div>

        {/* MESSAGE */}
        <p className="text-lg md:text-xl text-gray-700 leading-loose max-w-md mx-auto">
          Not just today.
          <br />
          Not just on Valentine’s.
          <br /><br />
          I choose you in the quiet moments,
          the everyday smiles,
          and all the chapters still waiting to be written.
          <br /><br />
          You and me — always.
          <span className="ml-1">💕</span>
        </p>
      </div>
    </div>
  );
};

export default FinalStage;
