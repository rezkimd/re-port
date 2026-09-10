import React from "react";
import { ArrowLeft, Award, Download, CheckCircle, ShieldCheck } from "lucide-react";

interface CertificationFolderViewProps {
  onBack: () => void;
}

export const CertificationFolderView: React.FC<CertificationFolderViewProps> = ({ onBack }) => {
  const credentials = [
    {
      code: "AWS-SAA-C03",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024 - 2027",
      status: "VERIFIED",
    },
    {
      code: "PSM-I",
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "Lifetime Credential",
      status: "VERIFIED",
    },
    {
      code: "ODOO-DEV-16",
      title: "Certified Odoo ERP Specialist",
      issuer: "Odoo S.A.",
      date: "2023 - Present",
      status: "OFFICIAL",
    },
  ];

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
            <span className="w-2.5 h-2.5 rounded-full bg-[#CBB800] ring-2 ring-[#CBB800]/20" />
            <span className="text-xs font-mono font-black tracking-wider text-[#241D00] uppercase">
              FILE 04 // OFFICIAL CERTIFICATIONS & CREDENTIALS
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

        {/* Folder Interior Layout (Constrained & Scrollable Internally) */}
        <div className="p-4 md:p-6 flex-1 min-h-0 overflow-y-auto space-y-4 bg-gradient-to-b from-[#DFD2AC] via-[#E4D7B3] to-[#DFD2AC]">
          
          {/* UPPER FOLDER SECTION: Credentials Overview & Badges */}
          <div className="border-b-2 border-[#8C7A4B]/40 pb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#5C4B08] uppercase tracking-widest">
                  <span>📁 DOSSIER 04</span>
                  <span>•</span>
                  <span>INDUSTRY VERIFICATION</span>
                </div>
                <h3 className="font-sans font-black text-base md:text-lg text-[#241D00] tracking-tight mt-0.5">
                  Verified Industry Certifications
                </h3>
                <p className="text-[11px] font-mono text-[#5C4B08]">
                  Standardized competencies in cloud architecture, ERP development, and agile delivery.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#006E5E] bg-[#F2FEDC] px-3 py-1 rounded-full border border-[#006E5E]/30 flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
                <span>3 VERIFIED CREDENTIALS</span>
              </div>
            </div>

            {/* 3 Credential Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              {credentials.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#FAF6EB] border-2 border-[#8C7A4B]/40 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#877B00]">{c.code}</span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#006E5E]/10 text-[#006E5E]">
                        {c.status}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-[#241D00] leading-tight">{c.title}</h4>
                    <span className="text-[10px] text-[#5C4B08] block mt-0.5">{c.issuer}</span>
                  </div>
                  <div className="text-[9px] font-mono text-[#8C8267] mt-2 border-t border-[#8C7A4B]/30 pt-1">
                    VALIDITY: {c.date}
                  </div>
                </div>
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

          {/* LOWER FOLDER SECTION: Official Certificate Frame on Vintage Parchment */}
          <div className="relative bg-[#FFFDF5] rounded-2xl border-4 border-[#CBB800] p-5 md:p-7 shadow-2xl space-y-4 select-text overflow-hidden">
          {/* Dual Gold Filigree Border Accent */}
          <div className="absolute inset-2 border border-[#877B00]/40 rounded-xl pointer-events-none" />

          {/* Certificate Heading */}
          <div className="text-center space-y-1 relative z-10">
            <div className="w-10 h-10 rounded-full bg-[#CBB800]/20 text-[#877B00] flex items-center justify-center mx-auto mb-1">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#241D00] tracking-wider uppercase">
              Certificate of Professional Excellence
            </h2>
            <p className="text-xs font-mono text-[#5C4B08] tracking-widest uppercase">
              THIS RECOGNITION IS OFFICIALLY CONFERRED UPON
            </p>
          </div>

          {/* Recipient Name in Signature Calligraphy Vibe */}
          <div className="text-center relative z-10 py-2 border-b-2 border-dashed border-[#B5BF9E] max-w-md mx-auto">
            <h1 className="font-['Caveat',cursive] text-4xl md:text-5xl font-bold text-[#006E5E]">
              Rezki Mochamad Dahlan
            </h1>
            <p className="text-xs font-mono text-[#3A2F00] mt-1 font-semibold">
              FOR OUTSTANDING CAPABILITY IN FULLSTACK CLOUD ARCHITECTURE & ENTERPRISE SYSTEMS
            </p>
          </div>

          {/* Certificate Bottom Row: Wax Seal & Metadata */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Metadata Info */}
            <div className="text-left text-[11px] font-mono text-[#5C4B08] space-y-0.5">
              <div><span className="font-bold text-[#241D00]">CREDENTIAL ID:</span> REZKI-CERT-2026-09</div>
              <div><span className="font-bold text-[#241D00]">ISSUED ON:</span> OCTOBER 2026 • GLOBAL VERIFICATION</div>
              <div className="flex items-center gap-1 text-[#006E5E] font-bold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>CRYPTOGRAPHIC SIGNATURE CONFIRMED</span>
              </div>
            </div>

            {/* Official Gold Wax Seal with Ribbons */}
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#F5EE99] via-[#CBB800] to-[#877B00] border-2 border-[#3A2F00] shadow-xl flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#5C4B08] flex flex-col items-center justify-center text-center bg-[#CBB800]">
                  <span className="text-[8px] font-mono font-black text-[#241D00]">OFFICIAL</span>
                  <span className="font-serif font-black text-xs text-[#241D00]">SEAL</span>
                </div>
              </div>
              {/* Ribbon tails */}
              <div className="flex gap-1 -mt-1">
                <div className="w-3 h-5 bg-[#A82824] rotate-[-15deg] shadow" />
                <div className="w-3 h-5 bg-[#A82824] rotate-[15deg] shadow" />
              </div>
            </div>

            {/* Actions: Download PDF & Verify */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-[#CBB800] text-[#241D00] font-sans font-bold text-xs hover:bg-[#F5EE99] transition-all border-2 border-[#3A2F00] shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD CERTIFICATE PDF</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
