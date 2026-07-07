import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Ambient grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent-lime)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent-lime)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-lime)) 0%, transparent 60%)" }}
      />

      <div className="container relative">
        <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.2em] text-white/50">
          <span className="inline-block h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: "hsl(var(--accent-lime))" }} />
          Pune, India · Available for new projects
        </div>

        <h1
          className="text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-medium leading-[0.92] tracking-[-0.03em] max-w-6xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          We build the web apps,
          <br />
          SaaS platforms and{" "}
          <span
            className="italic font-normal"
            style={{ color: "hsl(var(--accent-lime))" }}
          >
            automations
          </span>{" "}
          your business runs on.
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
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
              className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/5 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
