import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ReviewMarquee from "@/components/ReviewMarquee";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { reviews, trust, site, externalLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what Metro Detroit homeowners say about Are You Washed Pressure Washing, a perfect 5.0★ rating across 75+ reviews on Google and Angi.",
  alternates: { canonical: `${site.url}/reviews` },
};

const Star = Icons.star;

export default function ReviewsPage() {
  const mid = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, mid);
  const rowB = reviews.slice(mid);

  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="⭐ 75+ Five-Star Reviews"
        title="Loved By"
        accent="Metro Detroit"
        sub="Don't just take our word for it. A perfect 5.0 rating on both Google and Angi, earned one spotless home at a time."
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

      {/* Marquees */}
      <section className="rev-marquees">
        <div className="rev-hint container">
          <Icons.arrow className="rev-hint-ic rev-hint-ic-flip" />
          <span>Drag to explore, or just watch them roll by</span>
          <Icons.arrow className="rev-hint-ic" />
        </div>
        <div className="rev-rows">
          <ReviewMarquee reviews={rowA} direction="left" speed={45} />
          <ReviewMarquee reviews={rowB} direction="right" speed={45} />
        </div>

        <div className="rev-cta-row container">
          <a href={externalLinks.angi} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Read all reviews on Angi <Icons.arrow />
          </a>
        </div>
      </section>

      <CTABand />

      <style>{`
        .rev-summary { padding: clamp(28px,4vw,44px) 0; background: var(--bg-maize); }
        .rev-summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .rev-stat {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 24px 18px;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .rev-stat-stars {
          display: inline-flex; gap: 2px; color: var(--maize);
          margin-bottom: 8px;
        }
        .rev-stat-stars :global(svg) { width: 16px; height: 16px; }
        .rev-stat-num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          line-height: 1;
          background: linear-gradient(120deg, var(--maize-deep), var(--maize));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
          margin-bottom: 6px;
        }
        .rev-stat-num-plain { margin-top: 4px; }
        .rev-stat-label {
          font-family: var(--font-display);
          font-weight: 500; font-size: 0.86rem;
          color: var(--ink-muted);
        }
        .rev-marquees { padding: clamp(40px,6vw,72px) 0; overflow: hidden; }
        .rev-hint {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          font-family: var(--font-display);
          font-weight: 600; font-size: 0.92rem;
          color: var(--ink-muted);
          margin-bottom: 28px;
        }
        .rev-hint-ic { width: 18px; height: 18px; color: var(--maize-deep); opacity: 0.7; }
        .rev-hint-ic-flip { transform: scaleX(-1); }
        .rev-rows { display: flex; flex-direction: column; gap: 20px; }
        .rev-cta-row { display: flex; justify-content: center; margin-top: 38px; }
        @media (max-width: 760px) {
          .rev-summary-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
        }
      `}</style>
    </>
  );
}
