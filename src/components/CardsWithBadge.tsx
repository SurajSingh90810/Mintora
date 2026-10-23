import { useEffect, useRef } from "react";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

type StampColor = "rust" | "brass" | "steel";

const CardsWithBadge: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  stamp?: string;
  stampColor?: StampColor;
}> = ({ children, delay = 0, className = "", stamp, stampColor = "rust" }) => {
  return (
    <ScrollReveal delay={delay} className={`shield-card relative ${className}`}>
      <span className="bracket bracket-tl" />
      <span className="bracket bracket-tr" />
      <span className="bracket bracket-bl" />
      <span className="bracket bracket-br" />
      <div className="smoke-layer" />
      <div className="scanline-overlay" />

      {stamp && (
        <div className={`stamp-badge stamp-${stampColor}  absolute z-20`}>
          {/* Added translate-x-[8px] to nudge it to the right along the ribbon */}
          <div className="w-full h-full flex items-center justify-center text-center m-auto leading-none pt-[2px] translate-x-[8px]">
            {stamp}
          </div>
        </div>
      )}

      <div className="relative z-10 h-full">{children}</div>
    </ScrollReveal>
  );
};

export default CardsWithBadge;
