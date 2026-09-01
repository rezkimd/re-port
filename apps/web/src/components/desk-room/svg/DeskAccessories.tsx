import React from "react";

export const DeskAccessories: React.FC = () => {
  return (
    <>
      {/* Acrylic Pen Pot (Far Left) */}
      <g id="pen-pot" filter="url(#softDropShadow)">
        {/* Pens */}
        <rect x="75" y="580" width="12" height="85" fill="#006E5E" transform="rotate(-8, 75, 580)" />
        <rect x="95" y="570" width="16" height="95" fill="#CBB800" transform="rotate(4, 95, 570)" />
        <rect x="115" y="590" width="10" height="80" fill="#E07A5F" transform="rotate(12, 115, 590)" />
        {/* Cup */}
        <rect x="60" y="650" width="75" height="95" rx="6" fill="#CBB800" fillOpacity="0.35" stroke="#877B00" strokeWidth="2" />
      </g>

      {/* Brass Pen Stand & Paperclip Dish (Center Desk) */}
      <g id="stationery-center" filter="url(#softDropShadow)">
        <ellipse cx="980" cy="680" rx="25" ry="13" fill="#877B00" />
        <rect x="975" y="580" width="10" height="110" rx="3" fill="#241D00" stroke="#CBB800" strokeWidth="1.5" transform="rotate(20, 975, 580)" />
        {/* Paperclip Dish */}
        <ellipse cx="1060" cy="685" rx="30" ry="15" fill="#FFFFFF" stroke="#5C4B08" strokeWidth="2" />
      </g>

      {/* Reference Books Stack (Right Desk Corner) */}
      <g id="reference-books-stack" filter="url(#softDropShadow)">
        <rect x="1660" y="650" width="150" height="36" rx="4" fill="#CBB800" stroke="#3A2F00" strokeWidth="1.5" />
        <g transform="rotate(-2, 1670, 615)">
          <rect x="1670" y="615" width="140" height="34" rx="4" fill="#006E5E" stroke="#3A2F00" strokeWidth="1.5" />
        </g>
        <g transform="rotate(3, 1675, 585)">
          <rect x="1675" y="585" width="130" height="30" rx="4" fill="#E07A5F" stroke="#3A2F00" strokeWidth="1.5" />
        </g>
      </g>

      {/* Mechanical Keyboard & Optical Mouse */}
      <g id="keyboard-mouse">
        {/* Keyboard */}
        <rect x="1220" y="710" width="430" height="85" rx="8" fill="#241D00" stroke="#877B00" strokeWidth="2" filter="url(#softDropShadow)" />
        <rect x="1230" y="718" width="410" height="68" rx="5" fill="#3A2F00" opacity="0.85" />
        {/* Mouse */}
        <g transform="rotate(15, 1700, 750)">
          <rect x="1700" y="750" width="55" height="80" rx="25" fill="#2C1B0A" stroke="#5C4B08" strokeWidth="1.5" filter="url(#softDropShadow)" />
        </g>
      </g>
    </>
  );
};
