import React, { useState, useEffect } from "react";
import { ArrowLeft, Wifi, Battery, Command, Terminal, Code2, Globe, Settings, Trash2 } from "lucide-react";
import { PORTFOLIO_APPS } from "./appsData";
import type { AppItem } from "./types";

interface MacDesktopProps {
  onSelectApp: (app: AppItem) => void;
  onExitDesk: () => void;
}

export const MacDesktop: React.FC<MacDesktopProps> = ({ onSelectApp, onExitDesk }) => {
  const [time, setTime] = useState("10:30 AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl aspect-[16/10] bg-[#1A1500] rounded-2xl border-4 border-[#3A2F00] shadow-2xl overflow-hidden flex flex-col select-none">
      {/* 1. macOS Top Menu Bar */}
      <div className="h-8 bg-[#241D00]/90 backdrop-blur-md px-4 flex items-center justify-between text-white text-xs font-mono border-b border-white/10 z-20">
        {/* Left System Items */}
        <div className="flex items-center gap-4">
          <span className="text-sm cursor-pointer hover:opacity-80">🍏</span>
          <span className="font-bold text-[#CBB800]">RezkiOS</span>
          <span className="hidden sm:inline text-gray-300 hover:text-white cursor-pointer">File</span>
          <span className="hidden sm:inline text-gray-300 hover:text-white cursor-pointer">Edit</span>
          <span className="hidden sm:inline text-gray-300 hover:text-white cursor-pointer">View</span>
          <span className="hidden sm:inline text-gray-300 hover:text-white cursor-pointer">Window</span>
          <span className="hidden sm:inline text-gray-300 hover:text-white cursor-pointer">Help</span>
        </div>

        {/* Right Status & Exit Button */}
        <div className="flex items-center gap-3">
          <Wifi className="w-3.5 h-3.5 text-gray-300" />
          <div className="flex items-center gap-1 text-[11px] text-gray-300">
            <span>98%</span>
            <Battery className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-bold text-[#F5EE99]">{time}</span>

          <button
            onClick={onExitDesk}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#CBB800] text-[#241D00] font-sans font-bold text-xs hover:bg-[#F5EE99] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">EXIT TO DESK</span>
          </button>
        </div>
      </div>

      {/* 2. Scenic Mountain Wallpaper Canvas */}
      <div className="relative flex-1 bg-gradient-to-b from-[#A3D4CD] via-[#DCEFEA] to-[#A3D4CD] overflow-hidden p-6 sm:p-10 flex flex-col justify-between">
        {/* Mountain Silhouette Background */}
        <div className="absolute inset-0 pointer-events-none flex items-end">
          <svg viewBox="0 0 1200 400" className="w-full h-auto drop-shadow-2xl">
            {/* Deep Background Mountain */}
            <polygon points="0,400 180,240 380,310 590,210 820,320 1020,230 1200,340 1200,400" fill="#00473D" opacity="0.8" />
            {/* Foreground Mountain Range */}
            <polygon points="0,400 120,310 290,260 480,330 680,250 890,300 1100,270 1200,310 1200,400" fill="#006E5E" />
            {/* Base Foothill */}
            <rect x="0" y="360" width="1200" height="40" fill="#00473D" />
          </svg>
        </div>

        {/* 3. Desktop Application Folders Grid */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl">
          {PORTFOLIO_APPS.map((app) => (
            <div
              key={app.id}
              onClick={() => onSelectApp(app)}
              className="group flex flex-col items-center text-center cursor-pointer p-2.5 rounded-xl hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200 active:scale-95"
            >
              {/* Folder / App Icon Box */}
              <div className="relative w-16 h-16 rounded-2xl bg-[#3A2F00]/90 border-2 border-[#CBB800] shadow-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-[#F5EE99] transition-transform duration-200">
                <span>{app.icon}</span>
                {/* Status Dot */}
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#29A18D] border-2 border-white shadow" />
              </div>

              {/* Title Pill */}
              <div className="mt-2 px-2 py-0.5 rounded bg-[#241D00]/80 backdrop-blur-sm border border-white/20 text-white group-hover:bg-[#CBB800] group-hover:text-[#241D00] transition-colors">
                <span className="text-[11px] font-sans font-bold block truncate max-w-[110px]">
                  {app.title.split("//")[0].trim()}
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#241D00] font-bold mt-0.5 drop-shadow">
                {app.tag}
              </span>
            </div>
          ))}
        </div>

        {/* 4. Bottom Floating macOS Dock */}
        <div className="relative z-10 self-center">
          <div className="bg-[#241D00]/80 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 sm:gap-4 shadow-2xl">
            {/* Dock Icon 1: Finder */}
            <div
              onClick={() => onSelectApp(PORTFOLIO_APPS[0])}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#006E5E] to-[#00473D] border border-white/30 flex items-center justify-center text-white text-lg shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer"
              title="Kalla DMS Real-Time Queue"
            >
              📊
            </div>

            {/* Dock Icon 2: Terminal */}
            <div
              onClick={() => onSelectApp(PORTFOLIO_APPS[4])}
              className="w-10 h-10 rounded-xl bg-black border border-white/30 flex items-center justify-center text-[#29A18D] shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer"
              title="Microservice Auth Gateway"
            >
              <Terminal className="w-5 h-5" />
            </div>

            {/* Dock Icon 3: VS Code */}
            <div
              onClick={() => onSelectApp(PORTFOLIO_APPS[2])}
              className="w-10 h-10 rounded-xl bg-[#00473D] border border-white/30 flex items-center justify-center text-[#F5EE99] shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer"
              title="re-port 3D Engine"
            >
              <Code2 className="w-5 h-5" />
            </div>

            {/* Separator Line */}
            <div className="w-[1px] h-7 bg-white/20" />

            {/* Dock Icon 4: Browser */}
            <div
              onClick={() => onSelectApp(PORTFOLIO_APPS[1])}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CBB800] to-[#877B00] border border-white/30 flex items-center justify-center text-[#241D00] shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer"
              title="ERP Odoo Architecture"
            >
              <Globe className="w-5 h-5" />
            </div>

            {/* Dock Icon 5: Settings */}
            <div
              onClick={() => onSelectApp(PORTFOLIO_APPS[3])}
              className="w-10 h-10 rounded-xl bg-[#3A2F00] border border-white/30 flex items-center justify-center text-gray-300 shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer"
              title="Industrial IoT Telemetry"
            >
              <Settings className="w-5 h-5" />
            </div>

            {/* Dock Icon 6: Trash */}
            <div
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 shadow-md hover:scale-125 transition-transform duration-200 cursor-pointer"
              title="Trash"
            >
              <Trash2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
