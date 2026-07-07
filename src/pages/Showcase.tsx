import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const projects = [
  {
    title: "Synplix SaaS",
    category: "SaaS Platform",
    description: "Our flagship multi-workspace management platform with billing, workspace analytics, and real-time collaboration tools. Currently in beta.",
    metrics: [
      { label: "Status", value: "Beta" },
      { label: "Type", value: "SaaS" },
      { label: "Stack", value: "Full-stack" },
    ],
    href: "https://saas.synplixinfotech.in",
    featured: true,
  },
  {
    title: "Applix Wear",
    category: "E-Commerce",
    description: "Minimalist apparel e-commerce platform with product catalog, cart, checkout, and inventory management for a direct-to-consumer fashion brand.",
    metrics: [
      { label: "Type", value: "Shopify" },
      { label: "Vertical", value: "Fashion" },
      { label: "Platform", value: "D2C" },
    ],
    href: "https://www.applixwear.shop/",
  },
  {
    title: "CASE",
    category: "Web Platform",
    description: "Student portfolio showcase platform — Code, Access, Share, Everywhere. Enables students across all streams to build professional profiles and share them with recruiters.",
    metrics: [
      { label: "Status", value: "Public Beta" },
      { label: "Type", value: "Portfolio" },
      { label: "Audience", value: "Students" },
    ],
    href: "https://caseopensource.vercel.app/",
  },
  {
    title: "The Black Sheep Bistro",
    category: "Restaurant Website",
    description: "Full-featured restaurant website for a Goa-based bistro with menu management, table reservations, reviews, and seasonal content — locally sourced, globally inspired.",
    metrics: [
      { label: "Location", value: "Goa" },
      { label: "Features", value: "Menu + Booking" },
      { label: "Since", value: "2014" },
    ],
    href: "https://tbsb.synplixinfotech.in/",
  },
  {
    title: "RMDIOT",
    category: "Educational Institution",
    description: "Complete institutional website for Rasiklal M. Dhariwal Institute of Technology — admissions, departments, placements, faculty, and events management.",
    metrics: [
      { label: "Departments", value: "5" },
      { label: "Recruiters", value: "50+" },
      { label: "Since", value: "1998" },
    ],
    href: "https://rmdiot-test.vercel.app/",
  },
  {
    title: "Amora Café",
    category: "Café & Dining",
    description: "Immersive café website with digital menu, online ordering, table reservations, gallery, and location-based delivery for a premium Pune café experience.",
    metrics: [
      { label: "Rating", value: "4.9★" },
      { label: "Reviews", value: "200+" },
      { label: "Location", value: "PCMC, Pune" },
    ],
    href: "https://amora.synplixinfotech.in/",
  },
];

const Showcase = () => {
  return (
    <Layout variant="light">
      <SEO
        title="Showcase — Selected Work & Case Studies | Synplix Infotech"
        description="A selection of SaaS platforms, e-commerce stores, restaurant websites, educational portals and web apps we've shipped for clients."
        path="/showcase"
      />
      <div className="bg-background text-foreground min-h-screen">
        <section className="container pt-40 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Showcase</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-6">
            Selected work<br />across products and web.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A snapshot of what we've shipped — SaaS platforms, e-commerce stores, restaurant sites, educational portals, and internal automation.
          </p>
        </section>

        <section className="container pb-24 border-t border-foreground/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((item) => {
              const Card = (
                <div className={`group rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 h-full flex flex-col transition-colors hover:bg-foreground/[0.04] ${item.featured ? "ring-1" : ""}`}
                  style={item.featured ? { borderColor: "hsl(var(--accent-lime))", boxShadow: "0 0 0 1px hsl(var(--accent-lime))" } : undefined}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-2">{item.category}</p>
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{item.title}</h3>
                    </div>
                    <span className="text-foreground/30 group-hover:text-foreground transition-colors" aria-hidden>↗</span>
                  </div>
                  <p className="text-foreground/60 mb-8 flex-1">{item.description}</p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-foreground/10">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-lg font-medium tracking-tight">{m.value}</p>
                        <p className="text-xs text-foreground/40 uppercase tracking-wider">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </a>
              );
            })}
          </div>
        </section>

        <section className="container py-24 border-t border-foreground/10 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Have a project in mind?</h2>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            Book a free 30-minute strategy call. Written proposal in 48 hours.
          </p>
          <a
            href="mailto:outreach@synplixinfotech.in"
            className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
          >
            Start a project →
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default Showcase;
