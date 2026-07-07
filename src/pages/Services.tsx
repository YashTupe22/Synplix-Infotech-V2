import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { services } from "@/data/services";

const Services = () => {
  return (
    <Layout variant="light">
      <SEO
        title="Services — Web, SaaS, Automation & Content | Synplix Infotech"
        description="Four practices built to compound: custom web development, SaaS platforms, business automation, and content systems for growing teams."
        path="/services"
      />
      <div className="bg-background text-foreground min-h-screen">
        <section className="container pt-40 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Services</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-8">
            Four practices. Built to compound.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            From a marketing site to a full multi-tenant SaaS platform — we design, build and run the systems your team depends on.
          </p>
        </section>

        <section className="container pb-32 space-y-8">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group block rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 md:p-12 hover:bg-foreground/[0.04] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 font-mono text-sm text-foreground/40">0{i + 1}</div>
                <div className="lg:col-span-6">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 flex items-center gap-3">
                    {s.title}
                    <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
                  </h2>
                  <p className="text-foreground/60 text-lg leading-relaxed max-w-xl">{s.tagline}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3">Common stack</p>
                  <div className="flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <span key={t} className="text-[11px] uppercase tracking-widest text-foreground/60 border border-foreground/15 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Services;
