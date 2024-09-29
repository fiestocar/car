import ConfettiExplosion from "react-confetti-explosion";

function Explosion({ onComplete }) {
  return (
    <ConfettiExplosion
      onComplete={onComplete}
      force={0.8}
      duration={5000}
      particleCount={250}
      width={1600}
    />
  );
}

export default Explosion;
