"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";

type Pair = { before: string; after: string; label: string };

const pairs: Pair[] = [
  { before: "/images/house-before.jpg", after: "/images/house-after.jpg", label: "House Wash — Siding" },
  { before: "/images/walkway-before.jpg", after: "/images/walkway-after.jpg", label: "Paver Walkway Restoration" },
  { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Stamped Concrete Patio" },
  { before: "/images/balustrade-before.jpg", after: "/images/balustrade-after.jpg", label: "Porch & Balustrade" },
];

function Slider({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div
      className="ba"
      ref={ref}
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => move(e.touches[0].clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <Image src={pair.after} alt={`${pair.label} after`} fill sizes="(max-width:900px) 100vw, 50vw" className="ba-img" />
      <span className="ba-tag ba-tag-after">After</span>

      <div className="ba-before" style={{ width: `${pos}%` }}>
        <div className="ba-before-inner">
          <Image src={pair.before} alt={`${pair.label} before`} fill sizes="(max-width:900px) 100vw, 50vw" className="ba-img" />
          <span className="ba-tag ba-tag-before">Before</span>
        </div>
      </div>

      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <div className="ba-knob">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6 4 12l5 6M15 6l5 6-5 6"/>
          </svg>
        </div>
      </div>

      <div className="ba-label">{pair.label}</div>

      <style jsx>{`
        .ba {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--r-lg);
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
          box-shadow: var(--shadow-md);
          background: var(--ink);
        }
        .ba :global(.ba-img) { object-fit: cover; }
        .ba-before {
          position: absolute; inset: 0;
          overflow: hidden;
        }
        .ba-before-inner { position: absolute; inset: 0; width: 100vw; max-width: none; }
        .ba :global(.ba-before-inner .ba-img) { object-position: left center; }
        .ba-tag {
          position: absolute; top: 14px;
          font-family: var(--font-display);
          font-weight: 700; font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 6px 13px;
          border-radius: var(--r-pill);
          backdrop-filter: blur(8px);
          z-index: 3;
        }
        .ba-tag-before { left: 14px; background: rgba(20,32,44,0.78); color: #fff; }
        .ba-tag-after { right: 14px; background: var(--maize); color: #2a1c00; }
        .ba-handle {
          position: absolute; top: 0; bottom: 0;
          width: 3px;
          background: #fff;
          transform: translateX(-50%);
          z-index: 4;
          box-shadow: 0 0 12px rgba(0,0,0,0.3);
        }
        .ba-knob {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 44px; height: 44px;
          background: #fff;
          color: var(--ink);
          border-radius: 50%;
          display: grid; place-items: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }
        .ba-label {
          position: absolute; bottom: 14px; left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-weight: 600; font-size: 13px;
          color: #fff;
          background: rgba(20,32,44,0.7);
          backdrop-filter: blur(8px);
          padding: 7px 16px;
          border-radius: var(--r-pill);
          z-index: 3;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  return (
    <section className="section section-tint ba-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">See The Difference</span>
          <h2 className="section-title">Real <span className="accent">Before &amp; Afters</span></h2>
          <p className="section-sub">Drag the slider to reveal the transformation. These are real jobs from real Metro Detroit homes.</p>
        </div>

        <div className="ba-tabs">
          {pairs.map((p, i) => (
            <button
              key={p.label}
              className={`ba-tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="ba-stage reveal">
          <Slider key={active} pair={pairs[active]} />
        </div>
      </div>
      <style>{`
        .ba-tabs {
          display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;
          margin-bottom: 32px;
        }
        .ba-tab {
          font-family: var(--font-display);
          font-weight: 600; font-size: 14px;
          color: var(--ink-soft);
          background: var(--white);
          border: 1.5px solid var(--line);
          padding: 11px 20px;
          border-radius: var(--r-pill);
          transition: all 0.25s;
        }
        .ba-tab:hover { border-color: var(--maize); color: var(--ink); }
        .ba-tab.active {
          background: var(--ink);
          color: #fff;
          border-color: var(--ink);
        }
        .ba-stage { max-width: 820px; margin: 0 auto; }
      `}</style>
    </section>
  );
}
