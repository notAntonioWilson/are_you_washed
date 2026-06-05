import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";
import { Icons } from "@/components/Icons";
import { site, serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Submit a Quote",
  description:
    "Submit a free, no-obligation quote request to Are You Washed Pressure Washing. Tell us about your property and we'll respond fast, usually within hours. Call or text 586-238-0784. Serving Macomb & Metro Detroit, 8am-8pm daily.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  const cards = [
    { icon: "phone", label: "Call or Text", value: site.phone, href: site.phoneHref },
    { icon: "mail", label: "Email Us", value: site.email, href: site.emailHref },
    { icon: "clock", label: "Hours", value: site.hours },
    { icon: "pin", label: "Based In", value: `Macomb, MI ${site.homeBaseZip}` },
  ];
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Free · No Obligation"
        title="Submit a"
        accent="Quote"
        sub="Tell us a little about your property and what needs cleaning. We'll send your free quote back fast, usually within hours, never any pressure."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          {/* Info side */}
          <div className="contact-info reveal">
            <h2 className="contact-h">Two minutes is all it takes.</h2>
            <p className="contact-lead">
              Fill out the form and we&apos;ll get right back to you with an honest, no-obligation quote. Prefer to talk it
              through? Call or text, a real member of our family team will pick up.
            </p>

            <div className="contact-cards">
              {cards.map((c) => {
                const Ic = Icons[c.icon];
                const inner = (
                  <>
                    <div className="cc-ic"><Ic className="cc-ic-svg" /></div>
                    <div>
                      <div className="cc-label">{c.label}</div>
                      <div className="cc-value">{c.value}</div>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="contact-card contact-card-link">{inner}</a>
                ) : (
                  <div key={c.label} className="contact-card">{inner}</div>
                );
              })}
            </div>

            <div className="contact-areas">
              <h3 className="contact-areas-h"><Icons.pin className="ca-ic" /> Service Areas</h3>
              <p className="contact-areas-list">
                {serviceAreas.join(" · ")}, and everywhere within {site.serviceRadiusMiles} miles of {site.homeBaseZip}.
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap reveal d1">
            <QuoteForm variant="page" />
          </div>
        </div>
        <style>{`
          /* contact-only: trim header + section spacing for a compact page */
          .pagehero { padding-top: calc(var(--nav-h) + 8px); padding-bottom: 14px; }
          .contact-section { padding-top: clamp(10px,1.6vw,20px); padding-bottom: clamp(22px,3vw,40px); }
          .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,4vw,52px); align-items: start; }
          .contact-h { font-size: clamp(1.6rem,3.5vw,2.4rem); margin-bottom: 10px; }
          .contact-lead { color: var(--ink-soft); font-size: 1.05rem; line-height: 1.65; margin-bottom: 20px; }
          .contact-cards { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 22px; }
          .contact-card {
            display: flex; align-items: center; gap: 14px;
            background: var(--white);
            border: 1px solid var(--line);
            border-radius: var(--r-md);
            padding: 15px 20px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          }
          .contact-card-link:hover { transform: translateY(-3px); border-color: var(--maize); box-shadow: var(--shadow-md); }
          .cc-ic {
            width: 46px; height: 46px; flex-shrink: 0;
            display: grid; place-items: center;
            background: var(--aqua-soft); color: var(--aqua-deep);
            border-radius: var(--r-sm);
          }
          .cc-ic-svg { width: 22px; height: 22px; }
          .cc-label { font-family: var(--font-display); font-weight: 500; font-size: 0.78rem; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.06em; }
          .cc-value { font-family: var(--font-display); font-weight: 700; font-size: 0.98rem; color: var(--ink); margin-top: 2px; }
          .contact-areas { background: var(--bg-tint); border-radius: var(--r-lg); padding: 18px 22px; }
          .contact-areas-h { display: flex; align-items: center; gap: 8px; font-size: 1.05rem; margin-bottom: 10px; }
          .ca-ic { width: 18px; height: 18px; color: var(--maize-deep); }
          .contact-areas-list { color: var(--ink-muted); font-size: 0.92rem; line-height: 1.6; }
          @media (max-width: 880px) {
            .contact-grid { grid-template-columns: 1fr; }
            .contact-form-wrap { order: -1; }
          }
          @media (max-width: 460px) { .contact-cards { grid-template-columns: 1fr; } }
        `}</style>
      </section>
    </>
  );
}
