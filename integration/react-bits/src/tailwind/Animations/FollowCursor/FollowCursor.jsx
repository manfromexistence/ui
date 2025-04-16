import { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";

const calcX = (y, ly, containerCenterY, rotationFactor) =>
  -(y - ly - containerCenterY) / rotationFactor;
const calcY = (x, lx, containerCenterX, rotationFactor) =>
  (x - lx - containerCenterX) / rotationFactor;

const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const FollowCursor = ({
  children,
  className = '',
  animationConfig = { mass: 5, tension: 350, friction: 40 },
  hoverScale = 1.1,
  offsetX = 20,
  cardWidth = '200px',
  rotationFactor = 20,
  perspective = '300px',
  zoomSensitivity = 200,
  wheelConfig = { mass: 1, tension: 200, friction: 30 },
  enableTilt = true,
  enableZoom = true,
  enableDrag = true
}) => {
  const domTarget = useRef(null);
  const containerRef = useRef(null);
  const touchState = useRef({});

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: animationConfig,
    })
  );

  const [{ wheelY }, wheelApi] = useSpring(() => ({
    wheelY: 0,
    config: wheelConfig
  }));

  // Touch handling logic
  useEffect(() => {
    if (!isMobile() || !domTarget.current || !enableDrag) return;

    const card = domTarget.current;
    let isDragging = false;
    let pinchStartDistance = 0;
    let pinchStartAngle = 0;
    let initialZoom = 0;
    let initialRotateZ = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchState.current = {
          startX: e.touches[0].clientX,
          startY: e.touches[0].clientY,
          offsetX: x.get(),
          offsetY: y.get()
        };
        isDragging = true;
      } else if (e.touches.length === 2 && enableZoom) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        pinchStartDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        pinchStartAngle = Math.atan2(
          touch2.clientY - touch1.clientY,
          touch2.clientX - touch1.clientX
        );
        initialZoom = zoom.get();
        initialRotateZ = rotateZ.get();
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging && e.touches.length !== 2) return;

      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchState.current.startX;
        const deltaY = touch.clientY - touchState.current.startY;

        api.start({
          x: touchState.current.offsetX + deltaX,
          y: touchState.current.offsetY + deltaY,
          rotateX: 0,
          rotateY: 0,
          scale: 1
        });
      } else if (e.touches.length === 2 && enableZoom) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const currentAngle = Math.atan2(
          touch2.clientY - touch1.clientY,
          touch2.clientX - touch1.clientX
        );

        const zoomDelta = (currentDistance - pinchStartDistance) / zoomSensitivity;
        const rotateDelta = currentAngle - pinchStartAngle;

        api.start({
          zoom: initialZoom + zoomDelta,
          rotateZ: initialRotateZ + rotateDelta
        });
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      api.start({ scale: hoverScale });
    };

    const handleWheel = (e) => {
      e.preventDefault();
      wheelApi.start({
        wheelY: wheelY.get() + e.deltaY,
        immediate: true
      });
    };

    card.addEventListener('touchstart', handleTouchStart, { passive: false });
    card.addEventListener('touchmove', handleTouchMove, { passive: false });
    card.addEventListener('touchend', handleTouchEnd);
    if (enableZoom) card.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      card.removeEventListener('touchstart', handleTouchStart);
      card.removeEventListener('touchmove', handleTouchMove);
      card.removeEventListener('touchend', handleTouchEnd);
      card.removeEventListener('wheel', handleWheel);
    };
  }, [api, x, y, zoom, rotateZ, wheelY, wheelApi, enableDrag, enableZoom, zoomSensitivity, hoverScale]);

  // Mouse movement logic
  useEffect(() => {
    if (!isMobile() && enableTilt) {
      const handleMouseMove = (event) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const containerCenterX = rect.left + rect.width / 2;
        const containerCenterY = rect.top + rect.height / 2;

        const px = event.clientX;
        const py = event.clientY;

        const xPos = px - containerCenterX;
        const yPos = py - containerCenterY;

        const calculatedWidth = container.offsetWidth * (parseFloat(cardWidth) / 100);
        const calculatedOffset = calculatedWidth / 2 + offsetX;

        api.start({
          x: xPos + calculatedOffset,
          y: yPos,
          rotateX: enableTilt ? calcX(py, y.get(), containerCenterY, rotationFactor) : 0,
          rotateY: enableTilt ? calcY(px, x.get(), containerCenterX, rotationFactor) : 0,
          scale: hoverScale,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [api, y, x, cardWidth, offsetX, hoverScale, enableTilt, rotationFactor]);

  const wheelTransform = (y) => {
    const imgHeight = containerRef.current ?
      containerRef.current.offsetWidth * (parseFloat(cardWidth) / 100) - 20 :
      window.innerWidth * 0.3 - 20;
    return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`;
  };

  return (
    <div className={`container ${className}`} ref={containerRef}>
      <animated.div
        ref={domTarget}
        className="relative absolute w-[180px] h-[150px] bg-cover bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--8mUhEkXE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/km2w1ppw3yw9pd9na7mu.gif')] rounded-[15px] shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)] transition-shadow transition-opacity duration-500 [will-change:transform] touch-none"
        style={{
          width: cardWidth,
          transform: `perspective(${perspective})`,
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          rotateZ: enableZoom ? rotateZ : 0,
        }}
      >
        <animated.div style={{ transform: wheelY.to(wheelTransform) }}>
          {children}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default FollowCursor;