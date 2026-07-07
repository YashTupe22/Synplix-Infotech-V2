import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { process, timelines } from "@/data/services";

const HowWeWork = () => {
  return (
    <Layout variant="light">
      <SEO
        title="How We Work — Our Delivery Process | Synplix Infotech"
        description="Short cycles, working previews from week one, and a support layer that follows the product into growth. Strategy, design, build, scale."
        path="/how-we-work"
      />
      <div className="bg-background text-foreground min-h-screen">
        <section className="container pt-40 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">How we work</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-6">
            A delivery model built<br />for real projects.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Short cycles, working previews from week one, and a support layer that follows the product into growth. Strategy, design, build, and scale — in that order.
          </p>
        </section>

        <section className="container py-16 border-t border-foreground/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelines.map((t) => (
              <div key={t.label} className="rounded-2xl border border-foreground/10 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-2">{t.label}</p>
                <p className="text-2xl font-medium tracking-tight" style={{ color: "hsl(var(--accent-lime))" }}>{t.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-16 border-t border-foreground/10">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-8">Six phases</p>
          <ol className="space-y-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {process.map((p) => (
              <li key={p.n} className="bg-background p-8 md:p-10 grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-2 font-mono text-sm text-foreground/40">{p.n}</div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">{p.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-6 text-foreground/70 leading-relaxed">{p.body}</div>
              </li>
            ))}
          </ol>
        </section>

        <section className="container pb-32">
          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ backgroundColor: "hsl(var(--surface-elevated))" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Ready to talk specifics?</h3>
              <p className="text-foreground/60">Book a free 30-minute strategy call — we&apos;ll respond within one business day.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium shrink-0"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              Book a call →
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowWeWork;
