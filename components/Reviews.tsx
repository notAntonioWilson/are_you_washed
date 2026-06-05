import { reviews, trust, externalLinks } from "@/lib/site";
import { Icons } from "./Icons";

export default function Reviews() {
  const Star = Icons.star;
  return (
    <section className="section reviews">
      <div className="reviews-blob blob blob-aqua" />
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">⭐ {trust.angiReviewCount}+ Five-Star Reviews</span>
          <h2 className="section-title">What Our <span className="accent">Neighbors Say</span></h2>
          <p className="section-sub">
            A perfect 5.0 rating on both Google and Angi — earned one happy home at a time.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <figure key={r.name + i} className={`review reveal d${(i % 3) + 1}`}>
              <span className="review-stars">
                {[...Array(5)].map((_, s) => <Star key={s} />)}
              </span>
              <blockquote className="review-text">{r.text}</blockquote>
              <figcaption className="review-foot">
                <span className="review-name">{r.name}</span>
                <span className={`review-src review-src-${r.source.toLowerCase()}`}>{r.source}</span>
              </figcaption>
              {r.service && <span className="review-svc">{r.service}</span>}
            </figure>
          ))}
        </div>

        <div className="reviews-cta">
          <a href={externalLinks.angi} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Read all reviews on Angi <Icons.arrow />
          </a>
        </div>
      </div>
      <style>{`
        .reviews { position: relative; overflow: hidden; }
        .reviews-blob { width: 500px; height: 500px; top: 10%; left: -200px; }
        .reviews-grid {
          columns: 3;
          column-gap: 22px;
        }
        .review {
          break-inside: avoid;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 28px 26px;
          margin-bottom: 22px;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .review:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .review-stars { display: inline-flex; gap: 2px; color: var(--maize); margin-bottom: 14px; }
        .review-stars :global(svg) { width: 17px; height: 17px; }
        .review-text {
          color: var(--ink-soft);
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 18px;
        }
        .review-foot { display: flex; align-items: center; gap: 10px; }
        .review-name { font-family: var(--font-display); font-weight: 700; font-size: 0.96rem; color: var(--ink); }
        .review-src {
          font-family: var(--font-display);
          font-weight: 600; font-size: 11px;
          padding: 4px 10px;
          border-radius: var(--r-pill);
        }
        .review-src-google { background: var(--aqua-soft); color: var(--aqua-deep); }
        .review-src-angi { background: #fdeaea; color: #c8492f; }
        .review-svc {
          display: inline-block;
          margin-top: 12px;
          font-family: var(--font-display);
          font-weight: 500; font-size: 12px;
          color: var(--ink-muted);
          background: var(--bg-tint);
          padding: 5px 12px;
          border-radius: var(--r-pill);
        }
        .reviews-cta { text-align: center; margin-top: 16px; }
        @media (max-width: 1000px) { .reviews-grid { columns: 2; } }
        @media (max-width: 640px) { .reviews-grid { columns: 1; } }
      `}</style>
    </section>
  );
}
