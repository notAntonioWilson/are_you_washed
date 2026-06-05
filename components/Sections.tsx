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
          background: linear-gradient(120deg, var(--blue-night) 0%, var(--blue-night-2) 55%, var(--sky-deep) 130%);
          position: relative;
          overflow: hidden;
        }
        .statsbar::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(620px 320px at 82% 50%, rgba(236,180,49,0.30), transparent 60%),
            radial-gradient(520px 300px at 8% 40%, rgba(56,176,232,0.34), transparent 60%);
        }
        .statsbar-grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: clamp(32px, 4.5vw, 52px) clamp(20px,5vw,48px);
        }
        .stat { text-align: center; }
        .stat-value {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.9rem, 3.8vw, 2.8rem);
          background: linear-gradient(120deg, #fff 0%, var(--maize-light) 60%, var(--maize) 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 7px;
        }
        .stat-label {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(0.8rem, 1.4vw, 0.94rem);
          color: rgba(255,255,255,0.82);
        }
        @media (max-width: 680px) {
          .statsbar-grid { grid-template-columns: 1fr 1fr; gap: 28px 16px; }
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
        .ctaband { padding: clamp(44px,6vw,72px) 0; background: var(--bg-maize); }
        .ctaband-inner {
          position: relative;
          text-align: center;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-xl);
          padding: clamp(36px, 5.5vw, 64px) clamp(24px,5vw,48px);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        .ctaband-blob { width: 380px; height: 380px; top: -150px; right: -100px; }
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
                <div className={`trust-ic ${i % 2 === 0 ? "trust-ic-maize" : "trust-ic-blue"}`}><Ic className="trust-ic-svg" /></div>
                <h3 className="trust-title">{it.title}</h3>
                <p className="trust-text">{it.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .truststrip { padding: clamp(40px,5.5vw,64px) 0; }
        .truststrip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .trust-item {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 26px 24px;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .trust-item:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
        .trust-ic {
          width: 52px; height: 52px;
          display: grid; place-items: center;
          border-radius: var(--r-md);
          margin-bottom: 14px;
        }
        .trust-ic-maize { background: var(--maize-pale); color: var(--maize-deep); }
        .trust-ic-blue { background: var(--aqua-soft); color: var(--aqua-deep); }
        .trust-ic-svg { width: 25px; height: 25px; }
        .trust-title { font-size: 1.08rem; margin-bottom: 5px; }
        .trust-text { color: var(--ink-muted); font-size: 0.93rem; line-height: 1.5; }
        @media (max-width: 900px) { .truststrip-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
}
