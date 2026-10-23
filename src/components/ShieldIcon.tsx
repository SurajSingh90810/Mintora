const ShieldIcon: React.FC<{
  icon: React.ReactNode;
  active?: boolean;
  className?: string;
}> = ({ icon, active, className = "w-10 h-[46px] sm:w-12 sm:h-[54px]" }) => (
  <div
    className={`relative flex items-center justify-center transition-all duration-300 shrink-0 ${className}`}
  >
    {/* Outer Hexagon (Border Layer) */}
    <div
      className={`absolute inset-0 transition-all duration-300 ${
        active
          ? "bg-gradient-to-br from-[#f88f4b] to-[#b7410e]"
          : "bg-[#4a433a]"
      }`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    />

    {/* Inner Hexagon (Background Layer) */}
    <div
      className={`absolute inset-[1.5px] transition-all duration-300 flex items-center justify-center ${
        active
          ? "bg-gradient-to-b from-[#d6621a] to-[#8a380b]"
          : "bg-gradient-to-b from-[#2a2622] to-[#15120f]"
      }`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    />

    {/* Icon Wrapper */}
    <div
      className={`relative z-10 flex items-center justify-center transition-all duration-300 ${
        active ? "text-white" : "text-[#8c8273]"
      }`}
    >
      {icon}
    </div>
  </div>
);

export default ShieldIcon