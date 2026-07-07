const testimonials = [
  {
    quote:
      "Synplix delivered initial content package for our cafe with great quality",
    name: "Rohit Rana",
    role: "Manager, Amora Cafe,Pune",
    avatar: "RR",
  },
  {
    quote:
      "They understood our business logic faster than any agency we'd worked with. The Google Business Profile they made for us, ranked no 1 within 2-3 days. With their custom package they made us a custom website to handle the client via website with whatsapp intergration.",
    name: "Netra Maral",
    role: "CEO, Tirupati Enterprises",
    avatar: "NM",
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

      </div>
    </section>
  );
}
