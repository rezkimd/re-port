import React, { useState } from "react";
import { X, ExternalLink, Play, Sparkles, Server, Activity, Shield } from "lucide-react";
import type { AppItem } from "./types";

interface AppShowcaseWizardProps {
  app: AppItem;
  onClose: () => void;
  onLaunchServer: () => void;
  serverState: "idle" | "starting" | "ready";
}

type TabType = "overview" | "architecture" | "simulation";

export const AppShowcaseWizard: React.FC<AppShowcaseWizardProps> = ({
  app,
  onClose,
  onLaunchServer,
  serverState,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  return (
    <div className="relative w-full max-w-4xl bg-[#1E1905]/95 backdrop-blur-xl rounded-2xl border-4 border-[#CBB800] shadow-2xl text-white overflow-hidden flex flex-col select-none animate-in zoom-in-95 duration-200">
      {/* macOS Window Title Bar */}
      <div className="bg-[#2C240A] px-6 py-3.5 flex items-center justify-between border-b-2 border-[#CBB800]/40">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:opacity-80 transition-opacity cursor-pointer"
            title="Close"
          />
          <button
            onClick={() => setActiveTab("overview")}
            className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] hover:opacity-80 transition-opacity cursor-pointer"
            title="Reset"
          />
          <button
            className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29] hover:opacity-80 transition-opacity cursor-pointer"
            title="Maximize"
          />
          <span className="text-xs font-mono text-[#F5EE99] font-bold ml-3 truncate">
            {app.title}
          </span>
        </div>

        {/* Action Header Pill */}
        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded ${app.tagColor}`}>
            {app.tag}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stepper Navigation Bar */}
      <div className="bg-[#241D00] px-6 py-2 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === "overview"
              ? "bg-[#CBB800] text-[#241D00] shadow"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          1. OVERVIEW & PROBLEM
        </button>

        <button
          onClick={() => setActiveTab("architecture")}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === "architecture"
              ? "bg-[#CBB800] text-[#241D00] shadow"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          2. SYSTEM ARCHITECTURE
        </button>

        <button
          onClick={() => setActiveTab("simulation")}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === "simulation"
              ? "bg-[#CBB800] text-[#241D00] shadow"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          3. LIVE SIMULATION & METRICS
        </button>
      </div>

      {/* Wizard Body Content */}
      <div className="p-6 md:p-8 max-h-[68vh] overflow-y-auto space-y-6 select-text">
        {/* TAB 1: OVERVIEW & PROBLEM */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#CBB800] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>PROJECT SYNOPSIS</span>
              </div>
              <h3 className="font-sans font-black text-2xl text-white tracking-tight">
                {app.title}
              </h3>
              <p className="text-sm text-[#F2FEDC]/90 mt-2 leading-relaxed">
                {app.shortDesc}
              </p>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-red-500/30 space-y-2">
                <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider block">
                  ⚠️ THE ENGINEERING PROBLEM
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {app.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-[#29A18D]/40 space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#29A18D] uppercase tracking-wider block">
                  💡 THE ARCHITECTURAL SOLUTION
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {app.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <span className="text-[10px] font-mono font-bold text-[#F5EE99] uppercase tracking-wider block mb-2">
                PRODUCTION TECH STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {app.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs font-mono font-bold text-[#F2FEDC]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEM ARCHITECTURE */}
        {activeTab === "architecture" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#CBB800] font-bold uppercase tracking-wider mb-1">
                <Server className="w-4 h-4" />
                <span>END-TO-END DATA FLOW</span>
              </div>
              <h3 className="font-sans font-black text-xl text-white tracking-tight">
                Distributed Microservice Execution Pipeline
              </h3>
            </div>

            {/* 4 Architecture Steps */}
            <div className="space-y-3">
              {app.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-4 hover:border-[#CBB800]/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#CBB800]/20 text-[#CBB800] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">{item.step}</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: LIVE SIMULATION & METRICS */}
        {activeTab === "simulation" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#CBB800] font-bold uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4" />
                <span>BENCHMARK METRICS & LIVE TESTBED</span>
              </div>
              <h3 className="font-sans font-black text-xl text-white tracking-tight">
                Production Performance & Simulated Telemetry
              </h3>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {app.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 text-center">
                  <span className="text-2xl font-black text-[#CBB800] block">{m.value}</span>
                  <span className="text-[10px] font-mono text-gray-400 mt-1 block uppercase tracking-wider">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Live Queue / System Status Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#00473D] to-[#006E5E] border-2 border-[#29A18D] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#29A18D] animate-ping" />
                  <span className="text-xs font-mono font-bold text-[#F2FEDC] uppercase">
                    SIMULATION TESTBED READY
                  </span>
                </div>
                <h4 className="font-sans font-bold text-base text-white">
                  Test Server Deployment & Socket Connection
                </h4>
                <p className="text-xs text-gray-200 max-w-md">
                  Jalankan simulasi deployment kontainer untuk memicu sinyal WebSocket real-time dan notifikasi sistem online.
                </p>
              </div>

              <button
                onClick={onLaunchServer}
                disabled={serverState === "starting"}
                className={`px-6 py-3 rounded-xl font-sans font-bold text-sm shadow-xl flex items-center gap-2 transition-all cursor-pointer active:scale-95 ${
                  serverState === "starting"
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : serverState === "ready"
                    ? "bg-[#29A18D] text-white hover:bg-[#208372]"
                    : "bg-[#CBB800] text-[#241D00] hover:bg-[#F5EE99]"
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {serverState === "starting"
                    ? "STARTING DAEMON..."
                    : serverState === "ready"
                    ? "RE-LAUNCH TEST INSTANCE"
                    : "LAUNCH DEMO SERVER"}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Actions */}
      <div className="bg-[#241D00] px-6 py-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <Shield className="w-3.5 h-3.5 text-[#CBB800]" />
          <span>PRODUCTION-GRADE CODEBASE</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={app.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-sans font-bold text-xs transition-colors"
          >
            <span>Inspect GitHub Repo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
