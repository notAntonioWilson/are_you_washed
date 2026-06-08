import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle || `${s.name} | ${site.shortName}` },
    description: s.metaDescription || s.description,
    alternates: { canonical: `${site.url}/services/${s.slug}` },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const Ic = Icons[s.icon];
  const paras = s.longDescription && s.longDescription.length ? s.longDescription : [s.description];

  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Pressure Washing Service"
        title={s.name + " in"}
        accent="Macomb & Metro Detroit"
        sub={s.short}
      />

      <section className="section">
        <div className="container sd-wrap">
          <div className="sd-main reveal">
            <div className="sd-ic"><Ic className="sd-ic-svg" /></div>

            <div className="sd-body">
              {paras.map((p, i) => (
                <p key={i} className="sd-para">{p}</p>
              ))}

              <h2 className="sd-subhead">What's included</h2>
              <ul className="sd-features">
                {s.features.map((f) => (
                  <li key={f}><Icons.check className="sd-feat-check" /> {f}</li>
                ))}
              </ul>

              <div className="sd-cta">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get a Free Quote <Icons.arrow />
                </Link>
                <a href={site.phoneHref} className="btn btn-ghost btn-lg">
                  <Icons.phone className="sd-cta-ic" /> Call {site.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Proof gallery: intentionally empty for now, structured to drop photos in later. */}
          <div className="sd-proof reveal">
            <h2 className="sd-proof-head">{s.name} Results in Macomb &amp; Metro Detroit</h2>
            <p className="sd-proof-sub">Real jobs from local homes. Fresh photos are on the way.</p>
            <div className="sd-gallery" data-gallery={s.slug} aria-label={`${s.name} before and after photos`}>
              {/* Drop result images here later, e.g.:
                  <figure className="sd-shot"><Image src="/images/..." alt="..." width={520} height={390} /></figure> */}
              <div className="sd-gallery-empty">Photos coming soon.</div>
            </div>
          </div>

          <p className="sd-back">
            <Link href="/services" className="sd-back-link"><Icons.arrow className="sd-back-ic" /> All services</Link>
          </p>
        </div>

        <style>{`
          .sd-wrap { max-width: 1000px; margin: 0 auto; }
          .sd-main { margin-bottom: clamp(48px, 7vw, 80px); }
          .sd-ic {
            width: 64px; height: 64px;
            display: grid; place-items: center;
            background: linear-gradient(135deg, var(--maize), var(--maize-deep));
            color: #ffffff;
            border-radius: var(--r-md);
            margin-bottom: 22px;
          }
          .sd-ic-svg { width: 32px; height: 32px; }
          .sd-para { color: var(--ink-soft); font-size: 1.08rem; line-height: 1.75; margin-bottom: 18px; }
          .sd-subhead { font-size: clamp(1.3rem, 2.6vw, 1.7rem); margin: 32px 0 16px; }
          .sd-features { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; margin-bottom: 34px; }
          .sd-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 1rem; color: var(--ink-soft); }
          .sd-feat-check { width: 20px; height: 20px; color: #fff; background: var(--maize); border-radius: 50%; padding: 3.5px; flex-shrink: 0; margin-top: 2px; }
          .sd-cta { display: flex; flex-wrap: wrap; gap: 14px; }
          .sd-cta-ic { width: 17px; height: 17px; }

          .sd-proof {
            border-top: 1px solid var(--line);
            padding-top: clamp(40px, 6vw, 64px);
          }
          .sd-proof-head { font-size: clamp(1.4rem, 3vw, 2rem); margin-bottom: 10px; }
          .sd-proof-sub { color: var(--ink-muted); font-size: 1rem; margin-bottom: 28px; }
          .sd-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;
            min-height: 200px;
          }
          .sd-gallery-empty {
            grid-column: 1 / -1;
            display: grid; place-items: center;
            min-height: 200px;
            border: 2px dashed var(--line);
            border-radius: var(--r-lg);
            color: var(--ink-muted);
            font-size: 0.98rem;
            background: var(--bg-tint);
          }
          .sd-shot { margin: 0; }
          .sd-shot img {
            width: 100%; height: auto;
            border-radius: var(--r-lg);
            box-shadow: var(--shadow-md);
            object-fit: cover;
            aspect-ratio: 4/3;
          }

          .sd-back { margin-top: 40px; }
          .sd-back-link {
            display: inline-flex; align-items: center; gap: 8px;
            color: var(--maize-deep); font-weight: 600; font-size: 0.98rem;
          }
          .sd-back-ic { width: 18px; height: 18px; transform: rotate(180deg); }

          @media (max-width: 700px) {
            .sd-features { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <CTABand title="Want a free quote?" sub="Fill out the quick form and a real member of our family gets back to you fast. No pressure." />
    </>
  );
}
