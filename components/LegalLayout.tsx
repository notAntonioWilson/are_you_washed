import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Reveal />
      <PageHero title={title} sub={`Last updated: ${updated}`} />
      <section className="section legal">
        <div className="container legal-inner">
          {children}
          <div className="legal-contact">
            <p>
              Questions about this policy? Contact us at{" "}
              <a href={site.emailHref}>{site.email}</a> or{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>
      <style>{`
        .legal-inner { max-width: 800px; margin: 0 auto; }
        .legal-inner :global(h2) {
          font-size: 1.4rem;
          margin: 38px 0 14px;
          color: var(--ink);
        }
        .legal-inner :global(h2:first-child) { margin-top: 0; }
        .legal-inner :global(p) {
          color: var(--ink-soft);
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .legal-inner :global(ul) {
          margin: 0 0 16px;
          padding-left: 4px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .legal-inner :global(li) {
          color: var(--ink-soft);
          font-size: 1rem;
          line-height: 1.7;
          padding-left: 22px;
          position: relative;
        }
        .legal-inner :global(li::before) {
          content: "";
          position: absolute; left: 0; top: 11px;
          width: 7px; height: 7px;
          background: var(--maize);
          border-radius: 50%;
        }
        .legal-inner :global(a) { color: var(--aqua-deep); font-weight: 600; }
        .legal-inner :global(a:hover) { text-decoration: underline; }
        .legal-contact {
          margin-top: 44px;
          padding: 24px 28px;
          background: var(--bg-tint);
          border-radius: var(--r-lg);
          border: 1px solid var(--line);
        }
        .legal-contact :global(p) { margin: 0; }
      `}</style>
    </>
  );
}
