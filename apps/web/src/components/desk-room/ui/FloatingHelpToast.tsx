import React from "react";
import { X, Sparkles } from "lucide-react";

interface FloatingHelpToastProps {
  showHelp: boolean;
  onDismiss: () => void;
}

export const FloatingHelpToast: React.FC<FloatingHelpToastProps> = ({ showHelp, onDismiss }) => {
  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92vw] max-w-lg transition-all duration-700 ease-out transform ${
        showHelp
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      <div className="relative px-6 py-4 rounded-2xl bg-[#241D00]/92 border-2 border-[#CBB800] backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.65)] text-center">
        <button
          onClick={onDismiss}
          className="absolute top-3 right-3 p-1 rounded-full text-[#CBB800] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Tutup Pesan"
          aria-label="Tutup Pesan"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#CBB800] animate-pulse" />
            <h2 className="font-['Caveat',cursive] text-2xl md:text-3xl font-bold text-[#F5EE99] tracking-wide leading-snug">
              Halo! Selamat Datang di Meja Kerja Rezki
            </h2>
            <Sparkles className="w-5 h-5 text-[#CBB800] animate-pulse" />
          </div>

          <p className="font-['Caveat',cursive] text-lg md:text-xl text-[#F2FEDC] leading-snug">
            Silakan klik objek di sekeliling meja untuk menjelajahi portofolio, demo apps, jurnal, dan kontak saya ✨
          </p>

          {/* Mobile swipe hint */}
          <p className="font-['Caveat',cursive] text-base text-[#D5E8B3] mt-1 portrait:max-md:block hidden">
            👉 Geser layar ke samping untuk menjelajahi seluruh meja
          </p>
        </div>
      </div>
    </div>
  );
};
