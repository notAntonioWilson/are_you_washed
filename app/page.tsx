import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { StatsBar } from "@/components/Sections";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import { Icons } from "@/components/Icons";
import { site, serviceAreas, services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Reveal />
      <Hero />
      <StatsBar />

      {/* Services */}
      <section className="section svc-section" id="services">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">
              Our Cleaning Services<br />
              <span className="accent">For Every Surface Outside Your Home</span>
            </h2>
            <p className="section-sub">
              We handle it all ourselves: house washing, concrete, driveways, decks, patios, roofs, windows, gutters, and rust removal. Tell us what your home needs and we&apos;ll send a free quote.
            </p>
          </div>
          <ServicesCarousel />
          <p className="svc-count">{services.length} total services. Swipe or use the arrows to see them all.</p>
          <div className="section-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Quote <Icons.arrow /></Link>
            <Link href="/services" className="btn btn-ghost btn-lg">All Services</Link>
          </div>
        </div>
        <style>{`
          .svc-section { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(40px, 5vw, 64px); }
          .svc-section .section-head { margin-bottom: clamp(28px, 4vw, 40px); }
          .svc-count { text-align: center; color: var(--ink-muted); font-size: 0.95rem; margin-top: 24px; }
          .svc-section .section-actions { margin-top: 20px; }
        `}</style>
      </section>

      <BeforeAfter />

      <Reviews />

      {/* Meet the Owner (About teaser) */}
      <section className="section whyus">
        <div className="container whyus-grid">
          <div className="whyus-media reveal">
            {/* Founder photo placeholder: swap src with Juan's photo when ready */}
            <Image src="/images/juan-owner.jpg" alt="Juan, the owner of Are You Washed Pressure Washing" width={640} height={800} sizes="(max-width: 900px) 100vw, 520px" className="whyus-img" />
            <div className="whyus-float">
              <div className="whyus-float-num">{site.propertiesServed}</div>
              <div className="whyus-float-label">Properties Transformed</div>
            </div>
          </div>
          <div className="whyus-content reveal d1">
            <span className="eyebrow">Meet the Owner</span>
            <h2 className="section-title">Meet Juan and the family behind <span className="accent">every clean</span></h2>
            <p className="whyus-text">
              Are You Washed is a family-owned business based in Macomb, and Juan has run it since day one in 2021.
              What started as a local pressure washing service has grown into one of Metro Detroit&apos;s most trusted
              names for exterior cleaning.
            </p>
            <p className="whyus-text">
              The work has stayed personal the whole way. Juan is on the jobs himself, walking each property,
              explaining the plan, and making sure every homeowner is happy before he packs up. Call Are You Washed
              and you get a real family that treats your home like their own.
            </p>
            <p className="whyus-text">
              Four years, over a thousand properties, a perfect 5.0 rating, and three Angi Super Service Awards later,
              that same care still shows in every wash. When you call or text, you get Juan and the family directly,
              not a call center, so ask for a free quote whenever you&apos;re ready.
            </p>
            <div className="whyus-actions">
              <Link href="/about" className="btn btn-primary btn-lg">Read Our Full Story <Icons.arrow /></Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">Get a Quote</Link>
            </div>
          </div>
        </div>
        <style>{`
          .whyus-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(32px,5vw,68px); align-items: center; }
          .whyus-media { position: relative; }
          .whyus-img { width: 100%; height: auto; border-radius: var(--r-xl); box-shadow: var(--shadow-lg); object-fit: cover; }
          .whyus-float {
            position: absolute; bottom: -20px; right: -14px;
            background: var(--white);
            border-radius: var(--r-lg);
            padding: 18px 24px;
            box-shadow: var(--shadow-lg);
            text-align: center;
            border: 1px solid var(--line);
          }
          .whyus-float-num {
            font-family: var(--font-display); font-weight: 800;
            font-size: 1.85rem;
            background: linear-gradient(120deg, var(--maize-deep), var(--maize));
            -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
            line-height: 1;
          }
          .whyus-float-label { font-family: var(--font-display); font-weight: 500; font-size: 0.8rem; color: var(--ink-muted); margin-top: 4px; }
          .whyus-text { color: var(--ink-soft); font-size: 1.02rem; line-height: 1.65; margin: 8px 0 20px; }
          .whyus-actions { display: flex; gap: 12px; flex-wrap: wrap; }
          @media (max-width: 900px) {
            .whyus-grid { grid-template-columns: 1fr; }
            .whyus-float { right: 16px; }
          }
        `}</style>
      </section>

      {/* Combined quote CTA with service-area coverage merged in */}
      <section className="cta-merge">
        <div className="cta-merge-blob blob blob-maize" />
        <div className="container cta-merge-grid">
          <div className="cta-merge-left reveal">
            <span className="eyebrow"><Icons.pin className="eyebrow-ic" /> Serving Metro Detroit</span>
            <h2 className="section-title">Get a free quote from a <span className="accent">local family</span></h2>
            <p className="cta-merge-text">
              We&apos;re a family based in Macomb, and we travel up to {site.serviceRadiusMiles} miles to homes in
              Washington Township, Shelby Township, Sterling Heights, Chesterfield, and across Metro Detroit.
            </p>
            <p className="cta-merge-text">
              The quote is free and there is no pressure to book. We usually get back to you within a few hours,
              so it helps to reach out before the busy season fills up.
            </p>
            <div className="cta-merge-actions">
              <a href={site.phoneHref} className="btn btn-primary btn-lg">
                <Icons.phone /> Call {site.phone}
              </a>
              <Link href="/reviews" className="btn btn-ghost btn-lg">
                Read Reviews <Icons.arrow />
              </Link>
            </div>
            <p className="cta-merge-areas">
              <span className="cta-merge-areas-label">Proudly serving:</span> {serviceAreas.join(", ")}
            </p>
          </div>

          <div className="cta-merge-form reveal d1">
            <QuoteForm variant="hero" />
          </div>
        </div>
        <style>{`
          .cta-merge { position: relative; padding: clamp(40px,5vw,68px) 0; background: transparent; overflow: hidden; }
          .cta-merge-blob { width: 420px; height: 420px; top: -160px; left: -120px; }
          .cta-merge-grid {
            position: relative; z-index: 1;
            display: grid; grid-template-columns: 1.04fr 0.96fr;
            gap: clamp(30px,4.5vw,56px); align-items: center;
          }
          .eyebrow-ic { width: 15px; height: 15px; }
          .cta-merge-text { color: var(--ink-soft); font-size: 1.02rem; line-height: 1.65; margin: 8px 0 0; }
          .cta-merge-text + .cta-merge-text { margin-top: 14px; }
          .cta-merge-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 26px; }
          .cta-merge-areas { font-size: 0.84rem; color: var(--ink-muted); line-height: 1.6; margin-top: 24px; }
          .cta-merge-areas-label { font-family: var(--font-display); font-weight: 700; color: var(--ink-soft); }
          @media (max-width: 900px) {
            .cta-merge-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>
    </>
  );
}
