const reasons = [
  {
    title: "Performance-first architecture",
    description: "Fast APIs, stable data models, and reliable deployment pipelines are built in from day one.",
    icon: "⚡",
  },
  {
    title: "Product-grade UX",
    description: "Clear hierarchy, legible interfaces, and decision-focused flows for real operational usage.",
    icon: "✦",
  },
  {
    title: "Scalable engineering",
    description: "Systems are structured to move from MVP traction to high-usage production workloads.",
    icon: "▲",
  },
  {
    title: "Business alignment",
    description: "We optimize for business outcomes like conversion, retention, and team productivity.",
    icon: "●",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-background text-foreground py-24 md:py-32 border-t border-foreground/5">
      <div className="container">
        <div className="grid lg:grid-cols-[1.05fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div className="self-start">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-4">Why Synplix</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-[0.95] tracking-[-0.03em] mb-6">
              Built for teams that need confidence, not guesswork
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-8">
              We combine product strategy, design systems, and engineering execution into one delivery loop that stays focused on results.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full border border-foreground/10 bg-foreground/[0.02] text-xs text-foreground/70">
                  {tech}
                </span>
              ))}
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5">
              <p className="text-xs text-foreground/40 mb-2 font-medium">Delivery quality</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: "Sprints", v: "Weekly" },
                  { k: "Updates", v: "Daily" },
                  { k: "Response", v: "<24h" },
                ].map((item) => (
                  <div key={item.k}>
                    <div className="text-base font-medium text-foreground">{item.v}</div>
                    <div className="text-xs text-foreground/50">{item.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 flex flex-col min-h-[200px] transition-colors hover:bg-foreground/[0.04]"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sm mb-4"
                  style={{ backgroundColor: "hsl(var(--accent-lime) / 0.12)", color: "hsl(var(--accent-lime))" }}
                >
                  {reason.icon}
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-2">{reason.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
