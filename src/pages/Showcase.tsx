import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const showcaseItems = [
  {
    title: "Synplix Workspace",
    category: "SaaS Platform",
    description: "Our flagship multi-tenant SaaS product with billing, workspace management, and real-time analytics.",
    metrics: [
      { label: "MRR", value: "$24.8K" },
      { label: "Users", value: "2,847" },
      { label: "Latency", value: "48ms" },
    ],
    href: "https://saas.synplixinfotech.in",
    external: true,
  },
  {
    title: "Custom web application",
    category: "Web App",
    description: "Full-stack React + Node.js product built for a growing SMB in the logistics space. Delivered in 8 weeks.",
    metrics: [
      { label: "Timeline", value: "8 wks" },
      { label: "Uptime", value: "99.9%" },
      { label: "TTFB", value: "120ms" },
    ],
  },
  {
    title: "Marketing website + CMS",
    category: "Website",
    description: "Content-driven marketing site with a headless CMS, custom animations, and 95+ Lighthouse scores.",
    metrics: [
      { label: "Lighthouse", value: "98" },
      { label: "Pages", value: "22" },
      { label: "Load", value: "1.1s" },
    ],
  },
  {
    title: "Business automation suite",
    category: "Automation",
    description: "Internal workflow automation reducing manual ops work by ~60% across sales, billing, and support teams.",
    metrics: [
      { label: "Time saved", value: "60%" },
      { label: "Integrations", value: "9" },
      { label: "APIs", value: "12" },
    ],
  },
];

const Showcase = () => {
  return (
    <Layout variant="light">
      <div className="bg-white text-black min-h-screen">
        <section className="container pt-40 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Showcase</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-6">
            Selected work<br />across products and web.
          </h1>
          <p className="text-lg text-black/60 max-w-2xl">
            A snapshot of what we've shipped — SaaS platforms, custom web apps, marketing sites, and internal automation.
          </p>
        </section>

        <section className="container pb-24 border-t border-black/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseItems.map((item) => {
              const Card = (
                <div className="group rounded-2xl border border-black/10 bg-black/[0.02] p-8 h-full flex flex-col transition-colors hover:bg-black/[0.04]">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-black/40 mb-2">{item.category}</p>
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{item.title}</h3>
                    </div>
                    {item.external && (
                      <span className="text-black/40 group-hover:text-black transition-colors" aria-hidden>↗</span>
                    )}
                  </div>
                  <p className="text-black/60 mb-8 flex-1">{item.description}</p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/10">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-lg font-medium tracking-tight">{m.value}</p>
                        <p className="text-xs text-black/40 uppercase tracking-wider">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {Card}
                </a>
              ) : (
                <div key={item.title}>{Card}</div>
              );
            })}
          </div>
        </section>

        <section className="container py-24 border-t border-black/10 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Have a project in mind?</h2>
          <p className="text-black/60 mb-8 max-w-xl mx-auto">
            Book a free 30-minute strategy call. Written proposal in 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
          >
            Start a project →
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Showcase;
