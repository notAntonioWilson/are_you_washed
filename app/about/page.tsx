import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Icons } from "@/components/Icons";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Us | Family-Owned Pressure Washing in Macomb" },
  description:
    "Are You Washed is a family-owned pressure washing business in Macomb, MI. Local, trusted, 5.0★ rated. Meet the family and get your free quote.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Our Story"
        title="Family-Owned Pressure Washing in"
        accent="Macomb"
        sub="Four years, over a thousand properties, and a perfect 5.0 rating, all from one local family in Macomb."
      />

      {/* Story split */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-media reveal">
            <figure className="about-fig">
              <Image src="/images/juan-owner-2.jpg" alt="Juan, owner of Are You Washed, pressure washing a driveway in Macomb, MI" width={899} height={1600} sizes="(max-width: 900px) 100vw, 520px" className="about-img" />
              <figcaption className="about-cap">Juan, out on a driveway job</figcaption>
            </figure>
          </div>
          <div className="about-content reveal d1">
            <figure className="about-fig about-fig-son">
              <Image src="/images/juan-son.jpg" alt="Juan's son cleaning a second-story window on a home in Metro Detroit" width={1200} height={1600} sizes="(max-width: 900px) 100vw, 300px" className="about-img" />
              <figcaption className="about-cap">Juan&apos;s son on window duty</figcaption>
            </figure>
            <span className="eyebrow">Why We Do This</span>
            <h2 className="section-title">Your home, treated like <span className="accent">our own</span></h2>
            <p className="about-text">
              Are You Washed is a family-owned, family-run business based in Macomb, started by Juan in 2021.
              The goal from day one was simple: help homeowners fall back in love with the place they live.
            </p>
            <p className="about-text">
              This has stayed a family operation the whole way through. Juan runs every job himself, so the
              person who gives you a quote is the same person doing the work and standing behind it. Nothing
              gets handed off to a crew of strangers, and the standard does not slip from one house to the next.
            </p>
            <p className="about-text">
              There is real satisfaction in this work. Watching a tired, weathered exterior come back to life,
              and seeing a homeowner take it in for the first time, is exactly why Juan still shows up for it
              the way he does. The same care goes into your landscaping. Plants, beds, and the details around
              the house are looked after while we work, not treated as an afterthought.
            </p>
            <p className="about-text">
              Over a thousand properties later, that approach has earned a 5.0 rating on both Google and Angi,
              an A+ with the BBB, and the 3X Angi Super Service Award. We are fully licensed and insured, and
              we are proud that so much of the work comes from neighbors telling neighbors.
            </p>
            <p className="about-text">
              We cover the full range of exterior cleaning: house washing, soft washing, window cleaning,
              gutter cleaning, roof washing, concrete and driveway cleaning, patio and deck cleaning, and rust
              removal. Whether it is a full house wash or windows and gutters before the season turns, it gets
              the same attention either way. We are based in Macomb and glad to travel across Metro Detroit and
              the surrounding communities to get to you.
            </p>
            <p className="about-text">
              Reaching out is easy and the quote is free. We answer fast, we are available from 8am to 8pm
              every day of the week, and there is never any pressure to book. We&apos;d be glad to make your
              home the next one.
            </p>
            <div className="about-sign">Juan &amp; the Are You Washed Family</div>
            <div className="about-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Quote <Icons.arrow /></Link>
              <Link href="/reviews" className="btn btn-ghost btn-lg">Read Reviews</Link>
            </div>
          </div>
        </div>
        <style>{`
          .about-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(28px,4.5vw,60px); align-items: start; }
          .about-media { display: flex; flex-direction: column; gap: 18px; }
          .about-fig { margin: 0; }
          .about-img { width: 100%; height: auto; border-radius: var(--r-xl); box-shadow: var(--shadow-lg); object-fit: cover; }
          .about-fig-son { float: right; width: 300px; max-width: 42%; margin: 4px 0 18px 26px; }
          @media (max-width: 900px) { .about-fig-son { float: none; width: 100%; max-width: 100%; margin: 0 0 22px 0; } }
          .about-cap { font-family: var(--font-display); font-weight: 500; font-size: 0.86rem; color: var(--ink-muted); text-align: center; margin-top: 9px; }
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
          .about-stats { display: grid; grid-template-columns: repeat(5,1fr); gap: 14px; margin-bottom: 30px; }
          .about-stat { background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg); padding: 22px 12px; text-align: center; box-shadow: var(--shadow-sm); }
          .about-stat-val {
            font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem,2.6vw,2.2rem);
            background: linear-gradient(120deg, var(--maize-deep), var(--maize));
            -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
            line-height: 1; margin-bottom: 6px;
          }
          .about-stat-label { font-family: var(--font-display); font-weight: 500; font-size: 0.8rem; color: var(--ink-muted); }
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
          @media (max-width: 420px) { .about-stats { grid-template-columns: 1fr 1fr; } }
        `}</style>
      </section>
    </>
  );
}
