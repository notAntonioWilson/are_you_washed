"use client";

import { useMemo, useState } from "react";
import { proof } from "@/lib/site";

const TAG_ORDER = ["All", "Commercial", "Driveways", "Patios & Decks", "Concrete", "Porch & Balustrade", "House Washing", "Windows", "Gutters"];

export function ProofGallery() {
  const [active, setActive] = useState("All");

  const tags = useMemo(() => {
    const present = new Set(proof.map((p) => p.tag));
    return TAG_ORDER.filter((t) => t === "All" || present.has(t));
  }, []);

  const shots = active === "All" ? proof : proof.filter((p) => p.tag === active);

  return (
    <div className="pg">
      <div className="pg-chips" role="tablist" aria-label="Filter results by service">
        {tags.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            className={`pg-chip ${active === t ? "on" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="pg-count">{shots.length} photo{shots.length === 1 ? "" : "s"}{active !== "All" ? ` in ${active}` : " of finished work"}</p>

      <div className="pg-grid">
        {shots.map((p) => (
          <figure key={p.image} className="pg-item">
            {/* Plain img keeps each photo at its natural aspect ratio for the masonry flow */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.alt} loading="lazy" />
            <figcaption className="pg-tag">{p.tag}</figcaption>
          </figure>
        ))}
      </div>

      <style>{`
        .pg-chips { display: flex; flex-wrap: wrap; gap: 9px; justify-content: center; margin-bottom: 14px; }
        .pg-chip {
          font-family: var(--font-display);
          font-weight: 600; font-size: 13.5px;
          color: var(--ink);
          background: var(--white);
          border: 1.5px solid var(--line);
          border-radius: var(--r-pill);
          padding: 8px 16px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .pg-chip:hover { border-color: var(--maize); }
        .pg-chip.on { background: var(--maize); border-color: var(--maize); color: #fff; }
        .pg-count { text-align: center; color: var(--ink-muted); font-size: 0.92rem; margin-bottom: 24px; }

        .pg-grid { column-count: 3; column-gap: 18px; }
        .pg-item {
          position: relative;
          break-inside: avoid;
          margin: 0 0 18px;
          border-radius: var(--r-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          background: var(--aqua-soft);
        }
        .pg-item img { display: block; width: 100%; height: auto; }
        .pg-tag {
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
        }
        @media (max-width: 900px) { .pg-grid { column-count: 2; } }
        @media (max-width: 560px) { .pg-grid { column-count: 1; } }
      `}</style>
    </div>
  );
}
