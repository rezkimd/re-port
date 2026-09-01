import React from "react";
import { HelpCircle } from "lucide-react";

interface HelpToggleButtonProps {
  onToggleHelp: () => void;
}

export const HelpToggleButton: React.FC<HelpToggleButtonProps> = ({ onToggleHelp }) => {
  return (
    <button
      type="button"
      onClick={onToggleHelp}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#CBB800] text-[#241D00] border-2 border-[#3A2F00] shadow-[0_4px_25px_rgba(203,184,0,0.6)] hover:bg-[#F5EE99] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
      title="Buka Petunjuk Eksplorasi (?)"
      aria-label="Petunjuk Eksplorasi"
    >
      <HelpCircle className="w-6 h-6 stroke-[2.5] text-[#241D00] group-hover:rotate-12 transition-transform" />
    </button>
  );
};
