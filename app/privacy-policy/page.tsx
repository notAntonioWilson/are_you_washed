import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
  alternates: { canonical: `${site.url}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>
        {site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
        explains how we collect, use, and protect the information you provide when you visit{" "}
        <a href={site.url}>{site.domain}</a> or request our services.
      </p>

      <h2>Information We Collect</h2>
      <p>When you submit a quote request or contact us, we may collect:</p>
      <ul>
        <li>Your name, phone number, and email address</li>
        <li>Your property address and details about the service you&apos;re requesting</li>
        <li>Any additional information you choose to share in your message</li>
        <li>Basic technical data such as your browser type and pages visited (via standard web analytics)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect solely to:</p>
      <ul>
        <li>Respond to your quote requests and inquiries</li>
        <li>Schedule, perform, and follow up on services</li>
        <li>Communicate with you about your project or appointment</li>
        <li>Improve our website and service offerings</li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We may share information only with trusted service
        providers (such as scheduling, customer-management, or email tools) that help us operate our business, and only
        to the extent necessary to provide our services. We may also disclose information if required by law.
      </p>

      <h2>Text Messaging</h2>
      <p>
        If you provide your phone number, you consent to be contacted by phone call or text message regarding your
        request. Message and data rates may apply. You can opt out of text messages at any time by replying STOP.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        Our website may use cookies and similar technologies to understand how visitors use the site. You can disable
        cookies through your browser settings, though some features may not function as intended.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information. However, no method of transmission over the internet is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request to review, update, or delete the personal information we hold about you at any time by
        contacting us using the details below.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
        revision date.
      </p>
    </LegalLayout>
  );
}
