import React, { useState } from "react";
import { X, Download } from "lucide-react";

interface DynamicCvModalProps {
  onClose: () => void;
}

export const DynamicCvModal: React.FC<DynamicCvModalProps> = ({ onClose }) => {
  const [cvCategory, setCvCategory] = useState<"erp" | "fullstack" | "backend">("erp");

  return (
    <div className="relative w-full max-w-3xl rounded-2xl bg-white border-4 border-[#3A2F00] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
      <div className="flex items-center justify-between px-6 py-4 bg-[#3A2F00] text-white">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📁</span>
          <h2 className="font-sans font-bold text-lg text-[#CBB800]">DYNAMIC CV & RESUME GENERATOR</h2>
        </div>
        <button onClick={onClose} className="p-1 rounded bg-[#CBB800] text-[#241D00] font-bold text-sm hover:bg-[#F5EE99]">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setCvCategory("erp")}
            className={`px-4 py-2 rounded-lg font-sans font-bold text-sm transition-colors ${
              cvCategory === "erp"
                ? "bg-[#CBB800] text-[#241D00] border-2 border-[#3A2F00]"
                : "bg-[#F2FEDC] text-[#3A2F00] hover:bg-[#D5E8B3]"
            }`}
          >
            📁 ERP & Business Solutions
          </button>
          <button
            onClick={() => setCvCategory("fullstack")}
            className={`px-4 py-2 rounded-lg font-sans font-bold text-sm transition-colors ${
              cvCategory === "fullstack"
                ? "bg-[#006E5E] text-white border-2 border-[#3A2F00]"
                : "bg-[#F2FEDC] text-[#3A2F00] hover:bg-[#D5E8B3]"
            }`}
          >
            📁 Fullstack Web & Cloud
          </button>
          <button
            onClick={() => setCvCategory("backend")}
            className={`px-4 py-2 rounded-lg font-sans font-bold text-sm transition-colors ${
              cvCategory === "backend"
                ? "bg-[#E07A5F] text-white border-2 border-[#3A2F00]"
                : "bg-[#F2FEDC] text-[#3A2F00] hover:bg-[#D5E8B3]"
            }`}
          >
            📁 Backend & Microservices
          </button>
        </div>

        {/* Dynamic Resume Preview Card */}
        <div className="p-6 rounded-xl border-2 border-[#006E5E] bg-[#F2FEDC] text-[#241D00] space-y-4">
          <div className="flex items-start justify-between border-b border-[#B5BF9E] pb-4">
            <div>
              <h3 className="text-2xl font-bold">Rezki Mochamad Dahlan</h3>
              <p className="text-sm font-mono text-[#006E5E] font-semibold">
                {cvCategory === "erp" && "Specialization: Odoo ERP & Enterprise Architecture"}
                {cvCategory === "fullstack" && "Specialization: Fullstack React 19, TypeScript & SSG"}
                {cvCategory === "backend" && "Specialization: Go, Python, Microservices & IoT"}
              </p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded bg-[#CBB800] text-[#241D00]">READY TO HIRE</span>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-[#3A2F00] tracking-wider mb-2">Core Tech Stack</h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {cvCategory === "erp" && (
                <>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">Odoo 16/18</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">Python</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">Docker Swarm</span>
                </>
              )}
              {cvCategory === "fullstack" && (
                <>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">React 19</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">TypeScript Strict</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">Tailwind CSS</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">TanStack Suite</span>
                </>
              )}
              {cvCategory === "backend" && (
                <>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">Go (Golang)</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">Redis Queues</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">MQTT IoT</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-[#3A2F00]">Zod Schema Contracts</span>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-[#3A2F00] tracking-wider mb-1">Key Achievements</h4>
            <p className="text-sm text-gray-800 leading-relaxed">
              Terbukti membangun sistem otomatisasi ERP custom untuk enterprise procurement, arsitektur portfolio
              dengan performa score 100 di Vercel SSG, dan juara 1 national hackathon dengan prototipe IoT terintegrasi.
            </p>
          </div>
        </div>

        {/* Print Action */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#CBB800] text-[#241D00] font-sans font-bold text-sm hover:bg-[#F5EE99] transition-colors border-2 border-[#3A2F00] shadow-md"
          >
            <Download className="w-4 h-4" /> PRINT / SAVE PDF RESUME
          </button>
        </div>
      </div>
    </div>
  );
};
