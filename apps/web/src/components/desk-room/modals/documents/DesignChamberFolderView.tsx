import React from "react";
import { ArrowLeft, ExternalLink, Sparkles, Layers, Box, Compass } from "lucide-react";

interface DesignChamberFolderViewProps {
  onBack: () => void;
}

export const DesignChamberFolderView: React.FC<DesignChamberFolderViewProps> = ({ onBack }) => {
  return (
    <div className="relative w-full max-w-5xl h-[88vh] max-h-[760px] select-none flex flex-col animate-in zoom-in-95 duration-200">
      {/* =====================================================================
          1. HEADER CONTROLS (ONLY 1 ARROW ICON)
      ===================================================================== */}
      <div className="flex items-center justify-end px-2 pb-2 relative z-10 flex-shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#F2FEDC] hover:text-[#CBB800] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>KEMBALI KE RAK BINDER</span>
        </button>
      </div>

      {/* =====================================================================
          2. MANILA FOLDER CONTAINER WITH SIGNATURE RIGHT-SIDE TAB
      ===================================================================== */}
      <div className="relative flex-1 min-h-0 flex flex-col">
        {/* ===================================================================
            SIGNATURE FOLDER TAB ON THE RIGHT SIDE (PENANDA HALAMAN KHAS MAP FILE)
            Color and border match the file folder seamlessly
        =================================================================== */}
        <div className="hidden lg:flex flex-col items-center justify-center absolute -right-[34px] top-12 z-30 bg-[#DFD2AC] border-y-4 border-r-4 border-[#8C7A4B] rounded-r-xl py-6 px-1.5 shadow-lg pointer-events-none">
          <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2 text-[10px] font-mono font-black tracking-widest text-[#241D00] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E07A5F]" />
            <span>FILE 03 // DESIGN CHAMBER</span>
          </div>
        </div>

        {/* MANILA FOLDER CHASSIS */}
        <div className="relative flex-1 min-h-0 bg-[#DFD2AC] rounded-2xl border-4 border-[#8C7A4B] shadow-2xl overflow-hidden flex flex-col">
          {/* Top & Bottom Brass Corner Brackets */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#CBB800]/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#CBB800]/50 pointer-events-none" />

          {/* Interior Workspace Layout: Left Flap, Center Spine Crease, Right Flap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-0 relative bg-gradient-to-r from-[#DFD2AC] via-[#E4D7B3] to-[#DFD2AC] overflow-hidden">
            
            {/* =================================================================
                LEFT FLAP (5 cols): PHOTO PREVIEWS GALLERY (INTERNAL SCROLL)
            ================================================================= */}
            <div className="lg:col-span-5 h-full min-h-0 overflow-y-auto p-4 md:p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#5C4B08] uppercase tracking-widest border-b-2 border-[#8C7A4B]/40 pb-2">
                  <span>📸 VISUAL ARTIFACTS</span>
                  <span className="text-[#E07A5F] bg-[#E07A5F]/10 px-2 py-0.5 rounded">
                    PENPOT STUDIO
                  </span>
                </div>

                <div className="mt-2.5">
                  <h3 className="font-sans font-black text-lg md:text-xl text-[#241D00] tracking-tight">
                    Project Photo Previews
                  </h3>
                  <p className="text-xs font-mono text-[#4A3D0B] mt-1 leading-relaxed">
                    Dokumentasi visual rancangan antarmuka ruang kerja 3D dan sistem antrean:
                  </p>
                </div>
              </div>

              {/* 4 Polaroid Cards Grid */}
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                {/* Photo 1: Interactive Desk */}
                <div className="bg-white p-2 rounded-lg border border-[#D8D1BD] shadow-sm flex flex-col items-center text-center">
                  <div className="w-full h-20 rounded bg-[#3A2F00] flex items-center justify-center text-2xl shadow-inner">
                    🖥️
                  </div>
                  <span className="text-[10px] font-bold text-[#241D00] mt-1.5 block truncate w-full">Interactive Desk</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">Landing 3D Room</span>
                </div>

                {/* Photo 2: Queue Modal */}
                <div className="bg-white p-2 rounded-lg border border-[#D8D1BD] shadow-sm flex flex-col items-center text-center">
                  <div className="w-full h-20 rounded bg-[#006E5E] flex items-center justify-center text-2xl shadow-inner">
                    📊
                  </div>
                  <span className="text-[10px] font-bold text-[#241D00] mt-1.5 block truncate w-full">Queue Monitor</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">Real-Time DMS</span>
                </div>

                {/* Photo 3: Penpot Canvas */}
                <div className="bg-white p-2 rounded-lg border border-[#D8D1BD] shadow-sm flex flex-col items-center text-center">
                  <div className="w-full h-20 rounded bg-[#E07A5F] flex items-center justify-center text-2xl shadow-inner">
                    🎨
                  </div>
                  <span className="text-[10px] font-bold text-[#241D00] mt-1.5 block truncate w-full">Penpot Canvas</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">Vector Workspace</span>
                </div>

                {/* Photo 4: Responsive View */}
                <div className="bg-white p-2 rounded-lg border border-[#D8D1BD] shadow-sm flex flex-col items-center text-center">
                  <div className="w-full h-20 rounded bg-[#4A3114] flex items-center justify-center text-2xl shadow-inner">
                    📱
                  </div>
                  <span className="text-[10px] font-bold text-[#241D00] mt-1.5 block truncate w-full">Mobile Adaptive</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">16:9 Panoramic</span>
                </div>
              </div>

              {/* Quick Stat Pill Box */}
              <div className="bg-[#FAF6EB] rounded-xl p-3 border border-[#D5C79E] shadow-sm flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#CBB800]" />
                  <span className="text-xs font-bold text-[#3A2F00]">Vector Pure SVG Fidelity</span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#CBB800]/20 text-[#3A2F00]">
                  100% SCALE-FREE
                </span>
              </div>
            </div>

            {/* =================================================================
                CENTER SPINE CREASE (LIPATAN FILE HOLDER DENGAN PENJEPIT LOGAM)
            ================================================================= */}
            <div className="hidden lg:flex lg:col-span-1 h-full min-h-0 flex-col items-center justify-between py-6 bg-gradient-to-r from-black/15 via-[#C5B484] to-black/15 border-x border-[#8C7A4B]/50 shadow-inner relative flex-shrink-0">
              <div className="w-6 h-3 bg-[#8C7A4B] rounded-sm border border-[#3A2F00] shadow flex items-center justify-center">
                <div className="w-4 h-1 bg-[#CBB800] rounded-xs" />
              </div>

              <div className="w-0.5 h-full bg-[#8C7A4B]/40 my-3 relative">
                <div className="absolute top-1/4 -left-1 w-2.5 h-2.5 rounded-full border border-[#8C7A4B] bg-[#DFD2AC]" />
                <div className="absolute top-2/4 -left-1 w-2.5 h-2.5 rounded-full border border-[#8C7A4B] bg-[#DFD2AC]" />
                <div className="absolute top-3/4 -left-1 w-2.5 h-2.5 rounded-full border border-[#8C7A4B] bg-[#DFD2AC]" />
              </div>

              <div className="w-6 h-3 bg-[#8C7A4B] rounded-sm border border-[#3A2F00] shadow flex items-center justify-center">
                <div className="w-4 h-1 bg-[#CBB800] rounded-xs" />
              </div>
            </div>

            {/* =================================================================
                RIGHT FLAP (6 cols): PROJECT OVERVIEW & INTERACTIVE WORKSPACE
            ================================================================= */}
            <div className="lg:col-span-6 h-full min-h-0 p-3 md:p-5 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-h-full flex flex-col bg-white rounded-xs border border-neutral-200 shadow-xl overflow-hidden">
                {/* Silver Paper Binder Clip */}
                <div className="flex-shrink-0 flex justify-center -mt-0.5 z-20 pointer-events-none">
                  <div className="w-12 h-3 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 rounded-b-sm border border-neutral-500 shadow-sm" />
                </div>

                {/* HVS Sheet Content (Scrollable Internally) */}
                <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-6 select-text space-y-4 text-neutral-900">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#3A2F00] pb-2">
                <h3 className="font-sans font-black text-xl text-[#241D00] tracking-tight">
                  Design Chamber // Workspace Overview
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#006E5E] text-white">
                  ACTIVE REPO
                </span>
              </div>
              <p className="text-xs text-[#3A2F00] mt-2 leading-relaxed">
                Eksplorasi antarmuka digital yang menggabungkan kehangatan skeuomorfisme taktil (meja kerja, binder arsip, amplop surat) dengan ketegasan performa web modern (React 19, Tailwind v4, vector rendering cepat).
              </p>
            </div>

            {/* 4 Project Statistics Grid */}
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#877B00] block mb-2">
                DESIGN METRICS & COMPLEXITY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-[#FAF6EB] border border-[#D8D1BD]">
                  <span className="text-lg font-black text-[#241D00] block">19</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">SCENE BOARDS</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF6EB] border border-[#D8D1BD]">
                  <span className="text-lg font-black text-[#006E5E] block">37</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">INTERACTIONS</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF6EB] border border-[#D8D1BD]">
                  <span className="text-lg font-black text-[#CBB800] block">100%</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">SVG VECTOR</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF6EB] border border-[#D8D1BD]">
                  <span className="text-lg font-black text-[#3A2F00] block">0</span>
                  <span className="text-[9px] font-mono text-[#6E5E30]">BITMAP SLOP</span>
                </div>
              </div>
            </div>

            {/* 4 Interactive Links */}
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#877B00] block mb-2">
                OPEN DESIGN ARTIFACTS
              </span>
              <div className="space-y-2">
                {/* Link 1: Penpot Master File */}
                <a
                  href="https://design.penpot.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#D8D1BD] hover:border-[#006E5E] hover:bg-[#F2FEDC]/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[#006E5E]" />
                    <div>
                      <span className="text-xs font-bold text-[#241D00] block group-hover:text-[#006E5E]">
                        Penpot Master Design Workspace
                      </span>
                      <span className="text-[10px] font-mono text-[#6E5E30]">
                        Single source of truth canvas with all 19 scene boards
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#877B00] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Link 2: Live Prototype */}
                <a
                  href="https://github.com/rezkimd/re-port"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#D8D1BD] hover:border-[#006E5E] hover:bg-[#F2FEDC]/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Box className="w-4 h-4 text-[#CBB800]" />
                    <div>
                      <span className="text-xs font-bold text-[#241D00] block group-hover:text-[#006E5E]">
                        GitHub Repository & Monorepo Source
                      </span>
                      <span className="text-[10px] font-mono text-[#6E5E30]">
                        Turborepo, React 19, TypeScript strict configuration
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#877B00] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Link 3: UI Component Library */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#D8D1BD] hover:border-[#006E5E] hover:bg-[#F2FEDC]/40 transition-all group">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#E07A5F]" />
                    <div>
                      <span className="text-xs font-bold text-[#241D00] block">
                        Desk Room SVG Subcomponents
                      </span>
                      <span className="text-[10px] font-mono text-[#6E5E30]">
                        Architecture, DeskStructure, InteractiveHotspots
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#3A2F00]/10 text-[#3A2F00]">
                    LOCAL
                  </span>
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
  );
};
