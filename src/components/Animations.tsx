const Animations = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes bounceIn {
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fall {
      0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }

    .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
    .animate-bounceIn { animation: bounceIn 0.8s ease-out; }
    .animate-pulse { animation: pulse 2s infinite; }
    .animate-bounce { animation: bounce 2s infinite; }
    .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }

    .heart-confetti {
      position: absolute;
      font-size: 20px;
      animation: fall linear infinite;
      pointer-events: none;
    }
    ${Array.from({ length: 10 }).map(
      (_, i) =>
        `.heart-confetti:nth-child(${i + 1}) {
          left: ${10 + i * 8}%;
          animation-duration: ${3 + (i % 4)}s;
          animation-delay: ${i * 0.2}s;
        }`
    ).join("")}
  `}</style>
);

export default Animations;
