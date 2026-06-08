import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pressure Washing Services in Macomb, MI | Are You Washed" },
  description:
    "House washing, soft washing, window & gutter cleaning, concrete & roof washing in Macomb and Metro Detroit. Free quotes from a trusted local family. 586-238-0784.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="What We Offer"
        title="Pressure Washing Services in"
        accent="Macomb & Metro Detroit"
        sub="We clean homes and businesses, and it's the same local Macomb family on every job. Tell us what needs cleaning and we'll get you a free quote."
      />

      <section className="section">
        <div className="container svc-detail-wrap">
          {services.map((s, i) => {
            const Ic = Icons[s.icon];
            const flip = i % 2 === 1;
            return (
              <div key={s.slug} id={s.slug} className={`svc-detail ${flip ? "flip" : ""} reveal`}>
                <div className="svc-detail-media">
                  {s.image ? (
                    <Image src={s.image} alt={s.alt || s.name} width={620} height={460} className="svc-detail-img" />
                  ) : (
                    <div className="svc-detail-iconbox"><Ic className="svc-detail-bigicon" /></div>
                  )}
                </div>
                <div className="svc-detail-content">
                  <div className="svc-detail-ic"><Ic className="svc-detail-ic-svg" /></div>
                  <h2 className="svc-detail-title">{s.name}</h2>
                  <p className="svc-detail-desc">{s.description}</p>
                  <ul className="svc-detail-features">
                    {s.features.map((f) => (
                      <li key={f}><Icons.check className="svc-feat-check" /> {f}</li>
                    ))}
                  </ul>
                  <div className="svc-detail-actions">
                    <Link href={`/services/${s.slug}`} className="btn btn-primary">
                      More Info <Icons.arrow />
                    </Link>
                    <Link href="/contact" className="btn btn-ghost">
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <style>{`
          .svc-detail-wrap { display: flex; flex-direction: column; gap: clamp(56px, 9vw, 110px); }
          .svc-detail {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(32px, 5vw, 70px);
            align-items: center;
            scroll-margin-top: 100px;
          }
          .svc-detail.flip .svc-detail-media { order: 2; }
          .svc-detail-img {
            width: 100%; height: auto;
            border-radius: var(--r-xl);
            box-shadow: var(--shadow-lg);
            object-fit: cover;
            aspect-ratio: 4/3;
          }
          .svc-detail-iconbox {
            width: 100%;
            aspect-ratio: 4/3;
            border-radius: var(--r-xl);
            background: linear-gradient(135deg, var(--aqua-soft), var(--aqua-mist));
            display: grid; place-items: center;
            box-shadow: var(--shadow-md);
          }
          .svc-detail-bigicon { width: 120px; height: 120px; color: var(--aqua-deep); opacity: 0.55; }
          .svc-detail-ic {
            width: 60px; height: 60px;
            display: grid; place-items: center;
            background: linear-gradient(135deg, var(--maize), var(--maize-deep));
            color: #ffffff;
            border-radius: var(--r-md);
            margin-bottom: 18px;
          }
          .svc-detail-ic-svg { width: 30px; height: 30px; }
          .svc-detail-title { font-size: clamp(1.7rem, 3.5vw, 2.5rem); margin-bottom: 14px; }
          .svc-detail-desc { color: var(--ink-soft); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px; }
          .svc-detail-features { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 30px; }
          .svc-detail-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.96rem; color: var(--ink-soft); }
          .svc-detail-actions { display: flex; flex-wrap: wrap; gap: 12px; }
          .svc-feat-check { width: 20px; height: 20px; color: #fff; background: var(--aqua); border-radius: 50%; padding: 3.5px; flex-shrink: 0; margin-top: 2px; }
          @media (max-width: 860px) {
            .svc-detail { grid-template-columns: 1fr; }
            .svc-detail.flip .svc-detail-media { order: 0; }
            .svc-detail-features { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <CTABand title="Want a free quote?" sub="Fill out the quick form and a real member of our family gets back to you fast. No pressure." />
    </>
  );
}
