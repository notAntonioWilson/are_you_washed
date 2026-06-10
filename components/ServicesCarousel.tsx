"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/site";
import { Icons } from "./Icons";

const AUTOPLAY_MS = 4500;

export function ServicesCarousel() {
  const total = services.length;
  // Clone the last and first few for a seamless infinite loop.
  const CLONES = 3;
  const head = services.slice(-CLONES);
  const tail = services.slice(0, CLONES);
  const loop = [...head, ...services, ...tail];

  // Start index sits at the first real slide (after the head clones).
  const [index, setIndex] = useState(CLONES);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);
  const paused = useRef(false);

  // drag state
  const drag = useRef({ active: false, startX: 0, dx: 0 });

  useEffect(() => {
    reduced.current = typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const go = useCallback((dir: number) => {
    setAnimate(true);
    setIndex((i) => i + dir);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (reduced.current) return;
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [go]);

  // After a transition that lands on a clone, snap back without animation.
  const onTransitionEnd = () => {
    if (index >= total + CLONES) {
      setAnimate(false);
      setIndex((i) => i - total);
    } else if (index < CLONES) {
      setAnimate(false);
      setIndex((i) => i + total);
    }
  };

  // Re-enable animation on the next frame after a snap.
  useEffect(() => {
    if (!animate) {
      const r = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(r);
    }
  }, [animate]);

  // The active real-slide dot (0..total-1)
  const activeDot = ((index - CLONES) % total + total) % total;

  // drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    paused.current = true;
    drag.current = { active: true, startX: e.clientX, dx: 0 };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.dx = e.clientX - drag.current.startX;
  };
  const onPointerUp = () => {
    if (!drag.current.active) return;
    const dx = drag.current.dx;
    drag.current.active = false;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    setTimeout(() => (paused.current = false), 1200);
  };

  return (
    <div
      className="svcx"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <button className="svcx-arrow svcx-prev" aria-label="Previous services" onClick={() => go(-1)}>
        <Icons.arrow className="svcx-arrow-ic flip" />
      </button>
      <button className="svcx-arrow svcx-next" aria-label="Next services" onClick={() => go(1)}>
        <Icons.arrow className="svcx-arrow-ic" />
      </button>

      <div
        className="svcx-viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          ref={trackRef}
          className="svcx-track"
          style={{
            transform: `translateX(calc(${-index} * var(--svcx-step)))`,
            transition: animate ? "transform 0.55s cubic-bezier(.16,1,.3,1)" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {loop.map((s, i) => {
            const Ic = Icons[s.icon];
            const img = s.image || "/images/house-after.jpg";
            return (
              <div className="svcx-slide" key={`${s.slug}-${i}`}>
                <Link href={`/services/${s.slug}`} className="svcx-card" draggable={false}>
                  <div className="svcx-banner">
                    <Image src={img} alt={s.alt || s.name} fill sizes="(max-width: 700px) 85vw, 33vw" style={{ objectFit: "cover" }} draggable={false} />
                    <div className="svcx-ic"><Ic className="svcx-ic-svg" /></div>
                  </div>
                  <div className="svcx-body">
                    <h3 className="svcx-name">{s.name}</h3>
                    <p className="svcx-desc">{s.description}</p>
                    <span className="svcx-link">More info <Icons.arrow className="svcx-link-ic" /></span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="svcx-dots" role="tablist" aria-label="Service slides">
        {services.map((s, i) => (
          <button
            key={s.slug}
            className={`svcx-dot ${i === activeDot ? "on" : ""}`}
            aria-label={`Go to ${s.name}`}
            aria-selected={i === activeDot}
            onClick={() => { setAnimate(true); setIndex(CLONES + i); }}
          />
        ))}
      </div>

      <style>{`
        .svcx { position: relative; --svcx-step: calc(100% / 3); }
        .svcx-viewport { overflow: hidden; margin: 0 -10px; padding: 6px 0 4px; touch-action: pan-y; cursor: grab; }
        .svcx-viewport:active { cursor: grabbing; }
        .svcx-track { display: flex; }
        .svcx-slide { flex: 0 0 var(--svcx-step); padding: 0 10px; box-sizing: border-box; }

        .svcx-card {
          display: flex; flex-direction: column; height: 100%;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .svcx-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: var(--maize-light); }
        .svcx-banner { position: relative; aspect-ratio: 16 / 10; overflow: hidden; background: var(--aqua-soft); }
        .svcx-banner :global(img) { transition: transform 0.5s cubic-bezier(.16,1,.3,1); }
        .svcx-card:hover .svcx-banner :global(img) { transform: scale(1.06); }
        .svcx-ic {
          position: absolute; left: 16px; bottom: 16px;
          width: 50px; height: 50px;
          display: grid; place-items: center;
          background: linear-gradient(135deg, var(--maize), var(--maize-deep));
          color: #fff; border-radius: 13px;
          box-shadow: 0 6px 16px rgba(22,39,58,0.22);
        }
        .svcx-ic-svg { width: 25px; height: 25px; }
        .svcx-body { display: flex; flex-direction: column; flex: 1; padding: 22px 24px 24px; }
        .svcx-name { font-size: 1.32rem; margin-bottom: 9px; }
        .svcx-desc { color: var(--ink-soft); font-size: 0.98rem; line-height: 1.6; margin-bottom: 18px; flex: 1; }
        .svcx-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-display); font-weight: 600; font-size: 14px;
          color: var(--maize-deep);
        }
        .svcx-link-ic { width: 16px; height: 16px; transition: transform 0.25s; }
        .svcx-card:hover .svcx-link-ic { transform: translateX(4px); }

        .svcx-arrow {
          position: absolute; top: calc(50% - 40px); transform: translateY(-50%);
          z-index: 3;
          width: 46px; height: 46px;
          display: grid; place-items: center;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 50%;
          box-shadow: var(--shadow-md);
          color: var(--ink);
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .svcx-arrow:hover { background: var(--maize); color: #fff; border-color: var(--maize); }
        .svcx-prev { left: -10px; }
        .svcx-next { right: -10px; }
        .svcx-arrow-ic { width: 20px; height: 20px; }
        .svcx-arrow-ic.flip { transform: rotate(180deg); }

        .svcx-dots { display: flex; justify-content: center; gap: 9px; margin-top: 22px; }
        .svcx-dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: var(--line);
          transition: background 0.2s, width 0.2s;
        }
        .svcx-dot.on { background: var(--maize); width: 26px; border-radius: 5px; }

        @media (max-width: 1100px) {
          .svcx { --svcx-step: 50%; }
        }
        @media (max-width: 700px) {
          .svcx { --svcx-step: 83%; }
          .svcx-arrow { display: none; }
          .svcx-name { font-size: 1.22rem; }
        }
      `}</style>
    </div>
  );
}
