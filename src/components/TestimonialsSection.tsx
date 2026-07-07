const testimonials = [
  {
    quote:
      "Synplix delivered our SaaS dashboard in under 5 weeks. The code quality and design were exactly what we needed to go live with confidence.",
    name: "Rahul Mehta",
    role: "Founder, TechFlow Analytics",
    avatar: "RM",
  },
  {
    quote:
      "They understood our business logic faster than any agency we'd worked with. The automation pipelines they built saved us 20+ hours per week.",
    name: "Priya Sharma",
    role: "CTO, NovaBuild Solutions",
    avatar: "PS",
  },
  {
    quote:
      "Professional, fast, and honest about timelines. The MVP they shipped got us our first 50 customers within a month of launch.",
    name: "Aditya Joshi",
    role: "CEO, Acme Corp India",
    avatar: "AJ",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background text-foreground py-24 md:py-32 border-t border-foreground/5">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-4">Client Stories</p>
          <h2 className="text-4xl md:text-6xl font-medium leading-[0.95] tracking-[-0.02em] mb-4">
            Trusted by <span style={{ color: "hsl(var(--accent-lime))" }}>Founders & CTOs</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Real results from real businesses. We measure success by your growth metrics, not just shipped code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-7 flex flex-col gap-5 transition-colors hover:bg-foreground/[0.04]"
            >
              <div className="text-foreground/60 text-sm tracking-widest">★★★★★</div>
              <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                <div
                  className="w-10 h-10 rounded-full text-xs font-bold flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "hsl(var(--accent-lime) / 0.15)", color: "hsl(var(--accent-lime))" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/50">
          {[
            { label: "NDA on request" },
            { label: "30+ projects delivered" },
            { label: "48hr response time" },
            { label: "Ship in 4–6 weeks" },
          ].map((badge) => (
            <span key={badge.label} className="flex items-center gap-2">
              <span className="font-bold" style={{ color: "hsl(var(--accent-lime))" }}>✓</span>
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
