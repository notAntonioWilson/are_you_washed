import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { StatsBar, TrustStrip, CTABand } from "@/components/Sections";
import { ServicesGrid } from "@/components/ServicesGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import { Icons } from "@/components/Icons";
import { site, serviceAreas } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Reveal />
      <Hero />
      <StatsBar />

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Exterior Cleaning, <span className="accent">Done Right</span></h2>
            <p className="section-sub">
              From full house washes to crystal-clear windows — one trusted team for every surface of your property.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <TrustStrip />
      <BeforeAfter />

      {/* Why Us split */}
      <section className="section whyus">
        <div className="container whyus-grid">
          <div className="whyus-media reveal">
            <Image src="/images/driveway-house.jpg" alt="Freshly cleaned brick home and driveway" width={640} height={760} className="whyus-img" />
            <div className="whyus-float">
              <div className="whyus-float-num">{site.propertiesServed}</div>
              <div className="whyus-float-label">Properties Transformed</div>
            </div>
          </div>
          <div className="whyus-content reveal d1">
            <span className="eyebrow">Why Are You Washed</span>
            <h2 className="section-title">A family business that <span className="accent">treats your home like ours</span></h2>
            <p className="whyus-text">
              We started Are You Washed out of a simple desire — to help homeowners fall back in love with their property.
              There&apos;s nothing like watching years of grime wash away to reveal the home underneath.
            </p>
            <ul className="whyus-list">
              {[
                "Family owned & operated — every job is personal",
                "Safe soft-wash methods that protect your surfaces",
                "Prompt, professional, and communicative from quote to clean",
                "Fully licensed & insured for total peace of mind",
              ].map((t) => (
                <li key={t}><Icons.check className="whyus-check" /> {t}</li>
              ))}
            </ul>
            <div className="whyus-actions">
              <Link href="/about" className="btn btn-dark btn-lg">Our Story <Icons.arrow /></Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">Get a Quote</Link>
            </div>
          </div>
        </div>
        <style>{`
          .whyus-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(36px,6vw,80px); align-items: center; }
          .whyus-media { position: relative; }
          .whyus-img { width: 100%; height: auto; border-radius: var(--r-xl); box-shadow: var(--shadow-lg); object-fit: cover; }
          .whyus-float {
            position: absolute; bottom: -24px; right: -16px;
            background: var(--white);
            border-radius: var(--r-lg);
            padding: 22px 28px;
            box-shadow: var(--shadow-lg);
            text-align: center;
            border: 1px solid var(--line);
          }
          .whyus-float-num {
            font-family: var(--font-display); font-weight: 800;
            font-size: 2rem;
            background: linear-gradient(120deg, var(--maize-deep), var(--maize));
            -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
            line-height: 1;
          }
          .whyus-float-label { font-family: var(--font-display); font-weight: 500; font-size: 0.82rem; color: var(--ink-muted); margin-top: 4px; }
          .whyus-text { color: var(--ink-soft); font-size: 1.05rem; line-height: 1.7; margin: 8px 0 24px; }
          .whyus-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
          .whyus-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 1rem; color: var(--ink-soft); }
          .whyus-check { width: 22px; height: 22px; color: #fff; background: var(--maize); border-radius: 50%; padding: 4px; flex-shrink: 0; margin-top: 2px; }
          .whyus-actions { display: flex; gap: 14px; flex-wrap: wrap; }
          @media (max-width: 900px) {
            .whyus-grid { grid-template-columns: 1fr; }
            .whyus-float { right: 16px; }
          }
        `}</style>
      </section>

      <Reviews />

      {/* Service areas */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow"><Icons.pin className="eyebrow-ic" /> Where We Work</span>
            <h2 className="section-title">Proudly Serving <span className="accent">Metro Detroit</span></h2>
            <p className="section-sub">Based in Macomb ({site.homeBaseZip}) and traveling up to {site.serviceRadiusMiles} miles to reach your home.</p>
          </div>
          <div className="areas-cloud reveal">
            {serviceAreas.map((a) => (<span key={a} className="area-chip">{a}</span>))}
          </div>
        </div>
        <style>{`
          .eyebrow-ic { width: 15px; height: 15px; }
          .areas-cloud { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; max-width: 900px; margin: 0 auto; }
          .area-chip {
            font-family: var(--font-display);
            font-weight: 600; font-size: 15px;
            color: var(--ink-soft);
            background: var(--white);
            border: 1.5px solid var(--line);
            padding: 12px 22px;
            border-radius: var(--r-pill);
            transition: all 0.25s;
          }
          .area-chip:hover { border-color: var(--maize); color: var(--ink); transform: translateY(-2px); box-shadow: var(--shadow-sm); }
        `}</style>
      </section>

      <CTABand />
    </>
  );
}
