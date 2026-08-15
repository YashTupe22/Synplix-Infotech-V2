import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { webpagePlans, contentPlans, WebPlan, ContentPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

type Plan = WebPlan | ContentPlan;

function isWebPlan(plan: Plan): plan is WebPlan {
  return "tagline" in plan;
}

function PlanCard({ plan }: { plan: Plan }) {
  const webPlan = isWebPlan(plan) ? plan : null;
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-8 flex flex-col",
        plan.highlighted
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-foreground/10 bg-foreground/[0.02] text-foreground",
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
      <h3 className="text-lg font-medium mb-1">{plan.name}</h3>
      {webPlan && (
        <p className={cn("text-sm mb-4", plan.highlighted ? "text-primary-foreground/70" : "text-foreground/50")}>{webPlan.tagline}</p>
      )}
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-4xl font-medium tracking-tight">₹{plan.price.toLocaleString("en-IN")}</span>
        <span className={cn("text-sm", plan.highlighted ? "text-primary-foreground/70" : "text-foreground/50")}>{plan.cadence}</span>
      </div>
      {webPlan && (
        <div className="mb-6">
          <p className={cn("text-xs font-medium uppercase tracking-wider mb-2", plan.highlighted ? "text-primary-foreground/60" : "text-foreground/40")}>Best for</p>
          <div className="flex flex-wrap gap-1.5">
            {webPlan.bestFor.map((item) => (
              <span
                key={item}
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  plan.highlighted ? "bg-primary-foreground/10 text-primary-foreground/80" : "bg-foreground/5 text-foreground/60",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      <ul className={cn("space-y-2 mb-8 flex-1", plan.highlighted ? "text-primary-foreground/80" : "text-foreground/70")}>
        {plan.features.map((f) => (
          <li key={f} className="text-sm flex gap-2"><span aria-hidden>✓</span>{f}</li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-pill py-3 text-sm font-medium transition-colors",
          plan.highlighted
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "border border-foreground/20 hover:bg-foreground/5",
        )}
      >
        {webPlan ? webPlan.cta : "Get Started"} <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

const Pricing = () => {
  return (
    <Layout variant="light">
      <SEO
        title="Pricing — Website Development & Content Plans | Synplix"
        description="Transparent pricing for website development and content creation from Synplix Infotech. Starter plans from ₹4,999. Free strategy call included."
        path="/pricing"
        keywords="synplix pricing, web development cost india, website design pricing, content creation pricing, affordable web development"
      />
      <div className="bg-background text-foreground min-h-screen">
        <section className="container pt-40 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-6">
            Simple plans.<br />Custom quotes when it matters.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Every engagement starts with a free 30-minute strategy call and a written proposal within 48 hours.
          </p>
        </section>

        {/* Website Development plans */}
        <section className="container py-16 border-t border-foreground/10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Website Development</h2>
          <p className="text-foreground/60 mb-10">One-time projects for marketing and product websites.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webpagePlans.map((p) => (<PlanCard key={p.name} plan={p} />))}
          </div>
        </section>

        {/* Content plans */}
        <section className="container py-16 border-t border-foreground/10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Content creation</h2>
          <p className="text-foreground/60 mb-10">Monthly plans for social, blog, newsletter and ad copy.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentPlans.map((p) => (<PlanCard key={p.name} plan={p} />))}
          </div>
        </section>

        {/* Shared info */}
        <section className="container py-16 border-t border-foreground/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <p className="text-2xl font-medium tracking-tight mb-1">Free 30-minute strategy call</p>
              <p className="text-sm text-foreground/50">Start with a conversation about your goals</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-medium tracking-tight mb-1">Written proposal within 48 hours</p>
              <p className="text-sm text-foreground/50">Clear scope, timeline and pricing</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-medium tracking-tight mb-1">50% upfront · 50% before deployment</p>
              <p className="text-sm text-foreground/50">Simple, milestone-based payments</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-foreground/60">
              Need something specific? We can customize any plan to fit your business.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;
