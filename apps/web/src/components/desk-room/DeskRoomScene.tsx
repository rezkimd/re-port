import React, { useState, useEffect } from "react";
import { RoomArchitecture } from "./svg/RoomArchitecture";
import { DeskStructure } from "./svg/DeskStructure";
import { WallInstallations } from "./svg/WallInstallations";
import { DeskAccessories } from "./svg/DeskAccessories";
import { InteractiveHotspots } from "./svg/InteractiveHotspots";
import { FloatingHelpToast } from "./ui/FloatingHelpToast";
import { HelpToggleButton } from "./ui/HelpToggleButton";
import { DeskRoomModals } from "./DeskRoomModals";

export const DeskRoomScene: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"apps" | "contact" | "journal" | "cv" | null>(null);
  const [showHelp, setShowHelp] = useState(true);

  // 5-second timer to auto-hide the help banner on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelp(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#1a1500] select-none touch-pan-x scroll-smooth overflow-hidden portrait:max-md:overflow-x-auto portrait:max-md:overflow-y-hidden landscape:overflow-hidden md:overflow-hidden">
      {/* 
        Responsive Canvas Wrapper:
        - Mobile Portrait: Full screen height (h-full), width scales to 16:9 ratio, allowing horizontal panoramic scroll to explore the room.
        - Mobile Landscape & Desktop: 100% Full Landscape (w-full h-full), perfectly fitted without any scrollbars.
      */}
      <div className="h-full w-full flex items-center justify-center portrait:max-md:justify-start portrait:max-md:w-auto portrait:max-md:min-w-max">
        {/* 1920x1080 Interactive SVG Vector Canvas */}
        <svg
          viewBox="0 0 1920 1080"
          className="h-full w-full object-contain drop-shadow-2xl flex-shrink-0 portrait:max-md:h-full portrait:max-md:w-auto portrait:max-md:aspect-[16/9]"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients connected to Theme Tokens */}
            <linearGradient id="wallGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--room-wall-0, #D0DEC2)" />
              <stop offset="35%" stopColor="var(--room-wall-35, #D5E8B3)" />
              <stop offset="100%" stopColor="var(--room-wall-100, #DDEBD0)" />
            </linearGradient>

            <linearGradient id="deskWoodGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--room-desk-0, #4A3114)" />
              <stop offset="4%" stopColor="var(--room-desk-4, #38230D)" />
              <stop offset="100%" stopColor="var(--room-desk-100, #241405)" />
            </linearGradient>

            <linearGradient id="sunbeamGrad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--room-sunbeam-color, #F2FEDC)" stopOpacity="var(--room-sunbeam-opacity, 0.32)" />
              <stop offset="100%" stopColor="var(--room-sunbeam-color, #F2FEDC)" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="monitorScreenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A3D4CD" />
              <stop offset="60%" stopColor="#DCEFEA" />
              <stop offset="100%" stopColor="#A3D4CD" />
            </linearGradient>

            {/* Shadow Filters */}
            <filter id="softDropShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#241D00" floodOpacity="0.35" />
            </filter>

            <filter id="heavyDropShadow" x="-15%" y="-15%" width="140%" height="140%">
              <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#241D00" floodOpacity="0.45" />
            </filter>

            <filter id="bannerDropShadow" x="-15%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#241D00" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* LAYER 1: ROOM PERSPECTIVE ARCHITECTURE */}
          <RoomArchitecture />

          {/* LAYER 1.5: NIGHT TIME AMBIENT OVERLAY */}
          <rect
            width="1920"
            height="1080"
            fill="#050C07"
            opacity="var(--room-night-ambient, 0)"
            pointerEvents="none"
            className="transition-opacity duration-700"
          />

          {/* LAYER 2: SOLID WALL INSTALLATIONS */}
          <WallInstallations />

          {/* LAYER 3: DESK SURFACE & CONTACT SHADOWS */}
          <DeskStructure />

          {/* LAYER 4: DESK ACCESSORIES */}
          <DeskAccessories />

          {/* LAYER 5: CLICKABLE HOTSPOTS & BRANDING BAR */}
          <InteractiveHotspots onSelectModal={(modal) => setActiveModal(modal)} />
        </svg>
      </div>

      {/* FLOATING INSTRUCTION TOAST */}
      <FloatingHelpToast showHelp={showHelp} onDismiss={() => setShowHelp(false)} />

      {/* ALWAYS-VISIBLE FLOATING "?" ACTION BUTTON */}
      <HelpToggleButton onToggleHelp={() => setShowHelp((prev) => !prev)} />

      {/* Overlay Modals for Active Hotspot */}
      <DeskRoomModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
};
