"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export type LightboxItem = { src: string; alt: string; tag?: string };

type Props = {
  items: LightboxItem[];
  /** class applied to the grid wrapper so each surface keeps its own layout */
  gridClassName?: string;
  /** class applied to each figure tile */
  tileClassName?: string;
  /** next/image sizes attribute for the tiles */
  sizes?: string;
  /** intrinsic width/height passed to next/image for the tiles */
  tileWidth?: number;
  tileHeight?: number;
  ariaLabel?: string;
  /**
   * Tile rendering style (chosen declaratively so this client component can be
   * used from server components without passing function props):
   *  - "default": next/image, fixed 4:3 crop (service pages)
   *  - "cover":   next/image, fills a parent-defined aspect box (homepage sneak peek)
   *  - "masonry": plain img at natural ratio with optional tag caption (results page)
   */
  variant?: "default" | "cover" | "masonry";
};

export default function Lightbox({
  items,
  gridClassName = "",
  tileClassName = "",
  sizes,
  tileWidth = 760,
  tileHeight = 570,
  ariaLabel,
  variant = "default",
}: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const show = useCallback((i: number) => { setIdx(i); setOpen(true); }, []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  const current = items[idx];

  return (
    <>
      <div className={gridClassName} aria-label={ariaLabel}>
        {items.map((p, i) => (
          <figure key={`${p.src}-${i}`} className={tileClassName}>
            <button
              type="button"
              className="lb-trigger"
              onClick={() => show(i)}
              aria-label={`Enlarge photo: ${p.alt}`}
            >
              {variant === "masonry" ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" className="lb-masonry-img" />
                  {p.tag ? <figcaption className="lb-tag">{p.tag}</figcaption> : null}
                </>
              ) : variant === "cover" ? (
                <Image src={p.src} alt={p.alt} width={tileWidth} height={tileHeight} sizes={sizes} className="lb-cover-img" loading="lazy" />
              ) : (
                <Image className="lb-default-img" src={p.src} alt={p.alt} width={tileWidth} height={tileHeight} sizes={sizes} />
              )}
              <span className="lb-zoom" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>
          </figure>
        ))}
      </div>

      {open && current && (
        <div className="lb-overlay" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button type="button" className="lb-close" onClick={close} aria-label="Close photo viewer">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          {items.length > 1 && (
            <button type="button" className="lb-arrow lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
          )}

          <figure className="lb-stage" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={current.alt} className="lb-full" />
            <figcaption className="lb-cap">{current.alt}</figcaption>
          </figure>

          {items.length > 1 && (
            <button type="button" className="lb-arrow lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          )}

          {items.length > 1 && <span className="lb-count">{idx + 1} / {items.length}</span>}
        </div>
      )}

      <style jsx>{`
        .lb-trigger {
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          background: none;
          cursor: zoom-in;
          position: relative;
          border-radius: var(--r-lg);
          overflow: hidden;
        }
        .lb-trigger :global(.lb-default-img) {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          border-radius: var(--r-lg);
          box-shadow: var(--shadow-md);
          transition: transform 0.4s ease;
        }
        .lb-trigger:hover :global(.lb-default-img) { transform: scale(1.04); }

        /* cover variant: fill a parent-defined aspect box (e.g. homepage sneak peek) */
        .lb-trigger :global(.lb-cover-img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        /* masonry variant: natural aspect ratio (e.g. results page) */
        .lb-trigger :global(.lb-masonry-img) {
          display: block;
          width: 100%;
          height: auto;
        }
        .lb-trigger :global(.lb-tag) {
          position: absolute;
          top: 12px; left: 12px;
          font-family: var(--font-display);
          font-weight: 700; font-size: 12.5px;
          color: #fff;
          background: rgba(19,58,94,0.82);
          backdrop-filter: blur(6px);
          padding: 6px 13px;
          border-radius: var(--r-pill);
          letter-spacing: 0.02em;
          pointer-events: none;
          z-index: 2;
        }
        .lb-zoom {
          position: absolute;
          right: 12px; bottom: 12px;
          width: 38px; height: 38px;
          display: grid; place-items: center;
          background: rgba(20, 32, 44, 0.62);
          color: #fff;
          border-radius: 50%;
          backdrop-filter: blur(6px);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .lb-trigger:hover .lb-zoom,
        .lb-trigger:focus-visible .lb-zoom { opacity: 1; transform: translateY(0); }

        .lb-overlay {
          position: fixed; inset: 0;
          z-index: 1000;
          background: rgba(12, 18, 24, 0.92);
          backdrop-filter: blur(4px);
          display: grid;
          place-items: center;
          padding: clamp(16px, 4vw, 48px);
          animation: lb-fade 0.18s ease;
        }
        @keyframes lb-fade { from { opacity: 0; } to { opacity: 1; } }
        .lb-stage {
          margin: 0;
          max-width: min(1200px, 94vw);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .lb-full {
          display: block;
          width: auto;
          height: auto;
          max-width: min(1200px, 94vw);
          max-height: 78vh;
          object-fit: contain;
          border-radius: var(--r-md);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .lb-cap {
          color: rgba(255, 255, 255, 0.82);
          font-family: var(--font-display);
          font-size: 0.92rem;
          text-align: center;
          max-width: 70ch;
        }
        .lb-close {
          position: fixed;
          top: clamp(14px, 2.5vw, 26px);
          right: clamp(14px, 2.5vw, 26px);
          width: 46px; height: 46px;
          border-radius: 50%;
          border: 0;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          display: grid; place-items: center;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .lb-close:hover { background: rgba(255, 255, 255, 0.24); }
        .lb-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 0;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          display: grid; place-items: center;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .lb-arrow:hover { background: rgba(255, 255, 255, 0.24); }
        .lb-prev { left: clamp(10px, 2.5vw, 28px); }
        .lb-next { right: clamp(10px, 2.5vw, 28px); }
        .lb-count {
          position: fixed;
          bottom: clamp(16px, 3vw, 30px);
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
        }
        @media (max-width: 640px) {
          .lb-arrow { width: 42px; height: 42px; }
        }
      `}</style>
    </>
  );
}
