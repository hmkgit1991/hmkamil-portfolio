export const site = {
  name: "H.M. Kamil",
  shortName: "Kamil",
  role: "GTM, sales operations, and live commerce",
  location: "Dhaka, Bangladesh",
  availability: "Immediate",
  email: "hmkamil2026@gmail.com",
  phoneDisplay: "+880 1771 044422",
  phoneHref: "tel:+8801771044422",
  linkedin: "https://www.linkedin.com/in/hm-kamil",
  linkedinHandle: "linkedin.com/in/hm-kamil",
  education: "BBA Marketing, Independent University Bangladesh, 2015",
  languages: ["Bengali", "English", "Hindi"],
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "10,000+", label: "outbound emails per campaign cycle" },
  { value: "3–4%", label: "positive reply rate on that send" },
  { value: "11", label: "concurrent international SDR accounts" },
  { value: "~24", label: "people in the SDR cluster" },
] as const;

export type ProjectCategory =
  | "E-commerce"
  | "GTM"
  | "Operations"
  | "Personal";

export const categories: Array<"All" | ProjectCategory> = [
  "All",
  "E-commerce",
  "GTM",
  "Operations",
  "Personal",
];

export type Project = {
  id: string;
  number: string;
  title: string;
  client?: string;
  employer?: string;
  category: ProjectCategory;
  year: string;
  role: string;
  summary: string;
  hover: string;
  bullets: string[];
  href?: string;
  hrefLabel?: string;
  named: boolean;
  cover: "rex" | "sports" | "outbound" | "cluster" | "canvas" | "content";
};

export const projects: Project[] = [
  {
    id: "trex",
    number: "01",
    title: "T-Rex Michigan",
    client: "T-Rex Michigan",
    category: "E-commerce",
    year: "Sep 2026",
    role: "E-commerce, GTM & AI Automation Consultant",
    summary:
      "A live kids dinosaur apparel shop, built end to end from concept to production.",
    hover:
      "Storefront, inventory, auth, admin, and production infra for a Michigan kids line. The shop is live, not a mock.",
    bullets: [
      "Built the customer-facing storefront, product showcases, accounts, and inventory workflows.",
      "Designed role-based admin so day-to-day ops and access sit in one system.",
      "Took the stack from development to a live production environment.",
      "Now wiring AI-assisted marketing for organic, paid, content, and scheduling.",
      "Independent client. One month in. The site already ships.",
    ],
    href: "https://trexmichigan.com",
    hrefLabel: "trexmichigan.com",
    named: true,
    cover: "rex",
  },
  {
    id: "trsports",
    number: "02",
    title: "TRSportS",
    client: "TRSportS",
    category: "E-commerce",
    year: "Sep 2026",
    role: "Senior E-commerce Growth & Marketing Automation",
    summary:
      "Powersports aftermarket. B2C store plus a B2B wholesale lane for large-quantity buyers.",
    hover:
      "Marketing automation, paid and organic, and wholesale outreach for ATV, UTV, and dirt bike parts.",
    bullets: [
      "Growth and automation for a live Michigan powersports retailer (trsports.org).",
      "B2C acquisition plus B2B wholesale process for bulk buyers.",
      "AI-assisted workflows for social, paid media, content, and campaign ops.",
      "Independent client. Same one-month window as T-Rex. Named because the work is mine.",
    ],
    href: "https://trsports.org",
    hrefLabel: "trsports.org",
    named: true,
    cover: "sports",
  },
  {
    id: "outbound",
    number: "03",
    title: "Outbound engine",
    employer: "Ta-ask",
    category: "GTM",
    year: "2024 – 2026",
    role: "Assistant Manager, Inside Sales and Operations",
    summary:
      "An AI-assisted outbound GTM engine. SaaS sales motion. Volume with a real reply rate.",
    hover:
      "About 10,000 emails per campaign cycle. 3 to 4 percent replies. ICP, messaging, and multi-channel follow-up.",
    bullets: [
      "Outbound on unpaid and free-tier apps. That send did not run on paid enterprise Apollo.",
      "10,000+ emails per campaign cycle. 3 to 4 percent reply rate.",
      "ICP, positioning, and multi-channel follow-up: email, LinkedIn, WhatsApp, calls.",
      "SaaS outbound for employer clients, including kiosk hardware alongside SaaS on at least one account. Names stay off.",
      "Multi-LLM research and drafts as a working habit, not a costume.",
    ],
    named: false,
    cover: "outbound",
  },
  {
    id: "cluster",
    number: "04",
    title: "SDR cluster delivery",
    employer: "Growthonics",
    category: "Operations",
    year: "2020 – 2023",
    role: "Cluster Head, SDR Team",
    summary:
      "Outsourced SDR delivery. A BPO for sales functions, run as a cluster across concurrent international accounts.",
    hover:
      "Led a cluster across 11 concurrent international accounts and around 24 people. QA, allocation, reporting.",
    bullets: [
      "Growthonics is outsourced SDR delivery: BPO for sales functions.",
      "Led a cluster across 11 concurrent international accounts, mostly US and UK, some Australia and Canada.",
      "Around 24 people delivering outbound. Work quality and client communications sat with me.",
      "QA, allocation, delivery timelines, and reporting at the same time.",
      "Account names stay off this site. The operating model is what I can show.",
    ],
    named: false,
    cover: "cluster",
  },
  {
    id: "canvas",
    number: "05",
    title: "Aura Canvas",
    category: "Personal",
    year: "2026",
    role: "Product build",
    summary:
      "A visual collaboration app. Built with AI assistance to see whether the idea would hold.",
    hover:
      "Personal product. Visual collab. Nights-and-weekends, AI in the loop, then the same muscle goes into client work.",
    bullets: [
      "Summer 2026 personal build. AI-assisted. Not a coding practice site.",
      "Visual collaboration surface, not a client deliverable.",
      "Part of how I work: wire it, break it, keep what survives.",
    ],
    named: false,
    cover: "canvas",
  },
  {
    id: "content",
    number: "06",
    title: "Content factory",
    category: "Personal",
    year: "2025 – 2026",
    role: "Automation and knowledge base",
    summary:
      "A content and knowledge-base engine for a family food and lifestyle channel.",
    hover:
      "Scheduling, drafts, and a living knowledge base. Same unpaid-tool habit, pointed at content instead of outbound.",
    bullets: [
      "Family food and lifestyle channel. I built the automation and the knowledge base.",
      "Not a co-founded agency. Not a client logo wall.",
      "The point is the factory: drafts, scheduling, and a base that compounds.",
    ],
    named: false,
    cover: "content",
  },
];

export const employers = [
  {
    org: "T-Rex Michigan",
    title: "E-commerce, GTM & AI Automation Consultant",
    dates: "Sep 2026 – Present",
    place: "Michigan, US · Remote · Contract",
    note: "Independent client. Live shop.",
  },
  {
    org: "TRSportS",
    title: "Senior E-commerce Growth & Marketing Automation",
    dates: "Sep 2026 – Present",
    place: "Michigan, US · Remote · Contract",
    note: "Independent client. Live shop.",
  },
  {
    org: "Ta-ask",
    title: "Assistant Manager, Inside Sales and Operations",
    dates: "Dec 2024 – Jul 2026",
    place: "Dhaka · On-site",
    note: "BPO and managed services. SaaS outbound. Client names withheld.",
  },
  {
    org: "SalesCaptain",
    title: "Sales & Operations Team Lead",
    dates: "Aug 2023 – Apr 2024",
    place: "On-site",
    note: "SDR and analyst delivery. Client names withheld.",
  },
  {
    org: "Growthonics",
    title: "Cluster Head, SDR Team",
    dates: "Jun 2020 – Apr 2023",
    place: "Dhaka · On-site",
    note: "Outsourced SDR delivery. 11 concurrent accounts. Around 24 people.",
  },
  {
    org: "Taskeater",
    title: "Analyst",
    dates: "Nov 2018 – Nov 2019",
    place: "Dhaka · On-site",
    note: "Account ops, reporting, delivery.",
  },
];

export const skillGroups = [
  {
    title: "Go-to-market",
    items: [
      "ICP and personas",
      "Positioning and messaging",
      "Multi-channel outbound",
      "Pipeline and reporting",
      "Inside sales operations",
    ],
  },
  {
    title: "Operations",
    items: [
      "SDR cluster leadership",
      "QA on outbound work",
      "Client onboarding",
      "Delivery across concurrent accounts",
      "BPO for sales functions",
    ],
  },
  {
    title: "Sales tools",
    items: [
      "Clay",
      "Apollo",
      "Smartlead",
      "Lemlist",
      "Instantly",
      "LinkedIn Sales Navigator",
      "HeyReach",
      "HubSpot",
    ],
  },
  {
    title: "Automation",
    items: [
      "Claude Code",
      "Codex",
      "n8n",
      "AI-assisted campaign ops",
      "Multi-LLM research and drafts",
      "I run the system. AI writes the glue.",
    ],
  },
];

export const tools = [
  "Clay",
  "Apollo",
  "Smartlead",
  "Lemlist",
  "Instantly",
  "LinkedIn Sales Navigator",
  "HeyReach",
  "HubSpot",
  "Claude Code",
  "Codex",
  "n8n",
];
