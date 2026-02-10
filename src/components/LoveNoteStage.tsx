interface Props {
  next: () => void;
}

const IMAGES = [
  "/love1.jpg",
  "/love2.jpg",
  "/love3.jpg",
  "/love4.jpg",
];

const LoveNoteStage: React.FC<Props> = ({ next }) => (
  <div className="relative w-full min-h-screen flex items-center justify-center animate-fadeInUp overflow-hidden">
    {/* FULL SCREEN BACKGROUND CAROUSEL */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="carousel">
        {[...IMAGES, ...IMAGES].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full h-72 object-cover opacity-95"
          />
        ))}
      </div>

      {/* optional soft overlay for readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
    </div>

    {/* FOREGROUND NOTE CARD */}
    <div className="relative z-10 w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-[0_25px_70px_-15px_rgba(236,72,153,0.45)] text-center border border-white/60">
      {/* ENVELOPE */}
      <div className="text-9xl mb-6 animate-pulse">💌</div>

      {/* NOTE TEXT — UNCHANGED */}
      <p className="text-lg italic text-gray-700 mb-10 leading-relaxed">
        From the moment you walked into my life,
        something quietly and beautifully changed.
        <br /><br />
        You have this gentle way of making everything feel lighter —
        the days feel warmer, the smiles come easier,
        and even the quiet moments feel special.
        <br /><br />
        You are my calm in the chaos,
        my sunshine on slow days,
        and the thought that makes me smile without even realizing it.
        <br /><br />
        Being with you feels natural,
        comforting,
        and exactly where my heart wants to be. 💖
      </p>

      {/* SIGNATURE — UNCHANGED */}
      <div className="text-pink-500 font-semibold mb-10">
        — With all my love, Karthik
      </div>

      {/* BUTTON */}
      <button
        onClick={next}
        className="px-10 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:scale-110 hover:shadow-pink-300/40 transition-all duration-300"
      >
        Show me the magic ✨
      </button>
    </div>

    {/* CSS */}
    <style>{`
      .carousel {
        display: flex;
        flex-direction: column;
        animation: scrollUp 45s linear infinite;
      }

      @keyframes scrollUp {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-50%);
        }
      }
    `}</style>
  </div>
);

export default LoveNoteStage;
