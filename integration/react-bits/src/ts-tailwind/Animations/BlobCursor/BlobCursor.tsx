"use client";

import { useTrail, animated } from "@react-spring/web";
import { useRef, useEffect, useCallback } from "react";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#00f0ff",
}: {
  blobType?: string;
  fillColor?: string;
}) {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const ref = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    }
    return { left: 0, top: 0 };
  }, []);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    const { left, top } = updatePosition();
    const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
    const y = "clientY" in e ? e.clientY : e.touches[0].clientY;
    api.start({ xy: [x - left, y - top] });
  };

  useEffect(() => {
    const handleResize = () => {
      updatePosition();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updatePosition]);

  // Sizes for each animated div
  const sizes = [
    { width: 60, height: 60 },
    { width: 125, height: 125 },
    { width: 75, height: 75 },
  ];

  // Styles for pseudo-element replacements
  const pseudoStyles = [
    { top: 20, left: 20, width: 20, height: 20 },
    { top: 35, left: 35, width: 35, height: 35 },
    { top: 25, left: 25, width: 25, height: 25 },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 100 }}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
          />
        </filter>
      </svg>
      <div
        ref={ref}
        className="absolute w-full h-full overflow-hidden bg-transparent select-none cursor-default"
        style={{
          filter: 'url("#blob")',
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          KhtmlUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
        onMouseMove={(e) => handleMove(e as unknown as MouseEvent)}
        onTouchMove={(e) => handleMove(e as unknown as TouchEvent)}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            className="absolute opacity-60 shadow-[10px_10px_5px_0_rgba(0,0,0,0.75)]"
            style={{
              transform: props.xy.to(trans),
              width: `${sizes[index].width}px`,
              height: `${sizes[index].height}px`,
              willChange: "transform",
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
            }}
          >
            {/* Replacing the ::after pseudo-element */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                top: `${pseudoStyles[index].top}px`,
                left: `${pseudoStyles[index].left}px`,
                width: `${pseudoStyles[index].width}px`,
                height: `${pseudoStyles[index].height}px`,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.8)",
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}
