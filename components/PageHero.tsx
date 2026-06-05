import { Icons } from "./Icons";

export default function PageHero({
  eyebrow,
  title,
  accent,
  sub,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  sub?: string;
}) {
  return (
    <section className="pagehero">
      <div className="pagehero-blob blob blob-aqua" />
      <div className="pagehero-blob2 blob blob-maize" />
      <div className="container pagehero-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="pagehero-title">
          {title} {accent && <span className="accent">{accent}</span>}
        </h1>
        {sub && <p className="pagehero-sub">{sub}</p>}
      </div>
      <style>{`
        .pagehero {
          position: relative;
          overflow: hidden;
          padding: calc(var(--nav-h) + clamp(16px,2.4vw,30px)) 0 clamp(18px,2.6vw,34px);
          background: linear-gradient(180deg, var(--aqua-soft) 0%, var(--bg-maize) 70%, var(--white) 100%);
          text-align: center;
        }
        .pagehero-blob { width: 460px; height: 460px; top: -180px; left: -120px; }
        .pagehero-blob2 { width: 380px; height: 380px; top: -140px; right: -100px; }
        .pagehero-inner { position: relative; z-index: 1; }
        .pagehero-title {
          font-size: clamp(2.3rem, 5.5vw, 4rem);
          margin-bottom: 10px;
        }
        .pagehero-title .accent {
          background: linear-gradient(120deg, var(--maize-deep), var(--maize));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .pagehero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--ink-muted);
          max-width: 720px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}
