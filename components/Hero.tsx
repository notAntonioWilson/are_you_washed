import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Icons } from "./Icons";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="hero">
      {/* ---- Bright sky-blue background ---- */}
      <div className="hero-bg">
        {/* Video kept as a faint texture. Drop a real powerwashing clip at
            /public/video/hero.mp4 and raise --hero-video-opacity if you want it prominent. */}
        <video className="hero-video" autoPlay muted loop playsInline poster="/images/house-after.jpg">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-mesh" />

        {/* Social proof, moved into the background */}
        <div className="hero-proof" aria-hidden="true">
          <span className="hero-proof-stars">★★★★★</span>
          <span className="hero-proof-num">5.0</span>
          <span className="hero-proof-cap">Rated on Google &amp; Angi</span>
        </div>
      </div>

      <div className="container hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-logo">
            <Image src="/logo-web.png" alt={site.name} width={84} height={84} priority />
          </div>

          <h1 className="hero-title">
            3X Angi Super Service Award Winner<br />
            <span className="hero-title-accent">in Macomb &amp; Washington Township</span>
          </h1>

          <p className="hero-sub">
            We&apos;re a family-owned, family-run crew that treats your home like our own.
            Families across Macomb and Metro Detroit trust us for siding, concrete, windows,
            gutters and more, done right the first time.
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
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--nav-h) + 32px);
          padding-bottom: 52px;
          overflow: hidden;
          --hero-video-opacity: 0.14;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background:
            linear-gradient(162deg, #f4fbff 0%, #d6eefc 38%, #aaddf7 72%, #cce8f6 100%);
        }
        .hero-video {
          width: 100%; height: 100%;
          object-fit: cover;
          position: absolute; inset: 0;
          opacity: var(--hero-video-opacity);
        }
        .hero-mesh {
          position: absolute; inset: 0;
          background:
            radial-gradient(820px 480px at 12% 22%, rgba(56,176,232,0.30), transparent 60%),
            radial-gradient(720px 460px at 90% 82%, rgba(236,180,49,0.28), transparent 62%),
            radial-gradient(600px 360px at 70% 8%, rgba(255,255,255,0.55), transparent 60%);
        }
        .hero-proof {
          position: absolute;
          top: 16%; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center;
          line-height: 1;
          color: rgba(31,143,208,0.13);
          user-select: none;
          text-align: center;
          width: 100%;
        }
        .hero-proof-stars { font-size: clamp(2.4rem, 7vw, 6rem); letter-spacing: 0.1em; }
        .hero-proof-num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(7rem, 22vw, 20rem);
          color: rgba(31,143,208,0.10);
          margin-top: -0.06em;
        }
        .hero-proof-cap {
          font-family: var(--font-display);
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-size: clamp(0.7rem, 1.4vw, 1rem);
          color: rgba(31,143,208,0.16);
          margin-top: 0.4em;
        }
        .hero-grid {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: clamp(32px, 5vw, 68px);
          align-items: center;
          width: 100%;
        }
        .hero-left { color: var(--ink); }
        .hero-logo {
          width: 84px; height: 84px;
          margin-bottom: 20px;
          filter: drop-shadow(0 8px 22px rgba(31,143,208,0.28));
          animation: floaty 5s ease-in-out infinite;
        }
        @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .hero-title {
          font-size: clamp(2.3rem, 5.2vw, 4rem);
          color: var(--ink);
          line-height: 1.05;
          margin-bottom: 18px;
        }
        .hero-title-accent {
          background: linear-gradient(120deg, var(--maize-deep), var(--maize));
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: clamp(1rem, 1.5vw, 1.16rem);
          color: var(--ink-soft);
          max-width: 540px;
          margin-bottom: 16px;
        }
        .hero-tag {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 700;
          font-size: 1.12rem;
          color: var(--maize-deep);
          margin-bottom: 26px;
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 26px; }
        .hero-trust-row {
          display: flex; gap: 18px; flex-wrap: wrap;
          font-family: var(--font-display);
          font-weight: 600; font-size: 13.5px;
          color: var(--ink-soft);
        }
        .hero-trust-row span { display: inline-flex; align-items: center; gap: 6px; }
        .ht-ic { width: 16px; height: 16px; color: var(--maize-deep); }

        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .hero-left { text-align: center; }
          .hero-logo { margin-left: auto; margin-right: auto; }
          .hero-actions, .hero-trust-row { justify-content: center; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-proof-num { font-size: clamp(6rem, 30vw, 12rem); }
        }
      `}</style>
    </section>
  );
}
