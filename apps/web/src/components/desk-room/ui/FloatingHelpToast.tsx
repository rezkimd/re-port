import React from "react";
import { MoveRight, X } from "lucide-react";

interface FloatingHelpToastProps {
  showHelp: boolean;
  onDismiss: () => void;
}

export const FloatingHelpToast: React.FC<FloatingHelpToastProps> = ({ showHelp, onDismiss }) => {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[90vw] md:max-w-xl transition-all duration-500 transform ${
        showHelp ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <div className="px-5 py-3.5 rounded-2xl bg-[#3A2F00]/95 border-2 border-[#CBB800] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-bounce">✨</span>
          <div>
            <p className="font-sans text-xs md:text-sm font-bold text-[#F2FEDC]">
              Click any glowing banner <span className="text-[#CBB800]">(Demo Apps, CV, Journal, Contact)</span> to explore!
            </p>
            {/* Mobile swipe hint */}
            <p className="text-[11px] font-mono text-[#D5E8B3] flex items-center gap-1.5 mt-1 portrait:max-md:block hidden">
              <MoveRight className="w-3.5 h-3.5 inline text-[#CBB800] animate-pulse" /> Swipe right to pan across the workspace
            </p>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="p-1.5 rounded-full text-[#CBB800] hover:bg-white/10 transition-colors flex-shrink-0"
          title="Tutup Notifikasi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
