"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Icons } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const Phone = Icons.phone;

  // Home has a dark video hero → nav starts "over-dark" (light text).
  // Interior pages have light heroes → nav starts solid from the top.
  const overDark = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || !overDark;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`nav ${solid ? "nav-scrolled" : ""} ${overDark ? "nav-overdark" : ""}`}>
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
            <Image src="/logo-web.png" alt={site.name} width={44} height={44} priority />
            <span className="nav-logo-text">
              Are You <span className="nav-logo-accent">Washed</span>
            </span>
          </Link>

          {/* Tabbed navigation */}
          <nav className="nav-tabs">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-tab ${isActive(l.href) ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a href={site.phoneHref} className="nav-phone">
              <Phone className="nav-phone-icon" />
              <span>{site.phone}</span>
            </a>
            <Link href="/contact" className="btn btn-primary nav-cta">
              Free Quote
            </Link>
            <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              {open ? <Icons.close /> : <Icons.menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav className="mobile-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`mobile-link ${isActive(l.href) ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-cta">
          <a href={site.phoneHref} className="btn btn-dark btn-block btn-lg">
            <Phone /> Call {site.phone}
          </a>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary btn-block btn-lg">
            Get Free Quote
          </Link>
        </div>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: var(--nav-h);
          z-index: 100;
          display: flex;
          align-items: center;
          transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;
        }
        .nav-overdark::before {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(19,58,94,0.5) 0%, rgba(19,58,94,0) 100%);
          opacity: 1;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .nav-scrolled::before { opacity: 0; }
        .nav-scrolled {
          background: rgba(255, 255, 255, 0.86);
          backdrop-filter: blur(16px) saturate(1.5);
          -webkit-backdrop-filter: blur(16px) saturate(1.5);
          box-shadow: 0 4px 30px rgba(22, 39, 58, 0.08);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .nav-logo { display: flex; align-items: center; gap: 10px; position: relative; z-index: 1; }
        .nav-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.16rem;
          letter-spacing: -0.02em;
          color: #fff;
          white-space: nowrap;
          transition: color 0.3s;
        }
        .nav-scrolled .nav-logo-text { color: var(--ink); }
        .nav-logo-accent { color: var(--maize); }
        .nav-scrolled .nav-logo-accent { color: var(--maize-deep); }

        /* Tabbed nav — pill container */
        .nav-tabs {
          display: flex;
          gap: 2px;
          position: relative; z-index: 1;
          padding: 4px;
          border-radius: var(--r-pill);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(6px);
          transition: background 0.3s, border-color 0.3s;
        }
        .nav-scrolled .nav-tabs {
          background: var(--bg-tint);
          border-color: var(--line);
        }
        .nav-tab {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 14.5px;
          color: rgba(255,255,255,0.88);
          padding: 8px 17px;
          border-radius: var(--r-pill);
          transition: color 0.2s, background 0.2s;
        }
        .nav-tab:hover { color: #fff; background: rgba(255,255,255,0.16); }
        .nav-tab.active {
          background: linear-gradient(120deg, var(--maize-deep), var(--maize));
          color: #2a1c00;
          box-shadow: 0 4px 14px rgba(236,180,49,0.4);
        }
        .nav-scrolled .nav-tab { color: var(--ink-soft); }
        .nav-scrolled .nav-tab:hover { color: var(--ink); background: rgba(56,176,232,0.12); }
        .nav-scrolled .nav-tab.active { color: #2a1c00; }

        .nav-actions { display: flex; align-items: center; gap: 14px; position: relative; z-index: 1; }
        .nav-phone {
          display: flex; align-items: center; gap: 7px;
          font-family: var(--font-display);
          font-weight: 600; font-size: 14.5px;
          color: #fff;
          transition: color 0.3s;
        }
        .nav-phone-icon { width: 17px; height: 17px; color: var(--maize); }
        .nav-scrolled .nav-phone { color: var(--ink); }
        .nav-scrolled .nav-phone-icon { color: var(--maize-deep); }
        .nav-phone:hover { color: var(--maize); }
        .nav-scrolled .nav-phone:hover { color: var(--maize-deep); }
        .nav-cta { padding: 11px 22px; font-size: 14.5px; }
        .nav-toggle { display: none; color: #fff; padding: 6px; }
        .nav-scrolled .nav-toggle { color: var(--ink); }

        .mobile-menu {
          position: fixed;
          top: var(--nav-h); left: 0; right: 0; bottom: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          z-index: 99;
          padding: 28px clamp(20px,5vw,48px);
          display: flex;
          flex-direction: column;
          gap: 24px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(.16,1,.3,1);
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-links { display: flex; flex-direction: column; gap: 4px; }
        .mobile-link {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.4rem;
          color: var(--ink);
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
        }
        .mobile-link.active { color: var(--maize-deep); }
        .mobile-cta { display: flex; flex-direction: column; gap: 12px; margin-top: auto; }

        @media (max-width: 1040px) {
          .nav-tabs { display: none; }
          .nav-phone span { display: none; }
          .nav-cta { display: none; }
          .nav-toggle { display: flex; }
        }
        @media (max-width: 420px) {
          .nav-logo-text { display: none; }
        }
      `}</style>
    </>
  );
}
