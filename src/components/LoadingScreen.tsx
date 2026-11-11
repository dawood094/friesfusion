import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // High-precision smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth non-linear acceleration
        const increment = prev < 30 ? 4 : prev < 70 ? 6 : prev < 90 ? 10 : 15;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 300);

      const hideTimer = setTimeout(() => {
        setIsHidden(true);
        if (onFinish) onFinish();
      }, 800);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress, onFinish]);

  if (isHidden) return null;

  const getStatusText = (p: number) => {
    if (p < 35) return "CALIBRATING COLD STORAGE";
    if (p < 75) return "PREPARING UNIFORM CUTS";
    return "READY FOR GOLDEN CRUNCH";
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1E0F0A] text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFading
          ? "opacity-0 scale-105 blur-md pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      aria-label="Loading Fries Fusion"
      role="status"
    >
      {/* Ambient background light gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,201,40,0.14)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF861C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Top-Notch Modern Animated Fry Cuts Geometric Engine */}
        <div className="relative w-28 h-36 mb-8 flex items-end justify-center">
          {/* Subtle golden ambient glow behind fries */}
          <div className="absolute inset-0 bg-[#FFC928]/15 rounded-2xl blur-xl animate-pulse" />

          {/* Minimalist modern Fry Box / Wireframe Envelope */}
          <svg
            className="w-24 h-32 overflow-visible"
            viewBox="0 0 100 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="fryGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2A7" />
                <stop offset="45%" stopColor="#FFC928" />
                <stop offset="100%" stopColor="#FF861C" />
              </linearGradient>
              <linearGradient id="fryBoxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3A1C12" />
                <stop offset="100%" stopColor="#25120B" />
              </linearGradient>
            </defs>

            {/* Precision Cut Golden Fries (Staggered modern smooth slide-up) */}
            {/* Fry 1 */}
            <rect
              x="16"
              y="18"
              width="9"
              height="75"
              rx="4.5"
              fill="url(#fryGold)"
              className="origin-bottom transition-all duration-500 ease-out"
              style={{
                transform: `scaleY(${Math.min(1, Math.max(0.15, progress / 70))})`,
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
              }}
            />
            {/* Fry 2 */}
            <rect
              x="29"
              y="8"
              width="9"
              height="85"
              rx="4.5"
              fill="url(#fryGold)"
              className="origin-bottom transition-all duration-500 ease-out"
              style={{
                transform: `scaleY(${Math.min(1, Math.max(0.2, (progress + 10) / 80))})`,
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
              }}
            />
            {/* Fry 3 (Center Tallest) */}
            <rect
              x="42"
              y="0"
              width="10"
              height="94"
              rx="5"
              fill="url(#fryGold)"
              className="origin-bottom transition-all duration-500 ease-out"
              style={{
                transform: `scaleY(${Math.min(1, Math.max(0.25, (progress + 20) / 90))})`,
                filter: "drop-shadow(0 2px 6px rgba(255,201,40,0.3))",
              }}
            />
            {/* Fry 4 */}
            <rect
              x="56"
              y="10"
              width="9"
              height="84"
              rx="4.5"
              fill="url(#fryGold)"
              className="origin-bottom transition-all duration-500 ease-out"
              style={{
                transform: `scaleY(${Math.min(1, Math.max(0.2, (progress + 15) / 85))})`,
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
              }}
            />
            {/* Fry 5 */}
            <rect
              x="69"
              y="22"
              width="9"
              height="72"
              rx="4.5"
              fill="url(#fryGold)"
              className="origin-bottom transition-all duration-500 ease-out"
              style={{
                transform: `scaleY(${Math.min(1, Math.max(0.15, progress / 75))})`,
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
              }}
            />

            {/* Sleek Minimalist Fry Packaging Front Shell */}
            <path
              d="M10 50 L20 120 L80 120 L90 50 C75 58 55 45 50 48 C45 45 25 58 10 50 Z"
              fill="url(#fryBoxGrad)"
              stroke="#FFC928"
              strokeWidth="1.2"
              strokeOpacity="0.5"
              className="drop-shadow-lg"
            />

            {/* Minimalist geometric brand accent on pouch */}
            <circle cx="50" cy="85" r="7" fill="#FF861C" fillOpacity="0.3" stroke="#FFC928" strokeWidth="1" />
            <path d="M47 85 L53 85 M50 82 L50 88" stroke="#FFE082" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Brand Typography */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] tracking-[0.25em] text-white uppercase">
            Fries <span className="text-[#FFC928]">Fusion</span>
          </h2>
          <span className="text-[10px] font-semibold tracking-[0.3em] text-[#FF861C] uppercase mt-1">
            Freshness Meets Crunch
          </span>
        </div>

        {/* Dynamic Status Text */}
        <div className="h-5 mb-4 flex items-center justify-center">
          <span className="text-[11px] font-mono tracking-widest text-white/70 uppercase">
            {getStatusText(progress)}
          </span>
        </div>

        {/* Precision Modern Progress Line */}
        <div className="w-52 h-[3px] bg-white/10 rounded-full overflow-hidden relative mb-2.5">
          <div
            className="h-full bg-gradient-to-r from-[#FFC928] via-[#FF861C] to-[#E63825] transition-all duration-150 ease-out rounded-full shadow-[0_0_8px_rgba(255,201,40,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Minimal Monospace Percentage */}
        <div className="flex items-center justify-between w-52 text-[10px] font-mono text-white/40 tabular-nums">
          <span>KARACHI</span>
          <span className="text-[#FFC928] font-bold">{progress}%</span>
          <span>EST. 2026</span>
        </div>

        {/* Subtle Skip Action */}
        <button
          onClick={() => {
            setIsFading(true);
            setTimeout(() => {
              setIsHidden(true);
              if (onFinish) onFinish();
            }, 300);
          }}
          className="mt-6 text-[10px] tracking-wider uppercase text-white/35 hover:text-white/80 transition-colors cursor-pointer py-1 px-3 rounded-full border border-white/10 hover:border-white/30"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
};
