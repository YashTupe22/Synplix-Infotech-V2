import { Link } from "react-router-dom";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 border-t border-white/5">
      <div className="container">
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">What we do</p>
            <h2 className="text-4xl md:text-6xl font-medium leading-[0.95] tracking-[-0.02em] max-w-3xl">
              Four practices.<br />
              <span style={{ color: "hsl(var(--accent-lime))" }}>One team</span> that ships.
            </h2>
          </div>
          <Link to="/services" className="text-sm text-white/60 hover:text-white transition-colors">
            All services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative bg-black p-8 md:p-10 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="text-xs font-mono text-white/40">0{i + 1}</span>
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: s.accent }}
                  aria-hidden
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:translate-x-1 transition-transform">
                {s.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                {s.tagline}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.stack.slice(0, 4).map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <span className="absolute top-8 right-8 text-white/30 group-hover:text-white transition-colors" aria-hidden>
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
