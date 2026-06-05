import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${site.name}.`,
  alternates: { canonical: `${site.url}/disclaimer` },
  robots: { index: true, follow: true },
};

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" updated="June 2026">
      <p>
        The information provided by {site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) on{" "}
        <a href={site.url}>{site.domain}</a> is for general informational purposes only. All information on the site is
        provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy or
        completeness of any information on the site.
      </p>

      <h2>Service Results</h2>
      <p>
        Cleaning results vary depending on the age, material, and condition of the surface being treated. Photographs of
        previous work, including before-and-after images, represent actual jobs but are not a guarantee of identical
        results on every property. Some stains, discoloration, oxidation, or organic growth may be permanent or only
        partially removable despite professional treatment.
      </p>

      <h2>Pre-Existing Conditions</h2>
      <p>
        Exterior surfaces naturally age and weather over time. We are not responsible for revealing or worsening
        pre-existing conditions that were not visible or disclosed prior to service, including but not limited to:
      </p>
      <ul>
        <li>Loose, cracked, or failing paint, caulk, mortar, or sealant</li>
        <li>Damaged, brittle, or improperly installed siding, shingles, or trim</li>
        <li>Failing window seals or pre-existing leaks</li>
        <li>Rotted wood, rust, or oxidation</li>
        <li>Previously damaged or unstable surfaces</li>
      </ul>

      <h2>Soft Washing &amp; Methods</h2>
      <p>
        We use methods appropriate to each surface, including low-pressure soft washing where suitable, to minimize the
        risk of damage. By engaging our services, you acknowledge that even with proper technique, some delicate or
        deteriorated surfaces carry inherent risk.
      </p>

      <h2>External Links &amp; Reviews</h2>
      <p>
        Our website may contain links to third-party websites such as Google, Angi, or the Better Business Bureau. We do
        not control and are not responsible for the content or accuracy of these external sites. Reviews displayed on
        this site are from real customers and are reproduced in good faith.
      </p>

      <h2>Professional Advice</h2>
      <p>
        Content on this site does not constitute professional, legal, or contractual advice. For specific concerns about
        your property, we recommend an on-site consultation.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you acknowledge this disclaimer and agree to its terms. This disclaimer should be read
        together with our <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}
