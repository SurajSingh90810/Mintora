import { useMemo } from "react";

const GlowingDots: React.FC = () => {
  const embers = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 12,
        drift: (Math.random() * 60 - 30).toFixed(0),
      })),
    [],
  );

  const dust = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 15,
      })),
    [],
  );

  const blips = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        top: Math.random() * 70 + 15,
        left: Math.random() * 70 + 15,
        delay: Math.random() * 6,
      })),
    [],
  );

  return (
    <>
      <div className="tactical-grid" aria-hidden="true" />
      <div className="searchlight" aria-hidden="true" />
      <div className="flare-flash" aria-hidden="true" />

      <div className="ember-field" aria-hidden="true">
        {embers.map((e) => (
          <span
            key={`ember-${e.id}`}
            className="ember"
            style={
              {
                left: `${e.left}%`,
                width: `${e.size}px`,
                height: `${e.size}px`,
                animationDuration: `${e.duration}s`,
                animationDelay: `${e.delay}s`,
                "--drift": `${e.drift}px`,
              } as React.CSSProperties
            }
          />
        ))}
        {dust.map((d) => (
          <span
            key={`dust-${d.id}`}
            className="dust-mote"
            style={{
              top: `${d.top}%`,
              left: `${d.left}%`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="radar-hud" aria-hidden="true">
        <div className="radar-rings" />
        <div className="radar-sweep" />
        {blips.map((b) => (
          <span
            key={`blip-${b.id}`}
            className="radar-blip"
            style={{
              top: `${b.top}%`,
              left: `${b.left}%`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GlowingDots;
