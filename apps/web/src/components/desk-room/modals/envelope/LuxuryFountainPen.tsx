import React from "react";

interface LuxuryFountainPenProps {
  className?: string;
}

export const LuxuryFountainPen: React.FC<LuxuryFountainPenProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 320 30"
      className={`overflow-visible drop-shadow-2xl ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Pen Barrel Lustre Gradient */}
        <linearGradient id="penBodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A3D1E" />
          <stop offset="25%" stopColor="#241D00" />
          <stop offset="70%" stopColor="#1A1500" />
          <stop offset="100%" stopColor="#3A2F00" />
        </linearGradient>

        {/* Gold Trim Gradient */}
        <linearGradient id="penGoldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="40%" stopColor="#CBB800" />
          <stop offset="100%" stopColor="#7A6800" />
        </linearGradient>
      </defs>

      {/* Pen Contact Shadow */}
      <ellipse cx="160" cy="24" rx="140" ry="3.5" fill="#0A0602" opacity="0.45" />

      {/* Pen Group */}
      <g transform="translate(15, 0)">
        {/* 1. Gold Nib (Pointed Luxury Fountain Pen Nib) */}
        <polygon
          points="10,14 36,7 42,8.5 42,19.5 36,21"
          fill="url(#penGoldGrad)"
          stroke="#7A6800"
          strokeWidth="0.8"
        />
        {/* Nib Breather Hole */}
        <circle cx="28" cy="14" r="1.5" fill="#1C1814" />
        {/* Nib Slit Line */}
        <line x1="10" y1="14" x2="36" y2="14" stroke="#5C4B08" strokeWidth="0.8" />
        {/* Nib Shoulder Tine Lines */}
        <path d="M 28,12 Q 34,10 38,9" fill="none" stroke="#7A6800" strokeWidth="0.6" />
        <path d="M 28,16 Q 34,18 38,19" fill="none" stroke="#7A6800" strokeWidth="0.6" />

        {/* 2. Front Grip Section (Black Ebonite/Resin) */}
        <rect
          x="42"
          y="8.5"
          width="24"
          height="11"
          rx="1.5"
          fill="#1C1814"
          stroke="#0A0602"
          strokeWidth="0.8"
        />

        {/* 3. Gold Section Accent Ring */}
        <rect
          x="66"
          y="7.5"
          width="3.5"
          height="13"
          rx="0.5"
          fill="url(#penGoldGrad)"
          stroke="#7A6800"
          strokeWidth="0.5"
        />

        {/* 4. Main Pen Barrel (Dark Umber Lacquer) */}
        <rect
          x="69.5"
          y="7"
          width="110"
          height="14"
          rx="2"
          fill="url(#penBodyGrad)"
          stroke="#1A1500"
          strokeWidth="0.8"
        />

        {/* 5. Center Triple Gold Trim Rings */}
        <rect x="179.5" y="6.5" width="2" height="15" fill="url(#penGoldGrad)" />
        <rect x="182.5" y="6" width="4.5" height="16" fill="url(#penGoldGrad)" stroke="#5C4B08" strokeWidth="0.4" />
        <rect x="188" y="6.5" width="2" height="15" fill="url(#penGoldGrad)" />

        {/* 6. Pen Cap (Posted on Back Barrel) */}
        <rect
          x="190"
          y="6.5"
          width="85"
          height="15"
          rx="3"
          fill="url(#penBodyGrad)"
          stroke="#1A1500"
          strokeWidth="0.8"
        />

        {/* 7. Gold Pocket Clip */}
        <rect
          x="198"
          y="4.5"
          width="55"
          height="3"
          rx="1"
          fill="url(#penGoldGrad)"
          stroke="#5C4B08"
          strokeWidth="0.5"
        />
        {/* Teardrop Clip Ball at End */}
        <circle cx="198" cy="6" r="3" fill="url(#penGoldGrad)" stroke="#5C4B08" strokeWidth="0.5" />

        {/* 8. Gold End Finial */}
        <rect
          x="275"
          y="8"
          width="5"
          height="12"
          rx="1.5"
          fill="url(#penGoldGrad)"
          stroke="#5C4B08"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
};
