import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { results, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See finished pressure washing and soft washing results from Are You Washed across Macomb and Metro Detroit. Real homes, real transformations.",
  alternates: { canonical: `${site.url}/results` },
};

export default function ResultsPage() {
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Our Work"
        title="Finished"
        accent="Results"
        sub="A look at homes and properties we've transformed across Metro Detroit. More added all the time."
      />

      <section className="section results-section">
        <div className="container">
          <div className="results-grid">
            {results.map((r, i) => (
              <figure key={`${r.image}-${i}`} className="result-item reveal">
                {/* Plain img keeps each photo at its own natural aspect ratio for the masonry flow */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.image} alt={r.label} loading="lazy" />
                <figcaption className="result-tag">{r.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="results-cta">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Your Free Quote <Icons.arrow />
            </Link>
            <Link href="/reviews" className="btn btn-ghost btn-lg">
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        .results-section { padding-top: clamp(28px,4vw,48px); }
        .results-grid {
          column-count: 3;
          column-gap: 18px;
        }
        .result-item {
          position: relative;
          break-inside: avoid;
          margin: 0 0 18px;
          border-radius: var(--r-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          background: var(--aqua-soft);
        }
        .result-item img {
          display: block;
          width: 100%;
          height: auto;
        }
        .result-tag {
          position: absolute;
          top: 12px; left: 12px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 12.5px;
          color: #fff;
          background: rgba(19,58,94,0.82);
          backdrop-filter: blur(6px);
          padding: 6px 13px;
          border-radius: var(--r-pill);
          letter-spacing: 0.02em;
        }
        .results-cta {
          display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;
          margin-top: 40px;
        }
        @media (max-width: 900px) { .results-grid { column-count: 2; } }
        @media (max-width: 560px) { .results-grid { column-count: 1; } }
      `}</style>
    </>
  );
}
