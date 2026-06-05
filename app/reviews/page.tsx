import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { reviews, trust, site, externalLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read 100+ verified 5-star reviews for Are You Washed Pressure Washing from Google and Angi. Real Metro Detroit homeowners, real results.",
  alternates: { canonical: `${site.url}/reviews` },
};

const Star = Icons.star;

export default function ReviewsPage() {
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="⭐ 100+ Five-Star Reviews"
        title="Loved By"
        accent="Metro Detroit"
        sub="Don't just take our word for it. A perfect 5.0 rating across Google and Angi, earned one spotless home at a time."
      />

      {/* Rating summary band */}
      <section className="rev-summary">
        <div className="container rev-summary-grid">
          <div className="rev-stat reveal">
            <div className="rev-stat-stars">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <div className="rev-stat-num">5.0</div>
            <div className="rev-stat-label">Google Rating</div>
          </div>
          <div className="rev-stat reveal d1">
            <div className="rev-stat-stars">
              {[...Array(5)].map((_, i) => <Star key={i} />)}
            </div>
            <div className="rev-stat-num">5.0</div>
            <div className="rev-stat-label">Angi Rating</div>
          </div>
          <div className="rev-stat reveal d2">
            <div className="rev-stat-num rev-stat-num-plain">{trust.angiReviewCount}+</div>
            <div className="rev-stat-label">Verified Reviews</div>
          </div>
          <div className="rev-stat reveal d3">
            <div className="rev-stat-num rev-stat-num-plain">{trust.bbbRating}</div>
            <div className="rev-stat-label">BBB Accredited</div>
          </div>
        </div>
      </section>

      {/* All reviews, 3-column masonry, tagged by source */}
      <section className="section rev-all">
        <div className="container">
          <div className="rev-masonry">
            {reviews.map((r, i) => (
              <figure key={`${r.name}-${i}`} className="rc reveal">
                <div className="rc-top">
                  <span className="rc-stars">
                    {[...Array(5)].map((_, j) => <Star key={j} />)}
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
              </figure>
            ))}
          </div>

          <div className="rev-cta-row">
            <a href={externalLinks.angi} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              Read all reviews on Angi <Icons.arrow />
            </a>
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        .rev-summary { padding: clamp(28px,4vw,44px) 0; background: var(--bg-maize); }
        .rev-summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .rev-stat {
          background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg);
          padding: 24px 18px; text-align: center; box-shadow: var(--shadow-sm);
        }
        .rev-stat-stars { display: inline-flex; gap: 2px; color: var(--maize); margin-bottom: 8px; }
        .rev-stat-stars :global(svg) { width: 16px; height: 16px; }
        .rev-stat-num {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.8rem, 3.4vw, 2.6rem); line-height: 1;
          background: linear-gradient(120deg, var(--maize-deep), var(--maize));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
          margin-bottom: 6px;
        }
        .rev-stat-num-plain { margin-top: 4px; }
        .rev-stat-label { font-family: var(--font-display); font-weight: 500; font-size: 0.86rem; color: var(--ink-muted); }

        .rev-all { padding-top: clamp(34px,5vw,60px); }
        .rev-masonry { column-count: 3; column-gap: 20px; }
        .rc {
          break-inside: avoid;
          margin: 0 0 20px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 22px 22px 20px;
          box-shadow: var(--shadow-sm);
          display: flex; flex-direction: column; gap: 13px;
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .rc:hover { box-shadow: var(--shadow-md); border-color: var(--maize-light); }
        .rc-top { display: flex; align-items: center; justify-content: space-between; }
        .rc-stars { display: inline-flex; gap: 2px; color: var(--maize); }
        .rc-stars :global(svg) { width: 16px; height: 16px; }
        .rc-src { font-family: var(--font-display); font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: var(--r-pill); }
        .rc-src-google { background: var(--aqua-soft); color: var(--aqua-deep); }
        .rc-src-angi { background: #fdeaea; color: #c8492f; }
        .rc-text { color: var(--ink-soft); font-size: 0.95rem; line-height: 1.6; }
        .rc-foot { display: flex; align-items: center; gap: 11px; margin-top: 2px; }
        .rc-avatar {
          width: 38px; height: 38px; display: grid; place-items: center;
          background: linear-gradient(135deg, var(--maize), var(--maize-deep));
          color: #2a1c00; font-family: var(--font-display); font-weight: 800; font-size: 0.95rem;
          border-radius: 50%; flex-shrink: 0;
        }
        .rc-meta { display: flex; flex-direction: column; }
        .rc-name { font-family: var(--font-display); font-weight: 700; font-size: 0.92rem; color: var(--ink); }
        .rc-svc { font-size: 0.78rem; color: var(--ink-muted); }

        .rev-cta-row { display: flex; justify-content: center; margin-top: 40px; }

        @media (max-width: 900px) { .rev-summary-grid { grid-template-columns: 1fr 1fr; gap: 14px; } .rev-masonry { column-count: 2; } }
        @media (max-width: 560px) { .rev-masonry { column-count: 1; } }
      `}</style>
    </>
  );
}
