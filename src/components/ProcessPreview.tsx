import { Link } from "react-router-dom";
import { process, timelines } from "@/data/services";

export function ProcessPreview() {
  return (
    <section className="bg-background text-foreground py-24 md:py-32 border-t border-foreground/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-4">How we work</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-[0.95] tracking-[-0.02em] mb-6">
              Discovery. Design.<br />Build. Scale.
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-8">
              A six-phase delivery model designed for predictable outcomes — with working previews from week one and support that carries into growth.
            </p>
            <Link to="/how-we-work" className="inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-1 hover:border-white transition-colors">
              See the full process →
            </Link>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {timelines.map((t) => (
                <div key={t.label}>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-1">{t.label}</p>
                  <p className="text-lg font-medium">{t.value}</p>
                </div>
              ))}
            </div>
          </div>

          <ol className="lg:col-span-8 space-y-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {process.map((p) => (
              <li key={p.n} className="bg-background p-6 md:p-8 grid grid-cols-12 gap-4 items-start">
                <div className="col-span-2 md:col-span-1 font-mono text-sm text-foreground/40">{p.n}</div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-7 text-foreground/60 text-sm leading-relaxed">{p.body}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
