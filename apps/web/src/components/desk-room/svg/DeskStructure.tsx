import React from "react";

export const DeskStructure: React.FC = () => {
  return (
    <g id="desk-surface-group">
      {/* Desk Surface (With Perspective Angled Edge) */}
      <polygon points="0,780 640,680 1920,680 1920,1080 0,1080" fill="url(#deskWoodGrad)" />
      {/* Desk Front Bevel Trim Line */}
      <polygon points="0,780 640,680 1920,680 1920,692 640,692 0,792" fill="#5C4B08" />

      {/* Contact Ambient Shadows On Desk Surface */}
      <g id="desk-contact-shadows" opacity="0.6">
        <ellipse cx="440" cy="880" rx="230" ry="35" fill="#241405" />
        <ellipse cx="810" cy="710" rx="160" ry="25" fill="#241405" />
        <ellipse cx="1440" cy="700" rx="170" ry="30" fill="#241405" />
        <ellipse cx="1060" cy="790" rx="110" ry="22" fill="#241405" />
      </g>
    </g>
  );
};
