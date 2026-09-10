import React, { useState, useEffect } from "react";
import { ArrowLeft, Check } from "lucide-react";
import type { FormData } from "./WritingNoteForm";

interface SealedConfirmationCardProps {
  formData: FormData;
  onClose: () => void;
}

export const SealedConfirmationCard: React.FC<SealedConfirmationCardProps> = ({
  formData,
  onClose,
}) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    // 5-second auto fade-out for success notification
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl min-h-[500px] flex flex-col items-center justify-center select-none animate-in fade-in zoom-in-95 duration-300 px-4">
      {/* 1. Floating 5-Second Notification Toast at Top Center */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          showToast
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#FEFDF8] border-2 border-[#006E5E] rounded-xl shadow-2xl px-6 py-3 flex items-center gap-3.5 whitespace-nowrap">
          <div className="w-7 h-7 rounded-full bg-[#006E5E] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <div>
            <div className="font-sans font-bold text-sm text-[#241D00]">
              Surat Berhasil Terkirim & Disegel!
            </div>
            <div className="text-xs text-[#5C4B08]">
              Terima kasih <span className="font-semibold">{formData.name || "Pengirim"}</span>, pesan Anda telah tersimpan.
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Centered Envelope Stage */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[420px] mt-6">
        {/* Single Transparent Return Button at Top-Left of Envelope */}
        <div className="w-full flex justify-start mb-4">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-sm md:text-base font-mono font-bold text-[#006E5E] hover:text-[#00473D] transition-colors p-0 bg-transparent border-0 cursor-pointer group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1.5" />
            <span>kembali ke meja</span>
          </button>
        </div>

        {/* Closed Vintage Envelope Sealed with Red Wax (Exactly in the center) */}
        <div className="relative w-[360px] h-[230px] flex items-center justify-center">
          {/* Soft Drop Shadow under Envelope */}
          <div className="absolute bottom-2 left-4 right-4 h-12 bg-black/45 blur-lg rounded-full" />

          <svg
            viewBox="0 0 360 220"
            className="w-full h-full drop-shadow-2xl overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sealedFlapGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FAF6EB" />
                <stop offset="100%" stopColor="#E6DDC2" />
              </linearGradient>

              <linearGradient id="sealedBodyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FAF6EB" />
                <stop offset="100%" stopColor="#F0E6CE" />
              </linearGradient>

              {/* Red Wax Seal Glow Shadow */}
              <filter id="sealedSealGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>

            {/* Envelope Base Body */}
            <rect
              x="0"
              y="10"
              width="360"
              height="200"
              rx="4"
              fill="url(#sealedBodyGrad)"
              stroke="#B3A580"
              strokeWidth="2"
            />

            {/* Left Triangle Flap Fold */}
            <polygon
              points="0,10 180,115 0,210"
              fill="#F4EDE0"
              stroke="#B3A580"
              strokeWidth="1.5"
            />

            {/* Right Triangle Flap Fold */}
            <polygon
              points="360,10 180,115 360,210"
              fill="#EFE8D6"
              stroke="#B3A580"
              strokeWidth="1.5"
            />

            {/* Bottom Triangle Flap Fold */}
            <polygon
              points="0,210 180,95 360,210"
              fill="url(#sealedBodyGrad)"
              stroke="#B3A580"
              strokeWidth="2"
            />

            {/* Postal Cancel Mark (Left) */}
            <g transform="translate(45, 100) rotate(-10)">
              <circle cx="0" cy="0" r="18" fill="none" stroke="#5C4B08" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
              <text x="0" y="-3" textAnchor="middle" fill="#5C4B08" fontFamily="monospace" fontSize="6.5" fontWeight="bold" opacity="0.7">
                AIRMAIL
              </text>
              <text x="0" y="5" textAnchor="middle" fill="#5C4B08" fontFamily="monospace" fontSize="5.5" opacity="0.7">
                OCT 2026
              </text>
            </g>

            {/* Postage Stamp (Right) */}
            <g transform="translate(290, 80) rotate(4)">
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

            {/* Recipient Calligraphy */}
            <g transform="translate(30, 185)">
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

            {/* Closed Top Flap (Pointing down to y=115) */}
            <polygon
              points="0,10 180,115 360,10"
              fill="url(#sealedFlapGrad)"
              stroke="#B3A580"
              strokeWidth="2"
            />

            {/* RED WAX SEAL WITH "R" MONOGRAM (Centered at Flap Apex Tip) */}
            <g transform="translate(180, 115)" filter="url(#sealedSealGlow)">
              {/* Scalloped irregular wax blob rim */}
              <circle cx="0" cy="0" r="18" fill="#8E1C18" />
              <circle cx="-11" cy="-7" r="7" fill="#7A1512" opacity="0.7" />
              <circle cx="11" cy="-7" r="7" fill="#7A1512" opacity="0.7" />
              <circle cx="-7" cy="11" r="8" fill="#7A1512" opacity="0.7" />
              <circle cx="8" cy="10" r="7.5" fill="#7A1512" opacity="0.7" />
              
              {/* Center stamped wax face */}
              <circle cx="0" cy="0" r="14" fill="#A82824" stroke="#5E110C" strokeWidth="1" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#F5EE99" strokeWidth="0.8" strokeOpacity="0.6" />

              {/* Embossed 'R' Monogram */}
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fill="#F2FEDC"
                fontFamily="serif"
                fontWeight="900"
                fontSize="13"
                letterSpacing="0.5"
              >
                R
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
