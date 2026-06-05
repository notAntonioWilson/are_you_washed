// ============================================================
//  ARE YOU WASHED PRESSURE WASHING, SITE DATA
//  Single source of truth. Edit here to update across the site.
// ============================================================

export const site = {
  name: "Are You Washed Pressure Washing LLC",
  shortName: "Are You Washed",
  tagline: "Are you washed yet?",
  domain: "areyouwashed.com",
  url: "https://areyouwashed.com",
  phone: "586-238-0784",
  phoneHref: "tel:+15862380784",
  smsHref: "sms:+15862380784",
  email: "Areyouwashed35@gmail.com",
  emailHref: "mailto:Areyouwashed35@gmail.com",
  instagram: "https://www.instagram.com/areyouwashed.pressurewash",
  hours: "8:00 AM to 8:00 PM, 7 days a week",
  hoursShort: "Mon to Sun · 8am to 8pm",
  homeBaseZip: "48042",
  serviceRadiusMiles: 40,
  yearsInBusiness: 4,
  propertiesServed: "1,000+",
  founded: 2021,
};

// Trust signals, verified
export const trust = {
  googleRating: "5.0",
  angiRating: "5.0",
  angiReviewCount: 75,
  bbbRating: "A+",
  bbbAccredited: true,
  angiAwards: 3, // "Super Service" / approved wins
  licensed: true,
  insured: true,
};

export const stats = [
  { value: "1,000+", label: "Properties Transformed" },
  { value: "5.0★", label: "Google & Angi Rating" },
  { value: "A+", label: "BBB Accredited" },
  { value: "4 Yrs", label: "Family Owned & Operated" },
];

// ============================================================
//  SERVICES
// ============================================================
export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  features: string[];
  icon: string; // key mapped in components/Icons.tsx
  image?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "house-washing",
    name: "House Washing",
    short: "Restore your home's exterior to like-new.",
    description:
      "Years of dirt, mildew, and organic growth get safely lifted from siding, brick, and stone, leaving your home looking freshly built. Our soft wash method protects your surfaces while delivering a deep, lasting clean.",
    features: [
      "Safe for vinyl, brick, stone & aluminum siding",
      "Removes mold, mildew & algae at the root",
      "Brightens and restores curb appeal",
      "Gentle on landscaping & windows",
    ],
    icon: "house",
    image: "/images/house-after.jpg",
    featured: true,
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    short: "Streak-free glass, inside and out.",
    description:
      "Crystal-clear, streak-free windows that let the light back in. We clean interior and exterior glass, frames, and sills with care, so every pane sparkles.",
    features: [
      "Interior & exterior glass",
      "Streak-free, spot-free finish",
      "Frames, tracks & sills included",
      "Screens cleaned on request",
    ],
    icon: "window",
    image: "/images/commercial-door.jpg",
    featured: true,
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    short: "Low-pressure cleaning for delicate surfaces.",
    description:
      "A specialized low-pressure technique that uses cleaning solutions instead of brute force, ideal for roofs, painted surfaces, and any area where high pressure could cause damage.",
    features: [
      "Low-pressure, high-result method",
      "Kills bacteria, algae & moss",
      "Safe for delicate surfaces",
      "Longer-lasting than pressure alone",
    ],
    icon: "droplet",
    image: "/images/balustrade-after.jpg",
  },
  {
    slug: "concrete-cleaning",
    name: "Concrete Cleaning",
    short: "Lift years of grime from hard surfaces.",
    description:
      "Driveways, walkways, and concrete surfaces stripped of dirt, oil stains, rust, and organic buildup, revealing clean, even concrete underneath.",
    features: [
      "Removes oil, rust & stains",
      "Even, streak-free results",
      "Surface cleaner for uniform finish",
      "Sealing available on request",
    ],
    icon: "concrete",
    image: "/images/driveway-clean.jpg",
  },
  {
    slug: "driveway-cleaning",
    name: "Driveway Cleaning",
    short: "A clean entrance makes the whole home shine.",
    description:
      "Your driveway is the first thing guests see. We blast away tire marks, oil, algae, and ground-in dirt for a driveway that looks freshly poured.",
    features: [
      "Tire marks & oil removal",
      "Algae & moss treatment",
      "Edge-to-edge even clean",
      "Pairs perfectly with house washing",
    ],
    icon: "driveway",
    image: "/images/driveway-house.jpg",
  },
  {
    slug: "patio-deck-cleaning",
    name: "Patio & Deck Cleaning",
    short: "Bring outdoor living spaces back to life.",
    description:
      "Pavers, stamped concrete, wood, and composite decking cleaned and revived, so your outdoor space is ready for entertaining all season long.",
    features: [
      "Pavers, stamped concrete & wood",
      "Restores original color",
      "Removes mildew & weather stains",
      "Re-sanding & sealing on request",
    ],
    icon: "patio",
    image: "/images/patio-after.jpg",
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    short: "Remove black streaks & extend roof life.",
    description:
      "Those black streaks are living algae eating away at your shingles. Our soft wash roof treatment kills it safely, improving curb appeal and protecting your investment.",
    features: [
      "Kills algae, moss & lichen",
      "Soft wash, no shingle damage",
      "Removes black streaks",
      "Extends roof lifespan",
    ],
    icon: "roof",
    image: "/images/commercial-2.jpg",
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    short: "Protect your home from water damage.",
    description:
      "Clogged gutters lead to costly water damage. We clear debris, flush downspouts, and brighten gutter exteriors so water flows where it should.",
    features: [
      "Full debris removal",
      "Downspout flushing",
      "Exterior gutter brightening",
      "1 & 2 story homes",
    ],
    icon: "gutter",
    image: "/images/walkway-after.jpg",
  },
];

export const featuredServices = services.filter((s) => s.featured);

// Service areas, ranked by priority
export const serviceAreas = [
  "Macomb Township",
  "Washington Township",
  "Bloomfield Hills",
  "West Bloomfield",
  "Grosse Pointe",
  "Grosse Pointe Shores",
  "Utica",
  "Harrison Township",
  "Sterling Heights",
  "Clinton Township",
  "Chesterfield",
  "Lake Orion",
  "Shelby Township",
  "Troy",
];

// ============================================================
//  REVIEWS, pulled from Google & Angi (verified)
// ============================================================
export type Review = {
  name: string;
  text: string;
  service?: string;
  source: "Google" | "Angi";
  rating: 5;
};

export const reviews: Review[] = [
  {
    name: "Rob K.",
    text: "They showed up right on time and clearly communicated what the job would involve before getting started. My windows have never looked this clean. You can tell they take pride in their work.",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Deb Keller",
    text: "Juan did a wonderful and very professional job on my brick pavers, some staining on my brick, and part of my driveway we discussed. I highly recommend him.",
    service: "Concrete Cleaning",
    source: "Google",
    rating: 5,
  },
  {
    name: "Sandra E.",
    text: "Juan Jr was Fabulous! He explained everything he was going to do. While doing the job he took videos to show what he was doing. I will be using this service again next year.",
    service: "Gutter Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Janet",
    text: "Juan and his crew did an awesome job! We had our patio and pavers power washed and all our windows inside and out. Highly recommend.",
    service: "House Washing",
    source: "Google",
    rating: 5,
  },
  {
    name: "Steve P.",
    text: "These guys did a fantastic job. This composite deck has not been cleaned in 12 years, full of mildew and growth. It's like brand new again. They did more than what they said, and were on time!",
    service: "Patio & Deck Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Jennifer Coleman",
    text: "Juan changed his schedule for us and made it happen next day for our house to be shiny and clear for our upcoming open house! Looks fabulous and he did a great job!",
    service: "House Washing",
    source: "Google",
    rating: 5,
  },
  {
    name: "Tara W.",
    text: "Are You Washed did an amazing job soft washing our garage and house. They listened to us as we did the walk through and made sure we were satisfied with the results.",
    service: "Soft Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Betsy M.",
    text: "Everything about dealing with the company was positive. They were very professional. They contacted me right away and gave me a very reasonable quote. It's a family business.",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "HighbanksHills",
    text: "It's very rare nowadays that you run into such a great company as Are You Washed Pressure Washing. On time, professional, and excellent work.",
    service: "House Washing",
    source: "Google",
    rating: 5,
  },
  {
    name: "Linda R.",
    text: "Juan did a fantastic job! Reasonably priced. I highly recommend him!",
    service: "House Washing",
    source: "Angi",
    rating: 5,
  },
];

// Quote form service options
export const quoteServices = services.map((s) => s.name).concat(["Multiple Services", "Other / Not Sure"]);

// External proof links
export const externalLinks = {
  angi: "https://www.angi.com/companylist/us/mi/macomb/are-you-washed-pressure-washing-llc-reviews-1.htm",
  homeadvisor: "https://www.homeadvisor.com/rated.AreYouWashedPressure.136540417.html",
};

// Finished results gallery (afters only). Add more by appending here.
export type Result = { image: string; label: string };
export const results: Result[] = [
  { image: "/images/house-after.jpg", label: "House Washing" },
  { image: "/images/driveway-clean.jpg", label: "Driveway Cleaning" },
  { image: "/images/patio-after.jpg", label: "Patio & Deck" },
  { image: "/images/walkway-after.jpg", label: "Paver Walkway" },
  { image: "/images/balustrade-after.jpg", label: "Porch & Balustrade" },
  { image: "/images/driveway-house.jpg", label: "Driveway & Entry" },
  { image: "/images/commercial-1.jpg", label: "Commercial Exterior" },
  { image: "/images/commercial-door.jpg", label: "Storefront" },
  { image: "/images/commercial-2.jpg", label: "Commercial" },
];
