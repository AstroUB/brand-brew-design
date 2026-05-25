import { useEffect, useRef, useState } from "react";
import { gsap } from "@/hooks/useGsap";
import bottleImg from "@/assets/bottle-preview.jpg";

type Props = {
  artwork?: string | null;
  className?: string;
};

/**
 * Rotating bottle with a wrapped artwork overlay.
 * Pointer drag spins the bottle; the label wraps with it.
 */
export function BottleViewer({ artwork, className = "" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const auto = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!innerRef.current) return;
    auto.current = gsap.to(innerRef.current, {
      rotateY: "+=360",
      duration: 22,
      ease: "none",
      repeat: -1,
    });
    return () => {
      auto.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (innerRef.current) {
      gsap.to(innerRef.current, { rotateY: rotation, duration: 0.4, ease: "power2.out", overwrite: true });
    }
  }, [rotation]);

  function onDown(e: React.PointerEvent) {
    dragging.current = true;
    lastX.current = e.clientX;
    auto.current?.pause();
    (e.target as Element).setPointerCapture(e.pointerId);
  }
  function onMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setRotation((r) => r + dx * 0.6);
  }
  function onUp() {
    dragging.current = false;
    auto.current?.resume();
  }

  return (
    <div
      ref={wrapRef}
      className={`relative w-full aspect-square select-none touch-none ${className}`}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      style={{ perspective: "1400px" }}
    >
      <div ref={innerRef} className="absolute inset-0 preserve-3d" style={{ transformStyle: "preserve-3d" }}>
        <img
          src={bottleImg}
          alt="Bottle preview"
          width={1200}
          height={1200}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          draggable={false}
        />
        {artwork && (
          <div
            ref={labelRef}
            className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[34%] h-[28%] overflow-hidden rounded-sm shadow-xl"
            style={{
              maskImage: "radial-gradient(ellipse 120% 100% at center, black 55%, transparent 95%)",
              WebkitMaskImage: "radial-gradient(ellipse 120% 100% at center, black 55%, transparent 95%)",
            }}
          >
            <img
              src={artwork}
              alt="Your artwork"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        )}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground pointer-events-none">
        Drag to rotate
      </div>
    </div>
  );
}
