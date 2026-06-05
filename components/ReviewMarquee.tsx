"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { Review } from "@/lib/site";
import { Icons } from "./Icons";

const Star = Icons.star;

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="rc">
      <div className="rc-top">
        <span className="rc-stars">
          {[...Array(5)].map((_, i) => <Star key={i} />)}
        </span>
        <span className={`rc-src rc-src-${r.source.toLowerCase()}`}>{r.source}</span>
      </div>
      <blockquote className="rc-text">{r.text}</blockquote>
      <figcaption className="rc-foot">
        <span className="rc-avatar">{r.name.charAt(0)}</span>
        <span className="rc-meta">
          <span className="rc-name">{r.name}</span>
          {r.service && <span className="rc-svc">{r.service}</span>}
        </span>
      </figcaption>
      <style jsx>{`
        .rc {
          flex: 0 0 auto;
          width: 360px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 26px 26px 22px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 14px;
          user-select: none;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
        }
        .rc:hover { box-shadow: var(--shadow-md); border-color: var(--maize-light); }
        .rc-top { display: flex; align-items: center; justify-content: space-between; }
        .rc-stars { display: inline-flex; gap: 2px; color: var(--maize); }
        .rc-stars :global(svg) { width: 17px; height: 17px; }
        .rc-src {
          font-family: var(--font-display);
          font-weight: 700; font-size: 11px;
          padding: 4px 10px; border-radius: var(--r-pill);
        }
        .rc-src-google { background: var(--aqua-soft); color: var(--aqua-deep); }
        .rc-src-angi { background: #fdeaea; color: #c8492f; }
        .rc-text {
          color: var(--ink-soft);
          font-size: 0.96rem;
          line-height: 1.6;
          flex: 1;
        }
        .rc-foot { display: flex; align-items: center; gap: 11px; }
        .rc-avatar {
          width: 40px; height: 40px;
          display: grid; place-items: center;
          background: linear-gradient(135deg, var(--maize), var(--maize-deep));
          color: #2a1c00;
          font-family: var(--font-display);
          font-weight: 800; font-size: 1rem;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .rc-meta { display: flex; flex-direction: column; }
        .rc-name { font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: var(--ink); }
        .rc-svc { font-size: 0.8rem; color: var(--ink-muted); }
        @media (max-width: 520px) { .rc { width: 300px; } }
      `}</style>
    </figure>
  );
}

export default function ReviewMarquee({
  reviews,
  direction = "left",
  speed = 50,
}: {
  reviews: Review[];
  direction?: "left" | "right";
  speed?: number; // px per second
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const halfWidth = useRef(0);
  const raf = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);
  const paused = useRef(false);
  const [grabbing, setGrabbing] = useState(false);

  // Drag state
  const dragging = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);
  const lastDragX = useRef(0);
  const velocity = useRef(0);
  const lastDragTs = useRef(0);

  // Duplicate the list so the loop is seamless
  const loop = [...reviews, ...reviews];

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (track) halfWidth.current = track.scrollWidth / 2;
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const apply = () => {
    const track = trackRef.current;
    if (!track) return;
    // Wrap within [-halfWidth, 0]
    const hw = halfWidth.current || 1;
    let o = offset.current % hw;
    if (o > 0) o -= hw;
    track.style.transform = `translate3d(${o}px,0,0)`;
  };

  useEffect(() => {
    const dir = direction === "left" ? -1 : 1;
    const tick = (ts: number) => {
      if (lastTs.current == null) lastTs.current = ts;
      const dt = (ts - lastTs.current) / 1000;
      lastTs.current = ts;

      if (!dragging.current) {
        if (!paused.current) {
          offset.current += dir * speed * dt;
        }
        // Momentum after drag
        if (Math.abs(velocity.current) > 0.5) {
          offset.current += velocity.current * dt;
          velocity.current *= 0.94; // friction
        }
      }
      apply();
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      lastTs.current = null;
    };
  }, [direction, speed]);

  // Pointer drag handlers
  const onDown = (clientX: number) => {
    dragging.current = true;
    setGrabbing(true);
    startX.current = clientX;
    startOffset.current = offset.current;
    lastDragX.current = clientX;
    lastDragTs.current = performance.now();
    velocity.current = 0;
  };
  const onMove = (clientX: number) => {
    if (!dragging.current) return;
    const delta = clientX - startX.current;
    offset.current = startOffset.current + delta;
    // track velocity
    const now = performance.now();
    const dt = (now - lastDragTs.current) / 1000;
    if (dt > 0) velocity.current = (clientX - lastDragX.current) / dt;
    lastDragX.current = clientX;
    lastDragTs.current = now;
    apply();
  };
  const onUp = () => {
    dragging.current = false;
    setGrabbing(false);
  };

  return (
    <div
      className={`marquee ${grabbing ? "grabbing" : ""}`}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => { paused.current = false; onUp(); }}
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onUp}
      onTouchStart={(e) => { paused.current = true; onDown(e.touches[0].clientX); }}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={() => { paused.current = false; onUp(); }}
    >
      <div className="marquee-track" ref={trackRef}>
        {loop.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
      <style jsx>{`
        .marquee {
          overflow: hidden;
          cursor: grab;
          touch-action: pan-y;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .marquee.grabbing { cursor: grabbing; }
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
