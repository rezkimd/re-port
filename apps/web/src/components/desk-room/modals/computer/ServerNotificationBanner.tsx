import React from "react";
import { CheckCircle2, Loader2, X, ExternalLink } from "lucide-react";
import type { ServerState } from "./types";

interface ServerNotificationBannerProps {
  state: ServerState;
  appName: string;
  onDismiss: () => void;
  onOpenDemo: () => void;
}

export const ServerNotificationBanner: React.FC<ServerNotificationBannerProps> = ({
  state,
  appName,
  onDismiss,
  onOpenDemo,
}) => {
  if (state === "idle") return null;

  return (
    <div className="absolute top-14 right-6 z-50 w-96 rounded-2xl bg-[#1E1905]/95 backdrop-blur-md border-2 border-[#CBB800] p-4 shadow-2xl text-white animate-in slide-in-from-top-4 duration-300 select-none">
      {state === "starting" ? (
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#CBB800]/20 text-[#CBB800] flex items-center justify-center flex-shrink-0">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#F5EE99] tracking-wider uppercase">
                SYSTEM DEPLOYMENT
              </span>
              <span className="text-[10px] font-mono text-gray-400">NOW</span>
            </div>
            <h4 className="font-sans font-bold text-sm text-white mt-0.5">
              Starting Demo Server...
            </h4>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              Memulai container {appName} & menginisialisasi WebSocket broker...
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006E5E]/30 text-[#29A18D] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#29A18D]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#29A18D] tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#29A18D] animate-ping" />
                  SYSTEM ONLINE
                </span>
                <button
                  onClick={onDismiss}
                  className="text-gray-400 hover:text-white p-0.5 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <h4 className="font-sans font-bold text-sm text-white mt-0.5">
                Server Ready & Listening!
              </h4>
              <p className="text-xs text-[#F2FEDC]/80 mt-0.5 leading-relaxed">
                Instance {appName} aktif pada port :9002 dengan sinkronisasi latensi 18ms.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-1 border-t border-white/10">
            <button
              onClick={onDismiss}
              className="px-3 py-1 rounded-lg text-xs font-mono text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Dismiss
            </button>
            <button
              onClick={onOpenDemo}
              className="px-4 py-1.5 rounded-lg bg-[#CBB800] text-[#241D00] font-sans font-bold text-xs hover:bg-[#F5EE99] transition-all flex items-center gap-1.5 shadow cursor-pointer active:scale-95"
            >
              <span>Open Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
