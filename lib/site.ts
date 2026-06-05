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
    text: "They showed up right on time and clearly communicated what the job would involve before getting started. I appreciated how professional and straightforward they were throughout the process. Most importantly, the results exceeded my expectations. My windows have never looked this clean. You can tell they take pride in their work...",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sandra E.",
    text: "Juan Jr was Fabulous! He explained everything he was going to do. While doing the job he took videos to show what he doing. He showed me how clean my gutters & the leaves were all clean on my roof!! I will be using this service again next year.",
    service: "Gutter Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sheila W.",
    text: "Juan did an excellent job and he was so nice and well mannered. I will be recommending this Company, and I will be using them for all my future jobs.",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "David D.",
    text: "Easy to schedule, on time and our windows look great! Juan junior was very nice and did a great job!👏 🤙",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Bonitha D.",
    text: "The technician did a great job washing my home. The brick seems so much brighter and definitely clean",
    service: "House Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Betsy M.",
    text: "Everything about dealing with the company was positive. They were very professional. Also, they contacted me right away and gave me a very reasonable quote. It's a family business.",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sally B.",
    text: "Great communication, prompt, professional and Juan did an amazing job cleaning my aluminum siding which was extremely dirty. Would highly recommend!",
    service: "House Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Linda R.",
    text: "Juan did a fantastic job! Reasonably priced. I highly recommend him!",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Tara W.",
    text: "Are You Washed did an amazing job soft washing our garage and house. They listened to us as we did the walk through and made sure we were satisfied with the results. They were great to work with and appreciated the hard work they did in a timely manner!",
    service: "Soft Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Anne S.",
    text: "Juan and his crew washed my windows, outside only. The communication leading up to the appt. was perfect, even with rescheduling due to rain. They were professional, detail oriented and my windows sparkled when they left! Thank you, Juan and crew!",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Steve P.",
    text: "These guys did a fantastic job...this composition deck has not been cleaned in 12 years... full of mildew and growths...lol it's like brand new again... I have them coming back to wash a garage so I can get it ready for paint... They did more than what they said..and we're on time!",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Barb D.",
    text: "They did a great job on our house. I don't think it has ever been washed, & we have lived in it 24 years. Brightened up so. Crew were polite & efficient.",
    service: "House Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "DeAndre P.",
    text: "Are you washed pressure washing is in my books the best pressure washing company out there. They were very professional, on time, and the work they performed for me deserved more than a 5star review! Very happy and will definitely be a returning customer.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Missy H.",
    text: "Juan was absolutely amazing from 1st phone call to follow up. He was so professional and easy to communicate with, they were on time and did an amazing job. I feel he went above satisfactory and truly cared to complete job with excellence...",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sandra B.",
    text: "Juan and Eric arrived right on time. They worked extremely well together and got right to work. They were professional, friendly, conscientious, hard-working, and paid attention to detail. They went above and beyond...",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Gregory C.",
    text: "Outstanding work. Estimate provided quickly and work completed within a week at a good price. They eliminated the \"tiger stripes\" forming on my gutters, dispatched green mold forming on my bricks, and cleaned a wood fence in preparation for painting...",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Anne A.",
    text: "I hired Are You Washed to wash my windows after having the roof replaced. The windows were so dirty. Are You Washed was able to come out within just days of my first contact. And so reasonably priced!...",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "James H.",
    text: "Juan was awesome to work with!!!! Did a GREAT job! Will call back when I need power washing in the future!",
    service: "Pressure Washing",
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
