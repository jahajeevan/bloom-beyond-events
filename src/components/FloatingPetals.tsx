type Props = { count?: number; className?: string };

export function FloatingPetals({ count = 14, className = "" }: Props) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute block"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `-${(i * 11) % 25 + 5}%`,
            width: `${10 + (i % 4) * 5}px`,
            height: `${14 + (i % 4) * 6}px`,
            background: `linear-gradient(135deg, oklch(0.93 0.09 ${15 + (i % 6) * 8}) 0%, oklch(0.78 0.13 60) 100%)`,
            borderRadius: "60% 0 60% 0",
            opacity: 0,
            filter: "blur(0.4px)",
            animation: `drift ${10 + (i % 8)}s linear ${i * 0.4}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
