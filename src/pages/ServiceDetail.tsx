import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const index = services.findIndex((s) => s.slug === slug);
  const next = services[(index + 1) % services.length];

  if (!service) {
    return (
      <Layout variant="light">
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <div className="text-center">
            <h1 className="text-4xl font-medium mb-4">Service not found</h1>
            <Link to="/services" className="text-foreground/60 hover:text-foreground">← All services</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout variant="light">
      <div className="bg-background text-foreground min-h-screen">
        {/* Hero */}
        <section className="relative container pt-40 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
            style={{ background: `radial-gradient(circle, ${service.accent} 0%, transparent 60%)` }}
          />
          <div className="relative">
            <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors">
              ← All services
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: service.accent }} />
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">0{index + 1} / 0{services.length}</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-foreground/60 max-w-2xl leading-relaxed">{service.tagline}</p>
          </div>
        </section>

        <div className="container">
          <div className="w-full h-px bg-foreground/10" />
        </div>

        {/* Summary */}
        <section className="container py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3">Overview</p>
          </div>
          <p className="lg:col-span-8 text-lg md:text-xl text-foreground/80 leading-relaxed">{service.summary}</p>
        </section>

        <div className="container"><div className="w-full h-px bg-foreground/10" /></div>

        {/* Focus + Deliverables */}
        <section className="container py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Key focus areas</p>
            <ul className="space-y-4">
              {service.focus.map((f) => (
                <li key={f} className="flex gap-4 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: service.accent }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Typical deliverables</p>
            <ul className="space-y-4">
              {service.deliverables.map((d, i) => (
                <li key={d} className="flex gap-4 text-foreground/80">
                  <span className="font-mono text-xs text-foreground/40 mt-1 shrink-0">0{i + 1}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="container"><div className="w-full h-px bg-foreground/10" /></div>

        {/* Stack */}
        <section className="container py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Common stack</p>
          <div className="flex flex-wrap gap-3">
            {service.stack.map((t) => (
              <span key={t} className="text-sm border border-foreground/15 rounded-pill px-4 py-2 text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* CTA + next */}
        <section className="container pb-32">
          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ backgroundColor: "hsl(var(--surface-elevated))" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Have a project like this?</h3>
              <p className="text-foreground/60">Get a written proposal within 48 hours of your call.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium shrink-0"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              Start a project →
            </Link>
          </div>

          {next && (
            <Link
              to={`/services/${next.slug}`}
              className="mt-8 group flex items-center justify-between border-t border-foreground/10 pt-8"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">Next service</span>
              <span className="text-xl md:text-2xl font-medium group-hover:translate-x-1 transition-transform">
                {next.title} →
              </span>
            </Link>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
