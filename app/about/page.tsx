import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand, TrustStrip } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { site, trust, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Are You Washed Pressure Washing is a family-owned, locally operated business serving Metro Detroit for 4 years with 1,000+ properties transformed. 5.0★ rated, A+ BBB accredited.",
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
        sub="Four years, over a thousand properties, and a perfect 5.0 rating — built on one belief: every home deserves to look its best."
      />

      {/* Story split */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-media reveal">
            <Image src="/images/house-after.jpg" alt="A freshly washed home exterior" width={620} height={720} className="about-img" />
          </div>
          <div className="about-content reveal d1">
            <span className="eyebrow">Why We Do This</span>
            <h2 className="section-title">It started with a love for <span className="accent">curb appeal</span></h2>
            <p className="about-text">
              Are You Washed Pressure Washing began with a strong desire to enhance the curb appeal of every home we touch —
              and a drive to help homeowners perfect the place they love most.
            </p>
            <p className="about-text">
              There&apos;s a real satisfaction in the work we do: watching a tired, weathered surface transform back to like-new.
              That moment when a homeowner sees their clean home for the first time is exactly why we keep doing this.
            </p>
            <p className="about-text">
              As a family-owned and family-run business, we bring that personal pride to every single job — whether it&apos;s a
              full house wash, a window cleaning, or clearing out your gutters before the season turns.
            </p>
            <div className="about-sign">— Juan &amp; the Are You Washed Family</div>
          </div>
        </div>
        <style>{`
          .about-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(36px,6vw,80px); align-items: center; }
          .about-img { width: 100%; height: auto; border-radius: var(--r-xl); box-shadow: var(--shadow-lg); object-fit: cover; }
          .about-text { color: var(--ink-soft); font-size: 1.06rem; line-height: 1.75; margin-bottom: 18px; }
          .about-sign { font-family: var(--font-display); font-style: italic; font-weight: 600; font-size: 1.1rem; color: var(--maize-deep); margin-top: 8px; }
          @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* Numbers */}
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
            <div className="cred"><Icons.check className="cred-ic" /> BBB Accredited — {trust.bbbRating} Rating</div>
            <div className="cred"><Icons.star className="cred-ic" /> 3× Angi Award Recognized</div>
          </div>
        </div>
        <style>{`
          .about-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-bottom: 40px; }
          .about-stat { background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg); padding: 32px 20px; text-align: center; box-shadow: var(--shadow-sm); }
          .about-stat-val {
            font-family: var(--font-display); font-weight: 800; font-size: clamp(1.8rem,3.5vw,2.6rem);
            background: linear-gradient(120deg, var(--maize-deep), var(--maize));
            -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
            line-height: 1; margin-bottom: 8px;
          }
          .about-stat-label { font-family: var(--font-display); font-weight: 500; font-size: 0.85rem; color: var(--ink-muted); }
          .about-creds { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
          .cred {
            display: inline-flex; align-items: center; gap: 10px;
            font-family: var(--font-display); font-weight: 600; font-size: 0.95rem;
            color: var(--ink);
            background: var(--white);
            border: 1.5px solid var(--line);
            padding: 12px 22px;
            border-radius: var(--r-pill);
          }
          .cred-ic { width: 20px; height: 20px; color: var(--maize-deep); }
          @media (max-width: 760px) { .about-stats { grid-template-columns: 1fr 1fr; } }
        `}</style>
      </section>

      <TrustStrip />
      <CTABand />
    </>
  );
}
