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
  facebook: "https://www.facebook.com/profile.php?id=100092849695895&mibextid=wwXIfr",
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
  googleReviewCount: 35,
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
  { value: "4+ Years", label: "Family Owned & Operated" },
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
  alt?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "house-washing",
    name: "House Washing",
    short: "Restore your home's exterior to like-new.",
    description:
      "We use a low-pressure soft wash to take dirt, mold, and mildew off your siding, brick, and stone without damaging anything. Send us a photo of your place and we'll quote it for free.",
    features: [
      "Safe for vinyl, brick, stone & aluminum siding",
      "Removes mold, mildew & algae at the root",
      "Brightens and restores curb appeal",
      "Gentle on landscaping & windows",
    ],
    icon: "house",
    image: "/images/house-after.jpg",
    alt: "Freshly pressure washed home exterior in Macomb, MI",
    featured: true,
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    short: "Streak-free glass, inside and out.",
    description:
      "We clean the glass inside and out, along with the frames, sills, and tracks, so nothing is left streaky. Tell us how many windows you have and we'll send a free quote.",
    features: [
      "Interior & exterior glass",
      "Streak-free, spot-free finish",
      "Frames, tracks & sills included",
      "Screens cleaned on request",
    ],
    icon: "window",
    image: "/images/commercial-door.jpg",
    alt: "Streak-free window cleaning by Are You Washed in Metro Detroit",
    featured: true,
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    short: "Low-pressure cleaning for delicate surfaces.",
    description:
      "This is a low-pressure method that uses a cleaning solution instead of force, so it's safe for roofs, painted surfaces, and anything high pressure could damage. Not sure if it's what you need? Ask us and we'll quote it free.",
    features: [
      "Low-pressure, high-result method",
      "Kills bacteria, algae & moss",
      "Safe for delicate surfaces",
      "Longer-lasting than pressure alone",
    ],
    icon: "droplet",
    image: "/images/balustrade-after.jpg",
    alt: "Soft washed porch and balustrade in Macomb, MI",
  },
  {
    slug: "concrete-cleaning",
    name: "Concrete Cleaning",
    short: "Lift years of grime from hard surfaces.",
    description:
      "We lift oil, rust, dirt, and buildup off driveways, walkways, and concrete for an even, clean finish. Send us the square footage and we'll get you a free quote.",
    features: [
      "Removes oil, rust & stains",
      "Even, streak-free results",
      "Surface cleaner for uniform finish",
      "Sealing available on request",
    ],
    icon: "concrete",
    image: "/images/driveway-clean.jpg",
    alt: "Clean concrete after pressure washing in Metro Detroit",
  },
  {
    slug: "driveway-cleaning",
    name: "Driveway Cleaning",
    short: "A clean entrance makes the whole home shine.",
    description:
      "We clear tire marks, oil, algae, and ground-in dirt so your driveway looks clean again. Reach out and we'll price your driveway fast, for free.",
    features: [
      "Tire marks & oil removal",
      "Algae & moss treatment",
      "Edge-to-edge even clean",
      "Pairs perfectly with house washing",
    ],
    icon: "driveway",
    image: "/images/driveway-house.jpg",
    alt: "Driveway pressure washed clean in Macomb, MI",
  },
  {
    slug: "patio-deck-cleaning",
    name: "Patio & Deck Cleaning",
    short: "Bring outdoor living spaces back to life.",
    description:
      "We clean pavers, stamped concrete, wood, and composite decks and bring the color back so the space is ready to use. Let us know the size and we'll put together a free quote.",
    features: [
      "Pavers, stamped concrete & wood",
      "Restores original color",
      "Removes mildew & weather stains",
      "Re-sanding & sealing on request",
    ],
    icon: "patio",
    image: "/images/patio-after.jpg",
    alt: "Patio and deck restored by pressure washing in Metro Detroit",
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    short: "Remove black streaks & extend roof life.",
    description:
      "Those black streaks are algae growing on your shingles, and our soft wash kills it safely without harming the roof. Ask us for a free quote before it spreads further.",
    features: [
      "Kills algae, moss & lichen",
      "Soft wash, no shingle damage",
      "Removes black streaks",
      "Extends roof lifespan",
    ],
    icon: "roof",
    image: "/images/commercial-2.jpg",
    alt: "Roof soft washing to remove algae streaks in Macomb, MI",
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    short: "Protect your home from water damage.",
    description:
      "Clogged gutters can cause water damage, so we clear the debris, flush the downspouts, and brighten the outside. Give us a call and we'll quote your home for free.",
    features: [
      "Full debris removal",
      "Downspout flushing",
      "Exterior gutter brightening",
      "1 & 2 story homes",
    ],
    icon: "gutter",
    image: "/images/walkway-after.jpg",
    alt: "Gutters cleaned and brightened on a Metro Detroit home",
  },
  {
    slug: "rust-removal",
    name: "Rust Removal",
    short: "Lift rust stains off concrete and siding.",
    description:
      "Rust stains from sprinklers, fertilizer, and metal furniture do not come off with regular washing. We use a rust remover that pulls the stain out of concrete, brick, and siding without scrubbing or damage. Send us a photo and we'll quote it for free.",
    features: [
      "Removes sprinkler & fertilizer rust",
      "Safe on concrete, brick & siding",
      "No scrubbing or surface damage",
      "Treats battery acid & metal stains",
    ],
    icon: "spray",
    image: "/images/driveway-clean.jpg",
    alt: "Concrete cleaned of rust stains after pressure washing in Macomb, MI",
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
    name: "Deb Keller",
    text: "Juan did a wonderful and very professional job on my brick pavers, some staining on my brick, and part of my driveway we discussed. I highly recommend him.",
    service: "Paver Cleaning",
    source: "Google",
    rating: 5,
  },
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
    name: "Jennifer Coleman",
    text: "Juan changed his schedule for us and made it happen next day for our house to be shiny and clear for our upcoming open house !! Looks fabulous and he did a great job !!",
    service: "House Washing",
    source: "Google",
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
    name: "Steve P.",
    text: "These guys did a fantastic job...this composition deck has not been cleaned in 12 years... full of mildew and growths...lol it's like brand new again... I have them coming back to wash a garage so I can get it ready for paint... They did more than what they said..and we're on time!",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Janice Huffman",
    text: "Juan was prompt and efficient. Our deck looks like new. I recommend him if you're in need of power washing.",
    service: "Deck Cleaning",
    source: "Google",
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
    name: "DeAndre P.",
    text: "Are you washed pressure washing is in my books the best pressure washing company out there. They were very professional, on time, and the work they performed for me deserved more than a 5star review! Very happy and will definitely be a returning customer.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Linda Ryan",
    text: "I had my house power washed. It turned out beautiful. I highly recommend this company.",
    service: "House Washing",
    source: "Google",
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
    name: "Barb D.",
    text: "They did a great job on our house. I don't think it has ever been washed, & we have lived in it 24 years. Brightened up so. Crew were polite & efficient.",
    service: "House Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Van McLaughlin",
    text: "The service eliminated mold and stains on brick and siding surfaces left after the removal of landscape trees. Looks great! Would definitely recommend.",
    service: "House Washing",
    source: "Google",
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
    name: "David D.",
    text: "Easy to schedule, on time and our windows look great! Juan junior was very nice and did a great job!👏 🤙",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Domonque Barnett",
    text: "I am a repeat customer. They did my windows and my driveway. Showed up on time, they always do very good work everytime they come to my residence. Also, they gave me an estimate for deck staining.",
    service: "Window Cleaning",
    source: "Google",
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
    name: "brian pelt",
    text: "Very professional and the work was amazing. My home looks great following their power-washing application. I highly recommend them to anyone who needs this service!",
    service: "House Washing",
    source: "Google",
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
    name: "Missy H.",
    text: "Juan was absolutely amazing from 1st phone call to follow up. He was so professional and easy to communicate with, they were on time and did an amazing job. I feel he went above satisfactory and truly cared to complete job with excellence...",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Derek Montgomery",
    text: "Wow, what a difference when they were done. $135 to clean 15x35' patio, it costs $100 just to rent a pressure washer.",
    service: "Patio & Deck",
    source: "Google",
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
    name: "Sandra B.",
    text: "Juan and Eric arrived right on time. They worked extremely well together and got right to work. They were professional, friendly, conscientious, hard-working, and paid attention to detail. They went above and beyond...",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "HighbanksHills",
    text: "It's very rare nowadays that you run into such a great company as are you washed pressure washing. On time...",
    service: "Pressure Washing",
    source: "Google",
    rating: 5,
  },
  {
    name: "James H.",
    text: "Juan was awesome to work with!!!! Did a GREAT job! Will call back when I need power washing in the future!",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Judith Z.",
    text: "From my first contact with Juan, I was impressed with his professionalism. He was extremely accommodating, friendly and very punctual. He took great care when power washing our house not to hurt our flower beds. His quality of work was amazing! Our house never looked better!...",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Allan Hoover",
    text: "Very friendly and punctual. They explained everything they were going to do. Would use this company again.",
    service: "Pressure Washing",
    source: "Google",
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
    name: "Marilyn K.",
    text: "Juan and his team worked in oppresive heat and still got the job done. Would I hire them again? Yes! I didn't know and didn't think to ask is about getting some of the black lines off the gutters from gutter overflow. That's a separate request/charge. I'll be sure to ask next time. Very professional. Thank you!",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Alisa Peskin-Shepherd",
    text: "This is a very professional and attentive company. Juan responded promptly to my request for a quote and fit me into...",
    source: "Google",
    rating: 5,
  },
  {
    name: "Toni C.",
    text: "These guys did an amazing job and were very professional, reasonably priced and respectful! I will hire them again when it's time to clean our windows, and will be using them to power wash our home in the spring.",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Nancy P.",
    text: "This company was very professional and did a great job on power washing my home, deck and cleaning my windows. The gentlemen were very polite and friendly.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Janet",
    text: "Juan and his crew did an awesome job! We had our patio and pavers power washed and all our windows Inside and out...",
    service: "Patio & Deck",
    source: "Google",
    rating: 5,
  },
  {
    name: "Jessie S.",
    text: "The guys were super nice and worked really hard to get my house as clean as possible. They took into consideration my plants and the neighborhood cats that hang out sometimes too. Everything went great & if I were to need something pressure washed in the future, I would definitely call them.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Eric S.",
    text: "Juan and his guys did a great power washing my large deck and garage. Plan to hire them again and highly recommend",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Cheryl Ash",
    text: "Very friendly and professional..would highly recommend if you need your windows washed.",
    service: "Window Cleaning",
    source: "Google",
    rating: 5,
  },
  {
    name: "Jason P.",
    text: "The team was great from start to finish. Great communication leading up to my service. They showed up when they said they would and did a great job for a very reasonable price. I will absolutely call them back when i need more power washing or exterior cleaning done.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Audrey R.",
    text: "Wow great team; friendky & good communication, knew exactly what to expect & when. House, sidewalk & deck all sparkling. They also added an extra job at last minute. They were efficient and put everything back in place. Highly recommend!",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Kathryn Steenbergh",
    text: "I was so impressed with the 2 window washing jobs and the power washing of the cement patio that I hired this company to...",
    service: "Window Cleaning",
    source: "Google",
    rating: 5,
  },
  {
    name: "Chery K.",
    text: "Juan and Tony are awesome. Very hardworking guys and friendly. If you need your house and cement power washed... i highly recommend Are You Washed Pressure Washing, LLC.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Nancy D.",
    text: "Price was great, clean up was great and Juan was a very polite, accommodating and did an excellent job! I recommend them highly !",
    service: "Gutter Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Joyce Rounsaville",
    text: "Very pleasant experience this company does a great job. Will recommend to others.",
    source: "Google",
    rating: 5,
  },
  {
    name: "Jason B.",
    text: "Great company to work with. Very customer service oriented and a pleasure to work with. Did a great job cleaning my driveway and vinyl siding. Highly recommend this company.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Richard R.",
    text: "I highly recommend this business. The service was scheduled within 2 days. Arrived on time, super professional and the deck looks great!! Price was excellent as well.",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "marianna luna",
    text: "These guys are awesome !!! Theyre very professional, on time and such gentlemen. I am disabled and they gave me a...",
    source: "Google",
    rating: 5,
  },
  {
    name: "Ken W.",
    text: "They had the most impressive work ethic and competed the job with extreme care and commitment. I will hire them again and recommend them to anyone who is in need of their services.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Martha G.",
    text: "Very pleased with the results. They arrived right on time on the day I wanted the work done. Were very polite and hard-working and were very thorough. I would definitely recommend this company.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Mark Christina",
    text: "The team was here on time, Was fair priced, and did an amazing job.",
    source: "Google",
    rating: 5,
  },
  {
    name: "J B.",
    text: "Extremely responsive from initial contact. Courteous, professional, and resonsonably priced. Explained every step of process thoroughly and over delivered upon completion of job. Highly recommend!",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Jeffrey S.",
    text: "Great company and great Service. I was really impressed with the quality of the job and the professionalism of the company. I would highly recommend them.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Dianna Skvarce",
    text: "Great crew from beginning to end. All my neighbors are asking about your company....",
    source: "Google",
    rating: 5,
  },
  {
    name: "Frank Z.",
    text: "Showed up on time. Did an excellent job. Very courteous. Wanted to make sure I was happy with their work (which I was).",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Dennis T.",
    text: "Jaun and crew were the best. They are very professional, asked me if there were any issues before the job. We work around when the was done. Great job. I will tell my friends.",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Lesa Pyle",
    text: "We had some mold on the outside of our house. Are you washed pressure washing cleaned my vinyl siding. It now looks...",
    service: "House Washing",
    source: "Google",
    rating: 5,
  },
  {
    name: "Selena D.",
    text: "Excellent customer service. Great job and very professional. They also took the time to explain areas of concern and the process to get the job done. I am very satisfied with results and would definitely recommend.",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Greta A.",
    text: "excellent job, professional, on time, courteous . very pleased , affordable. Power washed deck and deck around pool. will definitely recommend. Contracting to also power wash driveway and walkway",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Chas G",
    text: "They were polite, professional, and did a great job...",
    source: "Google",
    rating: 5,
  },
  {
    name: "Greta A.",
    text: "very professional,on time great job power washing deck and pool deck, very thorough . I am very satisfied with results and will definitely recommend. also contracting them to return to power wash driveway and walkway. Pleased that they were affordable.",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "William S.",
    text: "They did get the job done and they did an excellent job and I would recommend them to for anyone who want good service. They were polite and kind and professional pricing was great.",
    service: "Gutter Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Anthony",
    text: "Very pleased with there work. Professional and on time. I definitely would recommend them.",
    source: "Google",
    rating: 5,
  },
  {
    name: "Charles G.",
    text: "They were polite, professional, and they did an excellent job for a fair price",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Jean E.",
    text: "Very pleasant, professional and did a great job! I am so happy with the service, highly recommended.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sharon Caldwell",
    text: "I was very pleased with the work and professionalism from this company. They power washed my garage and siding.Did a excellent job done in a very timely manner. I would highly recommend this company.",
    service: "House Washing",
    source: "Google",
    rating: 5,
  },
  {
    name: "Erika D.",
    text: "Amazing service! Timely, very communicative and efficient. I will definitely use them again and refer them to others!",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Rosalind H.",
    text: "They were very professional and did an excellent job. I would definitely recommend their service",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sarah Paric",
    text: "Honest and reliable. Great workers and workmanship!",
    source: "Google",
    rating: 5,
  },
  {
    name: "Carol D.",
    text: "They did an exceptional job. My deck looks amazing.",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Praveen P.",
    text: "Good price, polite people and honest service. Definitely recommend them",
    service: "Gutter Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Vito Ventimiglia",
    text: "Juan & Company Did A Excellent Job! Would Highly Recommend.",
    source: "Google",
    rating: 5,
  },
  {
    name: "Terry L.",
    text: "They were very polite, and very reasonable. They also did a great job would recommend anybody.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Nancy E.",
    text: "Excellent company. Did everything they promised. Very conscientious.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Betty Caldwell",
    text: "Very professional and efficient. Did a house wash and they did my driveway as a courtesy. Would definitely recommend their services.",
    service: "House Washing",
    source: "Google",
    rating: 5,
  },
  {
    name: "Ann H.",
    text: "Very professional, on time, great job power-washed my driveway and garage was extremely pleased, affordable will use again.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Derek M.",
    text: "What a difference in how our patio looks, I'm trying to add B4 and after pix. All for $135. Costs $100 just rent a power washer.",
    service: "Patio & Deck",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Eric Hefling",
    text: "Very professional and work hard exceeded all my expectations",
    source: "Google",
    rating: 5,
  },
  {
    name: "Linda F.",
    text: "Very professional and takes pride in his work.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Michelle H.",
    text: "The guys who came to power wash were polite and professional. They wanted to make sure I was a happy customer before leaving the job site.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sis Royalty",
    text: "I had a great experience with this company. Over the summer they had done an excellent job! Their efficiency and hard work ethic is worth every penny.",
    source: "Google",
    rating: 5,
  },
  {
    name: "Corey A.",
    text: "They were timely. They came to the work side on time and cleaned up after they were finished.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Rapheal B.",
    text: "Excellent service, very professional",
    service: "Gutter Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "J RAY",
    text: "The Men of \"Are You Washed Pressure Washing\" far exceed the expectation of their clients. Very attention detailed and...",
    source: "Google",
    rating: 5,
  },
  {
    name: "Henry O.",
    text: "good job and great customer service",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "John C.",
    text: "Great job! Fair price, Would recommend to anyone.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "robert davis",
    text: "Very professional and the work was great",
    source: "Google",
    rating: 5,
  },
  {
    name: "Daniel M.",
    text: "Great Job from Juan",
    service: "Gutter Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Michelle H.",
    text: "They were very professional and friendly.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Jackie S.",
    text: "If you want a 5 star company hire them. Awesome customer service too!",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Vito V.",
    text: "Excellent Job ! Would Highly Recommend",
    service: "Commercial",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Anthony M.",
    text: "Very professional, on time the work was excellent . I recommend them to severe friends.",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Peggy B.",
    text: "A wonderful job. Very business like.",
    service: "Window Cleaning",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Paula B.",
    text: "Very helpful, professional and informative.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Jerry C.",
    text: "Great job at great price$",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Jerry C.",
    text: "Great job! And Great price",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "John A.",
    text: "Wonderful work",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Truman H.",
    text: "Great Experience!",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Mary S.",
    text: "They did a great job.",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Sharon R.",
    text: "Great, coming back for more cleaning.",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Paula L.",
    text: "Very happy with results.",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Patricia C.",
    text: "They were great",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Raymond D.",
    text: "Great job!",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Robert D.",
    text: "Great job",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Michael C.",
    text: "Good job",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
  {
    name: "Merk S.",
    text: "A+",
    service: "Pressure Washing",
    source: "Angi",
    rating: 5,
  },
];

// Homepage strip: 9 Google + 9 Angi, staggered.
export const featuredReviews: Review[] = (() => {
  const g = reviews.filter((r) => r.source === "Google").slice(0, 9);
  const a = reviews.filter((r) => r.source === "Angi").slice(0, 9);
  const out: Review[] = [];
  for (let i = 0; i < 9; i++) { if (g[i]) out.push(g[i]); if (a[i]) out.push(a[i]); }
  return out;
})();


// Quote form service options
export const quoteServices = services.map((s) => s.name).concat(["Multiple Services", "Other / Not Sure"]);

// External proof links
export const externalLinks = {
  angi: "https://www.angi.com/companylist/us/mi/macomb/are-you-washed-pressure-washing-llc-reviews-1.htm",
  homeadvisor: "https://www.homeadvisor.com/rated.AreYouWashedPressure.136540417.html",
};

// Finished results gallery (afters only). Add more by appending here.
export type Result = { image: string; label: string; alt?: string };
export const results: Result[] = [
  { image: "/images/house-after.jpg", label: "House Washing", alt: "Freshly pressure washed home exterior in Macomb, MI" },
  { image: "/images/driveway-clean.jpg", label: "Driveway Cleaning", alt: "Clean driveway after pressure washing in Metro Detroit" },
  { image: "/images/patio-after.jpg", label: "Patio & Deck", alt: "Patio and deck restored by pressure washing in Macomb, MI" },
  { image: "/images/walkway-after.jpg", label: "Paver Walkway", alt: "Clean paver walkway after pressure washing in Metro Detroit" },
  { image: "/images/balustrade-after.jpg", label: "Porch & Balustrade", alt: "Soft washed porch and balustrade in Macomb, MI" },
  { image: "/images/driveway-house.jpg", label: "Driveway & Entry", alt: "Pressure washed driveway and home entry in Metro Detroit" },
  { image: "/images/commercial-1.jpg", label: "Commercial Exterior", alt: "Commercial building exterior pressure washed in Macomb, MI" },
  { image: "/images/commercial-door.jpg", label: "Storefront", alt: "Clean storefront entrance after pressure washing in Metro Detroit" },
  { image: "/images/commercial-2.jpg", label: "Commercial", alt: "Commercial property pressure washed in Macomb, MI" },
];
