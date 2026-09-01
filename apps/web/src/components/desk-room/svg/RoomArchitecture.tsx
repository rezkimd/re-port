import React from "react";

export const RoomArchitecture: React.FC = () => {
  return (
    <>
      {/* Back Wall Canvas Base */}
      <rect x="0" y="0" width="1920" height="1080" fill="#DDEBD0" />

      {/* Left Angled Perspective Wall */}
      <polygon points="0,0 640,60 640,680 0,780" fill="#D0DEC2" />

      {/* Corner Crease Shadow */}
      <polygon points="640,60 655,60 655,680 640,680" fill="#B8C7AA" opacity="0.75" />

      {/* Right Wall Window Structure & Venetian Blinds */}
      <g id="window-architecture">
        {/* Sky outside */}
        <rect x="1540" y="20" width="380" height="580" fill="#A3D4CD" />
        {/* Horizontal Window Bar */}
        <rect x="1540" y="310" width="380" height="14" fill="#3A2F00" />
        {/* Vertical Window Bar */}
        <rect x="1720" y="20" width="14" height="580" fill="#3A2F00" />

        {/* Venetian Blinds Pelmet Top */}
        <rect x="1520" y="10" width="400" height="38" rx="2" fill="#241D00" />
        {/* 11 Wooden Blind Slats */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
          <rect
            key={idx}
            x="1530"
            y={50 + idx * 36}
            width="390"
            height="16"
            rx="2"
            fill="#877B00"
            filter="url(#softDropShadow)"
          />
        ))}
      </g>

      {/* Diagonal Atmospheric Sunbeam Rays */}
      <g id="atmospheric-sunbeams" pointerEvents="none">
        <polygon points="1530,70 1920,70 1920,400 1220,780 1080,780" fill="url(#sunbeamGrad)" />
        <polygon points="1530,190 1920,280 1920,580 1380,860 1260,860" fill="url(#sunbeamGrad)" opacity="0.75" />
      </g>
    </>
  );
};
