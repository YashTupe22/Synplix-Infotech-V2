import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { faqs } from "@/data/pricing";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout variant="light">
      <SEO
        title="FAQ — Answers Before the First Call | Synplix Infotech"
        description="Common questions about scope, timelines, pricing and support for Synplix Infotech engagements."
        path="/faq"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="bg-background text-foreground min-h-screen">
        <section className="container pt-40 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">FAQ</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-6">
            Answers before<br />the first call.
          </h1>
        </section>

        <section className="container pb-16">
          <div className="border-t border-foreground/10">
            {faqs.map((f, i) => {
              const active = open === i;
              return (
                <div key={f.q} className="border-b border-foreground/10">
                  <button
                    type="button"
                    onClick={() => setOpen(active ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
                    aria-expanded={active}
                  >
                    <span className="text-lg md:text-2xl font-medium tracking-tight group-hover:text-foreground/80 transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={cn("shrink-0 text-2xl transition-transform", active && "rotate-45")}
                      style={{ color: "hsl(var(--accent-lime))" }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      active ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-foreground/70 leading-relaxed max-w-3xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container pb-32">
          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ backgroundColor: "hsl(var(--surface-elevated))" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Still have questions?</h3>
              <p className="text-foreground/60">Email us — we usually reply the same working day.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium shrink-0"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              Get in touch →
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
