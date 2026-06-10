import { proof } from "@/lib/site";

export function ProofGallery() {
  const shots = proof;

  return (
    <div className="pg">
      <p className="pg-count">{shots.length} photo{shots.length === 1 ? "" : "s"} of finished work</p>

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
