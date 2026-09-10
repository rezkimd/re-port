import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "@/components/theme-provider";

interface DraggableMouseProps {
  initialX?: number;
  initialY?: number;
}

export const DraggableMouse: React.FC<DraggableMouseProps> = ({
  initialX = 1700,
  initialY = 750,
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; startX: number; startY: number } | null>(null);

  // Strict boundaries: strictly constrained on the desk surface
  const BOUNDS = {
    minX: 740,
    maxX: 1840,
    minY: 705, // Just below the back bevel line (y=692)
    maxY: 980, // Above bottom screen edge
  };

  // Convert client viewport coordinates to SVG (1920x1080) coordinate space
  const getSvgCoordinates = useCallback((e: MouseEvent | TouchEvent, svgElem: SVGSVGElement) => {
    const pt = svgElem.createSVGPoint();
    const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : (e as MouseEvent).clientY;
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svgElem.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const transformed = pt.matrixTransform(ctm.inverse());
    return { x: transformed.x, y: transformed.y };
  }, []);

  const handlePointerDown = (e: React.MouseEvent<SVGGElement> | React.TouchEvent<SVGGElement>) => {
    e.stopPropagation();
    const svgElem = (e.currentTarget as SVGElement).ownerSVGElement;
    if (!svgElem) return;

    const coords = getSvgCoordinates(e.nativeEvent, svgElem);
    dragStartRef.current = {
      mouseX: coords.x,
      mouseY: coords.y,
      startX: pos.x,
      startY: pos.y,
    };
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!dragStartRef.current) return;
      const target = document.querySelector("#sleeping-desk-cat")?.ownerSVGElement;
      if (!target) return;

      const coords = getSvgCoordinates(e, target);
      const deltaX = coords.x - dragStartRef.current.mouseX;
      const deltaY = coords.y - dragStartRef.current.mouseY;

      const rawX = dragStartRef.current.startX + deltaX;
      const rawY = dragStartRef.current.startY + deltaY;

      const clampedX = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, rawX));
      const clampedY = Math.max(BOUNDS.minY, Math.min(BOUNDS.maxY, rawY));

      setPos({ x: clampedX, y: clampedY });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      dragStartRef.current = null;
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, { passive: false });
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging, getSvgCoordinates, BOUNDS.minX, BOUNDS.maxX, BOUNDS.minY, BOUNDS.maxY]);

  return (
    <g
      id="interactive-optical-mouse"
      transform={`translate(${pos.x}, ${pos.y}) rotate(${isDragging ? 5 : 12}, 28, 40)`}
      className={`select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Dynamic Contact Shadow on Wood Surface */}
      <ellipse
        cx="28"
        cy={isDragging ? "52" : "45"}
        rx={isDragging ? "36" : "32"}
        ry={isDragging ? "22" : "18"}
        fill="#100A04"
        opacity={isDragging ? 0.4 : 0.65}
        filter="url(#softDropShadow)"
        className="transition-all duration-150"
      />

      {/* 2. Optical Sensor Underglow (Red/Cyan LED reflection on desk) */}
      <circle
        cx="28"
        cy="40"
        r={isDragging ? "16" : "10"}
        fill={isDark ? "#00E5FF" : "#FF3B30"}
        opacity={isDragging ? "0.35" : "0.2"}
        filter="blur(4px)"
        className="transition-all duration-150"
      />

      {/* 3. Ergonomic Optical Mouse Body */}
      <g
        transform={isDragging ? "scale(1.05) translate(-1.5, -2)" : "scale(1)"}
        className="transition-transform duration-150"
      >
        {/* Mouse Base Shell */}
        <rect
          x="0"
          y="0"
          width="56"
          height="82"
          rx="26"
          fill={isDark ? "#1C1814" : "#2C1B0A"}
          stroke={isDark ? "#48DAC6" : "#5C4B08"}
          strokeWidth={isDragging ? "2.5" : "1.8"}
          filter="url(#softDropShadow)"
        />

        {/* Top Palm Grip Inset */}
        <rect
          x="4"
          y="6"
          width="48"
          height="70"
          rx="22"
          fill={isDark ? "#241F1A" : "#38230D"}
          opacity="0.8"
        />

        {/* Left & Right Click Button Seam */}
        <line
          x1="28"
          y1="8"
          x2="28"
          y2="34"
          stroke={isDark ? "#48DAC6" : "#877B00"}
          strokeWidth="1.2"
          opacity="0.7"
        />

        {/* Textured Scroll Wheel */}
        <rect
          x="24"
          y="12"
          width="8"
          height="18"
          rx="4"
          fill={isDark ? "#48DAC6" : "#CBB800"}
          stroke="#1C1814"
          strokeWidth="1"
        />
        {/* Scroll wheel grip ribs */}
        <line x1="25" y1="17" x2="31" y2="17" stroke="#1C1814" strokeWidth="1" />
        <line x1="25" y1="22" x2="31" y2="22" stroke="#1C1814" strokeWidth="1" />

        {/* DPI Switch Button */}
        <rect
          x="25.5"
          y="35"
          width="5"
          height="5"
          rx="1.5"
          fill={isDark ? "#877B00" : "#5C4B08"}
        />

        {/* Subtle Brand Logo Accent */}
        <circle
          cx="28"
          cy="62"
          r="4"
          fill="none"
          stroke={isDark ? "#48DAC6" : "#CBB800"}
          strokeWidth="1"
          opacity="0.6"
        />
      </g>

      {/* 4. Interactive Hint Tooltip on Hover */}
      {(isHovered || isDragging) && (
        <g transform="translate(-32, -26)" className="animate-in fade-in duration-150 pointer-events-none">
          <rect
            x="0"
            y="0"
            width="120"
            height="22"
            rx="5"
            fill={isDark ? "#241D00" : "#FEFDF8"}
            stroke={isDark ? "#48DAC6" : "#3A2F00"}
            strokeWidth="1.2"
            filter="url(#bannerDropShadow)"
          />
          <text
            x="60"
            y="15"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="9"
            fontWeight="bold"
            fill={isDark ? "#48DAC6" : "#241D00"}
          >
            🖱️ {isDragging ? "Moving Mouse" : "Drag on Desk"}
          </text>
        </g>
      )}
    </g>
  );
};
