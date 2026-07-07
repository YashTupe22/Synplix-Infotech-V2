import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-background text-foreground pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-lime)) 0%, transparent 60%)" }}
      />

      <div className="container relative">
        <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.2em] text-foreground/50">
          <span className="inline-block h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: "hsl(var(--accent-lime))" }} />
          Pune, India · Available for new projects
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-medium leading-[0.95] tracking-[-0.03em] max-w-5xl will-change-transform"
        >
          We build the web apps, SaaS platforms and{" "}
          <span
            className="italic font-normal"
            style={{ color: "hsl(var(--accent-lime))" }}
          >
            automations
          </span>{" "}
          your business runs on.
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-6 text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            Synplix Infotech Services is a web development and product engineering partner for startups, SMBs and SaaS teams. Custom builds, predictable delivery, long-term scalability.
          </p>
          <div className="lg:col-span-6 flex flex-wrap items-center gap-4 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              Book a strategy call <span aria-hidden>→</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-pill border border-foreground/20 px-6 py-3 text-sm text-foreground hover:bg-foreground/5 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
