import React from "react";

export const OpenDeskEnvelope: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] flex flex-col items-center justify-center select-none py-4">
      {/* Realistic Vintage Open Envelope Container (Unified Seamless Flap & Body) */}
      <div className="relative z-10 w-[360px] h-[300px] flex items-center justify-center">
        {/* Soft Drop Shadow under Envelope */}
        <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/45 blur-lg rounded-full" />

        {/* Master Open Envelope SVG: 100% Contiguous Paper Flap & Body */}
        <svg
          viewBox="0 0 360 300"
          className="w-full h-full drop-shadow-xl overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Throat Interior Shadow */}
            <linearGradient id="pocketThroatGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#241B10" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#3A2F1D" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F6EED8" stopOpacity="0" />
            </linearGradient>

            {/* Back Flap Paper Gradient */}
            <linearGradient id="backFlapGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4EBD2" />
              <stop offset="100%" stopColor="#EAE0C4" />
            </linearGradient>

            {/* Front Paper Gradient */}
            <linearGradient id="frontPaperGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FAF6EB" />
              <stop offset="100%" stopColor="#F0E6CE" />
            </linearGradient>

            {/* Wax Seal Shadow */}
            <filter id="sealGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* =================================================================
              1. SEAMLESS BACK WALL + OPEN FLAP (ONE SINGLE SOLID PIECE OF PAPER)
              Flap Apex is at (180, 20). No separation, no gap!
          ================================================================= */}
          <polygon
            points="0,110 180,20 360,110 360,290 0,290"
            fill="url(#backFlapGrad)"
            stroke="#B3A580"
            strokeWidth="2"
          />

          {/* Crease fold lines on the back flap */}
          <line x1="0" y1="110" x2="180" y2="20" stroke="#8C7D58" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="360" y1="110" x2="180" y2="20" stroke="#8C7D58" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* Inner Throat Cavity Shadow (where the folded letter slides into) */}
          <rect
            x="6"
            y="110"
            width="348"
            height="45"
            fill="url(#pocketThroatGrad)"
          />

          {/* =================================================================
              2. FRONT ENVELOPE POUCH (FLAPS OVERLAPPING TO FORM POUCH)
          ================================================================= */}
          {/* Left Side Fold Triangle */}
          <polygon
            points="0,110 180,205 0,290"
            fill="#F4EDE0"
            stroke="#B3A580"
            strokeWidth="1.5"
          />

          {/* Right Side Fold Triangle */}
          <polygon
            points="360,110 180,205 360,290"
            fill="#EFE8D6"
            stroke="#B3A580"
            strokeWidth="1.5"
          />

          {/* Bottom Fold Triangle (Front main flap) */}
          <polygon
            points="0,290 180,180 360,290"
            fill="url(#frontPaperGrad)"
            stroke="#B3A580"
            strokeWidth="2"
          />

          {/* =================================================================
              3. RED WAX SEAL WITH "R" MONOGRAM
              Positioned right at the apex tip of the open flap (180, 22)
          ================================================================= */}
          <g transform="translate(180, 22)" filter="url(#sealGlow)">
            {/* Scalloped irregular wax blob rim */}
            <circle cx="0" cy="0" r="16" fill="#8E1C18" />
            <circle cx="-10" cy="-6" r="6" fill="#7A1512" opacity="0.7" />
            <circle cx="10" cy="-6" r="6" fill="#7A1512" opacity="0.7" />
            <circle cx="-6" cy="10" r="7" fill="#7A1512" opacity="0.7" />
            <circle cx="7" cy="9" r="6.5" fill="#7A1512" opacity="0.7" />
            
            {/* Center stamped wax face */}
            <circle cx="0" cy="0" r="13" fill="#A82824" stroke="#5E110C" strokeWidth="1" />
            <circle cx="0" cy="0" r="11" fill="none" stroke="#F5EE99" strokeWidth="0.7" strokeOpacity="0.6" />

            {/* Embossed 'R' Monogram */}
            <text
              x="0"
              y="4.5"
              textAnchor="middle"
              fill="#F2FEDC"
              fontFamily="serif"
              fontWeight="900"
              fontSize="12"
              letterSpacing="0.5"
            >
              R
            </text>
          </g>

          {/* =================================================================
              4. FRONT POUCH GRAPHICS: POSTAL STAMP & RECIPIENT
          ================================================================= */}
          {/* Postal Cancel Mark (Left) */}
          <g transform="translate(45, 175) rotate(-10)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="#5C4B08" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
            <text x="0" y="-3" textAnchor="middle" fill="#5C4B08" fontFamily="monospace" fontSize="6.5" fontWeight="bold" opacity="0.7">
              AIRMAIL
            </text>
            <text x="0" y="5" textAnchor="middle" fill="#5C4B08" fontFamily="monospace" fontSize="5.5" opacity="0.7">
              OCT 2026
            </text>
          </g>

          {/* Postage Stamp (Right) */}
          <g transform="translate(290, 155) rotate(4)">
            <rect x="-18" y="-22" width="36" height="44" fill="#F2FEDC" stroke="#006E5E" strokeWidth="1.5" strokeDasharray="3 1.5" rx="1" />
            <text x="0" y="-12" textAnchor="middle" fill="#006E5E" fontFamily="monospace" fontSize="6" fontWeight="bold">
              PORTFOLIO
            </text>
            <text x="0" y="4" textAnchor="middle" fontSize="14">
              🕊️
            </text>
            <text x="0" y="16" textAnchor="middle" fill="#3A2F00" fontFamily="monospace" fontSize="6">
              Rp 5000
            </text>
          </g>

          {/* Recipient Calligraphy (To: Rezki Mochamad Dahlan) */}
          <g transform="translate(30, 260)">
            <text
              x="0"
              y="0"
              fill="#3A2F00"
              fontFamily="'Caveat', cursive, serif"
              fontSize="18"
              fontWeight="bold"
            >
              To: Rezki Mochamad Dahlan
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
