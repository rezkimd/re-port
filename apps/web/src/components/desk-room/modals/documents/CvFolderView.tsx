import React, { useState } from "react";
import { ArrowLeft, Download, Check, Paperclip, FileText, Printer } from "lucide-react";

interface CvFolderViewProps {
  onBack: () => void;
}

export const CvFolderView: React.FC<CvFolderViewProps> = ({ onBack }) => {
  // Checklist toggles as designed in Penpot Scene 05-01-01
  const [atsMode, setAtsMode] = useState(true);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showOrg, setShowOrg] = useState(true);
  const [showWork, setShowWork] = useState(true);
  const [showIntern, setShowIntern] = useState(true);
  const [showEdu, setShowEdu] = useState(true);

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
            <span className="w-2 h-2 rounded-full bg-[#006E5E]" />
            <span>FILE 01 // CURRICULUM VITAE</span>
          </div>
        </div>

        {/* MANILA FOLDER CHASSIS */}
        <div className="relative flex-1 min-h-0 bg-[#DFD2AC] rounded-2xl border-4 border-[#8C7A4B] shadow-2xl overflow-hidden flex flex-col">
          {/* Subtle Top Brass Corner Brackets */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#CBB800]/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#CBB800]/50 pointer-events-none" />

          {/* Interior Workspace Layout: Left Flap, Center Spine Crease, Right Flap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-0 relative bg-gradient-to-r from-[#DFD2AC] via-[#E4D7B3] to-[#DFD2AC] overflow-hidden">
            
            {/* =================================================================
                LEFT FLAP (5 cols):
                CHECKLIST DITULIS LANGSUNG DI ATAS HAMPARAN FILE COKLAT (INTERNAL SCROLL)
            ================================================================= */}
            <div className="lg:col-span-5 h-full min-h-0 overflow-y-auto p-4 md:p-6 flex flex-col justify-between space-y-4">
              {/* Header written/stamped directly on the brown folder surface */}
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#5C4B08] uppercase tracking-widest border-b-2 border-[#8C7A4B]/40 pb-2">
                  <span>📁 DOSSIER SPECIFICATION</span>
                  <span className="text-[#006E5E] bg-[#006E5E]/10 px-2 py-0.5 rounded">
                    OFFICIAL ARCHIVE
                  </span>
                </div>

                <div className="mt-2.5">
                  <h3 className="font-sans font-black text-lg md:text-xl text-[#241D00] tracking-tight">
                    Resume Generator Controls
                  </h3>
                  <p className="text-xs font-mono text-[#4A3D0B] mt-1 leading-relaxed">
                    Centang bagian resume yang ingin disertakan. Modifikasi langsung tercetak pada kertas putih HVS di sebelah kanan:
                  </p>
                </div>
              </div>

              {/* Checklist Items: Rendered directly on the brown kraft folder */}
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] font-mono font-black tracking-wider uppercase text-[#3A2F00] block mb-1.5 border-b border-[#8C7A4B]/30 pb-1">
                  DAFTAR BAGIAN CV // SECTION TOGGLES
                </span>

                {/* Toggle 1: ATS Formatting */}
                <button
                  type="button"
                  onClick={() => setAtsMode(!atsMode)}
                  className="w-full flex items-start gap-3 p-1.5 md:p-2 rounded-lg hover:bg-black/5 transition-colors text-left cursor-pointer group"
                >
                  <div
                    className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded border-2 flex items-center justify-center transition-all ${
                      atsMode
                        ? "border-[#3A2F00] bg-[#3A2F00] text-[#F2FEDC]"
                        : "border-[#5C4B08] bg-transparent"
                    }`}
                  >
                    {atsMode && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans font-bold text-[#241D00] group-hover:text-black">
                        ATS Standard Formatting
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#006E5E]">
                        {atsMode ? "[ AKTIF ]" : "[ STANDAR ]"}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[#5C4B08] leading-tight mt-0.5">
                      Tipografi bersih & ramah scanner mesin rekruter
                    </p>
                  </div>
                </button>

                <div className="w-full h-px bg-[#8C7A4B]/25" />

                {/* Toggle 2: Profile Photo */}
                <button
                  type="button"
                  onClick={() => setShowPhoto(!showPhoto)}
                  className="w-full flex items-start gap-3 p-1.5 md:p-2 rounded-lg hover:bg-black/5 transition-colors text-left cursor-pointer group"
                >
                  <div
                    className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded border-2 flex items-center justify-center transition-all ${
                      showPhoto
                        ? "border-[#3A2F00] bg-[#3A2F00] text-[#F2FEDC]"
                        : "border-[#5C4B08] bg-transparent"
                    }`}
                  >
                    {showPhoto && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans font-bold text-[#241D00] group-hover:text-black">
                        Sertakan Foto Profil
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#5C4B08]">
                        {showPhoto ? "[ TAMPIL ]" : "[ SEMBUNYI ]"}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[#5C4B08] leading-tight mt-0.5">
                      Foto formal di bagian kepala resume (non-ATS)
                    </p>
                  </div>
                </button>

                <div className="w-full h-px bg-[#8C7A4B]/25" />

                {/* Toggle 3: Professional Work Experience */}
                <button
                  type="button"
                  onClick={() => setShowWork(!showWork)}
                  className="w-full flex items-start gap-3 p-1.5 md:p-2 rounded-lg hover:bg-black/5 transition-colors text-left cursor-pointer group"
                >
                  <div
                    className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded border-2 flex items-center justify-center transition-all ${
                      showWork
                        ? "border-[#3A2F00] bg-[#3A2F00] text-[#F2FEDC]"
                        : "border-[#5C4B08] bg-transparent"
                    }`}
                  >
                    {showWork && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans font-bold text-[#241D00] group-hover:text-black">
                        Pengalaman Kerja Profesional
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#006E5E]">
                        {showWork ? "[ ON ]" : "[ OFF ]"}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[#5C4B08] leading-tight mt-0.5">
                      Lead ERP & Fullstack Engineer roles
                    </p>
                  </div>
                </button>

                <div className="w-full h-px bg-[#8C7A4B]/25" />

                {/* Toggle 4: Internship & Research */}
                <button
                  type="button"
                  onClick={() => setShowIntern(!showIntern)}
                  className="w-full flex items-start gap-3 p-1.5 md:p-2 rounded-lg hover:bg-black/5 transition-colors text-left cursor-pointer group"
                >
                  <div
                    className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded border-2 flex items-center justify-center transition-all ${
                      showIntern
                        ? "border-[#3A2F00] bg-[#3A2F00] text-[#F2FEDC]"
                        : "border-[#5C4B08] bg-transparent"
                    }`}
                  >
                    {showIntern && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans font-bold text-[#241D00] group-hover:text-black">
                        Magang & Riset Laboratorium
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#006E5E]">
                        {showIntern ? "[ ON ]" : "[ OFF ]"}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[#5C4B08] leading-tight mt-0.5">
                      Proyek IoT Automation & MQTT sensor telemetry
                    </p>
                  </div>
                </button>

                <div className="w-full h-px bg-[#8C7A4B]/25" />

                {/* Toggle 5: Organization & Leadership */}
                <button
                  type="button"
                  onClick={() => setShowOrg(!showOrg)}
                  className="w-full flex items-start gap-3 p-1.5 md:p-2 rounded-lg hover:bg-black/5 transition-colors text-left cursor-pointer group"
                >
                  <div
                    className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded border-2 flex items-center justify-center transition-all ${
                      showOrg
                        ? "border-[#3A2F00] bg-[#3A2F00] text-[#F2FEDC]"
                        : "border-[#5C4B08] bg-transparent"
                    }`}
                  >
                    {showOrg && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans font-bold text-[#241D00] group-hover:text-black">
                        Organisasi & Kepemimpinan
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#006E5E]">
                        {showOrg ? "[ ON ]" : "[ OFF ]"}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[#5C4B08] leading-tight mt-0.5">
                      Ketua Divisi Riset Software Engineering Club
                    </p>
                  </div>
                </button>

                <div className="w-full h-px bg-[#8C7A4B]/25" />

                {/* Toggle 6: Formal Education */}
                <button
                  type="button"
                  onClick={() => setShowEdu(!showEdu)}
                  className="w-full flex items-start gap-3 p-1.5 md:p-2 rounded-lg hover:bg-black/5 transition-colors text-left cursor-pointer group"
                >
                  <div
                    className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded border-2 flex items-center justify-center transition-all ${
                      showEdu
                        ? "border-[#3A2F00] bg-[#3A2F00] text-[#F2FEDC]"
                        : "border-[#5C4B08] bg-transparent"
                    }`}
                  >
                    {showEdu && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans font-bold text-[#241D00] group-hover:text-black">
                        Pendidikan Formal
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#006E5E]">
                        {showEdu ? "[ ON ]" : "[ OFF ]"}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[#5C4B08] leading-tight mt-0.5">
                      B.Sc. In Computer Science (Telkom University)
                    </p>
                  </div>
                </button>
              </div>

              {/* Print action stamped directly on folder */}
              <div className="pt-2 flex-shrink-0">
                <button
                  onClick={() => window.print()}
                  className="w-full py-2.5 md:py-3 rounded-xl bg-[#CBB800] hover:bg-[#D9C600] text-[#241D00] font-sans font-bold text-xs transition-all border-2 border-[#3A2F00] shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Printer className="w-4 h-4" />
                  <span>CETAK / SIMPAN RESUME PDF (HVS)</span>
                </button>
              </div>
            </div>

            {/* =================================================================
                CENTER SPINE CREASE (LIPATAN FILE HOLDER DENGAN PENJEPIT LOGAM)
            ================================================================= */}
            <div className="hidden lg:flex lg:col-span-1 h-full min-h-0 flex-col items-center justify-between py-6 bg-gradient-to-r from-black/15 via-[#C5B484] to-black/15 border-x border-[#8C7A4B]/50 shadow-inner relative flex-shrink-0">
              {/* Top Metal Fastener Clamp */}
              <div className="w-6 h-3 bg-[#8C7A4B] rounded-sm border border-[#3A2F00] shadow flex items-center justify-center">
                <div className="w-4 h-1 bg-[#CBB800] rounded-xs" />
              </div>

              {/* Vertical Fold Crease Line */}
              <div className="w-0.5 h-full bg-[#8C7A4B]/40 my-3 relative">
                <div className="absolute top-1/4 -left-1 w-2.5 h-2.5 rounded-full border border-[#8C7A4B] bg-[#DFD2AC]" />
                <div className="absolute top-2/4 -left-1 w-2.5 h-2.5 rounded-full border border-[#8C7A4B] bg-[#DFD2AC]" />
                <div className="absolute top-3/4 -left-1 w-2.5 h-2.5 rounded-full border border-[#8C7A4B] bg-[#DFD2AC]" />
              </div>

              {/* Bottom Metal Fastener Clamp */}
              <div className="w-6 h-3 bg-[#8C7A4B] rounded-sm border border-[#3A2F00] shadow flex items-center justify-center">
                <div className="w-4 h-1 bg-[#CBB800] rounded-xs" />
              </div>
            </div>

            {/* =================================================================
                RIGHT FLAP (6 cols):
                KERTAS PUTIH HVS BERSIH (SCROLL INTERNAL DI DALAM KERTAS)
            ================================================================= */}
            <div className="lg:col-span-6 h-full min-h-0 p-3 md:p-5 flex items-center justify-center overflow-hidden">
              
              {/* HVS PAPER CONTAINER */}
              <div className="relative w-full h-full max-h-full flex flex-col bg-white rounded-xs border border-neutral-200 shadow-xl overflow-hidden">
                {/* Silver Paper Binder Clip */}
                <div className="flex-shrink-0 flex justify-center -mt-0.5 z-20 pointer-events-none">
                  <div className="w-12 h-3 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 rounded-b-sm border border-neutral-500 shadow-sm" />
                </div>

                {/* HVS RESUME CONTENT (INTERNAL SCROLLABLE ONLY) */}
                <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-6 select-text space-y-3.5 text-neutral-900">
                  {/* Header */}
                  <div className="border-b-2 border-neutral-900 pb-3 flex items-start justify-between">
                    <div>
                      <h2 className="font-sans font-black text-2xl text-black tracking-tight">
                        REZKI MOCHAMAD DAHLAN
                      </h2>
                      <p className="font-mono text-xs font-bold text-[#006E5E] tracking-wider uppercase mt-0.5">
                        Fullstack Web Engineer & ERP Systems Architect
                      </p>
                      <div className="flex flex-wrap gap-2 text-[10px] font-mono text-neutral-600 mt-1.5">
                        <span>Bandung, ID</span>
                        <span>•</span>
                        <span>rezkimd@gmail.com</span>
                        <span>•</span>
                        <span>github.com/rezkind</span>
                      </div>
                    </div>

                    {showPhoto && (
                      <div className="w-14 h-14 rounded bg-neutral-900 border-2 border-[#CBB800] flex items-center justify-center text-white text-xl shadow flex-shrink-0">
                        👨‍💻
                      </div>
                    )}
                  </div>

                  {/* 1. Executive Summary */}
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-black border-b border-neutral-300 pb-0.5 mb-1.5">
                      1. EXECUTIVE SUMMARY
                    </h4>
                    <p className="text-xs text-neutral-800 leading-relaxed text-justify">
                      Software engineer dengan keahlian dalam arsitektur Fullstack (React 19, TypeScript strict, TanStack suite) serta implementasi sistem ERP enterprise (Odoo, Python, PostgreSQL). Berpengalaman mengoptimalkan rantai pasok dan automasi proses bisnis terintegrasi.
                    </p>
                  </div>

                  {/* 2. Professional Experience */}
                  {showWork && (
                    <div>
                      <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-black border-b border-neutral-300 pb-0.5 mb-1.5">
                        2. PROFESSIONAL EXPERIENCE
                      </h4>
                      <div className="space-y-2.5">
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold text-neutral-900">
                            <span>Senior ERP Architect // Kalla Group</span>
                            <span className="font-mono text-[10px] text-neutral-600">2023 - Present</span>
                          </div>
                          <ul className="list-disc list-inside text-[11px] text-neutral-700 mt-0.5 space-y-0.5">
                            <li>Memimpin re-arsitektur modul procurement Odoo 16 untuk ribuan transaksi harian.</li>
                            <li>Mengurangi query latency database PostgreSQL sebesar 42% melalui indexing tepat.</li>
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-xs font-bold text-neutral-900">
                            <span>Fullstack Engineer // Digital Innovation Lab</span>
                            <span className="font-mono text-[10px] text-neutral-600">2021 - 2023</span>
                          </div>
                          <ul className="list-disc list-inside text-[11px] text-neutral-700 mt-0.5 space-y-0.5">
                            <li>Mengembangkan antarmuka monitoring antrean real-time berbasis WebSockets.</li>
                            <li>Menerapkan Turborepo monorepo & Zod contract validation untuk API keamanan tinggi.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. Core Technical Skills */}
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-black border-b border-neutral-300 pb-0.5 mb-1.5">
                      3. CORE TECHNICAL SKILLS
                    </h4>
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-900 font-bold">
                        React 19 & TypeScript
                      </span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-900 font-bold">
                        Odoo 16/18 & Python
                      </span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-900">
                        PostgreSQL & Redis
                      </span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-900">
                        Tailwind CSS v4
                      </span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-900">
                        Docker & CI/CD
                      </span>
                    </div>
                  </div>

                  {/* 4. Education & Additional Credentials */}
                  {(showIntern || showEdu || showOrg) && (
                    <div>
                      <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-black border-b border-neutral-300 pb-0.5 mb-1.5">
                        4. EDUCATION & ADDITIONAL CREDENTIALS
                      </h4>
                      <div className="text-[11px] text-neutral-800 space-y-1">
                        {showEdu && (
                          <div className="flex justify-between font-medium">
                            <span>B.Sc. In Computer Science — Telkom University</span>
                            <span className="font-mono text-neutral-600">IPK: 3.82 / 4.00</span>
                          </div>
                        )}
                        {showIntern && (
                          <div className="text-[10px] text-neutral-600">
                            • IoT Automation Intern: Perancangan gateway MQTT & sensor telemetri.
                          </div>
                        )}
                        {showOrg && (
                          <div className="text-[10px] text-neutral-600">
                            • Ketua Divisi Riset Software Engineering Club (2020 - 2021).
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
