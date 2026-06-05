import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
  alternates: { canonical: `${site.url}/terms-of-service` },
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="June 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website{" "}
        <a href={site.url}>{site.domain}</a> and the services provided by {site.name}
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using our website or engaging our services, you
        agree to these Terms.
      </p>

      <h2>Services</h2>
      <p>
        We provide exterior cleaning services including, but not limited to, house washing, soft washing, window
        cleaning, gutter cleaning, concrete and driveway cleaning, roof washing, and patio/deck cleaning for residential
        and commercial properties. All services are subject to availability and scheduling.
      </p>

      <h2>Quotes &amp; Estimates</h2>
      <p>
        Quotes provided through our website or by phone are estimates based on the information you provide. Final
        pricing may be adjusted after an on-site assessment of the actual conditions, size, and scope of the work. We
        will communicate any changes before beginning work.
      </p>

      <h2>Scheduling &amp; Weather</h2>
      <p>
        Because our work is performed outdoors, appointments may be rescheduled due to weather or other conditions
        beyond our control. We will make reasonable efforts to notify you of any changes and reschedule promptly.
      </p>

      <h2>Payment</h2>
      <p>
        Payment is due upon completion of services unless otherwise agreed in writing. Accepted payment methods will be
        communicated at the time of booking. Late or non-payment may result in additional fees.
      </p>

      <h2>Property Access &amp; Preparation</h2>
      <p>
        You are responsible for providing safe and reasonable access to the areas being serviced, including access to a
        working water source where required. We ask that you remove or secure fragile items, vehicles, and personal
        belongings from the work area prior to our arrival.
      </p>

      <h2>Customer Responsibilities</h2>
      <ul>
        <li>Disclose any known issues with surfaces, windows, seals, or structures before work begins</li>
        <li>Ensure windows and doors are closed during exterior cleaning</li>
        <li>Inform us of any delicate landscaping, fixtures, or surfaces requiring special care</li>
      </ul>

      <h2>Satisfaction</h2>
      <p>
        Your satisfaction matters to us. If you have concerns about completed work, please contact us promptly so we can
        address them.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        While we take great care in performing our services using appropriate methods, we are not liable for pre-existing
        damage, defects, or conditions, including but not limited to aging surfaces, failing seals, loose materials,
        prior improper installation, or damage that occurs despite the use of reasonable and industry-standard
        techniques. Please review our <a href="/disclaimer">Disclaimer</a> for additional details.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, images, and the company logo, is the property of {site.name} and
        may not be reproduced without permission.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may revise these Terms at any time. Continued use of our website or services after changes are posted
        constitutes acceptance of the updated Terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Michigan, without regard to its conflict of law principles.
      </p>
    </LegalLayout>
  );
}
