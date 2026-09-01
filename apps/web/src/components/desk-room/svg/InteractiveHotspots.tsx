import React from "react";

interface InteractiveHotspotsProps {
  onSelectModal: (modal: "apps" | "contact" | "journal" | "cv") => void;
}

export const InteractiveHotspots: React.FC<InteractiveHotspotsProps> = ({ onSelectModal }) => {
  return (
    <>
      {/* HOTSPOT 1: RETRO COMPUTER & ULTRAWIDE MONITOR */}
      <g
        id="hotspot-monitor"
        className="cursor-pointer group"
        onClick={() => onSelectModal("apps")}
      >
        {/* Monitor Stand Foot & Neck */}
        <rect x="1340" y="680" width="170" height="24" rx="8" fill="#2C1B0A" stroke="#5C4B08" strokeWidth="2" filter="url(#softDropShadow)" />
        <rect x="1405" y="625" width="40" height="60" fill="#241D00" />

        {/* Ultrawide Monitor Bezel */}
        <rect
          x="1170"
          y="400"
          width="510"
          height="235"
          rx="14"
          fill="#241D00"
          stroke="#877B00"
          strokeWidth="3"
          filter="url(#heavyDropShadow)"
          className="group-hover:stroke-[#CBB800] transition-colors"
        />

        {/* Screen Display */}
        <rect x="1185" y="415" width="480" height="205" rx="8" fill="url(#monitorScreenGrad)" />

        {/* Scenic Mountain Wallpaper inside Screen */}
        <polygon points="1185,560 1300,500 1420,540 1540,490 1665,560 1665,620 1185,620" fill="#00473D" />
        <rect x="1185" y="565" width="480" height="55" fill="#006E5E" />

        {/* Lockscreen Clock */}
        <text x="1350" y="450" fontFamily="Space Grotesk" fontSize="32" fontWeight="bold" fill="#FFFFFF">10:30 AM</text>
        <text x="1315" y="495" fontFamily="JetBrains Mono" fontSize="11" fill="#F5EE99">MON, OCT 20 • CLICK TO OPEN APPS</text>

        {/* Floating Banner */}
        <g className="animate-gentle-bob group-hover:scale-105 transition-transform" transform-origin="1425 335">
          <rect x="1295" y="335" width="260" height="50" rx="8" fill="#CBB800" stroke="#241D00" strokeWidth="3" filter="url(#bannerDropShadow)" />
          <text x="1320" y="367" fontFamily="Space Grotesk" fontSize="15" fontWeight="bold" fill="#241D00">
            🖥️ DEMO APPS (MINI OS)
          </text>
        </g>
      </g>

      {/* HOTSPOT 2: DOCUMENT ORGANIZER (DYNAMIC CV) */}
      <g
        id="hotspot-cv"
        className="cursor-pointer group"
        onClick={() => onSelectModal("cv")}
      >
        {/* Wood Organizer Shell */}
        <rect
          x="680"
          y="400"
          width="270"
          height="310"
          rx="10"
          fill="#2C1B0A"
          stroke="#877B00"
          strokeWidth="3"
          filter="url(#heavyDropShadow)"
          className="group-hover:stroke-[#CBB800] transition-colors"
        />

        {/* Front Label Plates */}
        <rect x="710" y="655" width="50" height="24" rx="3" fill="#FFFFFF" stroke="#3A2F00" strokeWidth="1" />
        <rect x="790" y="655" width="50" height="24" rx="3" fill="#FFFFFF" stroke="#3A2F00" strokeWidth="1" />
        <rect x="870" y="655" width="50" height="24" rx="3" fill="#FFFFFF" stroke="#3A2F00" strokeWidth="1" />

        {/* Vertical Colorful Folders */}
        <rect x="700" y="435" width="38" height="205" rx="4" fill="#CBB800" stroke="#3A2F00" strokeWidth="1" />
        <rect x="745" y="445" width="38" height="195" rx="4" fill="#E07A5F" stroke="#3A2F00" strokeWidth="1" />
        <rect x="790" y="425" width="38" height="215" rx="4" fill="#006E5E" stroke="#FFFFFF" strokeWidth="1" />
        <rect x="835" y="415" width="38" height="225" rx="4" fill="#00473D" stroke="#CBB800" strokeWidth="1" />
        <rect x="880" y="450" width="38" height="190" rx="4" fill="#D5E8B3" stroke="#3A2F00" strokeWidth="1" />

        {/* Floating Banner */}
        <g className="animate-gentle-bob-delayed-1 group-hover:scale-105 transition-transform" transform-origin="815 340">
          <rect x="690" y="340" width="250" height="50" rx="8" fill="#006E5E" stroke="#F2FEDC" strokeWidth="2.5" filter="url(#bannerDropShadow)" />
          <text x="715" y="372" fontFamily="Space Grotesk" fontSize="15" fontWeight="bold" fill="#FFFFFF">
            📁 DYNAMIC CV (FILTER)
          </text>
        </g>
      </g>

      {/* HOTSPOT 3: OPEN JOURNAL / BLOG BOOK */}
      <g
        id="hotspot-journal"
        className="cursor-pointer group"
        onClick={() => onSelectModal("journal")}
      >
        {/* Leather Book Base (Angled) */}
        <g transform="rotate(-5, 210, 720)">
          <rect
            x="210"
            y="720"
            width="460"
            height="240"
            rx="12"
            fill="#00473D"
            stroke="#CBB800"
            strokeWidth="2.5"
            filter="url(#heavyDropShadow)"
            className="group-hover:stroke-[#F5EE99] transition-colors"
          />
          {/* Gold Filigree Ornament */}
          <rect x="225" y="732" width="200" height="215" rx="8" fill="#006E5E" stroke="#CBB800" strokeWidth="2" />
          {/* Open Pages */}
          <rect x="320" y="710" width="350" height="230" rx="10" fill="#FFFFFF" stroke="#D5E8B3" strokeWidth="3" />
          <rect x="490" y="705" width="8" height="235" fill="#D5E8B3" />
        </g>

        {/* Ribbon Bookmark */}
        <path d="M 490,930 Q 480,980 510,995 L 518,990 Q 490,975 498,930 Z" fill="#CBB800" />

        {/* Floating Banner */}
        <g className="animate-gentle-bob-delayed-2 group-hover:scale-105 transition-transform" transform-origin="445 645">
          <rect x="320" y="645" width="250" height="50" rx="8" fill="#CBB800" stroke="#241D00" strokeWidth="3" filter="url(#bannerDropShadow)" />
          <text x="355" y="677" fontFamily="Space Grotesk" fontSize="15" fontWeight="bold" fill="#241D00">
            📖 JOURNAL & BLOG
          </text>
        </g>
      </g>

      {/* HOTSPOT 4: MAIL ENVELOPE (CONTACT ME) */}
      <g
        id="hotspot-mail"
        className="cursor-pointer group"
        onClick={() => onSelectModal("contact")}
      >
        {/* Invoice Paper Underneath (Tilted -6°) */}
        <g transform="rotate(-6, 920, 785)">
          <rect x="920" y="785" width="170" height="70" rx="3" fill="#FFFFFF" stroke="#3A2F00" strokeWidth="1" filter="url(#softDropShadow)" />
          <text x="935" y="805" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" fill="#3A2F00">INVOICE #2026-08</text>
        </g>

        {/* Mail Envelope (Tilted +8°) */}
        <g transform="rotate(8, 960, 795)">
          <rect
            x="960"
            y="795"
            width="210"
            height="110"
            rx="6"
            fill="#F9FAF5"
            stroke="#3A2F00"
            strokeWidth="2"
            filter="url(#heavyDropShadow)"
            className="group-hover:stroke-[#006E5E] transition-colors"
          />
          {/* Flap */}
          <polygon points="960,795 1065,855 1170,795" fill="#D5E8B3" stroke="#3A2F00" strokeWidth="1.5" />
        </g>

        {/* Floating Banner */}
        <g className="animate-gentle-bob-delayed-3 group-hover:scale-105 transition-transform" transform-origin="1050 715">
          <rect x="940" y="715" width="220" height="50" rx="8" fill="#FFFFFF" stroke="#006E5E" strokeWidth="3" filter="url(#bannerDropShadow)" />
          <text x="980" y="747" fontFamily="Space Grotesk" fontSize="15" fontWeight="bold" fill="#006E5E">
            ✉️ CONTACT ME
          </text>
        </g>
      </g>

      {/* TOP HEADER STATUS BRANDING BAR */}
      <g id="top-branding-bar" filter="url(#softDropShadow)">
        <rect x="0" y="0" width="1920" height="56" fill="#3A2F00" />
        <text x="40" y="35" fontFamily="Holistical, Space Grotesk" fontSize="22" fontWeight="bold" fill="#CBB800" letterSpacing="1.5">
          RE-PORT // REZKI'S INTERACTIVE WORKSPACE
        </text>
        <text x="1440" y="34" fontFamily="JetBrains Mono" fontSize="12" fontWeight="bold" fill="#F2FEDC">
          [ INTERACTIVE DESK WORKSPACE ACTIVE ]
        </text>
      </g>
    </>
  );
};
