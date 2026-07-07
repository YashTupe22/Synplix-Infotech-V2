export interface Service {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  focus: string[];
  deliverables: string[];
  stack: string[];
  accent: string;
}

export const services: Service[] = [
  {
    slug: "custom-web-apps",
    title: "Custom Web Applications",
    tagline: "Full-stack web products built for speed, scale and long-term maintainability.",
    summary:
      "We design and build custom web applications end-to-end — from product discovery and architecture through to production deployment with tests, CI and clear handover documentation.",
    focus: [
      "Product discovery and technical scoping",
      "UI systems and reusable component libraries",
      "APIs, authentication and data layers",
      "Performance budgets and caching",
      "Deployment pipelines and production readiness",
    ],
    deliverables: [
      "Roadmap and architecture document",
      "UI kit and responsive screens",
      "Production codebase with tests and CI",
      "Handover documentation and knowledge transfer",
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    accent: "hsl(72, 100%, 58%)",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "Multi-tenant SaaS platforms with billing, auth, analytics and admin tooling.",
    summary:
      "We ship SaaS products that are ready for real customers — tenants, roles, subscriptions, usage metering, audit trails and the admin console your team needs to actually operate the business.",
    focus: [
      "Tenant model and role design",
      "Security boundaries and isolation",
      "Subscriptions, usage metering and invoicing",
      "Analytics and audit trails",
      "Admin dashboards for support, billing and configuration",
    ],
    deliverables: [
      "Tenant and billing design",
      "Customer app and admin console",
      "Integration guides for SSO and webhooks",
      "Operational runbooks",
    ],
    stack: ["Next.js", "PostgreSQL", "Stripe", "Auth systems", "AWS"],
    accent: "hsl(200, 90%, 60%)",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    tagline: "Workflows and integrations that cut manual work across your internal systems.",
    summary:
      "We map the systems you already use, then wire them together with reliable integrations, background jobs, queues and monitoring — so your team stops copy-pasting between tools.",
    focus: [
      "System and data-flow mapping",
      "API and webhook integrations",
      "Idempotent background jobs",
      "Retries, queues and alerting",
      "Dashboards and Slack/email notifications",
    ],
    deliverables: [
      "Integration architecture and SLAs",
      "Automation workflows with monitoring",
      "Documentation for IT and business users",
      "Runbooks and escalation paths",
    ],
    stack: ["Node.js", "REST APIs", "Webhooks", "Queues", "PostgreSQL"],
    accent: "hsl(28, 95%, 60%)",
  },
  {
    slug: "content-systems",
    title: "Content Systems",
    tagline: "Structured content and growth-ready pages for marketing and product teams.",
    summary:
      "Content models, CMS setup, SEO-ready templates and publishing workflows — so your team can ship pages that convert without touching code every time.",
    focus: [
      "Content models and CMS setup",
      "SEO-ready pages and metadata",
      "Internal linking patterns",
      "Copywriting and conversion-focused layouts",
      "Publishing workflows, approvals and analytics",
    ],
    deliverables: [
      "Content strategy brief and information architecture",
      "CMS configuration and templates",
      "Page copy and component guidelines",
      "Publishing checklist and analytics hooks",
    ],
    stack: ["Next.js", "Headless CMS", "SEO tooling", "Analytics"],
    accent: "hsl(320, 70%, 62%)",
  },
];

export const process = [
  { n: "01", title: "Discovery & strategy", body: "We map goals, users, constraints and success metrics before writing a line of code." },
  { n: "02", title: "Design & prototyping", body: "Information architecture, UI systems and interactive prototypes to de-risk decisions." },
  { n: "03", title: "Development", body: "Iterative delivery in short cycles with a working preview environment from week one." },
  { n: "04", title: "Testing & QA", body: "Automated tests, cross-device QA and performance budgets before anything ships." },
  { n: "05", title: "Launch & deployment", body: "Production rollout with monitoring, analytics and rollback playbooks in place." },
  { n: "06", title: "Support & growth", body: "Ongoing support, iterations and roadmap work as your product and traffic grow." },
];

export const timelines = [
  { label: "Marketing website", value: "2–4 weeks" },
  { label: "MVP web app", value: "6–8 weeks" },
  { label: "Full SaaS platform", value: "10–16 weeks" },
  { label: "Proposal turnaround", value: "48 hours" },
];
