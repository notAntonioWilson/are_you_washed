import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ReviewMarquee from "@/components/ReviewMarquee";
import { Icons } from "@/components/Icons";
import { reviews, trust, site, externalLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Reviews | 5.0★ Pressure Washing in Macomb, MI" },
  description:
    "Read verified 5-star reviews from Macomb and Metro Detroit homeowners. Family-owned pressure washing you can trust. Free quotes, 586-238-0784.",
  alternates: { canonical: `${site.url}/reviews` },
};

const Star = Icons.star;

const stats = [
  { num: `${trust.angiReviewCount}+`, label: "Verified 5-Star Angi Reviews", stars: true },
  { num: `${trust.googleReviewCount}+`, label: "5-Star Google Reviews", stars: true },
  { num: site.propertiesServed, label: "Families Helped", stars: false },
  { num: `${trust.angiAwards}x`, label: "Angi Super Service Award", stars: false },
];

export default function ReviewsPage() {
  const third = Math.ceil(reviews.length / 3);
  const row1 = reviews.slice(0, third);
  const row2 = reviews.slice(third, third * 2);
  const row3 = reviews.slice(third * 2);

  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="⭐ 100+ Five-Star Reviews"
        title="Loved By"
        accent="Metro Detroit"
        sub="Plenty of local families have trusted us with their homes and left us a perfect 5.0 on Google and Angi. When you want the same, just ask for a free quote."
      />

      {/* Stat row */}
      <section className="rev-summary">
        <div className="container rev-summary-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={`rev-stat reveal d${i}`}>
              {s.stars && (
                <div className="rev-stat-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} />)}
                </div>
              )}
              <div className={`rev-stat-num ${s.stars ? "" : "rev-stat-num-plain"}`}>{s.num}</div>
              <div className="rev-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 rows of reviews (draggable / auto-scroll cards) */}
      <section className="rev-marquees">
        <div className="rev-hint container">
          <Icons.arrow className="rev-hint-ic rev-hint-ic-flip" />
          <span>Drag to explore, or just watch them roll by</span>
          <Icons.arrow className="rev-hint-ic" />
        </div>
        <div className="rev-rows">
          <ReviewMarquee reviews={row1} direction="left" speed={42} />
          <ReviewMarquee reviews={row2} direction="right" speed={42} />
          <ReviewMarquee reviews={row3} direction="left" speed={42} />
        </div>

        <div className="rev-cta-row container">
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get Your Free Quote <Icons.arrow />
          </Link>
          <a href={externalLinks.angi} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
            Read All Reviews on Angi <Icons.arrow />
          </a>
        </div>
      </section>

      <style>{`
        .rev-summary { padding: clamp(28px,4vw,44px) 0; background: transparent; }
        .rev-summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .rev-stat {
          background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg);
          padding: 24px 18px; text-align: center; box-shadow: var(--shadow-sm);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .rev-stat-stars { display: inline-flex; gap: 2px; color: var(--maize); margin-bottom: 8px; }
        .rev-stat-stars :global(svg) { width: 16px; height: 16px; }
        .rev-stat-num {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.8rem, 3.4vw, 2.6rem); line-height: 1;
          background: linear-gradient(120deg, var(--maize-deep), var(--maize));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }
        .rev-stat-num-plain { margin-top: 2px; }
        .rev-stat-label {
          font-family: var(--font-display); font-weight: 600; font-size: 0.9rem;
          color: var(--ink-soft); line-height: 1.35;
        }

        .rev-marquees { padding: clamp(40px,6vw,72px) 0; overflow: hidden; }
        .rev-hint {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          font-family: var(--font-display); font-weight: 600; font-size: 0.92rem;
          color: var(--ink-muted); margin-bottom: 28px;
        }
        .rev-hint-ic { width: 18px; height: 18px; color: var(--maize-deep); opacity: 0.7; }
        .rev-hint-ic-flip { transform: scaleX(-1); }
        .rev-rows { display: flex; flex-direction: column; gap: 20px; }
        .rev-cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 42px; }

        @media (max-width: 760px) { .rev-summary-grid { grid-template-columns: 1fr 1fr; gap: 14px; } }
      `}</style>
    </>
  );
}
