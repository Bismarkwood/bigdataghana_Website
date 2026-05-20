import React from "react";

interface SectionDividerProps {
  type?: "wave" | "slant" | "curve";
  color?: string;
  position?: "top" | "bottom";
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  type = "wave",
  color = "fill-white dark:fill-black",
  position = "bottom",
  className = "",
}) => {
  const isTop = position === "top";

  const renderShape = () => {
    switch (type) {
      case "wave":
        return (
          <svg
            viewBox="0 0 1440 320"
            className={`w-full h-auto ${color}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        );
      case "slant":
        return (
          <svg
            viewBox="0 0 1440 120"
            className={`w-full h-auto ${color}`}
            preserveAspectRatio="none"
          >
            <path d="M0,120 L1440,0 L1440,120 L0,120 Z"></path>
          </svg>
        );
      case "curve":
        return (
          <svg
            viewBox="0 0 1440 120"
            className={`w-full h-auto ${color}`}
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-[0] ${
        isTop ? "top-0 rotate-180" : "bottom-0"
      } ${className}`}
      style={{ zIndex: 1 }}
    >
      {renderShape()}
    </div>
  );
};

export default SectionDivider;
