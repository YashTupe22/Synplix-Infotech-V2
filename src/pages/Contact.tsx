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
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3">Phone / WhatsApp</p>
                  <a
                    href="https://wa.me/918668918164"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-medium hover:text-foreground/80 transition-colors inline-flex items-center gap-3"
                  >
                    +91 86689 18164 <span aria-hidden>↗</span>
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
