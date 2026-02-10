interface Props {
  next: () => void;
}

const YayStage: React.FC<Props> = ({ next }) => {
  return (
    <div className="w-full flex justify-center animate-bounceIn">
      <div className="bg-[#f8efe6] rounded-xl shadow-lg p-6 w-[320px] text-center">
        {/* TITLE */}
        <h2 className="text-lg font-semibold text-[#8b3a3a] mb-3">
          Yayyy! 💖
        </h2>

        {/* IMAGE */}
        <div className="relative rounded-md overflow-hidden border mb-4">
          <img
            src="/happy.gif" // put image in public/
            alt="Happy celebration"
            className="w-full h-64 object-cover"
          />

          {/* OVERLAY TEXT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm font-semibold drop-shadow">
              you said yes 🥹
            </span>
          </div>
        </div>

        {/* MESSAGE */}
        <p className="text-sm text-gray-700 mb-4">
          You just turned this moment into something magical.
          <br />
          I’m smiling way more than I should right now 💕
        </p>

        {/* BUTTON */}
        <button
          onClick={next}
          className="px-4 py-2 bg-pink-500 text-white text-sm rounded transition hover:scale-105"
        >
          Tell me more ♡
        </button>
      </div>
    </div>
  );
};

export default YayStage;
