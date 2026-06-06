import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { results, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Our Work | Pressure Washing Results in Macomb, MI" },
  description:
    "See real pressure washing results from homes across Macomb and Metro Detroit. Family-owned, 5.0★ rated. Get your free quote today.",
  alternates: { canonical: `${site.url}/results` },
};

export default function ResultsPage() {
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Our Work"
        title="Our Pressure Washing"
        accent="Results"
        sub="Every one of these is a real home we cleaned here in Metro Detroit. Get a free quote and we'll get you on the schedule too."
      />

      <section className="section results-section">
        <div className="container">
          <div className="results-grid">
            {results.map((r, i) => (
              <figure key={`${r.image}-${i}`} className="result-item reveal">
                {/* Plain img keeps each photo at its own natural aspect ratio for the masonry flow */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.image} alt={r.alt || r.label} loading="lazy" />
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

      <CTABand sub="The quote is free and there's no pressure. Send us a few details and we'll get right back to you." />

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
