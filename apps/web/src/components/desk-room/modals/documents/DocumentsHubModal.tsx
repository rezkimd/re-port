import React, { useState, useEffect } from "react";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { IsometricBindersShowcase } from "./IsometricBindersShowcase";
import { CvFolderView } from "./CvFolderView";
import { DesignChamberFolderView } from "./DesignChamberFolderView";
import { PresentationFolderView } from "./PresentationFolderView";
import { CertificationFolderView } from "./CertificationFolderView";

interface DocumentsHubModalProps {
  onClose: () => void;
  initialFolder?: "cv" | "design" | "presentation" | "certification" | null;
}

type FolderType = "cv" | "design" | "presentation" | "certification";

export const DocumentsHubModal: React.FC<DocumentsHubModalProps> = ({
  onClose,
  initialFolder = null,
}) => {
  const [activeFolder, setActiveFolder] = useState<FolderType | null>(initialFolder);
  const [showHint, setShowHint] = useState(true);

  // Auto-hide hint banner after 3.8 seconds as requested
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeFolder) {
          setActiveFolder(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeFolder, onClose]);

  // If a specific manila folder is open, render that sub-view
  if (activeFolder === "cv") {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-[#2E200C]/90 via-[#241708]/92 to-[#140C04]/96 backdrop-blur-md p-3 md:p-5 flex items-center justify-center animate-in fade-in duration-200">
        <CvFolderView onBack={() => setActiveFolder(null)} />
      </div>
    );
  }
  if (activeFolder === "design") {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-[#2E200C]/90 via-[#241708]/92 to-[#140C04]/96 backdrop-blur-md p-3 md:p-5 flex items-center justify-center animate-in fade-in duration-200">
        <DesignChamberFolderView onBack={() => setActiveFolder(null)} />
      </div>
    );
  }
  if (activeFolder === "presentation") {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-[#2E200C]/90 via-[#241708]/92 to-[#140C04]/96 backdrop-blur-md p-3 md:p-5 flex items-center justify-center animate-in fade-in duration-200">
        <PresentationFolderView onBack={() => setActiveFolder(null)} />
      </div>
    );
  }
  if (activeFolder === "certification") {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-[#2E200C]/90 via-[#241708]/92 to-[#140C04]/96 backdrop-blur-md p-3 md:p-5 flex items-center justify-center animate-in fade-in duration-200">
        <CertificationFolderView onBack={() => setActiveFolder(null)} />
      </div>
    );
  }

  // =========================================================================
  // SCENE 05-01: ROOM WALL & WOODEN DESK BACKGROUND (100% MATCH WITH PENPOT)
  // =========================================================================
  return (
    <div className="fixed inset-0 z-50 select-none flex flex-col justify-between overflow-hidden bg-[#DDEBD0]">
      {/* 1. THIN BACK BUTTON (TOP-LEFT, ONLY 1 ARROW ICON) */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-40">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm md:text-base font-mono font-bold text-[#006E5E] hover:text-[#00473D] transition-colors p-0 bg-transparent border-0 outline-none cursor-pointer group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1.5" />
          <span>kembali ke meja</span>
        </button>
      </div>

      {/* 2. TEMPORARY POPUP HINT TOAST WITH LIGHTBULB ICON (AUTO FADE-OUT) */}
      <div
        className={`absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 pointer-events-none ${
          showHint ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2.5 bg-[#3A2F00]/95 backdrop-blur-md text-[#F2FEDC] px-5 py-2.5 rounded-full border-2 border-[#CBB800] shadow-2xl">
          <Lightbulb className="w-4 h-4 text-[#CBB800] animate-pulse flex-shrink-0" />
          <span className="text-xs font-mono font-bold tracking-wider">
            PILIH BINDER UNTUK MEMBUKA DETAIL DOKUMEN
          </span>
        </div>
      </div>

      {/* 3. WALL AREA (UPPER SCREEN) WITH SHADOW GRADIENT & SUNBEAM */}
      <div className="relative flex-1 bg-[#DDEBD0] overflow-hidden">
        {/* Top Wall Shadow Gradient */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#C2D4B4] to-transparent pointer-events-none opacity-80" />

        {/* Diagonal Sunbeam from Window */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: "linear-gradient(135deg, rgba(242, 254, 220, 0.6) 0%, rgba(242, 254, 220, 0.1) 45%, transparent 70%)",
          }}
        />
      </div>

      {/* 4. DESK WALL CONTACT LINE (Dark boundary line between wall & wood desk) */}
      <div className="relative z-10 w-full h-1.5 bg-[#241D00] shadow-sm" />

      {/* 5. WOODEN DESK SURFACE (LOWER ~40% OF SCREEN) */}
      <div className="relative z-10 w-full h-[40vh] min-h-[260px] bg-gradient-to-b from-[#4A3114] via-[#38230D] to-[#241405] flex flex-col justify-between overflow-hidden shadow-inner">
        {/* Contact Shadow Gradient along Wall Line */}
        <div className="w-full h-8 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        {/* 3 Wooden Plank Lines */}
        <div className="w-full space-y-12 my-auto opacity-70 pointer-events-none">
          <div className="w-full h-[2.5px] bg-[#241405]" />
          <div className="w-full h-[2.5px] bg-[#241405]" />
          <div className="w-full h-[2.5px] bg-[#241405]" />
        </div>

        {/* Desk Front Bevel Strip */}
        <div className="w-full h-8 bg-[#4A3114] border-t-2 border-[#241D00] shadow-lg flex items-center justify-between px-8 text-[10px] font-mono text-[#8C7D64]">
          <span>REZKI WORKSPACE • ARCHIVE SHELF</span>
          <span>EST. 2026 // READY TO ENGAGE</span>
        </div>
      </div>

      {/* 6. 4 BINDERS SVG (RESTING DIRECTLY ON TOP OF THE WOODEN DESK) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[12vh] md:bottom-[14vh] z-30 w-full max-w-4xl px-4 flex items-end justify-center pointer-events-none">
        <div className="pointer-events-auto w-full">
          <IsometricBindersShowcase onSelectFolder={(f) => setActiveFolder(f)} />
        </div>
      </div>
    </div>
  );
};
