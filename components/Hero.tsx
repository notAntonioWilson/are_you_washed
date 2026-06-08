import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Icons } from "./Icons";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="hero">
      {/* ---- Photo background, dimmed so it sits behind the content ---- */}
      <div className="hero-bg">
        <Image src="/images/hero-bg.jpg" alt="" fill priority sizes="100vw" className="hero-photo hero-photo-desktop" />
        <Image src="/images/hero-bg-mobile.jpg" alt="" fill priority sizes="100vw" className="hero-photo hero-photo-mobile" />
        <div className="hero-dim" />
      </div>

      <div className="container hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-title">
            Pressure Washing<br />
            <span className="hero-title-accent">in Macomb &amp; Washington Township</span>
          </h1>

          <p className="hero-sub">
            Award-winning, 3x Angi Super Service Award winners in the top 5% of home service pros.
            We&apos;re a family-owned crew that treats your home like our own. Families across Macomb
            and Metro Detroit trust us for siding, concrete, windows, gutters and more, done right the first time.
          </p>

          <p className="hero-tag">&ldquo;{site.tagline}&rdquo;</p>

          <div className="hero-actions">
            <a href={site.phoneHref} className="btn btn-primary btn-lg">
              <Icons.phone /> Call {site.phone}
            </a>
            <Link href="/services" className="btn btn-ghost btn-lg">
              View Services <Icons.arrow />
            </Link>
          </div>

          <div className="hero-trust-row">
            <span><Icons.check className="ht-ic" /> Licensed &amp; Insured</span>
            <span><Icons.check className="ht-ic" /> 1,000+ Properties</span>
            <span><Icons.check className="ht-ic" /> Free Quotes</span>
          </div>
        </div>

        {/* RIGHT: quote form */}
        <div className="hero-right">
          <QuoteForm variant="hero" />
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 88svh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--nav-h) + 20px);
          padding-bottom: 36px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          overflow: hidden;
          background-color: var(--blue-night);
        }
        .hero-photo { object-fit: cover; object-position: 50% 50%; }
        .hero-photo-mobile { display: none; }
        /* Dim the photo so it does not pull attention: heavier on the left behind the
           headline, lighter toward Juan on the right, with a soft top/bottom falloff. */
        .hero-dim {
          position: absolute; inset: 0;
          background:
            linear-gradient(90deg, rgba(11,22,34,0.72) 0%, rgba(11,22,34,0.54) 30%, rgba(11,22,34,0.32) 55%, rgba(11,22,34,0.22) 80%, rgba(11,22,34,0.34) 100%),
            linear-gradient(180deg, rgba(11,22,34,0.12) 0%, transparent 28%, transparent 70%, rgba(11,22,34,0.22) 100%);
        }
        .hero-grid {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: clamp(32px, 5vw, 68px);
          align-items: center;
          width: 100%;
        }
        .hero-left { color: #fff; }
        .hero-title {
          font-size: clamp(2rem, 4.2vw, 3.1rem);
          color: #ffffff;
          line-height: 1.05;
          margin-bottom: 18px;
          text-shadow: 0 2px 22px rgba(0,0,0,0.4);
        }
        .hero-title-accent {
          background: linear-gradient(120deg, var(--maize), #94D96F);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: clamp(1rem, 1.5vw, 1.16rem);
          color: rgba(255,255,255,0.92);
          max-width: 540px;
          margin-bottom: 16px;
          text-shadow: 0 1px 16px rgba(0,0,0,0.36);
        }
        .hero-tag {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 700;
          font-size: 1.12rem;
          color: var(--maize);
          margin-bottom: 26px;
          text-shadow: 0 1px 16px rgba(0,0,0,0.36);
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 26px; }
        .hero-trust-row {
          display: flex; gap: 18px; flex-wrap: wrap;
          font-family: var(--font-display);
          font-weight: 600; font-size: 13.5px;
          color: rgba(255,255,255,0.9);
          text-shadow: 0 1px 12px rgba(0,0,0,0.32);
        }
        .hero-trust-row span { display: inline-flex; align-items: center; gap: 6px; }
        .ht-ic { width: 16px; height: 16px; color: var(--maize); }

        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .hero-left { text-align: center; }
          .hero-actions, .hero-trust-row { justify-content: center; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-photo-desktop { display: none; }
          .hero-photo-mobile { display: block; object-position: 50% 35%; }
          .hero-dim {
            background:
              linear-gradient(180deg, rgba(11,22,34,0.72) 0%, rgba(11,22,34,0.5) 40%, rgba(11,22,34,0.62) 100%);
          }
        }
      `}</style>
    </section>
  );
}
