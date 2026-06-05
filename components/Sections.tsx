import Link from "next/link";
import { stats, trust, site } from "@/lib/site";
import { Icons } from "./Icons";

export function StatsBar() {
  return (
    <section className="statsbar">
      <div className="container statsbar-grid">
        {stats.map((s, i) => (
          <div key={s.label} className={`stat reveal d${i + 1}`}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        .statsbar {
          background: linear-gradient(120deg, var(--ink) 0%, #1a2f42 100%);
          position: relative;
          overflow: hidden;
        }
        .statsbar::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(600px 300px at 80% 50%, rgba(231,177,59,0.16), transparent 60%),
            radial-gradient(500px 280px at 10% 50%, rgba(42,159,214,0.18), transparent 60%);
        }
        .statsbar-grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: clamp(40px, 6vw, 64px) clamp(20px,5vw,48px);
        }
        .stat { text-align: center; }
        .stat-value {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          background: linear-gradient(120deg, var(--maize-light), var(--maize));
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(0.8rem, 1.4vw, 0.95rem);
          color: rgba(255,255,255,0.78);
        }
        @media (max-width: 680px) {
          .statsbar-grid { grid-template-columns: 1fr 1fr; gap: 32px 16px; }
        }
      `}</style>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="ctaband">
      <div className="container ctaband-inner">
        <div className="ctaband-blob blob blob-maize" />
        <h2 className="ctaband-title">Ready to see the transformation?</h2>
        <p className="ctaband-sub">
          Get a free, no-obligation quote today. We respond fast — usually within hours.
        </p>
        <div className="ctaband-actions">
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get My Free Quote <Icons.arrow />
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost btn-lg">
            <Icons.phone /> {site.phone}
          </a>
        </div>
      </div>
      <style>{`
        .ctaband { padding: clamp(56px,8vw,96px) 0; background: var(--bg-tint); }
        .ctaband-inner {
          position: relative;
          text-align: center;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-xl);
          padding: clamp(40px, 7vw, 80px) clamp(24px,5vw,48px);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        .ctaband-blob { width: 400px; height: 400px; top: -150px; right: -100px; }
        .ctaband-title {
          position: relative; z-index: 1;
          font-size: clamp(1.8rem, 4.5vw, 3rem);
          margin-bottom: 14px;
        }
        .ctaband-sub {
          position: relative; z-index: 1;
          color: var(--ink-muted);
          font-size: clamp(1rem,2vw,1.18rem);
          max-width: 540px;
          margin: 0 auto 32px;
        }
        .ctaband-actions {
          position: relative; z-index: 1;
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    { icon: "shield", title: "Licensed & Insured", text: "Fully covered for your peace of mind." },
    { icon: "star", title: "5.0★ Rated", text: "Perfect scores on Google & Angi." },
    { icon: "check", title: "BBB A+ Accredited", text: "Recognized for trusted service." },
    { icon: "droplet", title: "Safe Soft-Wash", text: "Surface-safe methods, lasting results." },
  ];
  return (
    <section className="section truststrip">
      <div className="container">
        <div className="truststrip-grid">
          {items.map((it, i) => {
            const Ic = Icons[it.icon];
            return (
              <div key={it.title} className={`trust-item reveal d${i + 1}`}>
                <div className="trust-ic"><Ic className="trust-ic-svg" /></div>
                <h3 className="trust-title">{it.title}</h3>
                <p className="trust-text">{it.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .truststrip { padding: clamp(48px,7vw,80px) 0; }
        .truststrip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .trust-item {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 30px 26px;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .trust-item:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
        .trust-ic {
          width: 54px; height: 54px;
          display: grid; place-items: center;
          background: var(--aqua-soft);
          color: var(--aqua-deep);
          border-radius: var(--r-md);
          margin-bottom: 16px;
        }
        .trust-ic-svg { width: 26px; height: 26px; }
        .trust-title { font-size: 1.12rem; margin-bottom: 6px; }
        .trust-text { color: var(--ink-muted); font-size: 0.95rem; line-height: 1.55; }
        @media (max-width: 900px) { .truststrip-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
}
