import Image from "next/image";
import Link from "next/link";
import { site, trust } from "@/lib/site";
import { Icons } from "./Icons";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  const Star = Icons.star;
  return (
    <section className="hero">
      {/* ---- Dimmed video background ---- */}
      <div className="hero-bg">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/house-after.jpg"
        >
          {/* Drop your powerwashing clip at /public/video/hero.mp4 */}
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-mesh" />
      </div>

      <div className="container hero-grid">
        {/* LEFT — brand + message */}
        <div className="hero-left">
          <div className="hero-logo">
            <Image src="/logo-web.png" alt={site.name} width={88} height={88} priority />
          </div>

          <div className="hero-badges">
            <span className="hero-badge">
              <span className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </span>
              5.0 Google &amp; Angi
            </span>
            <span className="hero-badge">{trust.bbbRating} BBB Accredited</span>
          </div>

          <h1 className="hero-title">
            Make Your Home<br />
            <span className="hero-title-accent">Shine Like New.</span>
          </h1>

          <p className="hero-sub">
            Family-owned pressure &amp; soft washing across Macomb and Metro Detroit.
            Siding, concrete, windows, gutters and more — done right, the first time.
          </p>

          <p className="hero-tag">&ldquo;{site.tagline}&rdquo;</p>

          <div className="hero-actions">
            <a href={site.phoneHref} className="btn btn-primary btn-lg">
              <Icons.phone /> Call {site.phone}
            </a>
            <Link href="/services" className="btn hero-btn-glass btn-lg">
              View Services <Icons.arrow />
            </Link>
          </div>

          <div className="hero-trust-row">
            <span><Icons.check className="ht-ic" /> Licensed &amp; Insured</span>
            <span><Icons.check className="ht-ic" /> 1,000+ Properties</span>
            <span><Icons.check className="ht-ic" /> Free Quotes</span>
          </div>
        </div>

        {/* RIGHT — quote form */}
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
          padding-top: calc(var(--nav-h) + 40px);
          padding-bottom: 60px;
          overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-video {
          width: 100%; height: 100%;
          object-fit: cover;
          position: absolute; inset: 0;
        }
        /* Dim layer so text + form stay readable */
        .hero-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(105deg, rgba(11,28,44,0.86) 0%, rgba(11,28,44,0.64) 45%, rgba(11,28,44,0.42) 100%);
        }
        .hero-mesh {
          position: absolute; inset: 0;
          background:
            radial-gradient(900px 500px at 12% 30%, rgba(42,159,214,0.30), transparent 60%),
            radial-gradient(700px 460px at 85% 75%, rgba(231,177,59,0.20), transparent 60%);
          mix-blend-mode: screen;
        }
        .hero-grid {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
          width: 100%;
        }
        .hero-left { color: #fff; }
        .hero-logo {
          width: 88px; height: 88px;
          margin-bottom: 22px;
          filter: drop-shadow(0 8px 24px rgba(231,177,59,0.45));
          animation: floaty 5s ease-in-out infinite;
        }
        @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .hero-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 22px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-display);
          font-weight: 600; font-size: 13px;
          color: #fff;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          padding: 8px 14px;
          border-radius: var(--r-pill);
        }
        .hero-badge .stars { font-size: 12px; }
        .hero-badge .stars :global(svg) { width: 13px; height: 13px; }
        .hero-title {
          font-size: clamp(2.6rem, 6vw, 4.6rem);
          color: #fff;
          line-height: 1.02;
          margin-bottom: 20px;
          text-shadow: 0 4px 30px rgba(0,0,0,0.25);
        }
        .hero-title-accent {
          background: linear-gradient(120deg, var(--maize-light), var(--maize));
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: clamp(1.02rem, 1.6vw, 1.22rem);
          color: rgba(255,255,255,0.9);
          max-width: 540px;
          margin-bottom: 16px;
        }
        .hero-tag {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--maize-light);
          margin-bottom: 28px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 30px; }
        .hero-btn-glass {
          background: rgba(255,255,255,0.14);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(8px);
        }
        .hero-btn-glass:hover { background: rgba(255,255,255,0.24); transform: translateY(-3px); }
        .hero-trust-row {
          display: flex; gap: 20px; flex-wrap: wrap;
          font-family: var(--font-display);
          font-weight: 500; font-size: 14px;
          color: rgba(255,255,255,0.85);
        }
        .hero-trust-row span { display: inline-flex; align-items: center; gap: 7px; }
        .ht-ic { width: 17px; height: 17px; color: var(--maize-light); }

        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .hero-left { text-align: center; }
          .hero-logo { margin-left: auto; margin-right: auto; }
          .hero-badges, .hero-actions, .hero-trust-row { justify-content: center; }
          .hero-sub { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
}
