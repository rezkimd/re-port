import React from "react";
import { SleepingCat } from "./SleepingCat";
import { DraggableMouse } from "./DraggableMouse";

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

      {/* Relocated Reference Books Stack (Moved neatly next to center stationery) */}
      <g id="reference-books-stack" filter="url(#softDropShadow)">
        <rect x="1110" y="650" width="120" height="30" rx="4" fill="#CBB800" stroke="#3A2F00" strokeWidth="1.5" />
        <g transform="rotate(-2, 1115, 622)">
          <rect x="1115" y="622" width="112" height="28" rx="4" fill="#006E5E" stroke="#3A2F00" strokeWidth="1.5" />
        </g>
        <g transform="rotate(3, 1120, 596)">
          <rect x="1120" y="596" width="104" height="26" rx="4" fill="#E07A5F" stroke="#3A2F00" strokeWidth="1.5" />
        </g>
      </g>

      {/* Sleeping Cat on Desk Edge (Black in Light Mode, White in Dark Mode) */}
      <SleepingCat x={1630} y={600} scale={1.05} />

      {/* Mechanical Keyboard */}
      <g id="keyboard">
        <rect x="1240" y="710" width="410" height="85" rx="8" fill="#241D00" stroke="#877B00" strokeWidth="2" filter="url(#softDropShadow)" />
        <rect x="1250" y="718" width="390" height="68" rx="5" fill="#3A2F00" opacity="0.85" />
      </g>

      {/* Interactive Draggable Optical Mouse (Constrained strictly to Desk Surface) */}
      <DraggableMouse initialX={1690} initialY={760} />
    </>
  );
};
