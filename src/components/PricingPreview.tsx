import { Link } from "react-router-dom";
import { webpagePlans } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { useApp } from "@/contexts/AppContext";

export function PricingPreview() {
  const { formatPrice } = useApp();
  return (
    <section className="bg-background text-foreground py-24 md:py-32 border-t border-foreground/5">
      <div className="container">
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-4">Pricing</p>
            <h2 className="text-4xl md:text-6xl font-medium leading-[0.95] tracking-[-0.02em] max-w-3xl">
              Transparent pricing.<br />No surprises.
            </h2>
          </div>
          <Link to="/pricing" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Content & SaaS plans →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webpagePlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col",
                plan.highlighted ? "border-transparent bg-primary text-primary-foreground" : "border-foreground/10 bg-foreground/[0.02]",
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
              <h3 className={cn("text-lg font-medium mb-2", plan.highlighted ? "text-primary-foreground" : "text-foreground")}>{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-2">
                <span className={cn("text-4xl font-medium tracking-tight", plan.highlighted ? "text-primary-foreground" : "text-foreground")}>{plan.price === "custom" ? "Custom" : formatPrice(plan.price)}</span>
                <span className={cn("text-sm", plan.highlighted ? "text-primary-foreground/70" : "text-foreground/50")}>{plan.cadence}</span>
              </div>
              <ul className={cn("space-y-2 mb-8 flex-1", plan.highlighted ? "text-primary-foreground/80" : "text-foreground/70")}>
                {plan.features.map((f) => (
                  <li key={f} className="text-sm flex gap-2">
                    <span aria-hidden>›</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-pill py-3 text-sm font-medium transition-colors",
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-foreground/85"
                    : "border border-foreground/20 hover:bg-foreground/5",
                )}
              >
                Get started →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
