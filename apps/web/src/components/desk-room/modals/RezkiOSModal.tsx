import React from "react";
import { X, ExternalLink } from "lucide-react";

interface RezkiOSModalProps {
  onClose: () => void;
}

export const RezkiOSModal: React.FC<RezkiOSModalProps> = ({ onClose }) => {
  const apps = [
    {
      title: "ERP Odoo Custom Module",
      stack: "Python • PostgreSQL • Odoo 18",
      desc: "Warehouse & procurement automation with real-time barcode sync & ledger hooks.",
      tag: "ENTERPRISE",
      tagColor: "bg-[#CBB800] text-[#241D00]",
      link: "https://github.com/rezkimd"
    },
    {
      title: "re-port Engine",
      stack: "React 19 • TypeScript • SSG",
      desc: "Interactive spatial desk workspace with vector camera zoom & dynamic printable CV.",
      tag: "FRONTEND",
      tagColor: "bg-[#29A18D] text-white",
      link: "https://github.com/rezkimd/re-port"
    },
    {
      title: "Industrial IoT Dashboard",
      stack: "Node.js • MQTT • InfluxDB",
      desc: "High frequency telemetry monitoring for industrial machinery with webhook alert triggers.",
      tag: "HARDWARE",
      tagColor: "bg-[#E07A5F] text-white",
      link: "https://github.com/rezkimd"
    },
    {
      title: "Microservice Auth Gateway",
      stack: "Go • Redis • Docker",
      desc: "Sub-5ms low latency JWT validation gateway with token bucket rate limiting.",
      tag: "BACKEND",
      tagColor: "bg-[#877B00] text-white",
      link: "https://github.com/rezkimd"
    },
    {
      title: "Smart Inventory Tracker",
      stack: "React Router v7 • Tailwind",
      desc: "Ultra-fast POS & stock movement tracker designed for multi-branch retail.",
      tag: "WEB APP",
      tagColor: "bg-[#D5E8B3] text-[#241D00]",
      link: "https://github.com/rezkimd"
    },
    {
      title: "DevOps Automated CI/CD",
      stack: "GitHub Actions • Swarm",
      desc: "Zero-downtime rolling container deployments with rollback canary guardrails.",
      tag: "INFRA",
      tagColor: "bg-white text-[#241D00]",
      link: "https://github.com/rezkimd"
    }
  ];

  return (
    <div className="relative w-full max-w-5xl rounded-2xl bg-[#00473D] border-4 border-[#CBB800] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
      {/* OS Window Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#3A2F00] border-b-2 border-[#CBB800]">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🖥️</span>
          <h2 className="font-mono font-bold text-lg text-[#CBB800] tracking-wider">
            REZKI-OS v1.0 // DEMO APPLICATIONS LAUNCHER
          </h2>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#CBB800] text-[#241D00] font-bold text-sm hover:bg-[#F5EE99] transition-colors"
        >
          <X className="w-4 h-4" /> CLOSE
        </button>
      </div>

      {/* Cards Grid */}
      <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-xl bg-white border-2 border-[#3A2F00] p-5 shadow-lg hover:-translate-y-1 transition-transform"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${app.tagColor}`}>
                  {app.tag}
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg text-[#241D00] leading-snug">{app.title}</h3>
              <p className="font-mono text-xs text-[#006E5E] mt-1 font-semibold">{app.stack}</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">{app.desc}</p>
            </div>
            <a
              href={app.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#CBB800] text-[#241D00] font-sans font-bold text-sm hover:bg-[#F5EE99] transition-colors border border-[#3A2F00]"
            >
              Launch Demo / Repo <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
