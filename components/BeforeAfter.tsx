"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";

type Pair = { before: string; after: string; label: string };

const pairs: Pair[] = [
  {
    before: "/images/proof/rust-removal-before-01.jpg",
    after: "/images/proof/rust-removal-after-01.jpg",
    label: "Rust Removal, Block Wall",
  },
  {
    before: "/images/proof/gutter-guard-before-05.jpg",
    after: "/images/proof/gutter-guard-after-05.jpg",
    label: "Gutter Cleaning, Gutter Guards",
  },
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
      <Image src={pair.after} alt={`${pair.label}, after pressure washing in Macomb, MI`} fill sizes="(max-width:900px) 100vw, 50vw" className="ba-img" />
      <span className="ba-tag ba-tag-after">After</span>

      <div className="ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={pair.before} alt={`${pair.label}, before pressure washing`} fill sizes="(max-width:900px) 100vw, 50vw" className="ba-img" />
        <span className="ba-tag ba-tag-before">Before</span>
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
        .ba-tag-after { right: 14px; background: var(--maize); color: #ffffff; }
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
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + pairs.length) % pairs.length);
  const next = () => setIdx((i) => (i + 1) % pairs.length);

  return (
    <section className="section section-tint ba-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">See The Difference</span>
          <h2 className="section-title">Real <span className="accent">Before &amp; After</span></h2>
          <p className="section-sub">Drag the slider to see the before and after, and use the arrows to flip through more jobs. These are real jobs we did here in Metro Detroit, and we&apos;ll give you a free quote for yours.</p>
        </div>

        <div className="ba-stage reveal">
          <Slider key={idx} pair={pairs[idx]} />
          {pairs.length > 1 && (
          <div className="ba-nav">
            <button type="button" className="ba-arrow" onClick={prev} aria-label="Previous before and after photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
            <span className="ba-count">{idx + 1} / {pairs.length}</span>
            <button type="button" className="ba-arrow" onClick={next} aria-label="Next before and after photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
          )}
        </div>

        <div className="ba-cta">
          <Link href="/results" className="btn btn-primary btn-lg">
            See All Results <Icons.arrow />
          </Link>
          <Link href="/contact" className="btn btn-ghost btn-lg">
            Get a Free Quote
          </Link>
        </div>
      </div>
      <style>{`
        .ba-stage { max-width: 820px; margin: 0 auto; }
        .ba-nav {
          display: flex; align-items: center; justify-content: center;
          gap: 18px; margin-top: 16px;
        }
        .ba-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(20,32,44,0.15);
          background: #fff;
          color: var(--ink);
          display: grid; place-items: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          transition: background 0.15s ease, color 0.15s ease;
        }
        .ba-arrow:hover { background: var(--maize); color: #fff; }
        .ba-count {
          font-family: var(--font-display);
          font-weight: 600; font-size: 14px;
          color: var(--ink);
          min-width: 52px; text-align: center;
        }
        .ba-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 30px; }
      `}</style>
    </section>
  );
}
