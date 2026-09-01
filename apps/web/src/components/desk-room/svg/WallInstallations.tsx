import React from "react";

export const WallInstallations: React.FC = () => {
  return (
    <>
      {/* Whiteboard with Perspective on Left Wall */}
      <g id="whiteboard-sprint-board" filter="url(#heavyDropShadow)">
        {/* Angled Whiteboard Board */}
        <polygon points="80,110 540,150 540,590 80,640" fill="#E8F0EA" stroke="#9EB0A1" strokeWidth="12" />
        {/* Marker Tray */}
        <polygon points="220,620 480,600 480,616 220,636" fill="#5C4B08" />
        {/* Felt Eraser */}
        <rect x="250" y="614" width="45" height="14" rx="3" fill="#006E5E" transform="rotate(-3, 250, 614)" />

        {/* Sticky Notes Tilted with Random Rotations */}
        <g transform="rotate(-3, 120, 200)">
          <rect x="120" y="200" width="75" height="75" rx="4" fill="#E7C952" filter="url(#softDropShadow)" />
          <text x="135" y="242" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#3A2F00">SSG BUILD</text>
        </g>

        <g transform="rotate(4, 230, 210)">
          <rect x="230" y="210" width="75" height="75" rx="4" fill="#8AD0D8" filter="url(#softDropShadow)" />
          <text x="245" y="252" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#00473D">ODOO 18</text>
        </g>

        <g transform="rotate(-2, 340, 220)">
          <rect x="340" y="220" width="75" height="75" rx="4" fill="#E07A5F" filter="url(#softDropShadow)" />
          <text x="355" y="262" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#FFFFFF">ZOD API</text>
        </g>

        <g transform="rotate(5, 150, 310)">
          <rect x="150" y="310" width="80" height="80" rx="4" fill="#F2FEDC" filter="url(#softDropShadow)" />
          <text x="165" y="354" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#3A2F00">PENPOT</text>
        </g>

        <g transform="rotate(-4, 270, 325)">
          <rect x="270" y="325" width="80" height="80" rx="4" fill="#E7C952" filter="url(#softDropShadow)" />
          <text x="285" y="369" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#3A2F00">DEPLOY</text>
        </g>
      </g>

      {/* October Wall Calendar */}
      <g id="october-calendar" filter="url(#softDropShadow)">
        <rect x="570" y="130" width="110" height="210" rx="4" fill="#FFFFFF" stroke="#3A2F00" strokeWidth="1.5" />
        <rect x="570" y="130" width="110" height="36" fill="#006E5E" />
        <text x="588" y="153" fontFamily="Space Grotesk" fontSize="13" fontWeight="bold" fill="#FFFFFF">OCTOBER</text>
        <rect x="580" y="180" width="90" height="145" fill="#D5E8B3" opacity="0.4" />
      </g>

      {/* Corkboard with Wooden Frame & Pinned Cards */}
      <g id="corkboard-pin-board" filter="url(#heavyDropShadow)">
        {/* Outer Wood Frame */}
        <rect x="710" y="70" width="750" height="520" rx="16" fill="#6D4924" />
        {/* Inner Inset */}
        <rect x="730" y="90" width="710" height="480" rx="10" fill="#A67543" />
        {/* Cork Surface */}
        <rect x="745" y="105" width="680" height="450" rx="6" fill="#8C6036" />

        {/* Pinned White Card 1 */}
        <g transform="rotate(-2, 780, 200)">
          <rect x="780" y="200" width="150" height="100" rx="4" fill="#F9FAF5" stroke="#3A2F00" strokeWidth="1" filter="url(#softDropShadow)" />
          <circle cx="855" cy="200" r="8" fill="#29A18D" />
          <text x="800" y="240" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#3A2F00">ARCHITECTURE</text>
          <text x="800" y="260" fontFamily="Space Grotesk" fontSize="10" fill="#6D4924">Event-driven queues</text>
        </g>

        {/* Pinned White Card 2 (Center) */}
        <g transform="rotate(3, 990, 215)">
          <rect x="990" y="215" width="160" height="105" rx="4" fill="#FFFFFF" stroke="#3A2F00" strokeWidth="1" filter="url(#softDropShadow)" />
          <circle cx="1070" cy="215" r="8" fill="#CBB800" />
          <text x="1010" y="255" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#3A2F00">ROADMAP 2026</text>
          <text x="1010" y="275" fontFamily="Space Grotesk" fontSize="10" fill="#6D4924">Spatial Web Canvas</text>
        </g>

        {/* Pinned White Card 3 (Right) */}
        <g transform="rotate(-3, 1220, 195)">
          <rect x="1220" y="195" width="160" height="100" rx="4" fill="#F2FEDC" stroke="#3A2F00" strokeWidth="1" filter="url(#softDropShadow)" />
          <circle cx="1300" cy="195" r="8" fill="#8AD0D8" />
          <text x="1240" y="235" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold" fill="#00473D">CONTACT SYNC</text>
          <text x="1240" y="255" fontFamily="Space Grotesk" fontSize="10" fill="#006E5E">Email & WhatsApp</text>
        </g>
      </g>
    </>
  );
};
