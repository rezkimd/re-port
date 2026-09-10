import React, { useState, useRef, useEffect, useCallback } from "react";
import { LuxuryFountainPen } from "./LuxuryFountainPen";

interface InteractiveFountainPenProps {
  paperRef: React.RefObject<HTMLDivElement | null>;
}

interface InkPoint {
  x: number;
  y: number;
  time: number;
  isNewStroke?: boolean;
}

export const InteractiveFountainPen: React.FC<InteractiveFountainPenProps> = ({ paperRef }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const penContainerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);

  // Pen dimensions & nib geometry
  // Viewbox is 320 x 30. Nib tip is at x=25, y=14.
  const PEN_WIDTH = 260;
  const PEN_HEIGHT = PEN_WIDTH * (30 / 320); // 24.375px
  const NIB_OFFSET_X = PEN_WIDTH * (25 / 320); // ~20.31px
  const NIB_OFFSET_Y = PEN_HEIGHT * (14 / 30); // ~11.37px

  // Current nib position relative to paper container
  const nibPosRef = useRef<{ x: number; y: number }>({ x: 380, y: 490 });
  const dragStartOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Ink trail state
  const pointsRef = useRef<InkPoint[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Initial placement & paper boundaries
  useEffect(() => {
    if (!paperRef.current) return;
    const rect = paperRef.current.getBoundingClientRect();
    // Default starting point: resting over the lower-right area of letter content
    const initialX = Math.min(rect.width - 90, Math.max(140, rect.width * 0.68));
    const initialY = Math.min(rect.height - 150, Math.max(200, rect.height * 0.72));
    nibPosRef.current = { x: initialX, y: initialY };

    if (penContainerRef.current) {
      penContainerRef.current.style.left = `${initialX - NIB_OFFSET_X}px`;
      penContainerRef.current.style.top = `${initialY - NIB_OFFSET_Y}px`;
    }
  }, [paperRef, NIB_OFFSET_X, NIB_OFFSET_Y]);

  // Sync canvas dimensions with paper container (including Retina DPR support)
  useEffect(() => {
    const paper = paperRef.current;
    const canvas = canvasRef.current;
    if (!paper || !canvas) return;

    const updateCanvasSize = () => {
      const rect = paper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    updateCanvasSize();
    const ro = new ResizeObserver(updateCanvasSize);
    ro.observe(paper);
    return () => ro.disconnect();
  }, [paperRef]);

  // Ink trail rendering loop (60-120fps with zero React re-render lag)
  const renderTrail = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const now = performance.now();
    const DURATION = 2000; // 2 seconds fade out

    const points = pointsRef.current;

    // Purge points older than 2 seconds
    while (points.length > 0 && now - points[0].time > DURATION) {
      points.shift();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (points.length > 0) {
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        const age = now - pt.time;
        if (age > DURATION) continue;

        const progress = age / DURATION;
        const opacity = Math.max(0, 1 - progress);

        if (pt.isNewStroke || i === 0) {
          // Draw single dot for initial tap / stroke start
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(38, 29, 0, ${opacity * 0.9})`;
          ctx.fill();
        } else {
          const prev = points[i - 1];
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(pt.x, pt.y);
          // Dark Umber fountain pen ink, slightly tapering as it dries
          ctx.strokeStyle = `rgba(38, 29, 0, ${opacity * 0.88})`;
          ctx.lineWidth = 2.4 * (1 - progress * 0.25);
          ctx.stroke();
        }
      }

      ctx.restore();
    }

    // Continue loop if there are still active points or if currently dragging
    if (points.length > 0 || isDraggingRef.current) {
      animFrameRef.current = requestAnimationFrame(renderTrail);
    } else {
      animFrameRef.current = null;
    }
  }, []);

  const addPoint = useCallback((x: number, y: number, isNewStroke: boolean = false) => {
    pointsRef.current.push({
      x,
      y,
      time: performance.now(),
      isNewStroke,
    });

    if (animFrameRef.current === null) {
      animFrameRef.current = requestAnimationFrame(renderTrail);
    }
  }, [renderTrail]);

  // Pointer Down on Pen: Initiate drag & first ink drop
  const handlePointerDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!paperRef.current) return;

    const paperRect = paperRef.current.getBoundingClientRect();
    const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    // Record cursor offset relative to current nib position
    dragStartOffsetRef.current = {
      x: (clientX - paperRect.left) - nibPosRef.current.x,
      y: (clientY - paperRect.top) - nibPosRef.current.y,
    };

    setIsDragging(true);
    isDraggingRef.current = true;

    // Drop ink at initial touch point
    addPoint(nibPosRef.current.x, nibPosRef.current.y, true);
  };

  // Dragging event listeners (pointer move & up)
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current || !paperRef.current) return;

      // Prevent page scrolling on mobile touch
      if ("touches" in e && e.cancelable) {
        e.preventDefault();
      }

      const paperRect = paperRef.current.getBoundingClientRect();
      const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const rawNibX = (clientX - paperRect.left) - dragStartOffsetRef.current.x;
      const rawNibY = (clientY - paperRect.top) - dragStartOffsetRef.current.y;

      // STRICT PAPER BOUNDARY CONSTRAINT:
      // Constrained purely by the nib of the pen relative to the paper surface
      const minX = 14;
      const maxX = paperRect.width - 16;
      const minY = 16;
      const maxY = paperRect.height - 18;

      const clampedNibX = Math.max(minX, Math.min(maxX, rawNibX));
      const clampedNibY = Math.max(minY, Math.min(maxY, rawNibY));

      const dx = clampedNibX - nibPosRef.current.x;
      const dy = clampedNibY - nibPosRef.current.y;

      // Update pen DOM directly without React re-render for 60-120fps smooth tracking
      nibPosRef.current = { x: clampedNibX, y: clampedNibY };

      if (penContainerRef.current) {
        penContainerRef.current.style.left = `${clampedNibX - NIB_OFFSET_X}px`;
        penContainerRef.current.style.top = `${clampedNibY - NIB_OFFSET_Y}px`;
      }

      // Add ink point if moved at least 1.5px
      if (Math.hypot(dx, dy) >= 1.5) {
        addPoint(clampedNibX, clampedNibY, false);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      isDraggingRef.current = false;
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
  }, [isDragging, addPoint, paperRef, NIB_OFFSET_X, NIB_OFFSET_Y]);

  // Clean up RAF loop on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* LAYER 1: 2D Canvas for Ink Trail (Fading out over 2 seconds, no lag) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20 rounded-xl overflow-hidden"
      />

      {/* LAYER 2: Draggable Fountain Pen */}
      <div
        ref={penContainerRef}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        style={{
          position: "absolute",
          width: `${PEN_WIDTH}px`,
          transformOrigin: `${NIB_OFFSET_X}px ${NIB_OFFSET_Y}px`,
          transform: `rotate(${isDragging ? -42 : -38}deg)`,
          touchAction: "none",
        }}
        className={`z-30 select-none transition-transform duration-150 ease-out group ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        title="Klik dan geser pena untuk menulis di atas kertas"
      >
        {/* Generous grab hit-area padding wrapper */}
        <div
          className={`relative transition-all duration-200 ${
            isDragging
              ? "scale-[1.03] drop-shadow-[0_22px_28px_rgba(0,0,0,0.65)]"
              : "hover:scale-[1.015] drop-shadow-[0_14px_20px_rgba(0,0,0,0.48)]"
          }`}
        >
          <LuxuryFountainPen className="w-full h-auto pointer-events-none" />

          {/* Nib Shimmer & Wet Ink Glow */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              left: `${NIB_OFFSET_X - 3}px`,
              top: `${NIB_OFFSET_Y - 3}px`,
              width: "6px",
              height: "6px",
              backgroundColor: isDragging ? "#5C4B08" : "#CBB800",
              opacity: isDragging ? 0.9 : 0.6,
              boxShadow: "0 0 6px rgba(203, 184, 0, 0.8)",
            }}
          />
        </div>
      </div>
    </>
  );
};
