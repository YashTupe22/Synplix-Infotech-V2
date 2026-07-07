export type PriceValue = number | "custom";

export interface WebPlan {
  name: string;
  price: PriceValue;
  cadence: string;
  highlighted?: boolean;
  features: string[];
}

export interface ContentPlan {
  name: string;
  price: PriceValue;
  cadence: string;
  highlighted?: boolean;
  features: string[];
}

export interface SaasPlan {
  name: string;
  monthly: PriceValue;
  annual: PriceValue;
  note: string;
  highlighted?: boolean;
}

export const webpagePlans: WebPlan[] = [
  {
    name: "Starter",
    price: 8000,
    cadence: "one-time",
    features: ["Up to 5 pages", "Responsive layout", "Contact form", "Basic SEO", "1 revision round"],
  },
  {
    name: "Growth",
    price: 18000,
    cadence: "one-time",
    highlighted: true,
    features: ["Up to 15 pages", "Custom interactions", "CMS integration", "Analytics setup", "3 revision rounds"],
  },
  {
    name: "Enterprise",
    price: "custom",
    cadence: "on request",
    features: ["Unlimited pages", "Custom portals", "API integrations", "Priority support", "Dedicated PM"],
  },
];

export const contentPlans: ContentPlan[] = [
  { name: "Basic", price: 5000, cadence: "/month", features: ["8 social posts", "2 blog articles", "Caption copy", "Content calendar"] },
  { name: "Pro", price: 12000, cadence: "/month", highlighted: true, features: ["20 social posts", "4 blog articles", "Newsletter copy", "SEO optimization"] },
  { name: "Agency", price: 25000, cadence: "/month", features: ["High-output publishing", "Landing page copy", "Ad copywriting", "Weekly reporting"] },
];

export const saasPlans: SaasPlan[] = [
  { name: "Free", monthly: 0, annual: 0, note: "Forever free" },
  { name: "Starter", monthly: 499, annual: 4799, note: "Save 20% annually" },
  { name: "Pro", monthly: 999, annual: 9599, note: "Most popular", highlighted: true },
  { name: "Enterprise", monthly: 1999, annual: 19199, note: "For large teams" },
];

export const faqs = [
  { q: "How long does a typical project take?", a: "A marketing website usually takes 2–4 weeks, an MVP web app 6–8 weeks, and a full SaaS platform 10–16 weeks. We share a concrete timeline after the discovery call." },
  { q: "How do we start working together?", a: "Book a free 30-minute strategy call. Within 48 hours you'll receive a written proposal covering scope, timeline, pricing and next steps." },
  { q: "What are your payment terms?", a: "We typically ask for a 50% deposit before starting, with the balance due on completion or milestone-based. Invoices are payable within 7 business days. Prices are quoted in INR unless otherwise agreed." },
  { q: "Who owns the code and designs?", a: "Upon full payment, all custom code, designs and assets built specifically for your project are transferred to you. We retain the right to reuse general methodologies and frameworks." },
  { q: "Do you work with clients outside India?", a: "Yes. We are remote-first and regularly deliver for clients in the United States and United Kingdom alongside our India-based work." },
  { q: "Can you take over an existing product?", a: "Yes. We frequently step in as a technical partner on live products — audit, stabilise, then extend. We'll scope carefully before committing to a rewrite." },
];
