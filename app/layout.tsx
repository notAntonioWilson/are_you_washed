import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site, serviceAreas } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

// Self-hosted fonts (no external Google dependency = faster + privacy-friendly)
const sora = localFont({
  variable: "--font-sora",
  display: "swap",
  src: [
    { path: "./fonts/sora-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/sora-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/sora-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/sora-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/sora-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});
const jakarta = localFont({
  variable: "--font-jakarta",
  display: "swap",
  src: [
    { path: "./fonts/plus-jakarta-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pressure Washing in Macomb, MI | Are You Washed",
    template: `%s | ${site.shortName}`,
  },
  description:
    "Family-owned pressure washing in Macomb & Washington Township. House washing, windows, gutters, concrete & more. 5.0★ rated. Free quotes, call 586-238-0784.",
  keywords: [
    "pressure washing Macomb MI",
    "power washing Metro Detroit",
    "house washing Macomb Township",
    "soft washing Michigan",
    "window cleaning Sterling Heights",
    "gutter cleaning Clinton Township",
    "roof washing",
    "concrete cleaning",
    "driveway cleaning",
    ...serviceAreas.map((a) => `pressure washing ${a}`),
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `Pressure Washing in Macomb, MI | Are You Washed`,
    description:
      "5.0★ family-owned pressure washing. House & soft washing, windows, gutters, concrete, roofs. Free quotes.",
    images: [{ url: "/logo-web.png", width: 600, height: 600, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pressure Washing in Macomb, MI | Are You Washed`,
    description: "5.0★ family-owned pressure washing across Metro Detroit. Free quotes.",
    images: ["/logo-web.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description:
    "Family-owned pressure washing serving Macomb, Washington Township, and Metro Detroit.",
  image: `${site.url}/logo-web.png`,
  logo: `${site.url}/logo-web.png`,
  url: site.url,
  telephone: "+1-586-238-0784",
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Macomb",
    addressRegion: "MI",
    postalCode: site.homeBaseZip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.6675, longitude: -82.9211 },
  areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
  // aggregateRating intentionally omitted until on-page reviews are marked up with verified numbers.
  sameAs: [
    site.instagram,
    "https://www.angi.com/companylist/us/mi/macomb/are-you-washed-pressure-washing-llc-reviews-1.htm",
    "https://www.homeadvisor.com/rated.AreYouWashedPressure.136540417.html",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B5GDXTPTXW"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B5GDXTPTXW');
          `}
        </Script>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
