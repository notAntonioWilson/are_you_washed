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
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const Phone = Icons.phone;

  // Home has a dark video hero → nav starts in "over-dark" (light text) mode.
  // Interior pages have light heroes → nav starts solid/light from the top.
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

  // Solid state when scrolled OR when on a light interior page
  const solid = scrolled || !overDark;

  return (
    <>
      <header className={`nav ${solid ? "nav-scrolled" : ""} ${overDark ? "nav-overdark" : ""}`}>
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
            <Image src="/logo-web.png" alt={site.name} width={48} height={48} priority />
            <span className="nav-logo-text">
              Are You <span className="nav-logo-accent">Washed</span>
            </span>
          </Link>

          <nav className="nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
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
            <button
              className="nav-toggle"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <Icons.close /> : <Icons.menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav className="mobile-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="mobile-link">
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
        /* Scrim so links stay readable over hero media before scroll */
        .nav-overdark::before {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(12,24,38,0.45) 0%, rgba(12,24,38,0) 100%);
          opacity: 1;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .nav-scrolled::before { opacity: 0; }
        .nav-scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px) saturate(1.4);
          -webkit-backdrop-filter: blur(16px) saturate(1.4);
          box-shadow: 0 4px 30px rgba(20, 32, 44, 0.07);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .nav-logo { display: flex; align-items: center; gap: 11px; position: relative; z-index: 1; }
        .nav-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.18rem;
          letter-spacing: -0.02em;
          color: #fff;
          white-space: nowrap;
          transition: color 0.3s;
        }
        .nav-scrolled .nav-logo-text { color: var(--ink); }
        .nav-logo-accent { color: var(--maize); }
        .nav-scrolled .nav-logo-accent { color: var(--maize-deep); }
        .nav-links { display: flex; gap: 6px; position: relative; z-index: 1; }
        .nav-link {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 15px;
          color: rgba(255,255,255,0.9);
          padding: 9px 16px;
          border-radius: var(--r-pill);
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.15); }
        .nav-scrolled .nav-link { color: var(--ink-soft); }
        .nav-scrolled .nav-link:hover { color: var(--ink); background: var(--aqua-soft); }
        .nav-actions { display: flex; align-items: center; gap: 14px; position: relative; z-index: 1; }
        .nav-phone {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15px;
          color: #fff;
          transition: color 0.3s;
        }
        .nav-phone-icon { width: 18px; height: 18px; color: var(--maize); }
        .nav-scrolled .nav-phone { color: var(--ink); }
        .nav-scrolled .nav-phone-icon { color: var(--maize-deep); }
        .nav-phone:hover { color: var(--maize); }
        .nav-scrolled .nav-phone:hover { color: var(--maize-deep); }
        .nav-toggle { display: none; color: #fff; padding: 6px; }
        .nav-scrolled .nav-toggle { color: var(--ink); }

        .mobile-menu {
          position: fixed;
          top: var(--nav-h); left: 0; right: 0; bottom: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          z-index: 99;
          padding: 32px clamp(20px,5vw,48px);
          display: flex;
          flex-direction: column;
          gap: 28px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(.16,1,.3,1);
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-links { display: flex; flex-direction: column; gap: 4px; }
        .mobile-link {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.5rem;
          color: var(--ink);
          padding: 14px 0;
          border-bottom: 1px solid var(--line);
        }
        .mobile-cta { display: flex; flex-direction: column; gap: 12px; margin-top: auto; }

        @media (max-width: 980px) {
          .nav-links { display: none; }
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
