import Link from "next/link";
import Image from "next/image";
import { site, trust } from "@/lib/site";
import { Icons } from "./Icons";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src="/logo-web.png" alt={site.name} width={40} height={40} />
            <span>Are You <span className="footer-logo-accent">Washed</span></span>
          </Link>
          <p className="footer-tagline">&ldquo;{site.tagline}&rdquo;</p>
          <div className="footer-social-row">
            <div className="footer-badges">
              <span className="footer-badge">5.0★ Google</span>
              <span className="footer-badge">5.0★ Angi</span>
              <span className="footer-badge">{trust.bbbRating} BBB</span>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig"
              aria-label="Follow Are You Washed on Instagram"
            >
              <Icons.instagram className="footer-ig-ic" />
            </a>
          </div>
        </div>

        <nav className="footer-nav">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={site.phoneHref}><Icons.phone className="fc-ic" /> {site.phone}</a>
          <a href={site.emailHref}><Icons.mail className="fc-ic" /> {site.email}</a>
          <span><Icons.clock className="fc-ic" /> {site.hoursShort}</span>
          <Link href="/contact" className="btn btn-primary footer-cta">Submit a Quote <Icons.arrow /></Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} {site.name}</p>
          <nav className="footer-legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </nav>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, var(--blue-night) 0%, var(--blue-night-2) 100%);
          color: rgba(255,255,255,0.82);
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: "";
          position: absolute; top: -60%; right: -10%;
          width: 420px; height: 420px;
          background: radial-gradient(circle, var(--maize-glow), transparent 70%);
          opacity: 0.5; filter: blur(40px);
        }
        .footer-inner {
          position: relative; z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 28px;
          flex-wrap: wrap;
          padding: 30px clamp(20px,5vw,48px) 24px;
        }
        .footer-brand { display: flex; flex-direction: column; align-items: flex-start; }
        .footer-logo {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--font-display);
          font-weight: 800; font-size: 1.14rem;
          color: #fff; margin-bottom: 7px;
        }
        .footer-logo-accent { color: var(--maize); }
        .footer-tagline {
          font-family: var(--font-display);
          font-style: italic; font-weight: 600; font-size: 0.9rem;
          color: var(--maize-light);
          margin-bottom: 12px;
        }
        .footer-social-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .footer-badges { display: flex; gap: 7px; flex-wrap: wrap; }
        .footer-badge {
          font-family: var(--font-display);
          font-weight: 600; font-size: 11.5px;
          color: #fff;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 5px 11px;
          border-radius: var(--r-pill);
        }
        .footer-ig {
          display: grid; place-items: center;
          width: 34px; height: 34px;
          border-radius: 10px;
          color: #fff;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          transition: background 0.2s, transform 0.2s, color 0.2s;
        }
        .footer-ig:hover { background: linear-gradient(120deg, var(--maize-deep), var(--maize)); color: #2a1c00; transform: translateY(-2px); }
        .footer-ig-ic { width: 18px; height: 18px; }
        .footer-nav {
          display: flex; gap: 22px; flex-wrap: wrap;
          padding-top: 4px;
        }
        .footer-nav a {
          font-family: var(--font-display);
          font-weight: 600; font-size: 0.95rem;
          color: rgba(255,255,255,0.78);
          transition: color 0.2s;
        }
        .footer-nav a:hover { color: var(--maize); }
        .footer-contact {
          display: flex; flex-direction: column; gap: 9px;
          align-items: flex-start;
        }
        .footer-contact a, .footer-contact span {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.9rem; color: rgba(255,255,255,0.78);
          transition: color 0.2s;
        }
        .footer-contact a:hover { color: var(--maize); }
        .fc-ic { width: 16px; height: 16px; color: var(--maize); flex-shrink: 0; }
        .footer-cta { margin-top: 6px; padding: 11px 22px; font-size: 14.5px; }
        .footer-bottom {
          position: relative; z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .footer-bottom-inner {
          display: flex; justify-content: space-between; align-items: center;
          padding: 16px clamp(20px,5vw,48px);
          flex-wrap: wrap; gap: 10px;
        }
        .footer-bottom p { font-size: 0.83rem; color: rgba(255,255,255,0.55); }
        .footer-legal { display: flex; gap: 18px; flex-wrap: wrap; }
        .footer-legal a { font-size: 0.83rem; color: rgba(255,255,255,0.55); transition: color 0.2s; }
        .footer-legal a:hover { color: var(--maize); }
        @media (max-width: 760px) {
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 22px; }
          .footer-bottom-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
