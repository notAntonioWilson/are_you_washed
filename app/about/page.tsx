import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Icons } from "@/components/Icons";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Are You Washed Pressure Washing is a family-owned business serving Metro Detroit since 2021, with 1,000+ properties transformed, a 5.0 rating, and three Angi Super Service Awards.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Our Story"
        title="Family Owned."
        accent="Locally Trusted."
        sub="Four years, over a thousand properties, and a perfect 5.0 rating, all from one local family in Macomb."
      />

      {/* Story split */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-media reveal">
            <Image src="/images/juan-owner.jpg" alt="Juan, the owner of Are You Washed Pressure Washing" width={620} height={720} sizes="(max-width: 900px) 100vw, 520px" className="about-img" />
          </div>
          <div className="about-content reveal d1">
            <span className="eyebrow">Why We Do This</span>
            <h2 className="section-title">Your home, treated like <span className="accent">our own</span></h2>
            <p className="about-text">
              Are You Washed is a family-owned, family-run business based in Macomb, started by Juan in 2021.
              The goal from day one was simple: help homeowners fall back in love with the place they live.
            </p>
            <p className="about-text">
              There is real satisfaction in this work. Watching a tired, weathered exterior come back to life,
              and seeing a homeowner take it in for the first time, is exactly why Juan still runs every job himself.
            </p>
            <p className="about-text">
              Four years and over a thousand homes later, that pride shows in every wash, from a full house
              soft-wash to windows and gutters before the season turns. We&apos;d be glad to make yours the next one. Reach out and we&apos;ll send over a free quote.
            </p>
            <div className="about-sign">Juan &amp; the Are You Washed Family</div>
            <div className="about-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Quote <Icons.arrow /></Link>
              <Link href="/reviews" className="btn btn-ghost btn-lg">Read Reviews</Link>
            </div>
          </div>
        </div>
        <style>{`
          .about-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(28px,4.5vw,60px); align-items: center; }
          .about-img { width: 100%; height: auto; border-radius: var(--r-xl); box-shadow: var(--shadow-lg); object-fit: cover; }
          .about-text { color: var(--ink-soft); font-size: 1.0rem; line-height: 1.6; margin-bottom: 15px; }
          .about-sign { font-family: var(--font-display); font-style: italic; font-weight: 600; font-size: 1.05rem; color: var(--maize-deep); margin-top: 6px; }
          .about-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }
          @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* Numbers + credentials */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">By The Numbers</span>
            <h2 className="section-title">Trust That&apos;s <span className="accent">Earned</span></h2>
          </div>
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={s.label} className={`about-stat reveal d${i + 1}`}>
                <div className="about-stat-val">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="about-creds reveal">
            <div className="cred"><Icons.shield className="cred-ic" /> Licensed &amp; Insured</div>
            <div className="cred"><Icons.star className="cred-ic" /> 3x Angi Super Service Award Winner</div>
          </div>
        </div>
        <style>{`
          .about-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; margin-bottom: 30px; }
          .about-stat { background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg); padding: 24px 18px; text-align: center; box-shadow: var(--shadow-sm); }
          .about-stat-val {
            font-family: var(--font-display); font-weight: 800; font-size: clamp(1.7rem,3.3vw,2.4rem);
            background: linear-gradient(120deg, var(--maize-deep), var(--maize));
            -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
            line-height: 1; margin-bottom: 6px;
          }
          .about-stat-label { font-family: var(--font-display); font-weight: 500; font-size: 0.84rem; color: var(--ink-muted); }
          .about-creds { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
          .cred {
            display: inline-flex; align-items: center; gap: 9px;
            font-family: var(--font-display); font-weight: 600; font-size: 0.92rem;
            color: var(--ink);
            background: var(--white);
            border: 1.5px solid var(--line);
            padding: 11px 20px;
            border-radius: var(--r-pill);
          }
          .cred-ic { width: 19px; height: 19px; color: var(--maize-deep); }
          @media (max-width: 760px) { .about-stats { grid-template-columns: 1fr 1fr; } }
        `}</style>
      </section>
    </>
  );
}
