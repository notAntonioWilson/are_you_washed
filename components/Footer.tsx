import Link from "next/link";
import Image from "next/image";
import { site, services, serviceAreas, trust } from "@/lib/site";
import { Icons } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src="/logo-web.png" alt={site.name} width={52} height={52} />
            <span>Are You <span className="footer-logo-accent">Washed</span></span>
          </Link>
          <p className="footer-tagline">&ldquo;{site.tagline}&rdquo;</p>
          <p className="footer-desc">
            Family-owned &amp; operated pressure and soft washing serving Macomb and Metro Detroit since {site.founded}.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">5.0★ Google</span>
            <span className="footer-badge">5.0★ Angi</span>
            <span className="footer-badge">{trust.bbbRating} BBB</span>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-h">Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services#${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div className="footer-col">
          <h4 className="footer-h">Service Areas</h4>
          <ul className="footer-areas">
            {serviceAreas.slice(0, 10).map((a) => (<li key={a}>{a}</li>))}
            <li className="footer-areas-more">+ {site.serviceRadiusMiles} mi radius</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-h">Get In Touch</h4>
          <ul className="footer-contact">
            <li>
              <a href={site.phoneHref}><Icons.phone className="fc-ic" /> {site.phone}</a>
            </li>
            <li>
              <a href={site.emailHref}><Icons.mail className="fc-ic" /> {site.email}</a>
            </li>
            <li>
              <span><Icons.clock className="fc-ic" /> {site.hoursShort}</span>
            </li>
            <li>
              <span><Icons.pin className="fc-ic" /> Macomb, MI {site.homeBaseZip}</span>
            </li>
          </ul>
          <Link href="/contact" className="btn btn-primary footer-cta">Free Quote <Icons.arrow /></Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} {site.name}. All rights reserved.</p>
          <nav className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </nav>
        </div>
      </div>

      <style>{`
        .footer { background: linear-gradient(180deg, #14202c 0%, #0d1822 100%); color: rgba(255,255,255,0.8); }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding: clamp(56px,8vw,88px) clamp(20px,5vw,48px) 56px;
        }
        .footer-logo {
          display: flex; align-items: center; gap: 11px;
          font-family: var(--font-display);
          font-weight: 800; font-size: 1.3rem;
          color: #fff;
          margin-bottom: 14px;
        }
        .footer-logo-accent { color: var(--maize); }
        .footer-tagline {
          font-family: var(--font-display);
          font-style: italic; font-weight: 600;
          color: var(--maize-light);
          margin-bottom: 12px;
        }
        .footer-desc { font-size: 0.94rem; line-height: 1.6; max-width: 320px; margin-bottom: 18px; color: rgba(255,255,255,0.66); }
        .footer-badges { display: flex; gap: 8px; flex-wrap: wrap; }
        .footer-badge {
          font-family: var(--font-display);
          font-weight: 600; font-size: 12px;
          color: #fff;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 6px 12px;
          border-radius: var(--r-pill);
        }
        .footer-h {
          font-family: var(--font-display);
          font-weight: 700; font-size: 1rem;
          color: #fff;
          margin-bottom: 18px;
        }
        .footer-col ul { display: flex; flex-direction: column; gap: 11px; }
        .footer-col a, .footer-col span { font-size: 0.93rem; color: rgba(255,255,255,0.68); transition: color 0.2s; }
        .footer-col a:hover { color: var(--maize); }
        .footer-areas { columns: 1; }
        .footer-areas li { font-size: 0.9rem; color: rgba(255,255,255,0.62); }
        .footer-areas-more { color: var(--maize-light) !important; font-weight: 600; }
        .footer-contact li { margin-bottom: 0; }
        .footer-contact a, .footer-contact span { display: inline-flex; align-items: center; gap: 9px; }
        .fc-ic { width: 17px; height: 17px; color: var(--maize); flex-shrink: 0; }
        .footer-cta { margin-top: 20px; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); }
        .footer-bottom-inner {
          display: flex; justify-content: space-between; align-items: center;
          padding: 24px clamp(20px,5vw,48px);
          flex-wrap: wrap; gap: 12px;
        }
        .footer-bottom p { font-size: 0.86rem; color: rgba(255,255,255,0.55); }
        .footer-legal { display: flex; gap: 22px; flex-wrap: wrap; }
        .footer-legal a { font-size: 0.86rem; color: rgba(255,255,255,0.55); transition: color 0.2s; }
        .footer-legal a:hover { color: var(--maize); }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
