import React, { useState, useEffect } from "react";
import { MacDesktop } from "./computer/MacDesktop";
import { AppShowcaseWizard } from "./computer/AppShowcaseWizard";
import { ServerNotificationBanner } from "./computer/ServerNotificationBanner";
import { PORTFOLIO_APPS } from "./computer/appsData";
import type { AppItem, ServerState } from "./computer/types";

interface RezkiOSModalProps {
  onClose: () => void;
}

/**
 * RezkiOSModal - Ultrawide Monitor Computer Showcase
 * Implements Penpot Scene 02, 02-01, and 02-01-01:
 * - macOS Desktop with Menu Bar, Mountain Wallpaper, and Floating Dock
 * - Application Showcase Wizard (90% Modal Window)
 * - Live Server Simulation & Notification System
 */
export const RezkiOSModal: React.FC<RezkiOSModalProps> = ({ onClose }) => {
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [serverState, setServerState] = useState<ServerState>("idle");

  // Handle keyboard Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedApp) {
          setSelectedApp(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedApp, onClose]);

  // Handle launch server demo simulation
  const handleLaunchServer = () => {
    setServerState("starting");
    const timer = setTimeout(() => {
      setServerState("ready");
    }, 2200);
    return () => clearTimeout(timer);
  };

  const handleOpenDemo = () => {
    if (selectedApp?.demoUrl) {
      window.open(selectedApp.demoUrl, "_blank");
    } else {
      window.open("https://github.com/rezkimd", "_blank");
    }
  };

  return (
    <div className="relative w-full max-w-6xl flex items-center justify-center p-2">
      {/* 1. Base macOS Desktop Screen */}
      <MacDesktop
        onSelectApp={(app) => {
          setSelectedApp(app);
          setServerState("idle");
        }}
        onExitDesk={onClose}
      />

      {/* 2. Application Showcase Wizard (Modal Window Layer) */}
      {selectedApp && (
        <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
          <AppShowcaseWizard
            app={selectedApp}
            onClose={() => setSelectedApp(null)}
            onLaunchServer={handleLaunchServer}
            serverState={serverState}
          />
        </div>
      )}

      {/* 3. Top Right macOS System Notification Banner */}
      <ServerNotificationBanner
        state={serverState}
        appName={selectedApp?.title.split("//")[0].trim() || "Kalla DMS"}
        onDismiss={() => setServerState("idle")}
        onOpenDemo={handleOpenDemo}
      />
    </div>
  );
};
