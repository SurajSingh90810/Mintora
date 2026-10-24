import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  Crosshair,
  Terminal,
  Globe,
  ChevronDown,
  Target,
  Network,
  ShieldCheck,
  Users,
  Activity,
  TrendingUp,
  Lock,
  Wallet,
  CheckCircle2,
  Sparkles,
  Menu,
  X,
  ShieldAlert,
  Zap,
  Compass,
  Flag,
  Rocket,
  Cpu,
  Code2,
  GitBranch,
  Server,
  Fingerprint,
  Award,
  Gauge,
  Layers,
  Radar,
  Infinity as InfinityIcon,
  Blocks,
  Hexagon,
  HeartHandshake,
  Coins,
  PieChart,
  Repeat,
  Crown,
  Briefcase,
  Scale,
  ArrowUp,
} from "lucide-react";
import GlowingDots from "./components/WarAtmosphereFX";
import mintoraLogo from "./assets/logo1.png";

// --- THEME COLORS ---
// Primary Red: #6a0004 | Deep Red: #4a0003 | Dark Red: #8a0005 | Crimson: #3d0002
// Gold: #d4af37 | Light Gold: #f4d03f | Dark Gold: #b8860b

/* ============================================================
   ANIMATED BACKGROUND SYSTEM
   ============================================================ */
const FloatingOrbs: React.FC = () => {
  const orbs = useMemo(
    () => [
      {
        size: 500,
        color: "rgba(106,0,4,0.08)",
        top: "10%",
        left: "5%",
        duration: 25,
        delay: 0,
      },
      {
        size: 400,
        color: "rgba(212,175,55,0.08)",
        top: "60%",
        left: "80%",
        duration: 30,
        delay: 5,
      },
      {
        size: 350,
        color: "rgba(106,0,4,0.06)",
        top: "40%",
        left: "40%",
        duration: 35,
        delay: 10,
      },
      {
        size: 450,
        color: "rgba(212,175,55,0.07)",
        top: "80%",
        left: "15%",
        duration: 28,
        delay: 7,
      },
      {
        size: 300,
        color: "rgba(106,0,4,0.05)",
        top: "25%",
        left: "70%",
        duration: 22,
        delay: 3,
      },
    ],
    [],
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: orb.top,
            left: orb.left,
            animation: `orb-float-${i} ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const HexagonalMeshBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "56px 98px",
        maskImage:
          "radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 80%)",
        animation: "mesh-pan 40s linear infinite",
      }}
    />
  </div>
);

const DiagonalTechBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(106,0,4,0.5) 15px, rgba(212,175,55,0.5) 16px)`,
      }}
    />
  </div>
);

const ScanlineOverlay: React.FC = () => (
  <div
    className="fixed inset-0 pointer-events-none z-[2] opacity-[0.04]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg,rgba(255,255,255,0.3) 0px,rgba(212,175,55,0.2) 1px,transparent 1px,transparent 3px)",
    }}
  />
);

const TacticalParticles: React.FC = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 20,
        size: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.4,
        color: i % 2 === 0 ? "#8a0005" : "#d4af37",
      })),
    [],
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            backgroundColor: p.color,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-rise ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const NoiseTexture: React.FC = () => (
  <div
    className="fixed inset-0 pointer-events-none z-[2] opacity-[0.03] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const CornerMarkers: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[4]">
    <div className="absolute top-24 left-6 opacity-40">
      <div className="w-6 h-[2px] bg-[#d4af37]" />
      <div className="w-[2px] h-6 bg-[#d4af37]" />
    </div>
    <div className="absolute top-24 right-6 opacity-40 flex flex-col items-end">
      <div className="w-6 h-[2px] bg-[#6a0004]" />
      <div className="w-[2px] h-6 bg-[#6a0004]" />
    </div>
    <div className="absolute bottom-6 left-6 opacity-40 flex flex-col">
      <div className="w-[2px] h-6 bg-[#6a0004]" />
      <div className="w-6 h-[2px] bg-[#6a0004]" />
    </div>
    <div className="absolute bottom-6 right-6 opacity-40 flex flex-col items-end">
      <div className="w-[2px] h-6 bg-[#d4af37]" />
      <div className="w-6 h-[2px] bg-[#d4af37]" />
    </div>
  </div>
);

const Vignette: React.FC = () => (
  <div
    className="fixed inset-0 pointer-events-none z-[2]"
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
    }}
  />
);

const AnimatedBackground: React.FC = () => (
  <>
    <FloatingOrbs />
    <HexagonalMeshBackground />
    <DiagonalTechBackground />
    <TacticalParticles />
    <ScanlineOverlay />
    <NoiseTexture />
    <Vignette />
    <CornerMarkers />
  </>
);

const IncomeSectionBackground: React.FC = () => {
  const beams = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
        height: 10 + Math.random() * 30,
        color: i % 2 === 0 ? "#6a0004" : "#d4af37",
      })),
    [],
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-0 bg-[#1a0001]/60 overflow-hidden">
      {/* Falling Data Beams */}
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="absolute top-0 w-[2px]"
          style={{
            left: `${beam.left}%`,
            height: `${beam.height}%`,
            background: `linear-gradient(to bottom, transparent, ${beam.color}, transparent)`,
            animation: `income-beam ${beam.duration}s linear infinite`,
            animationDelay: `${beam.delay}s`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Smooth Transition Masks */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0d0000] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0000] to-transparent" />
    </div>
  );
};

/* ============================================================
   UTILITY: Enhanced ScrollReveal
   ============================================================ */
type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "flip"
  | "blur-in"
  | "slide-rotate";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  duration = 800,
  once = true,
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  const getTransform = () => {
    if (visible) return "translate3d(0,0,0) scale(1) rotate(0deg)";
    switch (variant) {
      case "fade-up":
        return "translate3d(0, 40px, 0)";
      case "fade-down":
        return "translate3d(0, -40px, 0)";
      case "fade-left":
        return "translate3d(-40px, 0, 0)";
      case "fade-right":
        return "translate3d(40px, 0, 0)";
      case "zoom-in":
        return "scale(0.9)";
      case "flip":
        return "perspective(1000px) rotateX(-20deg)";
      case "blur-in":
        return "translate3d(0, 20px, 0)";
      case "slide-rotate":
        return "translate3d(-30px, 0, 0) rotate(-3deg)";
      default:
        return "translate3d(0, 40px, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        filter:
          variant === "blur-in"
            ? visible
              ? "blur(0)"
              : "blur(10px)"
            : undefined,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), filter ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ============================================================
   UTILITY: LazyMount
   ============================================================ */
const SectionSkeleton: React.FC = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-2 border-[#d4af37]/20 rounded-full" />
        <div className="absolute inset-0 border-2 border-t-[#f4d03f] rounded-full animate-spin" />
        <Crosshair className="absolute inset-0 m-auto w-6 h-6 text-[#d4af37]/60" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]/60 animate-pulse">
        Loading Module...
      </span>
    </div>
  </div>
);

const LazyMount: React.FC<{
  children: React.ReactNode;
  rootMargin?: string;
}> = ({ children, rootMargin = "200px 0px" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);
  return <div ref={ref}>{shouldRender ? children : <SectionSkeleton />}</div>;
};

/* ============================================================
   UTILITY: MagneticButton
   ============================================================ */
const MagneticButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { strength?: number }
> = ({ children, strength = 0.3, className = "", ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState("translate3d(0,0,0)");
  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      setTransform(`translate3d(${x}px, ${y}px, 0)`);
    },
    [strength],
  );
  const handleLeave = () => setTransform("translate3d(0,0,0)");
  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform,
        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

/* ============================================================
   UTILITY: TiltCard
   ============================================================ */
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number;
  glare?: boolean;
}

/* ============================================================
   ADVANCED HERO SECTION — COMMAND CENTER
   ============================================================ */

const HexGrid: React.FC = () => {
  const hexagons = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 40,
        opacity: 0.02 + Math.random() * 0.06,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 12,
        color: i % 2 === 0 ? "#6a0004" : "#d4af37",
      })),
    [],
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hexagons.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animation: `hex-breathe ${h.duration}s ease-in-out infinite`,
            animationDelay: `${h.delay}s`,
            color: h.color,
          }}
        >
          <Hexagon size={h.size} strokeWidth={0.5} />
        </div>
      ))}
    </div>
  );
};

const DataStream: React.FC<{ side: "left" | "right" }> = ({ side }) => {
  const lines = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        width: 30 + Math.random() * 80,
        opacity: 0.1 + Math.random() * 0.3,
        delay: Math.random() * 8,
        duration: 3 + Math.random() * 5,
        y: i * 8.5,
        color: i % 3 === 0 ? "#d4af37" : "#6a0004",
      })),
    [],
  );
  return (
    <div
      className={`absolute top-0 bottom-0 ${side === "left" ? "left-0" : "right-0"} w-32 pointer-events-none overflow-hidden opacity-40`}
    >
      {lines.map((l) => (
        <div
          key={l.id}
          className={`absolute h-[1px] ${
            l.color === "#d4af37"
              ? "bg-gradient-to-r from-[#d4af37]/60 to-transparent"
              : "bg-gradient-to-r from-[#6a0004]/60 to-transparent"
          }`}
          style={{
            top: `${l.y}%`,
            width: l.width,
            opacity: l.opacity,
            [side === "left" ? "left" : "right"]: 0,
            animation: `data-stream-${side} ${l.duration}s ease-in-out infinite`,
            animationDelay: `${l.delay}s`,
            transform: side === "right" ? "scaleX(-1)" : undefined,
          }}
        />
      ))}
    </div>
  );
};

const PulsingPerimeter: React.FC = () => (
  <div className="absolute inset-4 sm:inset-8 pointer-events-none z-[5]">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent animate-pulse" />
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6a0004]/20 to-transparent animate-pulse" />
    <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#6a0004]/20 to-transparent animate-pulse" />
    <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent animate-pulse" />
    <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#d4af37]/50" />
    <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[#6a0004]/50" />
    <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[#6a0004]/50" />
    <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#d4af37]/50" />
  </div>
);

const AdvancedHero: React.FC<{
  handleNavClick: (e: any, id: string) => void;
}> = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [, setTime] = useState(new Date());
  const [activeMetric, setActiveMetric] = useState(0);
  const [, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lines = [
      "> ESTABLISHING SECURE CHANNEL...",
      "> AUTHENTICATING NODE IDENTITY...",
      "> LOADING REWARD DISTRIBUTION MAP...",
      "> VERIFYING SLAB COMPLETION SEQUENCE...",
      "> MAPPING HIERARCHICAL DEPTH (L1→L3)...",
      "> CALIBRATING ROYALTY BRACKETS...",
      "> SCANNING AUXILIARY ASSET ROSTER...",
      "> ALL SUBSYSTEMS NOMINAL ✓",
    ];
    let i = 0;
    const id = setInterval(() => {
      if (i < lines.length) {
        setTerminalLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(id);
      }
    }, 600);
    return () => clearInterval(id);
  }, []);

  const rotatingMetrics = [
    {
      label: "Yield Coverage",
      value: "3-TIER DEPTH",
      icon: Layers,
      color: "#f4d03f",
    },
    {
      label: "Asset Issuance",
      value: "HARD CAPPED",
      icon: Lock,
      color: "#d4af37",
    },
    {
      label: "Contract State",
      value: "IMMUTABLE",
      icon: Fingerprint,
      color: "#f4d03f",
    },
    {
      label: "Royalty Engine",
      value: "BRACKET-GATED",
      icon: Crown,
      color: "#d4af37",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden"
    >
      <HexGrid />
      <DataStream side="left" />
      <DataStream side="right" />
      <PulsingPerimeter />

      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-15"
        style={{
          animation: "ring-drift 20s ease-in-out infinite",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[700px] h-[700px]">
            <div className="absolute inset-0 border border-[#d4af37]/30 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-16 border border-[#6a0004]/30 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
            <div className="absolute inset-32 border border-[#d4af37]/20 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-48 border border-dashed border-[#6a0004]/20 rounded-full" />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#6a0004]/25 to-transparent" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(45deg, transparent 49.5%, rgba(212,175,55,0.1) 49.5%, rgba(212,175,55,0.1) 50.5%, transparent 50.5%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(-45deg, transparent 49.5%, rgba(106,0,4,0.1) 49.5%, rgba(106,0,4,0.1) 50.5%, transparent 50.5%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full pt-32 sm:pt-36 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <ScrollReveal variant="fade-up" delay={200}>
              <h1 className="font-heading tracking-tighter text-white uppercase leading-[0.82] mb-3 relative flex flex-col items-center lg:items-start">
                <span className="block text-5xl sm:text-6xl lg:text-[5rem] relative">
                  <span className="relative z-10 text-[#f4d03f]">
                    THE ENGINE
                  </span>
                </span>
                <span className="block text-3xl sm:text-6xl lg:text-[5rem] relative mt-1">
                  <span className="relative z-10">BEHIND</span>
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-[5rem] relative mt-1">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] via-[#d4af37] to-[#8a0005] bg-[length:200%_auto]">
                    VERIFIABLE
                  </span>
                </span>
                <span className="block text-4xl sm:text-6xl lg:text-[5rem] relative mt-1 flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-5">
                  <span className="relative z-10">YIELD</span>
                  <span className="text-[10px] sm:text-xs font-mono text-[#d4af37]/80 tracking-[0.3em] inline-block">
                    [ MINTORA ]
                  </span>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={280} className="w-full">
              <div className="flex items-center justify-center lg:justify-start gap-3 my-6 max-w-xl w-full mx-auto lg:mx-0">
                <div className="h-[2px] bg-[#d4af37] w-10 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"
                    style={{
                      animation: "signal-sweep 2s ease-in-out infinite",
                    }}
                  />
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#6a0004]/60 via-[#d4af37]/30 to-transparent" />
                <span className="text-[8px] font-mono text-[#d4af37]/70 tracking-[0.3em]">
                  SEC::ALPHA
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={350} className="w-full">
              <div className="relative max-w-xl mb-8 flex flex-col items-center lg:items-start mx-auto lg:mx-0">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6a0004] via-[#d4af37]/40 to-transparent hidden lg:block" />
                <p className="text-sm sm:text-base lg:text-[17px] text-white/70 font-medium tracking-wide leading-[1.8] pl-0 lg:pl-5 text-center lg:text-left">
                  Mintora strips away the opacity layer from on-chain reward
                  systems. Every yield event, cap threshold, and slab release is
                  pre-engineered and{" "}
                  <span className="text-[#f4d03f] font-bold border-b border-[#d4af37]/40">
                    mathematically deterministic
                  </span>{" "}
                  — no discretionary overrides, no retroactive parameter shifts,
                  and{" "}
                  <span className="text-white font-bold">
                    absolutely zero custodial exposure
                  </span>{" "}
                  at any point in the participant lifecycle.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={420} className="w-full">
              <div
                className="relative p-4 max-w-xl mb-8 overflow-hidden group transition-colors mx-auto lg:mx-0 text-left"
                style={{
                  background:
                    "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]"></div>

                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 relative z-10">
                  <div className="w-12 h-12 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                    {(() => {
                      const CurrentIcon = rotatingMetrics[activeMetric].icon;
                      return (
                        <CurrentIcon
                          size={20}
                          style={{
                            color: rotatingMetrics[activeMetric].color,
                          }}
                        />
                      );
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[8px] font-mono text-[#d4af37]/70 uppercase tracking-[0.3em] mb-0.5">
                      ACTIVE PARAMETER /{" "}
                      {String(activeMetric + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                      {rotatingMetrics[activeMetric].label}
                    </div>
                    <div
                      className="text-xs font-bold uppercase tracking-widest mt-0.5"
                      style={{
                        color: rotatingMetrics[activeMetric].color,
                      }}
                    >
                      {rotatingMetrics[activeMetric].value}
                    </div>
                  </div>
                  <div className="flex gap-1 justify-center sm:justify-start">
                    {rotatingMetrics.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === activeMetric ? "scale-125" : "opacity-40"}`}
                        style={{
                          backgroundColor:
                            i === activeMetric
                              ? rotatingMetrics[i].color
                              : "#d4af37",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full h-[450px] sm:h-[550px] lg:h-auto lg:min-h-[620px] scale-[0.6] sm:scale-75 lg:scale-110 xl:scale-[1.35] transform origin-top lg:origin-center transition-transform duration-500 mt-8 lg:mt-0">
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
              <div className="relative">
                <div className="relative w-[320px] h-[80px] rounded-[50%] border-2 border-[#d4af37]/40 bg-[#2a0001]/70 backdrop-blur-sm">
                  <div className="absolute inset-2 rounded-[50%] border border-[#6a0004]/40" />
                  <div className="absolute inset-5 rounded-[50%] border border-[#d4af37]/30" />
                  <div className="absolute inset-8 rounded-[50%] border border-dashed border-[#6a0004]/30 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10" />
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const x = Math.cos(angle) * 150;
                    const y = Math.sin(angle) * 35;
                    const color = i % 2 === 0 ? "#8a0005" : "#f4d03f";
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: color,
                          transform: `translate(${x}px, ${y}px)`,
                          animation: `projector-pulse 2s ease-in-out infinite`,
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-none z-10">
              <div
                className="w-[260px] h-[450px]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(212,175,55,0.12) 0%, rgba(106,0,4,0.03) 40%, transparent 100%)",
                  clipPath: "polygon(45% 100%, 55% 100%, 100% 0%, 0% 0%)",
                }}
              />
            </div>

            <div
              className="relative w-full flex flex-col items-center justify-center z-20"
              style={{
                transformStyle: "preserve-3d",
                animation: "core-drift 15s ease-in-out infinite",
              }}
            >
              <div className="relative flex flex-col items-center justify-center">
                <div
                  className="absolute w-[400px] h-[90px] border-[1.5px] border-[#d4af37]/20 rounded-[50%] animate-[spin_15s_linear_infinite]"
                  style={{ transform: "rotateX(70deg)" }}
                >
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 bg-[#f4d03f] rounded-full" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-[1px] bg-[#8a0005]/80" />
                </div>

                <div
                  className="absolute w-[360px] h-[360px] border-[1.5px] border-[#6a0004]/40 rounded-full animate-[spin_35s_linear_infinite]"
                  style={{ transform: "rotateY(75deg) rotateX(15deg)" }}
                >
                  <div className="absolute top-1/4 right-0 w-2 h-2 bg-[#f4d03f] rounded-full" />
                  <div className="absolute bottom-1/4 left-0 w-[2px] h-10 bg-[#8a0005] rounded-full" />
                </div>

                <div className="absolute w-[320px] h-[320px] border border-[#d4af37]/25 rounded-full animate-[spin_25s_linear_infinite_reverse]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#f4d03f] rounded-full" />
                </div>

                <div className="absolute w-[250px] h-[250px] border-[3px] border-dotted border-[#8a0005]/40 rounded-full animate-[spin_50s_linear_infinite]" />
                <div className="absolute w-[440px] h-[440px] border border-dashed border-[#d4af37]/20 rounded-full animate-[spin_40s_linear_infinite]" />

                <div
                  className="absolute w-[220px] h-[220px] opacity-40 animate-[spin_60s_linear_infinite_reverse]"
                  style={{ transform: "translateZ(-20px)" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="0.5"
                    />
                    <polygon
                      points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
                      fill="none"
                      stroke="#6a0004"
                      strokeWidth="0.5"
                      strokeDasharray="1 3"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>

                <div
                  className="relative z-20 flex flex-col items-center p-8 border border-[#d4af37]/50"
                  style={{
                    background:
                      "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
                  }}
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

                  <div className="relative">
                    <h2 className="relative font-heading font-bold text-6xl tracking-[0.08em] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#f4d03f] via-white to-[#d4af37]">
                      MINTORA
                    </h2>
                  </div>
                </div>

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[340px] h-[340px] animate-[spin_12s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-7 h-7 bg-[#4a0003] border border-[#d4af37] flex items-center justify-center">
                          <ShieldCheck size={14} className="text-[#f4d03f]" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="relative w-7 h-7 bg-[#6a0004] border border-[#d4af37] flex items-center justify-center">
                          <Activity size={14} className="text-[#f4d03f]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[340px] h-[340px] animate-[spin_18s_linear_infinite_reverse]">
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                        <div className="relative w-7 h-7 bg-[#6a0004] border border-[#d4af37] flex items-center justify-center">
                          <Network size={14} className="text-[#f4d03f]" />
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
                        <div className="relative w-7 h-7 bg-[#4a0003] border border-[#d4af37] flex items-center justify-center">
                          <Crown size={14} className="text-[#f4d03f]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-[900px] h-[900px] border border-[#d4af37]/10 rounded-full animate-[spin_50s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#f4d03f]/80 rounded-full" />
        </div>
        <div className="absolute w-[1100px] h-[1100px] border border-[#6a0004]/15 rounded-full animate-[spin_70s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/3 w-1.5 h-1.5 bg-[#8a0005]/80 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <div className="flex items-center gap-3 text-[8px] font-mono text-[#d4af37]/70 uppercase tracking-[0.3em]">
          <span className="w-6 h-[1px] bg-[#d4af37]/50" />
          Scroll to engage
          <span className="w-6 h-[1px] bg-[#d4af37]/50" />
        </div>
        <div className="relative w-5 h-8 border border-[#d4af37]/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#f4d03f] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 8,
  glare = false,
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [hovered, setHovered] = useState(false);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -maxTilt,
      y: (x - 0.5) * maxTilt,
      glareX: x * 100,
      glareY: y * 100,
    });
  };
  const handleLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
    setHovered(false);
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      className={`relative ${className}`}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {children}
      {glare && hovered && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(212,175,55,0.3) 0%, transparent 50%)`,
          }}
        />
      )}
    </div>
  );
};

/* ============================================================
   UTILITY: ScrollProgress
   ============================================================ */
const ScrollProgress: React.FC<{
  target: React.RefObject<HTMLDivElement | null>;
}> = ({ target }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const handler = () => {
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [target]);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#6a0004] via-[#f4d03f] to-[#6a0004] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

/* ============================================================
   UTILITY: BackToTop
   ============================================================ */
const BackToTop: React.FC<{
  target: React.RefObject<HTMLDivElement | null>;
}> = ({ target }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const handler = () => setShow(el.scrollTop > 600);
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [target]);
  return (
    <button
      onClick={() => target.current?.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#4a0003] border border-[#d4af37]/60 flex items-center justify-center cursor-pointer transition-all duration-300 group hover:bg-[#6a0004] hover:border-[#f4d03f] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
    >
      <ArrowUp
        size={18}
        className="text-[#f4d03f] group-hover:-translate-y-0.5 transition-transform"
      />
    </button>
  );
};

/* ============================================================
   SectionHeading
   ============================================================ */
const SectionHeading: React.FC<{
  eyebrow: string;
  title: string;
  desc?: string;
}> = ({ eyebrow, title, desc }) => (
  <ScrollReveal
    variant="fade-up"
    className="flex flex-col items-center text-center mb-14 sm:mb-16"
  >
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-[30px] h-[2px] bg-[#d4af37] animate-pulse" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
        {eyebrow}
      </span>
      <span className="w-[30px] h-[2px] bg-[#d4af37] animate-pulse" />
    </div>
    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tighter uppercase mb-4 bg-gradient-to-r from-[#f4d03f] via-white to-[#d4af37] bg-clip-text text-transparent">
      {title}
    </h2>
    {desc && (
      <p className="text-sm sm:text-base text-white/70 font-medium max-w-2xl">
        {desc}
      </p>
    )}
  </ScrollReveal>
);

/* ============================================================
   TickerStrip
   ============================================================ */
const TickerStrip: React.FC = () => {
  const items = [
    "CAPPED NFT SUPPLY",
    "SLAB-BASED REWARD RELEASES",
    "DEFAULT-OPEN LEVEL INCOME",
    "DUAL-STRATEGY DEPOSIT PACKAGES",
    "AUTOMATED ROYALTY CAPPING",
    "FOUNDER CORE TEAM EXCLUSIVITY",
    "TRANSPARENT ON-CHAIN LOGIC",
    "MULTI-CHAIN COMPATIBLE",
  ];
  return (
    <div className="relative w-full overflow-hidden border-y border-[#d4af37]/40 bg-[#2a0001]/80 backdrop-blur-sm py-4">
      <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#1a0001] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#1a0001] to-transparent z-10" />
      <div className="flex w-max gap-10 whitespace-nowrap animate-mintora-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-2 group">
            <Crosshair
              size={14}
              className="text-[#f4d03f] shrink-0 group-hover:rotate-180 transition-transform duration-700"
            />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-[#f4d03f] transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PillarsRow: React.FC = () => {
  const pillars = [
    {
      icon: <Lock size={18} className="text-[#f4d03f]" />,
      title: "Hard-Capped Supply",
      desc: "Asset issuance is permanently fixed — enforcing absolute scarcity with no unverified dilution.",
    },
    {
      icon: <Network size={18} className="text-[#f4d03f]" />,
      title: "Transparent Hierarchy",
      desc: "Every network tier and distribution rule is rigidly defined in the protocol's core logic.",
    },
    {
      icon: <ShieldAlert size={18} className="text-[#f4d03f]" />,
      title: "Capped Risk Exposure",
      desc: "Return mechanisms are safeguarded by strict, automated capping constraints on every bracket.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
      {pillars.map((p, i) => (
        <ScrollReveal key={p.title} delay={i * 150} variant="fade-up">
          <TiltCard
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 transition-colors group h-full overflow-hidden relative"
            style={{
              background:
                "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]"></div>

            <div className="p-2.5 bg-[#8a0005]/80 border border-[#d4af37]/50 rounded shrink-0 mx-auto sm:mx-0 relative z-10">
              {p.icon}
            </div>
            <div className="relative z-10">
              <h4 className="text-sm font-heading uppercase tracking-widest text-[#f4d03f] mb-1.5">
                {p.title}
              </h4>
              <p className="text-xs text-white/70 font-medium leading-relaxed">
                {p.desc}
              </p>
            </div>
          </TiltCard>
        </ScrollReveal>
      ))}
    </div>
  );
};

/* ============================================================
   AboutSection
   ============================================================ */
const AboutSection: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
    <ScrollReveal variant="fade-right" className="lg:col-span-2 relative">
      <TiltCard
        maxTilt={10}
        className="relative aspect-square max-w-sm mx-auto"
      >
        <div className="absolute inset-0 border-2 border-[#d4af37]/30 rotate-6 transition-transform duration-700 hover:rotate-12" />
        <div className="absolute inset-0 border border-[#6a0004]/60 -rotate-3" />
        <div
          className="absolute inset-4 flex flex-col items-center justify-center p-6"
          style={{
            background:
              "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
            border: "1px solid rgba(212, 175, 55, 0.5)",
          }}
        >
          <Compass
            size={64}
            className="text-[#f4d03f] mb-6 animate-[spin_20s_linear_infinite]"
          />
          <h3 className="font-heading text-2xl text-white uppercase tracking-widest text-center mb-2">
            Built With Precision
          </h3>
          <p className="text-xs text-[#d4af37]/80 text-center font-medium">
            Engineered by veteran protocol architects
          </p>
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />
        </div>
      </TiltCard>
    </ScrollReveal>
    <ScrollReveal
      delay={200}
      variant="fade-left"
      className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] border border-[#d4af37]/50 bg-[#6a0004]/60 px-3 py-1 mb-4 mx-auto lg:mx-0">
        About The Protocol
      </span>
      <h3 className="font-heading text-3xl sm:text-4xl text-white uppercase tracking-tight mb-5 leading-tight">
        A Structured Framework for the Modern Ecosystem
      </h3>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
        Mintora is a structurally engineered platform built from the ground up
        on principles of transparency, scarcity, and sustainable yield
        mechanics. Every parameter is codified and immutable — eliminating
        ambiguity for every participant in the hierarchy.
      </p>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
        We believe decentralized systems should operate like a well-run
        organization: clear logic, verifiable rules of engagement, and no hidden
        intermediaries. Mintora delivers that discipline through immutable smart
        contracts and documented hierarchical reward paths.
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
        {[
          "Immutable Rules",
          "Audited Contracts",
          "Transparent Yield",
          "Zero Admin Keys",
          "Community-First",
        ].map((p, i) => (
          <ScrollReveal key={p} delay={i * 80} variant="zoom-in">
            <span className="inline-block px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-[#4a0003] border border-[#d4af37]/40 text-white/80 hover:border-[#f4d03f] hover:text-[#f4d03f] transition-all cursor-default">
              {p}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  </div>
);

/* ============================================================
   MissionVision
   ============================================================ */
const MissionVision: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
    {[
      {
        icon: Target,
        tag: "Our Mission",
        title: "Deliver Capped, Transparent Yield",
        desc: "To construct a protocol where every reward mechanism, cap, and release schedule is pre-engineered — removing uncertainty and giving every participant a mathematically verifiable path forward.",
      },
      {
        icon: Rocket,
        tag: "Our Vision",
        title: "A New Standard for Trust-Minimized Networks",
        desc: "To redefine what a disciplined on-chain hierarchy can achieve — pioneering a model where no participant depends on human oversight, and every rule holds equally for the first and the last member.",
      },
    ].map((item, i) => (
      <ScrollReveal
        key={item.tag}
        delay={i * 180}
        variant={i === 0 ? "fade-right" : "fade-left"}
      >
        <TiltCard
          maxTilt={6}
          className="relative p-6 sm:p-8 overflow-hidden group transition-colors h-full flex flex-col items-center sm:items-start text-center sm:text-left"
          style={{
            background:
              "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
          }}
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]"></div>

          <div className="relative z-10">
            <div className="w-14 h-14 flex items-center justify-center mb-5 bg-[#8a0005]/80 border border-[#d4af37]/50 group-hover:scale-110 transition-transform duration-500 mx-auto sm:mx-0">
              <item.icon size={26} className="text-[#f4d03f]" />
            </div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-3 mx-auto sm:mx-0">
              {item.tag}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4 leading-tight">
              {item.title}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
          </div>
        </TiltCard>
      </ScrollReveal>
    ))}
  </div>
);

/* ============================================================
   DepositStrategies
   ============================================================ */
const DepositStrategies: React.FC = () => {
  const [active, setActive] = useState<1 | 2>(1);
  const tokens = ["Arma", "Goldex", "BnB", "Sol", "Finvora", "Rue", "BELDEX"];
  return (
    <div>
      <ScrollReveal variant="fade-up">
        <div className="flex bg-[#2a0001]/80 border border-[#d4af37]/40 p-1 mb-8 max-w-xl mx-auto relative flex-col sm:flex-row">
          <button
            onClick={() => setActive(1)}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all cursor-pointer ${
              active === 1
                ? "bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#d4af37] text-[#3d0002]"
                : "text-[#d4af37]/80 hover:bg-[#4a0003] hover:text-[#f4d03f]"
            }`}
          >
            <Target size={16} /> 100% USDT Route
          </button>
          <button
            onClick={() => setActive(2)}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all cursor-pointer ${
              active === 2
                ? "bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#d4af37] text-[#3d0002]"
                : "text-[#d4af37]/80 hover:bg-[#4a0003] hover:text-[#f4d03f]"
            }`}
          >
            <PieChart size={16} /> 50/50 Token Split
          </button>
        </div>
      </ScrollReveal>
      <div
        className={`transition-all duration-500 ease-in-out mx-auto ${active === 1 ? "max-w-3xl" : "max-w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"}`}
      >
        <div
          key={`strategy-${active}`}
          className="p-6 sm:p-10 relative overflow-hidden animate-in fade-in zoom-in-[0.98] duration-500"
          style={{
            background:
              "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
          }}
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />
          {active === 1 ? (
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 relative z-10">
              <div className="flex-1 flex flex-col items-center md:items-start w-full">
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
                  <div className="w-14 h-14 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <ShieldCheck size={26} className="text-[#f4d03f]" />
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-1">
                      Primary Stable Network
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-wide">
                      Single-Asset Deployment
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  The complete deposit operates entirely within a single stable
                  asset — the cleanest and most straightforward route available
                  to any participant seeking maximum stability.
                </p>
                <ul className="space-y-4 flex flex-col items-center md:items-start w-full">
                  {[
                    <>
                      Total return is strictly governed by a{" "}
                      <strong className="text-[#f4d03f] font-bold">
                        predefined ceiling multiplier
                      </strong>{" "}
                      on the deployed layout.
                    </>,
                    <>
                      Rewards flow via a{" "}
                      <strong className="text-white">
                        standardized daily release cadence
                      </strong>
                      .
                    </>,
                    <>No external token exposure required.</>,
                  ].map((item, idx) => (
                    <ScrollReveal
                      key={idx}
                      delay={idx * 100}
                      variant="fade-right"
                      className="w-full"
                    >
                      <li className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 text-sm text-white/80 font-medium w-full max-w-sm sm:max-w-none mx-auto md:mx-0">
                        <div className="w-6 h-6 rounded bg-[#2a0001] border border-[#d4af37]/50 flex items-center justify-center shrink-0 mt-0.5 mx-auto sm:mx-0">
                          <CheckCircle2 size={14} className="text-[#f4d03f]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full relative z-10">
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <Scale size={22} className="text-[#f4d03f]" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-1">
                    Diversified Network
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-wide">
                    Dual-Asset Split Deployment
                  </h3>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                The deposit is equally balanced between the primary stable asset
                and a chosen auxiliary token — unlocking a diversified exposure
                profile with an independent release cycle.
              </p>
              <ul className="space-y-4 flex flex-col items-center md:items-start w-full">
                {[
                  "The stable portion operates under the standard capped-return mechanics.",
                  <>
                    The auxiliary portion is{" "}
                    <strong className="text-white">
                      staked into the chosen token
                    </strong>{" "}
                    and unlocks a steady daily release schedule.
                  </>,
                  "Each daily release is systematically deducted from the principal balance — maintaining complete payout discipline.",
                ].map((item, idx) => (
                  <ScrollReveal
                    key={idx}
                    delay={idx * 100}
                    variant="fade-right"
                    className="w-full"
                  >
                    <li className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 text-sm text-white/80 font-medium max-w-sm sm:max-w-none mx-auto md:mx-0">
                      <Repeat
                        size={18}
                        className="text-[#f4d03f] mt-0.5 shrink-0 mx-auto sm:mx-0"
                      />
                      <span>{item}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          )}
        </div>
        {active === 2 && (
          <div
            className="p-6 sm:p-10 relative animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col items-center md:items-start text-center md:text-left"
            style={{
              background:
                "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <Coins size={22} className="text-[#f4d03f]" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-1">
                  Vetted Integrations
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-wide">
                  Supported Auxiliary Assets
                </h3>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              For participants selecting the dual-asset split route, the
              protocol supports a curated roster of verified auxiliary networks
              — each vetted for ecosystem alignment.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
              {tokens.map((t, i) => (
                <ScrollReveal key={t} delay={i * 50} variant="zoom-in">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-2 sm:px-3 py-3.5 bg-[#2a0001]/80 border border-[#d4af37]/40 hover:border-[#f4d03f] hover:translate-x-1 transition-all group cursor-default text-center sm:text-left">
                    <div className="w-7 h-7 rounded-full bg-[#6a0004] border border-[#d4af37]/50 flex items-center justify-center shrink-0 group-hover:rotate-180 transition-all duration-500 mx-auto sm:mx-0">
                      <Hexagon size={12} className="text-[#f4d03f]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 group-hover:text-[#f4d03f]">
                      {t}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="pt-5 border-t border-[#d4af37]/30 flex flex-col sm:flex-row items-center sm:items-start gap-3 w-full">
              <div className="w-6 h-6 rounded bg-[#2a0001] border border-[#d4af37]/50 flex items-center justify-center shrink-0 mt-0.5 mx-auto sm:mx-0">
                <Lock size={12} className="text-[#f4d03f]" />
              </div>
              <p className="text-xs text-[#d4af37]/80 leading-relaxed font-medium">
                Auxiliary asset listings are governed by protocol-level
                verification — new integrations require explicit review.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ============================================================
   IncomeHierarchy
   ============================================================ */
const IncomeHierarchy: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const levels = [
    {
      tier: "L1",
      title: "Primary Yield",
      desc: "Direct network yield — the strongest structural reward credited instantly.",
      width: 100,
    },
    {
      tier: "L2",
      title: "Secondary Yield",
      desc: "Second structural depth — scaled rewards for sustained downline expansion.",
      width: 65,
    },
    {
      tier: "L3",
      title: "Tertiary Yield",
      desc: "Third structural depth — compounds long-term organizational development.",
      width: 40,
    },
  ];
  const royaltyBrackets = [
    {
      icon: Target,
      tier: "Entry Bracket",
      target: "Initial Milestone",
      yield: "Base Royalty Stream",
      color: "#d4af37",
    },
    {
      icon: Crosshair,
      tier: "Intermediate Bracket",
      target: "Growth Milestone",
      yield: "Elevated Royalty Stream",
      color: "#f4d03f",
    },
    {
      icon: Crown,
      tier: "Peak Bracket",
      target: "Apex Milestone",
      yield: "Maximum Royalty Stream",
      color: "#f4d03f",
    },
  ];
  return (
    <div className="space-y-20 relative z-10">
      <div ref={ref}>
        <ScrollReveal variant="fade-up" className="text-center mb-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] border border-[#d4af37]/50 bg-[#6a0004]/60 px-3 py-1 mb-3">
            Block 01 — Network Depth
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
            Level Income Matrix
          </h3>
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            Expanding your organizational downline generates direct-to-wallet
            structural yields across multiple descending tiers — all{" "}
            <strong className="text-white">default-open upon activation</strong>{" "}
            with zero manual unlocks required.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {levels.map((lvl, i) => (
              <ScrollReveal
                key={lvl.tier}
                delay={i * 150}
                variant="fade-right"
                className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
              >
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end mb-2 gap-3 w-full">
                  <span className="text-xs sm:text-sm font-bold text-white flex flex-col sm:flex-row items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center bg-[#6a0004] border border-[#d4af37]/50 text-[#f4d03f] text-[10px] font-heading shrink-0 mx-auto sm:mx-0">
                      {lvl.tier}
                    </span>
                    <span className="font-heading uppercase tracking-wide">
                      {lvl.title}
                    </span>
                  </span>
                </div>
                <p className="text-xs text-white/60 mb-2 ml-0 sm:ml-10 text-center sm:text-left">
                  {lvl.desc}
                </p>
                <div className="h-2.5 w-full bg-[#2a0001] border border-[#d4af37]/40 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] transition-all ease-out relative"
                    style={{
                      width: inView ? `${lvl.width}%` : "0%",
                      transitionDuration: "1200ms",
                      transitionDelay: `${i * 200}ms`,
                    }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal
            delay={400}
            variant="fade-left"
            className="lg:col-span-2 flex flex-col items-center text-center p-6 sm:p-7 transition-colors group mx-auto w-full max-w-md lg:max-w-none relative"
            style={{
              background:
                "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />

            <Network
              size={32}
              className="text-[#f4d03f] mb-4 group-hover:scale-110 transition-transform duration-500"
            />
            <span className="font-heading text-xl sm:text-2xl text-white mb-2 uppercase">
              Direct-to-Wallet
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-3">
              Cumulative Yield Across Tiers
            </span>
            <p className="text-xs text-white/70 leading-relaxed">
              All structural levels activate the moment your account initializes
              — no restricted prerequisites, no manual gating.
            </p>
          </ScrollReveal>
        </div>
      </div>
      <div>
        <ScrollReveal variant="fade-up" className="text-center mb-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] border border-[#d4af37]/50 bg-[#6a0004]/60 px-3 py-1 mb-3">
            Block 02 — Performance Reward
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
            Royalty Brackets
          </h3>
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            Participants who demonstrate rapid scaling and fulfill stringent
            network growth targets unlock continuous royalty streams — all
            protected by a strict multiplier capping shield.
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          <div className="hidden sm:block absolute top-[39px] left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-[#6a0004]/30 via-[#d4af37]/60 to-[#6a0004]/30 z-0" />
          {royaltyBrackets.map((b, i) => (
            <ScrollReveal
              key={b.tier}
              delay={i * 180}
              variant="fade-up"
              className="relative z-10 flex flex-col items-center text-center h-full w-full max-w-[280px] sm:max-w-none mx-auto"
            >
              <div className="w-20 h-20 shrink-0 rounded-full bg-[#4a0003] border-2 border-[#d4af37] flex items-center justify-center mb-5 relative z-10 hover:scale-110 transition-all duration-500 group">
                <b.icon
                  size={28}
                  style={{ color: b.color }}
                  className="group-hover:rotate-12 transition-transform duration-500"
                />
              </div>
              <TiltCard
                className="p-5 w-full flex-grow flex flex-col justify-center transition-colors relative"
                style={{
                  background:
                    "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                }}
              >
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-2">
                  {b.tier}
                </span>
                <span className="block text-[11px] font-medium text-white/70 mb-4 uppercase tracking-widest">
                  {b.target}
                </span>
                <div className="inline-flex items-center justify-center w-full px-3 py-2 bg-[#2a0001]/80 border border-[#d4af37]/40 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#f4d03f]">
                    {b.yield}
                  </span>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          delay={400}
          variant="fade-up"
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 bg-[#4a0003] border border-[#d4af37]/50 px-5 py-4 max-w-xl mx-auto text-center sm:text-left"
        >
          <Lock size={18} className="text-[#f4d03f] shrink-0 mx-auto sm:mx-0" />
          <p className="text-xs sm:text-sm text-white/80 font-medium">
            All royalty brackets are governed by a{" "}
            <strong className="text-[#f4d03f]">multiplier capping limit</strong>{" "}
            — generation halts automatically when the predefined return multiple
            is achieved.
          </p>
        </ScrollReveal>
      </div>
      <div>
        <ScrollReveal variant="fade-up" className="text-center mb-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] border border-[#d4af37]/50 bg-[#6a0004]/60 px-3 py-1 mb-3">
            Block 03 — Exclusive Hierarchy
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
            Founder Core Team & Package Active Tiers
          </h3>
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            Two apex tiers reserved for the network's earliest and most
            disciplined builders — bound by strict capacity limits and balanced
            structural volume requirements.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <ScrollReveal delay={100} variant="fade-right">
            <TiltCard
              maxTilt={6}
              className="relative p-6 sm:p-8 overflow-hidden group transition-colors h-full flex flex-col items-center sm:items-start text-center sm:text-left"
              style={{
                background:
                  "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
              }}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

              <div className="relative z-10 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
                  <div className="w-14 h-14 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center group-hover:rotate-6 transition-transform mx-auto sm:mx-0 shrink-0">
                    <Briefcase size={24} className="text-[#f4d03f]" />
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-1">
                      Exclusive Rank
                    </span>
                    <h4 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-tight">
                      Founder Core Team
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  An exclusive tier reserved for top-performing network builders
                  who demonstrate balanced, sustained hierarchy growth across
                  multiple legs.
                </p>
                <ul className="space-y-2.5 flex flex-col items-center sm:items-start w-full">
                  {[
                    {
                      icon: Users,
                      label: "Strictly limited to first qualifiers",
                    },
                    {
                      icon: TrendingUp,
                      label: "Specific network volume threshold required",
                    },
                    {
                      icon: Scale,
                      label:
                        "Equally balanced leg distribution (Strong vs Other)",
                    },
                    {
                      icon: Sparkles,
                      label: "Rewards a set percentage of system deposits",
                    },
                  ].map((item, idx) => (
                    <li
                      key={item.label}
                      className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 text-sm text-white/70 hover:translate-x-1 transition-transform max-w-xs sm:max-w-none mx-auto sm:mx-0"
                      style={{ transitionDelay: `${idx * 30}ms` }}
                    >
                      <item.icon
                        size={15}
                        className="text-[#f4d03f] mt-0.5 shrink-0 mx-auto sm:mx-0"
                      />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal delay={200} variant="fade-left">
            <TiltCard
              maxTilt={6}
              className="relative p-6 sm:p-8 overflow-hidden group transition-colors h-full flex flex-col items-center sm:items-start text-center sm:text-left"
              style={{
                background:
                  "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
              }}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

              <div className="relative z-10 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-5">
                  <div className="w-14 h-14 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center group-hover:rotate-6 transition-transform mx-auto sm:mx-0 shrink-0">
                    <Crown size={24} className="text-[#f4d03f]" />
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-1">
                      Apex Rank
                    </span>
                    <h4 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-tight">
                      Founder Package Active
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  The absolute apex of the hierarchy — reserved strictly for the
                  foundational architects of the protocol managing monumental
                  volume commitments.
                </p>
                <ul className="space-y-2.5 flex flex-col items-center sm:items-start w-full">
                  {[
                    {
                      icon: Users,
                      label: "Ultra-rare fixed allocation of seats",
                    },
                    {
                      icon: TrendingUp,
                      label: "Apex-tier network volume requirement",
                    },
                    {
                      icon: Scale,
                      label: "Perfectly balanced matrix distribution",
                    },
                    {
                      icon: Sparkles,
                      label: "Exclusive yield percentage on every deposit",
                    },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 text-sm text-white/70 hover:translate-x-1 transition-transform max-w-xs sm:max-w-none mx-auto sm:mx-0"
                    >
                      <item.icon
                        size={15}
                        className="text-[#f4d03f] mt-0.5 shrink-0 mx-auto sm:mx-0"
                      />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   BenefitsGrid
   ============================================================ */
const BenefitsGrid: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Protocol-Level Safety",
      desc: "Capped exposure and immutable release logic eliminate runaway risk vectors.",
    },
    {
      icon: Zap,
      title: "Zero Friction Onboarding",
      desc: "Connect, verify, and deploy in a single sequence with no gatekeeping.",
    },
    {
      icon: InfinityIcon,
      title: "Perpetual Transparency",
      desc: "On-chain state and documented rules remain readable and auditable forever.",
    },
    {
      icon: Users,
      title: "Community Alignment",
      desc: "Reward mechanics favor sustained participants over short-term speculators.",
    },
    {
      icon: Gauge,
      title: "Predictable Mechanics",
      desc: "No surprise emissions — every release is scheduled, capped, and provable.",
    },
    {
      icon: Blocks,
      title: "Composable Architecture",
      desc: "Built to integrate cleanly with future dApps, dashboards, and third-party tools.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {benefits.map((b, i) => (
        <ScrollReveal
          key={b.title}
          delay={i * 100}
          variant="fade-up"
          className="h-full"
        >
          <TiltCard maxTilt={10} className="relative group h-full">
            <div
              className="h-full p-6 transition-all duration-300 relative overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left"
              style={{
                background:
                  "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
              }}
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />

              <Hexagon
                size={120}
                className="absolute -top-6 -right-6 text-[#d4af37]/5 group-hover:text-[#d4af37]/15 group-hover:rotate-45 transition-all duration-700"
                strokeWidth={1}
              />
              <div className="relative z-10 w-full">
                <div className="w-11 h-11 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center mb-4 group-hover:rotate-12 transition-all duration-500 mx-auto sm:mx-0">
                  <b.icon size={20} className="text-[#f4d03f]" />
                </div>
                <h4 className="text-sm sm:text-base font-heading uppercase tracking-wide text-[#f4d03f] mb-2">
                  {b.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      ))}
    </div>
  );
};

/* ============================================================
   FeaturesSplit
   ============================================================ */
const FeaturesSplit: React.FC = () => {
  const features = [
    {
      icon: Radar,
      title: "Real-Time Protocol Radar",
      desc: "Every structural event, release, and milestone is surfaced live on-chain. No delays, no sync lag — participants see what the contract sees, instantly.",
      bullets: [
        "Live state feed from source",
        "Automatic event signaling",
        "Fully verifiable timestamps",
      ],
    },
    {
      icon: Fingerprint,
      title: "Non-Custodial Workflow",
      desc: "Your wallet remains the single source of signing authority at every step. The platform never holds, routes, or intermediates your assets without explicit consent.",
      bullets: [
        "Wallet-signed every action",
        "No custodial intermediaries",
        "Direct contract interaction only",
      ],
    },
    {
      icon: Server,
      title: "Distributed, Resilient Infrastructure",
      desc: "Interface and data access layers run across geo-distributed nodes to ensure continuous availability — even under heavy global load spikes.",
      bullets: [
        "Multi-region redundancy",
        "Fault-tolerant failover",
        "High-throughput read layer",
      ],
    },
  ];
  return (
    <div className="space-y-16 lg:space-y-24 relative z-10">
      {features.map((f, i) => {
        const reverse = i % 2 === 1;
        return (
          <div
            key={f.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <ScrollReveal
              variant={reverse ? "fade-left" : "fade-right"}
              className="relative flex items-center justify-center"
            >
              <TiltCard
                maxTilt={12}
                className="relative w-full max-w-sm aspect-square group"
              >
                <div className="absolute inset-0 border border-[#d4af37]/40 rotate-3 group-hover:rotate-6 transition-transform duration-700" />
                <div className="absolute inset-0 border border-[#6a0004]/60 -rotate-3 group-hover:-rotate-6 transition-transform duration-700" />
                <div
                  className="absolute inset-6 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.5)",
                  }}
                >
                  <f.icon
                    size={100}
                    className="text-[#f4d03f] group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />
              </TiltCard>
            </ScrollReveal>
            <ScrollReveal
              variant={reverse ? "fade-right" : "fade-left"}
              delay={200}
              className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 sm:p-8 relative"
              style={{
                background:
                  "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
              }}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4d03f] mb-3 mx-auto lg:mx-0">
                Feature {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4 leading-tight">
                {f.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                {f.desc}
              </p>
              <ul className="space-y-3 flex flex-col items-center lg:items-start w-full">
                {f.bullets.map((b, idx) => (
                  <ScrollReveal
                    key={b}
                    delay={300 + idx * 100}
                    variant="fade-right"
                    className="w-full"
                  >
                    <li className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 text-sm text-white/90 hover:translate-x-1 transition-transform w-full max-w-sm sm:max-w-none mx-auto lg:mx-0">
                      <CheckCircle2
                        size={16}
                        className="text-[#f4d03f] mt-0.5 shrink-0 mx-auto sm:mx-0"
                      />
                      <span>{b}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        );
      })}
    </div>
  );
};

/* ============================================================
   RoadmapTimeline
   ============================================================ */
const RoadmapTimeline: React.FC = () => {
  const phases = [
    {
      phase: "Phase I",
      title: "Foundation & Deployment",
      status: "Completed",
      desc: "Core smart contract framework finalized. Security hardening complete, bootstrap community verified, initial infrastructure deployed.",
    },
    {
      phase: "Phase II",
      title: "Community Expansion",
      status: "In Progress",
      desc: "Public access dashboard, onboarding flow refinements, early participant recruitment, live hierarchy monitoring rollout.",
    },
    {
      phase: "Phase III",
      title: "Ecosystem Integrations",
      status: "Upcoming",
      desc: "Expansion into cross-chain compatible frameworks, strategic auxiliary asset integrations, extended analytics layers, SDK release.",
    },
    {
      phase: "Phase IV",
      title: "Governance Handoff",
      status: "Planned",
      desc: "Progressive transition toward community-led parameter stewardship through immutable governance primitives and open proposal framework.",
    },
  ];
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37]/60 to-transparent -translate-x-1/2" />
      <div className="space-y-12 md:space-y-16">
        {phases.map((p, i) => {
          const isLeft = i % 2 === 0;
          return (
            <ScrollReveal
              key={p.phase}
              delay={i * 150}
              variant={isLeft ? "fade-right" : "fade-left"}
              className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div
                className={`w-full md:w-1/2 pt-10 md:pt-0 flex flex-col items-center md:items-${isLeft ? "end" : "start"} text-center md:text-${isLeft ? "right" : "left"} px-4 md:px-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-2 px-2 py-1 border border-[#d4af37]/50 bg-[#6a0004]/60 text-[#f4d03f] mx-auto md:mx-0">
                  {p.status}
                </span>
                <h4 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                  {p.phase}: {p.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-md md:max-w-none">
                  {p.desc}
                </p>
              </div>
              <div className="absolute top-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 mb-4 md:mb-0">
                <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#d4af37] bg-[#4a0003] hover:scale-125 transition-transform cursor-pointer">
                  <span className="w-2 h-2 rounded-full bg-[#f4d03f] animate-pulse" />
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

/* ============================================================
   TechStack
   ============================================================ */
const TechStack: React.FC = () => {
  const tech = [
    {
      icon: Code2,
      name: "Immutable Contracts",
      desc: "Battle-tested Solidity codebase with upgrade-path safeguards and verified deployment traces.",
    },
    {
      icon: Cpu,
      name: "Deterministic Logic",
      desc: "All reward distribution, caps, and release mechanisms are mathematically deterministic and testable.",
    },
    {
      icon: GitBranch,
      name: "Open Source Spirit",
      desc: "Core contract logic is transparently published, version-tracked, and openly reviewable at any time.",
    },
    {
      icon: Server,
      name: "Hardened Infrastructure",
      desc: "Fault-tolerant node clusters serve the user interface with regional redundancy and failover.",
    },
    {
      icon: Fingerprint,
      name: "Signature-Based Flow",
      desc: "Every action requires cryptographic signature from the user's non-custodial wallet.",
    },
    {
      icon: Lock,
      name: "Zero Admin Backdoors",
      desc: "No privileged mint, pause, or seize functions — the protocol runs purely under published rules.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {tech.map((t, i) => (
        <ScrollReveal key={t.name} delay={i * 80} variant="fade-up">
          <TiltCard
            className="group relative p-5 sm:p-6 transition-all h-full overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left"
            style={{
              background:
                "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-3 relative z-10 w-full">
              <div className="w-10 h-10 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-all duration-500 mx-auto sm:mx-0">
                <t.icon size={18} className="text-[#f4d03f]" />
              </div>
              <h4 className="font-heading text-sm sm:text-base text-[#f4d03f] uppercase tracking-wide">
                {t.name}
              </h4>
            </div>
            <p className="text-xs text-white/70 font-medium leading-relaxed relative z-10">
              {t.desc}
            </p>
          </TiltCard>
        </ScrollReveal>
      ))}
    </div>
  );
};

/* ============================================================
   SecurityLayers
   ============================================================ */
const SecurityLayers: React.FC = () => {
  const layers = [
    {
      icon: ShieldCheck,
      title: "Smart Contract Audit",
      desc: "Independent third-party review passes on all deployed logic before release.",
    },
    {
      icon: Lock,
      title: "Immutable Parameters",
      desc: "Reward rules and caps cannot be modified post-deployment under any circumstance.",
    },
    {
      icon: Fingerprint,
      title: "Non-Custodial by Design",
      desc: "No central operator ever gains write access to member wallets or balances.",
    },
    {
      icon: Radar,
      title: "Continuous Monitoring",
      desc: "On-chain anomaly detection and public event signaling ensure early visibility.",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center relative z-10">
      <ScrollReveal
        variant="fade-right"
        className="lg:col-span-2 flex justify-center"
      >
        <div className="relative w-64 h-64 flex items-center justify-center group">
          <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-4 rounded-full border border-[#6a0004]/40 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-10 rounded-full border border-[#d4af37]/40" />
          <div className="absolute inset-16 rounded-full border border-[#6a0004]/60 animate-[spin_18s_linear_infinite]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f4d03f]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#8a0005]" />
          </div>
          <div className="relative z-10 w-24 h-24 rounded-full bg-[#4a0003] border-2 border-[#d4af37] flex items-center justify-center">
            <ShieldCheck
              size={44}
              className="text-[#f4d03f] group-hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </ScrollReveal>
      <div className="lg:col-span-3 space-y-4 flex flex-col items-center lg:items-start w-full">
        {layers.map((l, i) => (
          <ScrollReveal
            key={l.title}
            delay={i * 120}
            variant="fade-left"
            className="w-full"
          >
            <TiltCard
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 sm:p-5 transition-colors group w-full max-w-md lg:max-w-none mx-auto lg:mx-0 relative"
              style={{
                background:
                  "linear-gradient(135deg, #6a0004 0%, #4a0003 50%, #2a0001 100%)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
              }}
            >
              <div className="w-11 h-11 bg-[#8a0005]/80 border border-[#d4af37]/50 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-all mx-auto sm:mx-0">
                <l.icon size={20} className="text-[#f4d03f]" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h4 className="font-heading text-sm sm:text-base text-[#f4d03f] uppercase tracking-wide mb-1">
                  {l.title}
                </h4>
                <p className="text-xs text-white/80 font-medium leading-relaxed">
                  {l.desc}
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   StatsBanner
   ============================================================ */
const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: Globe,
      label: "Global Reach",
      value: "Worldwide Access",
      desc: "Open to participants across every supported region.",
    },
    {
      icon: Flag,
      label: "Active Hierarchy",
      value: "Expanding Network",
      desc: "Downline participation grows across every active tier.",
    },
    {
      icon: Award,
      label: "Protocol Discipline",
      value: "Fully Rule-Governed",
      desc: "Every reward sequence runs under immutable logic.",
    },
    {
      icon: HeartHandshake,
      label: "Community Alignment",
      value: "Member-First",
      desc: "Built around sustained participants, not short-term exits.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
      {stats.map((s, i) => (
        <ScrollReveal key={s.label} delay={i * 120} variant="fade-up">
          <TiltCard
            className="relative p-5 sm:p-6 group transition-colors h-full overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left"
            style={{
              background:
                "linear-gradient(135deg, #6a0004 0%, #4a0003 40%, #3d0002 70%, #2a0001 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />

            <s.icon
              size={22}
              className="text-[#f4d03f] mb-3 group-hover:scale-110 transition-transform duration-500 relative z-10 mx-auto sm:mx-0"
            />
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-1 relative z-10">
              {s.label}
            </span>
            <span className="block font-heading text-base sm:text-xl text-white uppercase tracking-tight mb-2 relative z-10">
              {s.value}
            </span>
            <p className="text-[11px] text-white/70 font-medium leading-relaxed relative z-10">
              {s.desc}
            </p>
          </TiltCard>
        </ScrollReveal>
      ))}
    </div>
  );
};

/* ============================================================
   PartnersStrip
   ============================================================ */
const PartnersStrip: React.FC = () => {
  const partners = [
    "Arma Network",
    "Goldex",
    "Finvora",
    "Rue Protocol",
    "BELDEX",
    "BnB Chain",
    "Solana",
    "Audit Partner Alpha",
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-r from-[#1a0001] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-l from-[#1a0001] to-transparent z-10" />
      <div className="flex w-max gap-6 animate-mintora-marquee-slow">
        {[...partners, ...partners].map((p, i) => (
          <div
            key={i}
            className="shrink-0 px-6 sm:px-10 py-5 border border-[#d4af37]/40 bg-[#4a0003] flex items-center justify-center min-w-[200px] hover:border-[#f4d03f] hover:bg-[#6a0004] transition-colors cursor-default group"
          >
            <span className="font-heading text-sm sm:text-base text-white/80 uppercase tracking-widest group-hover:text-[#f4d03f] transition-colors">
              {p}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   ProcessTimeline
   ============================================================ */
const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Platform",
      desc: "Link any secure Web3 environment to access the interface.",
    },
    {
      icon: Target,
      title: "Select Framework",
      desc: "Choose from multiple deployment packages suited to your goals.",
    },
    {
      icon: Activity,
      title: "Configure Strategy",
      desc: "Deploy via a single stable asset or diversify with a dual token split.",
    },
    {
      icon: TrendingUp,
      title: "Initiate Yield",
      desc: "Earn automated daily distributions directed straight to your wallet.",
    },
    {
      icon: Network,
      title: "Expand Hierarchy",
      desc: "Grow your structural downline to unlock tier progression and royalties.",
    },
  ];
  return (
    <div className="relative z-10">
      <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
        {steps.map((s, i) => (
          <ScrollReveal
            key={s.title}
            delay={i * 150}
            variant="fade-up"
            className="relative flex flex-col items-center text-center group"
          >
            <div className="relative z-10 w-16 h-16 rounded-full bg-[#4a0003] border-2 border-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500">
              <s.icon
                size={24}
                className="text-[#f4d03f] group-hover:rotate-12 transition-transform"
              />
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#f4d03f] text-[#3d0002] text-[10px] font-heading flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#f4d03f] mb-2">
              {s.title}
            </h4>
            <p className="text-xs text-white/80 font-medium leading-relaxed max-w-[200px]">
              {s.desc}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   FAQSection
   ============================================================ */
const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "What makes Mintora different from other platforms?",
      a: "Mintora enforces every rule — caps, releases, hierarchy mechanics — through immutable on-chain logic. There are no admin keys, no hidden emissions, and no retroactive parameter changes.",
    },
    {
      q: "Is my wallet ever at risk of custody loss?",
      a: "No. The protocol is fully non-custodial. Every transaction requires explicit signing from your wallet, and no central organization ever receives or holds your assets.",
    },
    {
      q: "How does the dual-strategy deposit work?",
      a: "Participants choose between a single-asset route (full deployment in the stable network) or a dual-asset split (balanced between stable and a supported auxiliary token). The auxiliary token is staked to release daily while deducting from the principal.",
    },
    {
      q: "Are structural level rewards instantly active?",
      a: "Yes. All three structural levels (primary, secondary, and tertiary) are default-open the moment your account initializes. No separate unlock sequence is enforced.",
    },
    {
      q: "What governs the Royalty bracket payout limits?",
      a: "Every verified royalty bracket is protected by a strict multiplier capping limit. Yield generation halts automatically once the predefined return limit is reached.",
    },
    {
      q: "What distinguishes the Founder Core Team and Package Active tiers?",
      a: "Both represent the highest echelons of the hierarchy. They demand significant, equally-balanced volume thresholds and maintain permanently fixed capacity limits — rewarding the earliest qualifiers.",
    },
    {
      q: "What happens after sequential slabs are completed?",
      a: "Completion of consecutive operational slabs triggers a predetermined release of a fraction of the collected pool back into the ecosystem, reinforcing sustained, milestone-driven growth.",
    },
    {
      q: "Which auxiliary assets does the platform currently support?",
      a: "The platform supports a curated roster of verified auxiliary networks for dual-asset deployments. New integrations are only approved after explicit protocol-level review.",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((f, i) => (
        <ScrollReveal key={f.q} delay={i * 80} variant="fade-up">
          <div
            className={`border transition-all duration-300 relative overflow-hidden ${
              open === i
                ? "border-[#f4d03f] bg-[#4a0003]"
                : "border-[#d4af37]/40 bg-[#2a0001]/80 hover:border-[#d4af37]"
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer group"
            >
              <span
                className={`text-sm sm:text-base font-bold tracking-wide transition-colors ${
                  open === i
                    ? "text-[#f4d03f]"
                    : "text-white group-hover:text-[#f4d03f]"
                }`}
              >
                {f.q}
              </span>
              <div
                className={`w-7 h-7 flex items-center justify-center border transition-all duration-300 shrink-0 ${
                  open === i
                    ? "border-[#f4d03f] bg-[#6a0004] rotate-180"
                    : "border-[#d4af37]/50 bg-[#3d0002] group-hover:border-[#f4d03f]"
                }`}
              >
                <ChevronDown
                  size={14}
                  className={open === i ? "text-[#f4d03f]" : "text-[#d4af37]"}
                />
              </div>
            </button>
            <div
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-xs sm:text-sm text-white/70 font-medium leading-relaxed text-left border-t border-[#d4af37]/20 pt-3">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

/* ============================================================
   MAIN: Landing
   ============================================================ */
const Landing: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const navLinks = useMemo(
    () => [
      { label: "About", id: "about" },
      { label: "Mission", id: "mission" },
      { label: "Strategy", id: "strategy" },
      { label: "Income", id: "income" },
      { label: "Benefits", id: "benefits" },
      { label: "Features", id: "features" },
      { label: "Roadmap", id: "roadmap" },
      { label: "Security", id: "security" },
      { label: "FAQ", id: "faq" },
    ],
    [],
  );

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileNavOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="flex h-[100dvh] w-full text-white font-base overflow-hidden selection:bg-[#6a0004]/40 selection:text-[#f4d03f] relative"
      style={{
        background:
          "radial-gradient(ellipse at top, #1a0001 0%, #0d0000 40%, #050000 70%, #1d0000 100%)",
      }}
    >
      <style>{`
        @keyframes mintora-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-mintora-marquee { animation: mintora-marquee 32s linear infinite; }
        .animate-mintora-marquee-slow { animation: mintora-marquee 50s linear infinite; }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2.5s infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
        @keyframes scan-vertical { 0% { top: -5%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 105%; opacity: 0; } }
        @keyframes particle-rise { 0% { transform: translateY(0) translateX(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh) translateX(30px); opacity: 0; } }
        @keyframes radar-pulse { 0% { transform: scale(0.3); opacity: 0.8; border-color: rgba(212,175,55,0.6); } 100% { transform: scale(3); opacity: 0; border-color: rgba(212,175,55,0); } }
        @keyframes orb-float-0 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(50px, -40px) scale(1.1); } 66% { transform: translate(-30px, 30px) scale(0.95); } }
        @keyframes orb-float-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-60px, 40px) scale(1.15); } }
        @keyframes orb-float-2 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(-40px, -50px) scale(0.9); } 66% { transform: translate(40px, 20px) scale(1.1); } }
        @keyframes orb-float-3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(70px, -30px) scale(1.2); } }
        @keyframes orb-float-4 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-50px, 50px) scale(0.95); } }
        @keyframes core-drift { 0%, 100% { transform: perspective(1500px) rotateY(-5deg) rotateX(5deg) translateY(0px); } 50% { transform: perspective(1500px) rotateY(5deg) rotateX(-5deg) translateY(-15px); } }
        @keyframes ring-drift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-15px, 10px); } }
        @keyframes income-beam { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(200vh); opacity: 0; } }
        @keyframes income-scan { 0%, 100% { top: 10%; opacity: 0; } 10% { opacity: 1; } 50% { top: 90%; opacity: 1; } 90% { opacity: 0; } }
        @keyframes mesh-pan { 0% { background-position: 0 0; } 100% { background-position: 56px 98px; } }
      `}</style>

      <AnimatedBackground />
      <div className="camo-overlay" />
      <GlowingDots />
      <ScrollProgress target={scrollContainerRef} />
      <BackToTop target={scrollContainerRef} />

      <div
        ref={scrollContainerRef}
        className="flex-1 h-full overflow-y-auto overflow-x-hidden relative z-10 w-full scroll-smooth"
        style={{
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorY: "contain",
        }}
      >
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-8 pointer-events-none">
          <nav
            className="pointer-events-auto w-full max-w-[1500px] backdrop-blur-xl border border-[#d4af37]/40 rounded-2xl sm:rounded-full py-2 px-3 sm:px-4 flex items-center justify-between relative group/nav transition-all duration-500 hover:border-[#f4d03f]"
            style={{
              background:
                "linear-gradient(90deg, rgba(42,0,1,0.92) 0%, rgba(26,0,1,0.92) 50%, rgba(42,0,1,0.92) 100%)",
            }}
          >
            <div className="flex items-center pl-1 sm:pl-2 relative z-10 cursor-pointer">
              <img
                src={mintoraLogo}
                alt="Mintora"
                className="h-7 sm:h-12 w-auto object-contain transition-all duration-300"
              />
            </div>

            <div className="hidden lg:flex items-center gap-1 bg-[#2a0001]/80 rounded-full px-2 py-1.5 border border-[#d4af37]/30 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="group/link relative px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-[#f4d03f] transition-colors overflow-hidden rounded-full"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-[#6a0004]/60 translate-y-[100%] group-hover/link:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#f4d03f] to-transparent group-hover/link:w-3/4 transition-all duration-300 ease-out opacity-0 group-hover/link:opacity-100" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 pr-1 sm:pr-2 relative z-10">
              <MagneticButton
                onClick={() =>
                  (window.location.href = "https://www.nft.mintora.org/")
                }
                className="group/btn hidden sm:flex items-center gap-2.5 bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#d4af37] hover:from-[#f4d03f] hover:via-[#d4af37] hover:to-[#f4d03f] border border-[#f4d03f] px-6 py-3 rounded-full transition-all duration-300 cursor-pointer overflow-hidden relative"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#3d0002] relative z-10">
                  Launch App
                </span>
              </MagneticButton>

              <button
                onClick={() => setMobileNavOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-[#d4af37]/50 bg-[#4a0003] text-[#f4d03f] cursor-pointer hover:border-[#f4d03f] transition-all"
              >
                {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          {mobileNavOpen && (
            <div className="absolute top-[110%] w-full max-w-[calc(100vw-2rem)] lg:hidden pointer-events-auto">
              <div
                className="backdrop-blur-xl border border-[#d4af37]/50 rounded-2xl p-3 flex flex-col gap-1 animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-300 origin-top"
                style={{
                  background:
                    "linear-gradient(135deg, #4a0003 0%, #2a0001 100%)",
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      handleNavClick(e, link.id);
                      setMobileNavOpen(false);
                    }}
                    className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/80 hover:text-[#f4d03f] hover:bg-[#6a0004]/60 hover:translate-x-1 transition-all px-4 py-3.5 rounded-xl group"
                  >
                    {link.label}
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#f4d03f]">
                      →
                    </span>
                  </a>
                ))}

                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent my-2" />

                <button
                  onClick={() => (window.location.href = "/dashboard")}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#d4af37] border border-[#f4d03f] rounded-xl px-4 py-3.5 cursor-pointer transition-colors"
                >
                  <Terminal size={14} className="text-[#3d0002]" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3d0002]">
                    Access Dashboard
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        <AdvancedHero handleNavClick={handleNavClick} />

        <TickerStrip />

        <section className="relative w-full py-16 sm:py-20 bg-[#1a0001]/60 backdrop-blur-sm">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <PillarsRow />
          </div>
        </section>

        <section
          id="about"
          className="relative w-full py-20 sm:py-28 scroll-mt-16 sm:scroll-mt-20"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            <SectionHeading
              eyebrow="Who We Are"
              title="About Mintora"
              desc="A rules-first framework, engineered for participants who refuse to depend on blind trust."
            />
            <AboutSection />
          </div>
        </section>

        <section className="relative w-full py-20 sm:py-28 border-y border-[#d4af37]/30 overflow-hidden">
          <IncomeSectionBackground />
          <LazyMount>
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Protocol Signals"
                title="At A Glance"
                desc="A quick snapshot of the forces that define the Mintora operating environment."
              />
              <StatsBanner />
            </div>
          </LazyMount>
        </section>

        <section
          id="mission"
          className="relative w-full py-20 sm:py-28 scroll-mt-16 sm:scroll-mt-20"
        >
          <LazyMount>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Direction"
                title="Mission & Vision"
                desc="Two anchors that guide every architectural decision inside the protocol."
              />
              <MissionVision />
            </div>
          </LazyMount>
        </section>

        <section
          id="strategy"
          className="relative w-full py-20 sm:py-28 scroll-mt-16 sm:scroll-mt-20"
        >
          <LazyMount>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Business Logic 02"
                title="Deposit Strategies"
                desc="Two structured deployment routes, six operational packages, and a curated supported-asset roster — users choose their own path."
              />
              <DepositStrategies />
            </div>
          </LazyMount>
        </section>

        <section
          id="income"
          className="relative w-full py-20 sm:py-28 border-y border-[#d4af37]/30 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
        >
          <IncomeSectionBackground />
          <LazyMount>
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Business Logic 03"
                title="Income & Hierarchy Structure"
                desc="Three integrated reward blocks — structural level income, performance-based royalty brackets, and the apex Founder Core Team & Package Active architecture."
              />
              <IncomeHierarchy />
            </div>
          </LazyMount>
        </section>

        <section
          id="benefits"
          className="relative w-full py-20 sm:py-28 scroll-mt-16 sm:scroll-mt-20"
        >
          <LazyMount>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Why Mintora"
                title="Participant Benefits"
                desc="Advantages designed into the protocol from the ground up — not patched in afterwards."
              />
              <BenefitsGrid />
            </div>
          </LazyMount>
        </section>

        <section
          id="features"
          className="relative w-full py-20 sm:py-28 border-y border-[#d4af37]/30 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
        >
          <IncomeSectionBackground />
          <LazyMount>
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Capabilities"
                title="Core Features"
                desc="A set of carefully-engineered systems that define how Mintora operates on-chain."
              />
              <FeaturesSplit />
            </div>
          </LazyMount>
        </section>

        <section className="relative w-full py-20 sm:py-28">
          <LazyMount>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Under The Hood"
                title="Technology Stack"
                desc="The deliberate engineering choices that keep the Mintora framework resilient, open, and discipline-driven."
              />
              <TechStack />
            </div>
          </LazyMount>
        </section>

        <section className="relative w-full py-20 sm:py-28 border-y border-[#d4af37]/30 overflow-hidden">
          <IncomeSectionBackground />
          <LazyMount>
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Operational Flow"
                title="Engagement Sequence"
                desc="From first verification to active hierarchy expansion — the complete participation loop."
              />
              <ProcessTimeline />
            </div>
          </LazyMount>
        </section>

        <section
          id="roadmap"
          className="relative w-full py-20 sm:py-28 scroll-mt-16 sm:scroll-mt-20"
        >
          <LazyMount>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Mission Timeline"
                title="Protocol Roadmap"
                desc="A phased deployment plan — focused on durability, extensibility, and progressive decentralization."
              />
              <RoadmapTimeline />
            </div>
          </LazyMount>
        </section>

        <section
          id="security"
          className="relative w-full py-20 sm:py-28 border-y border-[#d4af37]/30 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
        >
          <IncomeSectionBackground />
          <LazyMount>
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Defensive Posture"
                title="Security Architecture"
                desc="Multiple reinforced layers combine to keep participant capital and protocol integrity secure."
              />
              <SecurityLayers />
            </div>
          </LazyMount>
        </section>

        <section className="relative w-full py-20 sm:py-24 bg-[#1a0001]/60 backdrop-blur-sm border-y border-[#d4af37]/30">
          <LazyMount>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Alliances"
                title="Partners & Integrations"
                desc="Trusted ecosystems and auxiliary networks that extend the Mintora reach."
              />
              <PartnersStrip />
            </div>
          </LazyMount>
        </section>

        <section
          id="faq"
          className="relative w-full py-20 sm:py-28 scroll-mt-16 sm:scroll-mt-20"
        >
          <LazyMount>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <SectionHeading
                eyebrow="Information Brief"
                title="Frequently Asked"
                desc="Answers to the most common questions about the protocol framework."
              />
              <FAQSection />
            </div>
          </LazyMount>
        </section>

        <footer className="relative border-t border-[#d4af37]/40 bg-[#1a0001]/90 backdrop-blur-sm py-8 sm:py-12 z-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-8 pb-8 border-b border-[#d4af37]/30">
              <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <img
                    src={mintoraLogo}
                    alt="Mintora"
                    className="h-15 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-white/60 font-medium leading-relaxed max-w-sm">
                  A rules-governed yield platform built around transparency,
                  scarcity, and community-first mechanics.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h5 className="text-xs font-bold uppercase tracking-widest text-[#f4d03f] mb-4">
                  Explore
                </h5>
                <ul className="space-y-2 flex flex-col items-center md:items-start">
                  {["About", "Supply", "Strategy", "Income", "Roadmap"].map(
                    (l) => (
                      <li key={l}>
                        <a
                          href={`#${l.toLowerCase()}`}
                          className="text-xs text-white/60 hover:text-[#f4d03f] hover:translate-x-1 inline-block transition-all font-medium uppercase tracking-wider"
                        >
                          {l}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h5 className="text-xs font-bold uppercase tracking-widest text-[#f4d03f] mb-4">
                  Resources
                </h5>
                <ul className="space-y-2 flex flex-col items-center md:items-start">
                  {[
                    "Documentation",
                    "Audit Reports",
                    "Status Log",
                    "Contact",
                  ].map((l) => (
                    <li key={l}>
                      <a className="text-xs text-white/60 hover:text-[#f4d03f] hover:translate-x-1 inline-block transition-all font-medium uppercase tracking-wider cursor-pointer">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
