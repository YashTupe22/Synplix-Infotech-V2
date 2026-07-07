import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { webpagePlans, contentPlans, saasPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { useApp } from "@/contexts/AppContext";

function PlanCard({ plan }: { plan: (typeof webpagePlans)[number] }) {
  const { formatPrice } = useApp();
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-8 flex flex-col",
        plan.highlighted ? "border-transparent bg-primary text-primary-foreground" : "border-foreground/10 bg-foreground/[0.02] text-foreground",
      )}
      style={plan.highlighted ? { boxShadow: "0 0 0 1px hsl(var(--accent-lime))" } : undefined}
    >
      {plan.highlighted && (
        <span
          className="absolute -top-3 left-8 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-pill font-medium"
          style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
        >
          Most popular
        </span>
      )}
      <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-4xl font-medium tracking-tight">{plan.price === "custom" ? "Custom" : formatPrice(plan.price)}</span>
        <span className={cn("text-sm", plan.highlighted ? "text-primary-foreground/70" : "text-foreground/50")}>{plan.cadence}</span>
      </div>
      <ul className={cn("space-y-2 mb-8 flex-1", plan.highlighted ? "text-primary-foreground/80" : "text-foreground/70")}>
        {plan.features.map((f) => (
          <li key={f} className="text-sm flex gap-2"><span aria-hidden>›</span>{f}</li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-pill py-3 text-sm font-medium transition-colors",
          plan.highlighted ? "bg-primary text-primary-foreground hover:bg-foreground/85" : "border border-foreground/20 hover:bg-foreground/5",
        )}
      >
        Get started →
      </Link>
    </div>
  );
}

const Pricing = () => {
  const { formatPrice, currency } = useApp();
  return (
    <Layout variant="light">
      <div className="bg-background text-foreground min-h-screen">
        <section className="container pt-40 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-6">
            Simple plans.<br />Custom quotes when it matters.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Prices shown in {currency}. Every engagement starts with a free 30-minute strategy call and a written proposal within 48 hours.
          </p>
        </section>

        {/* Webpage plans */}
        <section className="container py-16 border-t border-foreground/10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Webpage design</h2>
          <p className="text-foreground/50 mb-10">One-time projects for marketing and product websites.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webpagePlans.map((p) => (<PlanCard key={p.name} plan={p} />))}
          </div>
        </section>

        {/* Content plans */}
        <section className="container py-16 border-t border-foreground/10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Content creation</h2>
          <p className="text-foreground/50 mb-10">Monthly plans for social, blog, newsletter and ad copy.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentPlans.map((p) => (<PlanCard key={p.name} plan={p} />))}
          </div>
        </section>

        {/* SaaS plans */}
        <section className="container py-16 border-t border-foreground/10">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Synplix SaaS subscription</h2>
              <p className="text-foreground/50">Our multi-workspace SaaS product for teams.</p>
            </div>
            <a
              href="https://saas.synplixinfotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Try the product ↗
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {saasPlans.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "rounded-2xl border p-6 flex flex-col",
                  p.highlighted ? "border-transparent bg-foreground/[0.06]" : "border-foreground/10 bg-foreground/[0.02]",
                )}
                style={p.highlighted ? { boxShadow: "0 0 0 1px hsl(var(--accent-lime))" } : undefined}
              >
                {p.highlighted && (
                  <span
                    className="self-start mb-3 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-pill"
                    style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
                  >
                    Most popular
                  </span>
                )}
                <h3 className="text-base font-medium mb-1">{p.name}</h3>
                <p className="text-3xl font-medium tracking-tight mb-1">{p.monthly === 0 ? formatPrice(0) : formatPrice(p.monthly as number)}<span className="text-sm text-foreground/40 font-normal">/mo</span></p>
                <p className="text-xs text-foreground/40 mb-4">{p.annual === 0 ? "—" : `or ${formatPrice(p.annual as number)}/yr`}</p>
                <p className="text-sm text-foreground/60 mt-auto">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment terms */}
        <section className="container py-16 border-t border-foreground/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3">Payment terms</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Predictable, milestone-based.</h2>
            </div>
            <ul className="lg:col-span-8 space-y-3 text-foreground/70">
              <li>· 50% deposit before project commencement</li>
              <li>· Balance due on completion or per milestones</li>
              <li>· Invoices payable within 7 business days</li>
              <li>· Late payments may attract 1.5% monthly interest</li>
              <li>· Prices quoted in INR unless otherwise specified</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;
