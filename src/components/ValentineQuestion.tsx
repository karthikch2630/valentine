import React, { useState } from "react";

interface Props {
  onYes: () => void;
}

const NO_TEXTS = [
  "No",
  "Are you sure?",
  "Really?",
  "Please?",
  "Don’t do this 😭",

  "Just say yes 💖",
];

const MAX_NO_STAGE = 5;

const ValentineQuestion: React.FC<Props> = ({ onYes }) => {
  const [noClicks, setNoClicks] = useState(0);

  const handleNoClick = () => {
    setNoClicks((prev) => Math.min(prev + 1, NO_TEXTS.length - 1));
  };

  const yesDominates = noClicks >= MAX_NO_STAGE;
  const yesScale = yesDominates ? 3 : 1 + noClicks * 0.18;

  return (
    <div className="w-full flex justify-center animate-fadeIn">
      <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-[0_25px_70px_-15px_rgba(236,72,153,0.35)] p-6 w-[340px] text-center border border-white/60">
        {/* TITLE */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
          Will You Be My Valentine?
        </h1>

        {/* IMAGE CARD */}
        <div className="relative rounded-2xl overflow-hidden mb-5 shadow-md">
          <img
            src="/meme.gif"
            alt="Cute"
            className="w-full h-64 object-cover"
          />

          {/* OVERLAY TEXT */}
          <div className="absolute bottom-2 inset-x-0 text-center">
            <span className="px-3 py-1 text-xs bg-black/40 text-white rounded-full backdrop-blur-sm">
              pleaseeee 🥺
            </span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6">
          {/* YES */}
          <button
            onClick={onYes}
            style={{ transform: `scale(${yesScale})` }}
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-sm font-semibold rounded-full shadow-lg transition-transform duration-300"
          >
            Yes 💖
          </button>

          {/* NO */}
          {!yesDominates && (
            <button
              onClick={handleNoClick}
              className="px-6 py-2 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full shadow-md hover:bg-gray-300 transition-all duration-300"
            >
              {NO_TEXTS[noClicks]}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValentineQuestion;
