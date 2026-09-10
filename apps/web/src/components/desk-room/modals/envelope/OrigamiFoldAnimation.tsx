import React, { useState, useEffect } from "react";
import type { FormData } from "./WritingNoteForm";

interface OrigamiFoldAnimationProps {
  formData: FormData;
  onAnimationComplete: () => void;
}

type AnimationPhase = "folding-bottom" | "folding-top" | "folded" | "gliding" | "inserting" | "closing";

export const OrigamiFoldAnimation: React.FC<OrigamiFoldAnimationProps> = ({
  formData,
  onAnimationComplete,
}) => {
  const [phase, setPhase] = useState<AnimationPhase>("folding-bottom");

  useEffect(() => {
    // Frame 1: 0ms -> start bottom fold
    const t1 = setTimeout(() => {
      setPhase("folding-top");
    }, 600);

    // Frame 2: 600ms -> start top fold
    const t2 = setTimeout(() => {
      setPhase("folded");
    }, 1200);

    // Frame 3: 1300ms -> glide letter over envelope mouth
    const t3 = setTimeout(() => {
      setPhase("gliding");
    }, 1400);

    // Frame 4: 2200ms -> slide down into envelope pocket
    const t4 = setTimeout(() => {
      setPhase("inserting");
    }, 2200);

    // Frame 5: 2900ms -> close flap & stamp red wax seal
    const t5 = setTimeout(() => {
      setPhase("closing");
    }, 2900);

    // Frame 6: 3700ms -> transition to confirmed state
    const t6 = setTimeout(() => {
      onAnimationComplete();
    }, 3700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onAnimationComplete]);

  return (
    <div className="relative w-full max-w-4xl h-[520px] flex items-center justify-between px-4 md:px-12 select-none overflow-hidden">
      {/* =====================================================================
          LEFT COLUMN: The Note Paper (Folds into compact 300x85mm letter)
      ===================================================================== */}
      <div className="relative w-[340px] h-[440px] flex items-center justify-center">
        {/* The Animated Paper Wrapper (Moves across to Envelope during gliding & inserting) */}
        <div
          className="relative z-30 transition-all duration-700 ease-in-out"
          style={{
            transform:
              phase === "gliding"
                ? "translate(calc(100% + 70px), -40px) scale(0.92)"
                : phase === "inserting" || phase === "closing"
                ? "translate(calc(100% + 70px), 45px) scale(0.92)"
                : "translate(0, 0) scale(1)",
            opacity: phase === "closing" ? 0.3 : 1,
          }}
        >
          {/* Tri-Fold Paper Structure (300px wide, Transparent background to eliminate ghost box) */}
          <div
            className="relative w-[300px] h-[270px] flex flex-col bg-transparent"
            style={{ perspective: "1000px" }}
          >
            {/* Panel 1: Top Third (Folds downward over bottom panel) */}
            <div
              className="relative h-[90px] w-full transition-transform duration-500 ease-in-out z-30"
              style={{
                transformOrigin: "bottom",
                transform:
                  phase === "folding-top" ||
                  phase === "folded" ||
                  phase === "gliding" ||
                  phase === "inserting" ||
                  phase === "closing"
                    ? "rotateX(180deg)"
                    : "rotateX(0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front of Top Panel: Header info */}
              <div
                className="absolute inset-0 bg-[#FEFDF8] p-3 border-t border-x border-[#D8D1BD] border-b border-dashed border-[#B5BF9E] rounded-t-lg flex flex-col justify-between"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-[10px] font-mono text-[#8C8267] uppercase tracking-wider">
                  FROM: {formData.name || "Sender"}
                </div>
                <div className="text-xs font-['Caveat',cursive] text-[#3A2F00] truncate">
                  Topic: {formData.subject || "Direct Message Inquiry"}
                </div>
              </div>

              {/* Back of Top Panel: Clean Stationery Fold (NO UPSIDE DOWN TEXT!) */}
              <div
                className="absolute inset-0 bg-[#FAF6EB] p-3 rounded-lg border-2 border-[#D8D1BD] shadow-lg flex items-center justify-between"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <div className="text-[9px] font-mono font-bold text-[#8C8267] uppercase tracking-wider">
                  ★ SEALED NOTE // REZKI DESK
                </div>
                <div className="w-5 h-5 rounded-full border border-[#877B00]/40 flex items-center justify-center text-[10px] text-[#5C4B08]">
                  ✎
                </div>
              </div>
            </div>

            {/* Panel 2: Center Third (Base stationary panel) */}
            <div className="relative h-[90px] w-full bg-[#FEFDF8] border-x border-[#D8D1BD] border-b border-dashed border-[#B5BF9E]/50 p-3 flex flex-col justify-center z-10">
              <div className="text-xs font-['Caveat',cursive] text-[#241D00] line-clamp-2 leading-relaxed">
                "{formData.message || "Sending project inquiry..."}"
              </div>
            </div>

            {/* Panel 3: Bottom Third (Folds upward over center panel) */}
            <div
              className="relative h-[90px] w-full transition-transform duration-500 ease-in-out z-20"
              style={{
                transformOrigin: "top",
                transform:
                  phase !== "folding-bottom" ? "rotateX(-180deg)" : "rotateX(0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front of Bottom Panel: Verified note info */}
              <div
                className="absolute inset-0 bg-[#FEFDF8] p-3 rounded-b-lg border-b border-x border-[#D8D1BD] border-t border-dashed border-[#B5BF9E] flex items-end justify-between"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-[9px] font-mono text-[#5C4B08]">
                  CONFIDENTIAL • 2026
                </div>
                <div className="text-[11px] font-mono font-bold text-[#006E5E]">
                  READY ✓
                </div>
              </div>

              {/* Back of Bottom Panel: Clean cream paper backing */}
              <div
                className="absolute inset-0 bg-[#FAF6EB] rounded-lg border border-[#D8D1BD] shadow-sm"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              />
            </div>
          </div>

          {/* Folding Status Badge */}
          <div className="mt-3 flex justify-center">
            <span className="px-3 py-1 rounded-full bg-[#3A2F00] text-[#F5EE99] text-[10px] font-mono font-semibold tracking-wider border border-[#CBB800] shadow-md flex items-center gap-1.5">
              <span className="animate-spin text-xs">↻</span>
              {phase === "inserting" || phase === "closing"
                ? "INSERTING INTO ENVELOPE..."
                : "FOLDING LETTER..."}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          RIGHT COLUMN: Target Receiving Envelope
      ===================================================================== */}
      <div className="relative w-[360px] h-[300px] flex items-center justify-center">
        {/* Soft Drop Shadow under Envelope */}
        <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/45 blur-lg rounded-full" />

        <svg
          viewBox="0 0 360 300"
          className="w-full h-full drop-shadow-xl overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="foldPocketThroatGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#241B10" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#3A2F1D" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F6EED8" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="foldBackFlapGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4EBD2" />
              <stop offset="100%" stopColor="#EAE0C4" />
            </linearGradient>

            <linearGradient id="foldFrontPaperGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FAF6EB" />
              <stop offset="100%" stopColor="#F0E6CE" />
            </linearGradient>

            {/* Red Wax Seal Glow */}
            <filter id="foldSealGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* 1. SEAMLESS BACK WALL + OPEN FLAP */}
          <polygon
            points="0,110 180,20 360,110 360,290 0,290"
            fill="url(#foldBackFlapGrad)"
            stroke="#B3A580"
            strokeWidth="2"
          />

          {/* Throat Cavity Slot */}
          <rect
            x="6"
            y="110"
            width="348"
            height="45"
            fill="url(#foldPocketThroatGrad)"
          />

          {/* 2. FRONT ENVELOPE POUCH */}
          {/* Left Fold */}
          <polygon
            points="0,110 180,205 0,290"
            fill="#F4EDE0"
            stroke="#B3A580"
            strokeWidth="1.5"
          />

          {/* Right Fold */}
          <polygon
            points="360,110 180,205 360,290"
            fill="#EFE8D6"
            stroke="#B3A580"
            strokeWidth="1.5"
          />

          {/* Bottom Fold */}
          <polygon
            points="0,290 180,180 360,290"
            fill="url(#foldFrontPaperGrad)"
            stroke="#B3A580"
            strokeWidth="2"
          />

          {/* Postal Mark */}
          <g transform="translate(45, 175) rotate(-10)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="#5C4B08" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
            <text x="0" y="-3" textAnchor="middle" fill="#5C4B08" fontFamily="monospace" fontSize="6.5" fontWeight="bold" opacity="0.7">
              AIRMAIL
            </text>
            <text x="0" y="5" textAnchor="middle" fill="#5C4B08" fontFamily="monospace" fontSize="5.5" opacity="0.7">
              OCT 2026
            </text>
          </g>

          {/* Postage Stamp */}
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

          {/* Recipient */}
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

          {/* 3. FLAP WHEN OPEN (Apex at y=20) vs WHEN CLOSED (Apex at y=205) */}
          {phase !== "closing" ? (
            /* Open Red Wax Seal on Open Flap Tip */
            <g transform="translate(180, 22)" filter="url(#foldSealGlow)">
              <circle cx="0" cy="0" r="16" fill="#8E1C18" />
              <circle cx="-10" cy="-6" r="6" fill="#7A1512" opacity="0.7" />
              <circle cx="10" cy="-6" r="6" fill="#7A1512" opacity="0.7" />
              <circle cx="-6" cy="10" r="7" fill="#7A1512" opacity="0.7" />
              <circle cx="7" cy="9" r="6.5" fill="#7A1512" opacity="0.7" />
              <circle cx="0" cy="0" r="13" fill="#A82824" stroke="#5E110C" strokeWidth="1" />
              <circle cx="0" cy="0" r="11" fill="none" stroke="#F5EE99" strokeWidth="0.7" strokeOpacity="0.6" />
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
          ) : (
            /* Closed Flap Folds Down and Stamps Red Wax Seal */
            <g className="animate-in fade-in duration-300">
              <polygon
                points="0,110 180,205 360,110"
                fill="url(#foldBackFlapGrad)"
                stroke="#B3A580"
                strokeWidth="2"
              />
              {/* Red Wax Seal Stamped at Closure Tip */}
              <g transform="translate(180, 205)" filter="url(#foldSealGlow)">
                <circle cx="0" cy="0" r="18" fill="#8E1C18" />
                <circle cx="-11" cy="-7" r="7" fill="#7A1512" opacity="0.7" />
                <circle cx="11" cy="-7" r="7" fill="#7A1512" opacity="0.7" />
                <circle cx="-7" cy="11" r="8" fill="#7A1512" opacity="0.7" />
                <circle cx="8" cy="10" r="7.5" fill="#7A1512" opacity="0.7" />
                <circle cx="0" cy="0" r="14" fill="#A82824" stroke="#5E110C" strokeWidth="1" />
                <circle cx="0" cy="0" r="12" fill="none" stroke="#F5EE99" strokeWidth="0.8" strokeOpacity="0.6" />
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
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
