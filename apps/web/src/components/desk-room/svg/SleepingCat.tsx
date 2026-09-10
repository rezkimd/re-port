import React, { useState } from "react";
import { useTheme } from "@/components/theme-provider";

interface SleepingCatProps {
  x?: number;
  y?: number;
  scale?: number;
}

export const SleepingCat: React.FC<SleepingCatProps> = ({
  x = 1630,
  y = 595,
  scale = 1.05,
}) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const isDark = resolvedTheme === "dark";

  // Toggle theme on clicking the sleeping cat
  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Shared exact vector path for the dangling tail (Smooth, clean U-hook curve)
  const tailPath = "M 48,80 L 48,114 C 48,142 58,150 76,150 C 94,150 104,138 104,116 L 104,96";

  // Shared exact vector path for the body (Head, ears, curved back)
  const bodyPath = `
    M 42,80
    C 42,46 68,36 105,36
    L 110,36
    L 126,14
    L 144,32
    C 152,35 162,35 170,32
    L 188,14
    L 202,36
    C 208,46 210,60 210,80
    Z
  `;

  // Shared exact vector path for the dangling front paw
  const pawPath = "M 148,80 L 148,106 C 148,118 166,118 166,106 L 166,80 Z";

  return (
    <g
      id="sleeping-desk-cat"
      transform={`translate(${x}, ${y}) scale(${scale})`}
      className="cursor-pointer group select-none"
      onClick={handleToggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contact Ambient Shadow under cat body & tail */}
      <g opacity={isDark ? "0.3" : "0.45"} filter="url(#softDropShadow)">
        <ellipse cx="125" cy="88" rx="85" ry="10" fill="#140C04" />
        <ellipse cx="76" cy="154" rx="30" ry="7" fill="#140C04" />
      </g>

      {/* Cat Graphics based on Reference Artwork */}
      {isDark ? (
        /* ===================================================================
           DARK MODE: WHITE CAT (Pristine clean silhouette with dark outlines)
        =================================================================== */
        <g id="white-cat-dark-mode">
          {/* Desk Horizontal Ledge / Extension Line */}
          <line
            x1="0"
            y1="80"
            x2="240"
            y2="80"
            stroke="#FAF9F5"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* 1. Tail (Solid Pure White) */}
          <path
            d={tailPath}
            fill="none"
            stroke="#FAF9F5"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. Hanging Front Paw (Solid Pure White) */}
          <path
            d={pawPath}
            fill="#FAF9F5"
            stroke="#FAF9F5"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* 3. Cat Body + Head + Ears (Solid Pure White) */}
          <path
            d={bodyPath}
            fill="#FAF9F5"
            stroke="#FAF9F5"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* 4. Closed Eyes / Alis (Retained Black Curves ∪ ∪) */}
          <path
            d="M 140,56 C 140,68 156,68 156,56"
            fill="none"
            stroke="#1C1814"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 170,56 C 170,68 186,68 186,56"
            fill="none"
            stroke="#1C1814"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      ) : (
        /* ===================================================================
           LIGHT MODE: BLACK CAT (Solid bold silhouette with white closed eyes)
        =================================================================== */
        <g id="black-cat-light-mode">
          {/* Desk Horizontal Ledge / Extension Line */}
          <line
            x1="0"
            y1="80"
            x2="240"
            y2="80"
            stroke="#1C1814"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* 1. Tail (Solid Bold Black Stroke) */}
          <path
            d={tailPath}
            fill="none"
            stroke="#1C1814"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. Hanging Front Paw */}
          <path
            d={pawPath}
            fill="#1C1814"
            stroke="#1C1814"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* 3. Solid Black Cat Body + Head + Ears */}
          <path
            d={bodyPath}
            fill="#1C1814"
            stroke="#1C1814"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* 4. White Closed Sleeping Eyes (∪ ∪) */}
          <path
            d="M 140,56 C 140,68 156,68 156,56"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 170,56 C 170,68 186,68 186,56"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Gentle Breathing Animation on Cat Body */}
      <animateTransform
        attributeName="transform"
        type="scale"
        values="1 1; 1 1.018; 1 1"
        keyTimes="0; 0.5; 1"
        dur="4s"
        repeatCount="indefinite"
        additive="sum"
      />

      {/* Floating "Zzz..." Sleep Bubbles */}
      <g
        className={`transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-75"
        }`}
      >
        <text
          x="215"
          y="25"
          fontFamily="'Caveat', cursive, sans-serif"
          fontSize="18"
          fontWeight="bold"
          fill={isDark ? "#F5EE99" : "#CBB800"}
          className="animate-pulse"
        >
          z
        </text>
        <text
          x="226"
          y="12"
          fontFamily="'Caveat', cursive, sans-serif"
          fontSize="22"
          fontWeight="bold"
          fill={isDark ? "#F5EE99" : "#877B00"}
          className="animate-pulse"
        >
          Z
        </text>
      </g>

      {/* Interactive Tooltip on Hover */}
      {isHovered && (
        <g transform="translate(70, -25)" className="animate-in fade-in duration-200">
          <rect
            x="0"
            y="0"
            width="140"
            height="26"
            rx="6"
            fill={isDark ? "#241D00" : "#FEFDF8"}
            stroke={isDark ? "#F5EE99" : "#3A2F00"}
            strokeWidth="1.5"
            filter="url(#bannerDropShadow)"
          />
          <text
            x="70"
            y="17"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="10"
            fontWeight="bold"
            fill={isDark ? "#F5EE99" : "#241D00"}
          >
            {isDark ? "☀️ Switch to Day" : "🌙 Switch to Night"}
          </text>
        </g>
      )}
    </g>
  );
};
