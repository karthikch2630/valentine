import confetti from "canvas-confetti";
export const fireHeartConfetti = () => {
  const heart = confetti.shapeFromText({ text: "💖", scalar: 2 });

  const shoot = () =>
    confetti({
      particleCount: 60,
      spread: 80,
      startVelocity: 35,
      gravity: 0.7,
      ticks: 250,
      shapes: [heart],
      origin: { y: 0.6 },
    });

  shoot();
  setTimeout(shoot, 300);
  setTimeout(shoot, 600);
};
