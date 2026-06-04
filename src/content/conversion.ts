import { primaryCta, secondaryCta } from "@/content/cta";

/** Site-wide marketing copy — final client-facing text */

export const heroSubline =
  "Premium social posts, reels, and branding for Indian travel agencies — creative built to turn scrolls into WhatsApp inquiries.";

export const trustBarMetric =
  "Helping 15+ travel brands grow organic reach — creative built to drive inquiries.";

export const heroCtas = {
  primary: {
    label: primaryCta.label,
    href: primaryCta.href,
  },
  secondary: secondaryCta,
} as const;

export const studioSnapshot = {
  rating: "4.9 Google-rated · Trusted by travel teams across India",
  heading: "Your Creative Engine",
  rows: [
    {
      label: "Workflow",
      title: "Content on autopilot",
      detail: "weekly delivery + effortless approvals",
    },
    {
      label: "Channels",
      title: "Instagram Reels-first",
      detail: "optimized for IG, YT Shorts & WhatsApp",
    },
    {
      label: "Deliverables",
      title: "High-impact assets",
      detail: "posts, viral scripts & motion flyers",
    },
  ],
  quoteBefore: "We don't do generic templates — we build a visual language that feels like ",
  quoteEmphasis: "YOUR",
  quoteAfter: " brand — then ship it consistently.",
  attribution: {
    name: "Dhruvdev Patel",
    role: "Founder & Creative Director",
  },
} as const;

export const categoryNavCopy = {
  title: "Browse our work",
  subtitle: "Tap a category — jump straight to real projects.",
  seeAllWork: "Open full portfolio",
  seeAllHref: "/portfolio",
} as const;

export const homePortfolioCopy = {
  eyebrow: "Portfolio",
  headline: "Work that drives results.",
  subheadline:
    "Recent work for travel agencies, tour operators, and DMCs — tap a category for more.",
  cta: "Open full portfolio",
  ctaHref: "/portfolio",
} as const;

export const conversionTrustPoints = [
  {
    title: "Built for travel brands",
    body: "Reels, carousels, and branding tuned for agencies and DMCs — not generic templates.",
  },
  {
    title: "Fast on WhatsApp",
    body: "Share your route, dates, and offer — we reply with next steps and timelines fast.",
  },
  {
    title: "Clear monthly plans",
    body: "Know exactly how many posts, reels, and ads you get — pause anytime.",
  },
] as const;

export const homePricingCopy = {
  retainers: {
    eyebrow: "Monthly retainers",
    headline: "Predictable content. Unstoppable growth.",
    subheadline: "Travel-focused plans with clear deliverables every month.",
  },
  branding: {
    eyebrow: "Brand identity",
    headline: "Brand identity built exclusively for travel.",
    subheadline:
      "Strategic visual identity for travel agencies, tour operators, DMCs, and adventure brands.",
  },
  trustNote: "No long-term contracts. Pause or cancel anytime.",
} as const;

export const finalCta = {
  headline: "Ready to elevate your travel brand?",
  subheadline: "Get a free sample design — see the quality before you commit.",
} as const;

export const conversionGuarantee = {
  eyebrow: "Zero-risk start",
  headline: "Try before you retainer.",
  subheadline:
    "We know travel owners need proof, not promises. Every new client starts with clarity — not a long contract.",
  points: [
    {
      title: "Free sample first",
      body: "Send your route or offer on WhatsApp. We reply with a sample post or reel frame so you can judge quality live.",
    },
    {
      title: "48-hour kickoff",
      body: "Once you pick a plan, your first content batch is scoped within two business days — no ghosting, no chasing.",
    },
    {
      title: "Pause anytime",
      body: "Monthly retainers have no lock-in. Pause when season is slow; resume when campaigns heat up.",
    },
  ],
} as const;

export const homeMasonryCopy = {
  eyebrow: "Featured work",
  headline: "Proof you can feel in 10 seconds.",
  subheadline: "Hover reels to preview motion. Tap portfolio for the full library.",
  cta: "See full portfolio",
  ctaHref: "/portfolio",
} as const;

/** Legacy aliases */
export const ctaLeadMagnetLabel = primaryCta.label;
export const ctaLeadMagnetLabelShort = "Free sample";

export const problemSolutionSection = {
  eyebrow: "The AlphaX difference",
  headline: "Stop settling for generic. Start converting.",
  intro:
    "Most travel brands are losing bookings to poor design and inconsistent content. AlphaX fixes that with a travel-first system built to convert.",
  tagline: "Your brand deserves content that works as hard as you do.",
  oldWay: {
    label: "The old way",
    points: [
      "Generic freelancers who don't understand DMC workflows",
      "Inconsistent posting — weeks of silence, then a burst",
      "No strategy — just pretty pictures that don't convert",
      "Chasing freelancers for revisions and missed deadlines",
      "Starting from scratch every season",
    ],
  },
  alphaXWay: {
    label: "The AlphaX way",
    points: [
      "Travel-only studio — we speak fluent itinerary and seat-selling",
      "Weekly batches delivered on schedule, every month",
      "Content built around your offers, routes, and booking triggers",
      "One point of contact, fast WhatsApp replies, zero chasing",
      "Brand templates and automation you own and reuse",
    ],
  },
} as const;
