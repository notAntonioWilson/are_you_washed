"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Shot = { image: string; alt: string };

// Action, branding, and work-in-progress shots. Real crew, real jobs around
// Metro Detroit. These are credibility shots, not before/after results.
const shots: Shot[] = [
  { image: "/images/proof/window-tudor-gable-01.jpg", alt: "Are You Washed crew member washing a paver patio from a ladder in Metro Detroit" },
  { image: "/images/proof/action-commercial-balcony-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-commercial-lift-01.jpg", alt: "Boom lift staged for a commercial wash near the lake in Metro Detroit" },
  { image: "/images/proof/action-commercial-storefront-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-deck-wash-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-driveway-truck-01.jpg", alt: "Are You Washed truck and rig set up for a driveway wash in Macomb, MI" },
  { image: "/images/proof/action-fence-wash-01.jpg", alt: "Wood fence being washed clean board by board in Macomb County" },
  { image: "/images/proof/action-gutter-blower-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-gutter-team-01.jpg", alt: "Clearing gutters from the roofline at a Metro Detroit home" },
  { image: "/images/proof/action-gutter-team-02.jpg", alt: "Blowing leaves and debris out of the gutters on a wash day" },
  { image: "/images/proof/action-gutter-team-03.jpg", alt: "Crew finishing a gutter cleanout in Macomb County" },
  { image: "/images/proof/action-soft-wash-patio-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-surface-cleaner-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-window-pole-driveway-01.jpg", alt: "Reaching a second story window from the driveway with a pole in Metro Detroit" },
  { image: "/images/proof/action-window-pole-driveway-02.jpg", alt: "Pole work on upper windows during a wash in Macomb County" },
  { image: "/images/proof/action-window-squeegee-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-window-squeegee-02.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-window-squeegee-03.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-window-squeegee-04.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-window-squeegee-05.jpg", alt: "Squeegee pass on a window cleaning job in Macomb, MI" },
  { image: "/images/proof/action-window-squeegee-06.jpg", alt: "Pulling water off the glass on a window cleaning job" },
  { image: "/images/proof/action-window-squeegee-07.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-window-wipe-01.jpg", alt: "Wiping down glass during an interior window cleaning in Metro Detroit" },
  { image: "/images/proof/action-window-wipe-02.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/action-window-wipe-03.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
  { image: "/images/proof/brand-truck-01.jpg", alt: "Are You Washed crew on the job in Metro Detroit" },
];

export default function OnTheJob() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const halfRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const movedRef = useRef(false);
  const [reduced, setReduced] = useState(false);

  // Auto-scroll speed in pixels per second.
  const SPEED = 42;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      // The track holds two copies of the list, so half its width is one loop.
      halfRef.current = track.scrollWidth / 2;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const wrap = () => {
      const half = halfRef.current;
      if (half <= 0) return;
      if (offsetRef.current <= -half) offsetRef.current += half;
      if (offsetRef.current > 0) offsetRef.current -= half;
    };

    const render = () => {
      trackRef.current?.style.setProperty("transform", `translate3d(${offsetRef.current}px,0,0)`);
    };

    if (reduced) {
      // Reduced motion: no auto animation, render static at 0 but still draggable.
      offsetRef.current = 0;
      render();
      return () => ro.disconnect();
    }

    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      if (!draggingRef.current && !pausedRef.current) {
        offsetRef.current -= SPEED * dt;
        wrap();
        render();
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      ro.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [reduced]);

  const onPointerDown = (e: React.PointerEvent) => {
    const vp = viewportRef.current;
    if (!vp) return;
    draggingRef.current = true;
    movedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    vp.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    if (Math.abs(dx) > 3) movedRef.current = true;
    offsetRef.current = dragStartOffsetRef.current + dx;
    const half = halfRef.current;
    if (half > 0) {
      if (offsetRef.current <= -half) offsetRef.current += half;
      if (offsetRef.current > 0) offsetRef.current -= half;
    }
    trackRef.current?.style.setProperty("transform", `translate3d(${offsetRef.current}px,0,0)`);
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    lastTsRef.current = null;
    const vp = viewportRef.current;
    if (vp && vp.hasPointerCapture(e.pointerId)) vp.releasePointerCapture(e.pointerId);
  };

  // Block click navigation if the pointer was actually dragging.
  const onClickCapture = (e: React.MouseEvent) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="section otj">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">On the Job</span>
          <h2 className="section-title">
            Out Working<br />
            <span className="accent">Across Metro Detroit</span>
          </h2>
          <p className="section-sub">
            Real days, real jobs. This is what it looks like when we show up: our own truck, our own crew, on roofs, ladders, and driveways from Macomb out across the metro.
          </p>
        </div>
      </div>
      <div
        className="otj-viewport"
        ref={viewportRef}
        aria-label="Photos of the crew on the job. Drag to scroll."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; lastTsRef.current = null; }}
        onClickCapture={onClickCapture}
      >
        <div className="otj-track" ref={trackRef}>
          {[...shots, ...shots].map((s, i) => (
            <figure className="otj-item" key={`${s.image}-${i}`} aria-hidden={i >= shots.length}>
              <Image src={s.image} alt={s.alt} width={600} height={800} sizes="(max-width: 700px) 70vw, 320px" className="otj-img" loading="lazy" draggable={false} />
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .otj { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(40px, 5vw, 64px); }
        .otj .section-head { margin-bottom: clamp(24px, 3.5vw, 36px); }
        .otj-viewport { overflow: hidden; padding: 4px 0 16px; cursor: grab; touch-action: pan-y; -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); }
        .otj-viewport:active { cursor: grabbing; }
        .otj-track { display: flex; gap: 14px; width: max-content; will-change: transform; }
        .otj-item { margin: 0; flex: 0 0 auto; width: clamp(220px, 70vw, 300px); border-radius: 14px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.12); background: var(--surface, #f3f4f2); }
        .otj-img { width: 100%; height: 380px; object-fit: cover; display: block; user-select: none; -webkit-user-drag: none; pointer-events: none; }
      `}</style>
    </section>
  );
}
