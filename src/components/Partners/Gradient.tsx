interface GradientProps {
  position: "left" | "right";
}

export function Gradient({ position }: GradientProps) {
  return (
    <div
      className={`absolute top-0 z-10 h-full w-16 ${
        position === "left" 
          ? "left-0 bg-gradient-to-r" 
          : "right-0 bg-gradient-to-l"
      } from-black to-transparent`}
    />
  );
}