import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { ProofGallery } from "@/components/ProofGallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Our Work | Pressure Washing Results in Macomb, MI" },
  description:
    "See real pressure washing results from homes across Macomb and Metro Detroit. Family-owned, 5.0★ rated. Get your free quote today.",
  alternates: { canonical: `${site.url}/results` },
};

export default function ResultsPage() {
  return (
    <>
      <Reveal />
      <PageHero
        eyebrow="Our Work"
        title="Our Pressure Washing"
        accent="Results"
        sub="Every one of these is a real home we cleaned here in Metro Detroit. Get a free quote and we'll get you on the schedule too."
      />

      <section className="section results-section">
        <div className="container">
          <ProofGallery />

          <div className="results-cta">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Your Free Quote <Icons.arrow />
            </Link>
            <Link href="/reviews" className="btn btn-ghost btn-lg">
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      <CTABand sub="The quote is free and there's no pressure. Send us a few details and we'll get right back to you." />

      <style>{`
        .results-section { padding-top: clamp(28px,4vw,48px); }
                .results-cta {
          display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;
          margin-top: 40px;
        }
      `}</style>
    </>
  );
}
