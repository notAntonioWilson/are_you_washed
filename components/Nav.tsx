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
  { href: "/results", label: "Results" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const Phone = Icons.phone;

  // All pages now have light heroes (home hero is bright sky-blue), so the nav
  // uses the solid frosted bar with dark links everywhere, from the top.
  const overDark = false;

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
          <Link
            href="/"
            className="nav-logo"
            onClick={() => setOpen(false)}
            style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "11px", flexWrap: "nowrap" }}
          >
            <Image src="/logo-web.png" alt="Are You Washed Pressure Washing logo" width={42} height={42} priority style={{ flexShrink: 0 }} />
            <span className="nav-logo-text">
              Are You <span className="nav-logo-accent">Washed</span>
            </span>
          </Link>

          {/* Right group: links + phone + CTA */}
          <div className="nav-right">
            <nav className="nav-links">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link ${isActive(l.href) ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a href={site.phoneHref} className="nav-phone">
              <Phone className="nav-phone-icon" />
              <span>{site.phone}</span>
            </a>
            <Link href="/contact" className="btn btn-primary nav-cta">
              Submit a Quote
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
            Submit a Quote
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
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(22px) saturate(1.7);
          -webkit-backdrop-filter: blur(22px) saturate(1.7);
          box-shadow: 0 2px 20px rgba(22, 39, 58, 0.06);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .nav-logo { display: flex; flex-direction: row; align-items: center; gap: 11px; position: relative; z-index: 1; flex-wrap: nowrap; }
        .nav-logo :global(img) { flex-shrink: 0; }
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

        /* Right group: links + phone + CTA, like a standard nav */
        .nav-right {
          display: flex;
          align-items: center;
          gap: clamp(20px, 2.6vw, 40px);
          position: relative; z-index: 1;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(18px, 2.2vw, 36px);
        }
        .nav-link {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15px;
          color: #ffffff;
          white-space: nowrap;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -3px;
          height: 2px;
          border-radius: 2px;
          background: var(--maize);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s cubic-bezier(.16,1,.3,1);
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: var(--maize-light); }
        .nav-link.active::after { transform: scaleX(1); }
        .nav-scrolled .nav-link { color: #000; }
        .nav-scrolled .nav-link:hover { color: #000; }
        .nav-scrolled .nav-link.active { color: var(--maize-deep); }
        .nav-scrolled .nav-link.active::after,
        .nav-scrolled .nav-link:hover::after { background: var(--maize-deep); }

        .nav-phone {
          display: flex; align-items: center; gap: 7px;
          font-family: var(--font-display);
          font-weight: 600; font-size: 15px;
          color: #fff;
          white-space: nowrap;
          transition: color 0.3s;
        }
        .nav-phone-icon { width: 17px; height: 17px; color: var(--maize); }
        .nav-scrolled .nav-phone { color: var(--ink); }
        .nav-scrolled .nav-phone-icon { color: var(--maize-deep); }
        .nav-phone:hover { color: var(--maize); }
        .nav-scrolled .nav-phone:hover { color: var(--maize-deep); }
        .nav-cta { padding: 9px 18px; font-size: 14px; border-radius: 11px; }
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

        .nav-overdark .nav-link,
        .nav-overdark .nav-phone,
        .nav-overdark .nav-logo-text { text-shadow: 0 1px 8px rgba(8,22,38,0.45); }
        .nav-scrolled .nav-link,
        .nav-scrolled .nav-phone,
        .nav-scrolled .nav-logo-text { text-shadow: none; }

        @media (max-width: 1040px) {
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
