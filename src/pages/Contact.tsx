import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <Layout hideFooter variant="light">
      <SEO
        title="Contact — Start a Project | Synplix Infotech"
        description="Tell us about your product, timeline and constraints. You'll get a written proposal within 48 hours of the call."
        path="/contact"
      />
      <section className="min-h-screen bg-background text-foreground pt-32 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Contact</p>
              <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] mb-8">
                Let&apos;s build<br />what&apos;s next.
              </h1>
              <p className="text-lg text-foreground/60 max-w-xl leading-relaxed mb-12">
                Tell us about your product, timeline and constraints. You&apos;ll get a written proposal within 48 hours of the call.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3">Email</p>
                  <a
                    href="mailto:outreach@synplixinfotech.in"
                    className="text-2xl md:text-3xl font-medium hover:opacity-80 transition-opacity inline-flex items-center gap-3"
                    style={{ color: "hsl(var(--accent-lime))" }}
                  >
                    outreach@synplixinfotech.in <span aria-hidden>→</span>
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3">WhatsApp</p>
                  <a
                    href="https://wa.me/918668918164"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-pill px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "#25D366", color: "#fff" }}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-8">
              <div className="rounded-2xl border border-foreground/10 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3">Office</p>
                <p className="text-foreground/80">Pune, Maharashtra</p>
                <p className="text-foreground/60 text-sm">India</p>
              </div>
              <div className="rounded-2xl border border-foreground/10 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3">Hours</p>
                <p className="text-foreground/80">Mon – Fri, 09:00 – 18:00 IST</p>
                <p className="text-foreground/60 text-sm mt-2">Remote-first. Serving clients in India, US and UK.</p>
              </div>
              <div className="rounded-2xl border border-foreground/10 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3">Also on</p>
                <div className="flex flex-col gap-2">
                  <a href="https://linkedin.com/company/synplix" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">LinkedIn ↗</a>
                  <a href="https://instagram.com/synplix.in" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">Instagram ↗</a>
                  <a href="https://saas.synplixinfotech.in" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">Synplix SaaS ↗</a>
                </div>
              </div>
            </aside>
          </div>

          <p className="mt-32 text-sm text-foreground/40">© {new Date().getFullYear()} Synplix Infotech Services.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
