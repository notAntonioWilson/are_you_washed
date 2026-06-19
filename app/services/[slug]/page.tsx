import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { services, site, proof, ProofShot } from "@/lib/site";

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

const SECTION_HEADS = ["What it is", "How we do it", "Why it matters"];
const FALLBACK_IMGS = ["/images/house-after.jpg", "/images/driveway-house.jpg", "/images/patio-after.jpg"];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const shots = proof.filter((p) => p.service === s.slug);
  const hasPhotos = shots.length > 0;
  const paras = (s.longDescription && s.longDescription.length >= 3
    ? s.longDescription
    : [s.description, s.description, s.description]
  ).slice(0, 3);

  // Pick 3 distinct images for the side-by-side sections: this service's proof first,
  // then its card image, then tasteful generic result shots.
  const pool = [
    ...((s.bodyImages || []).map((src) => ({ src, alt: `${s.name} by Are You Washed in Metro Detroit` }))),
    ...shots.map((p) => ({ src: p.image, alt: p.alt })),
    ...(s.image ? [{ src: s.image, alt: s.alt || `${s.name} by Are You Washed` }] : []),
    ...FALLBACK_IMGS.map((f) => ({ src: f, alt: `${s.name} service by Are You Washed in Metro Detroit` })),
  ];
  const sectionImgs: { src: string; alt: string }[] = [];
  for (const c of pool) {
    if (sectionImgs.length >= 3) break;
    if (!sectionImgs.find((x) => x.src === c.src)) sectionImgs.push(c);
  }
  while (sectionImgs.length < 3) sectionImgs.push(sectionImgs[0]);

  // Static proof grid: each shot shown exactly once, larger tiles, no repeats.
  const gallery: ProofShot[] = shots;

  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Pressure Washing Service"
        title={s.name + " in"}
        accent="Macomb & Metro Detroit"
        sub={s.short}
      />

      <section className="section sdx-section">
        <div className="container sdx-wrap">
          {paras.map((p, i) => (
            <div key={i} className={`sdx-row reveal ${i % 2 === 1 ? "flip" : ""}`}>
              <div className="sdx-media">
                {hasPhotos ? (
                  <Image src={sectionImgs[i].src} alt={sectionImgs[i].alt} width={620} height={465} />
                ) : (
                  <div className="sdx-media-soon" role="img" aria-label={`${s.name} photos coming soon`}>
                    <span>Photos coming soon</span>
                  </div>
                )}
              </div>
              <div className="sdx-text">
                <span className="sdx-kicker">{SECTION_HEADS[i]}</span>
                <p className="sdx-para">{p}</p>
              </div>
            </div>
          ))}

          <div className="sdx-included reveal">
            <h2 className="sdx-inc-head">What's included</h2>
            <ul className="sdx-features">
              {s.features.map((f) => (
                <li key={f}><Icons.check className="sdx-check" /> {f}</li>
              ))}
            </ul>
            <div className="sdx-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get a Free Quote <Icons.arrow />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost btn-lg">
                <Icons.phone className="sdx-cta-ic" /> Call {site.phone}
              </a>
            </div>
          </div>

          <div className="sdx-proof-head-wrap reveal">
            <h2 className="sdx-proof-head">{s.name} Results in Macomb &amp; Metro Detroit</h2>
            <p className="sdx-proof-sub">Real jobs from local homes and businesses.</p>
          </div>
        </div>

        {gallery.length > 0 ? (
          <div className="container">
            <div className="sdx-grid" aria-label={`${s.name} finished work photos`}>
              {gallery.map((p) => (
                <figure key={p.image} className="sdx-shot">
                  <Image src={p.image} alt={p.alt} width={760} height={570} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                </figure>
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="sdx-empty">Photos coming soon.</div>
          </div>
        )}

        <div className="container">
          <p className="sd-back">
            <Link href="/services" className="sd-back-link"><Icons.arrow className="sd-back-ic" /> All services</Link>
          </p>
        </div>

        <style>{`
          .sdx-section { padding-top: clamp(36px, 5vw, 56px); }
          .sdx-wrap { max-width: 1020px; margin: 0 auto; }

          .sdx-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(24px, 4vw, 44px);
            align-items: center;
            margin-bottom: clamp(34px, 5vw, 54px);
          }
          .sdx-row.flip .sdx-media { order: 2; }
          .sdx-media img {
            width: 100%; height: auto;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            border-radius: var(--r-lg);
            box-shadow: var(--shadow-md);
            display: block;
          }
          .sdx-media-soon {
            width: 100%;
            aspect-ratio: 4 / 3;
            border-radius: var(--r-lg);
            box-shadow: var(--shadow-md);
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--aqua-soft, #eef3f1);
            border: 1.5px dashed var(--line, #d4ddd8);
          }
          .sdx-media-soon span {
            font-family: var(--font-display);
            font-weight: 600;
            font-size: 1rem;
            color: var(--ink-muted, #6b7a74);
          }
          .sdx-kicker {
            display: inline-block;
            font-family: var(--font-display);
            font-weight: 700;
            font-size: 12.5px;
            letter-spacing: 0.09em;
            text-transform: uppercase;
            color: var(--maize-deep);
            margin-bottom: 10px;
          }
          .sdx-para { color: var(--ink-soft); font-size: 1.04rem; line-height: 1.7; }

          .sdx-included {
            background: var(--white);
            border: 1px solid var(--line);
            border-radius: var(--r-lg);
            box-shadow: var(--shadow-sm);
            padding: clamp(22px, 3.4vw, 34px);
            margin-bottom: clamp(40px, 6vw, 64px);
          }
          .sdx-inc-head { font-size: clamp(1.25rem, 2.4vw, 1.55rem); margin-bottom: 16px; }
          .sdx-features { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; margin-bottom: 24px; }
          .sdx-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.99rem; color: var(--ink-soft); }
          .sdx-check { width: 20px; height: 20px; color: #fff; background: var(--maize); border-radius: 50%; padding: 3.5px; flex-shrink: 0; margin-top: 2px; }
          .sdx-cta { display: flex; flex-wrap: wrap; gap: 14px; }
          .sdx-cta-ic { width: 17px; height: 17px; }

          .sdx-proof-head-wrap { margin-bottom: 18px; }
          .sdx-proof-head { font-size: clamp(1.35rem, 3vw, 1.9rem); margin-bottom: 8px; }
          .sdx-proof-sub { color: var(--ink-muted); font-size: 0.98rem; }

          .sdx-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
            gap: 22px;
            margin: 8px 0 30px;
          }
          .sdx-shot { margin: 0; }
          .sdx-shot img {
            width: 100%; height: auto;
            border-radius: var(--r-lg);
            box-shadow: var(--shadow-md);
            object-fit: cover;
            aspect-ratio: 4/3;
            display: block;
          }
          .sdx-empty {
            display: grid; place-items: center;
            min-height: 180px;
            border: 2px dashed var(--line);
            border-radius: var(--r-lg);
            color: var(--ink-muted);
            font-size: 0.98rem;
            background: var(--bg-tint);
            margin-bottom: 30px;
          }

          .sd-back { margin: 6px 0 4px; }
          .sd-back-link {
            display: inline-flex; align-items: center; gap: 8px;
            color: var(--maize-deep); font-weight: 600; font-size: 0.98rem;
          }
          .sd-back-ic { width: 18px; height: 18px; transform: rotate(180deg); }

          @media (max-width: 980px) {
            .sdx-grid { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
          }
          @media (max-width: 860px) {
            .sdx-row { grid-template-columns: 1fr; gap: 18px; }
            .sdx-row.flip .sdx-media { order: 0; }
            .sdx-features { grid-template-columns: 1fr; }
          }
          @media (max-width: 640px) {
            .sdx-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <CTABand title="Want a free quote?" sub="Fill out the quick form and a real member of our family gets back to you fast. No pressure." />
    </>
  );
}
