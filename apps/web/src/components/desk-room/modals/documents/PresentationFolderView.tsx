import React, { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Presentation, MonitorPlay } from "lucide-react";

interface PresentationFolderViewProps {
  onBack: () => void;
}

export const PresentationFolderView: React.FC<PresentationFolderViewProps> = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Scalable Odoo 16/18 Architecture",
      category: "ENTERPRISE ERP",
      headline: "Optimizing High-Throughput Procurement and Inventory Ledger",
      steps: [
        { num: "01", name: "Worker Pool", role: "Gunicorn gevent multi-threading" },
        { num: "02", name: "PostgreSQL", role: "Read-replica split & index tuning" },
        { num: "03", name: "Redis Cache", role: "Session store & query buffer" },
        { num: "04", name: "Sync Engine", role: "Zero-loss financial reconciliation" },
      ],
    },
    {
      title: "Real-Time Event Queuing with Redis",
      category: "DISTRIBUTED SYSTEMS",
      headline: "Microservices Inter-Process Message Streaming",
      steps: [
        { num: "01", name: "Client Ingress", role: "WebSocket connection gateway" },
        { num: "02", name: "Message Broker", role: "Redis pub/sub & stream logs" },
        { num: "03", name: "Worker Daemon", role: "Async payload deserialization" },
        { num: "04", name: "Audit Trail", role: "Persistent event replay logging" },
      ],
    },
    {
      title: "Frontend Engineering & Design System",
      category: "USER EXPERIENCE",
      headline: "React 19, Strict TypeScript & Tactile Skeuomorphism",
      steps: [
        { num: "01", name: "Design Canvas", role: "Penpot 100% SVG Vector fidelity" },
        { num: "02", name: "Strict Tokens", role: "Mustard Gold & Umber palettes" },
        { num: "03", name: "State Machine", role: "Origami folding & smooth modals" },
        { num: "04", name: "Zero-Slop UI", role: "Purposeful motion & rich typography" },
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const active = slides[currentSlide];

  return (
    <div className="relative w-full max-w-5xl h-[88vh] max-h-[760px] select-none flex flex-col animate-in zoom-in-95 duration-200">
      {/* =====================================================================
          1. SIGNATURE FOLDER TAB PROTRUSION (ON TOP, SEAMLESS WITH FOLDER COLOR)
          + BACK BUTTON (ONLY 1 ARROW ICON)
      ===================================================================== */}
      <div className="flex items-end justify-between px-6 -mb-1 relative z-10 flex-shrink-0">
        <div className="flex items-end">
          {/* Main Manila Tab Protrusion - Colors blend seamlessly with the folder chassis */}
          <div className="bg-[#DFD2AC] border-t-4 border-l-4 border-r-4 border-[#8C7A4B] rounded-t-xl px-5 py-2 flex items-center gap-2.5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006E5E] ring-2 ring-[#006E5E]/20" />
            <span className="text-xs font-mono font-black tracking-wider text-[#241D00] uppercase">
              FILE 02 // PRESENTATION KEYNOTE DECK
            </span>
          </div>
        </div>

        {/* Back navigation button (Only 1 arrow icon) */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#F2FEDC] hover:text-[#CBB800] transition-colors pb-2 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>KEMBALI KE RAK BINDER</span>
        </button>
      </div>

      {/* =====================================================================
          2. MANILA FOLDER CHASSIS (OPEN LANDSCAPE FILE WITH SPINE CREASE)
      ===================================================================== */}
      <div className="relative flex-1 min-h-0 bg-[#DFD2AC] rounded-2xl rounded-tl-none border-4 border-[#8C7A4B] shadow-2xl overflow-hidden flex flex-col">
        {/* Brass Corner Brackets */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#CBB800]/50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#CBB800]/50 pointer-events-none" />

        {/* Folder Interior Layout (Constrained & Scrollable Internally if needed) */}
        <div className="p-4 md:p-6 flex-1 min-h-0 overflow-y-auto space-y-4 bg-gradient-to-b from-[#DFD2AC] via-[#E4D7B3] to-[#DFD2AC] flex flex-col justify-between">
          
          {/* UPPER FOLDER SECTION: Presentation Dossier Info & Keynote Context */}
          <div className="border-b-2 border-[#8C7A4B]/40 pb-3 flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#3A2F00] text-[#CBB800] flex items-center justify-center shadow flex-shrink-0">
                  <Presentation className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#5C4B08] uppercase tracking-widest">
                    <span>📁 DOSSIER 02</span>
                    <span>•</span>
                    <span>KEYNOTE SLIDE DECK</span>
                  </div>
                  <h3 className="font-sans font-black text-base md:text-lg text-[#241D00] tracking-tight">
                    Enterprise Architecture & Systems Engineering
                  </h3>
                  <p className="text-[11px] font-mono text-[#5C4B08]">
                    Keynote Speaker: Rezki Mochamad Dahlan • Tech Summit Series
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#3A2F00] text-[#F2FEDC] border border-[#CBB800]/50 shadow-sm flex-shrink-0">
                CONFIDENTIAL DECK
              </span>
            </div>

            {/* 3 Slide Navigators mounted on the kraft flap */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`p-2 rounded-lg border-2 text-left transition-all cursor-pointer ${
                    currentSlide === idx
                      ? "bg-[#006E5E] text-white border-[#00473D] shadow-md"
                      : "bg-[#E8DCB8]/60 text-[#3A2F00] border-[#8C7A4B]/60 hover:bg-[#FAF6EB]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold opacity-80">PART 0{idx + 1}</span>
                    {currentSlide === idx && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/20">VIEWING</span>
                    )}
                  </div>
                  <div className="text-xs font-bold truncate mt-0.5">{s.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* =================================================================
              HORIZONTAL FOLDER CREASE (LIPATAN TENGAH DENGAN PENJEPIT KERTAS)
          ================================================================= */}
          <div className="w-full h-4 bg-gradient-to-b from-black/15 via-[#C5B484] to-black/15 border-y border-[#8C7A4B]/50 rounded-sm flex items-center justify-between px-8 shadow-inner">
            <div className="w-5 h-1.5 bg-[#8C7A4B] rounded-xs border border-[#3A2F00]" />
            <div className="w-16 h-0.5 bg-[#8C7A4B]/40" />
            <div className="w-5 h-1.5 bg-[#8C7A4B] rounded-xs border border-[#3A2F00]" />
          </div>

          {/* LOWER FOLDER SECTION: Embedded Slide Player Mounted on Folder */}
          <div className="bg-[#1A1500] rounded-2xl border-4 border-[#3A2F00] shadow-2xl p-5 text-white space-y-4">
            {/* Player Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <MonitorPlay className="w-4 h-4 text-[#CBB800]" />
                <span className="text-xs font-mono font-bold text-[#F5EE99]">PRESENTATION CANVAS</span>
              </div>

              <div className="text-xs font-mono text-[#CBB800] font-bold">
                SLIDE {currentSlide + 1} OF {slides.length}
              </div>
            </div>

            {/* 16:9 Slide Screen Canvas */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] rounded-xl bg-gradient-to-br from-[#00473D] via-[#006E5E] to-[#241D00] border border-[#CBB800]/40 p-6 md:p-8 flex flex-col justify-between shadow-inner overflow-hidden">
              {/* Background Grid Accent */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#CBB800_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#CBB800] text-[#241D00] uppercase tracking-wider">
                  {active.category}
                </span>
                <h2 className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight">
                  {active.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#F2FEDC] max-w-xl">
                  {active.headline}
                </p>
              </div>

              {/* Interactive 4-Step Diagram */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
                {active.steps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-xs font-mono font-black text-[#CBB800] block">{step.num}</span>
                    <span className="text-xs font-bold text-white block truncate">{step.name}</span>
                    <span className="text-[10px] text-gray-300 block leading-tight mt-0.5">{step.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls Bar */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-lg bg-[#3A2F00] text-[#F5EE99] hover:bg-[#5C4B08] transition-colors text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> PREV
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg bg-[#3A2F00] text-[#F5EE99] hover:bg-[#5C4B08] transition-colors text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
                >
                  NEXT <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#CBB800] hover:text-[#F5EE99] transition-colors"
              >
                <span>OPEN FULL SLIDES ON GOOGLE DRIVE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
