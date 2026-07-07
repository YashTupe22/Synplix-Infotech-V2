import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    category: "General",
    id: "general",
    items: [
      {
        q: "What does Synplix Infotech Services do?",
        a: "We build custom web applications, SaaS platforms, and business automation tools for modern companies. We also offer content creation services including copywriting, social media, and blog content.",
      },
      {
        q: "Where are you based?",
        a: "We are an India-based company working with clients globally. All communication is handled remotely via email, calls, and project management tools.",
      },
      {
        q: "Who do you typically work with?",
        a: "We work with startups, SMBs, and growing businesses that need a reliable technical partner. Whether you need an MVP in 6 weeks or a full enterprise SaaS, we can help.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    id: "process",
    items: [
      {
        q: "How do we get started?",
        a: "Book a free 30-minute strategy call via our Contact section. We'll discuss your goals, scope out the project, and send you a proposal within 48 hours.",
      },
      {
        q: "How long does a typical project take?",
        a: "It depends on scope. A marketing website takes 2–4 weeks. An MVP web app takes 6–8 weeks. A full SaaS platform typically takes 10–16 weeks. We'll give you a precise timeline in the proposal.",
      },
      {
        q: "What does your process look like?",
        a: "We follow a 3-phase process: Strategy (discovery & planning) → Design (wireframes & prototypes) → Build & Scale (development, testing, deployment). You're involved at every stage.",
      },
      {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes. We offer monthly retainer packages for hosting management, bug fixes, feature additions, and priority support. Rates vary based on scope.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    id: "pricing",
    items: [
      {
        q: "How is Synplix pricing structured?",
        a: "We offer fixed-scope pricing for website projects (Starter ₹8,000, Growth ₹18,000, Enterprise custom) and monthly content plans (Basic ₹5,000, Pro ₹12,000, Agency ₹25,000). Paying annually saves you 20%.",
      },
      {
        q: "Is there a free plan?",
        a: "Yes. The Free SaaS plan is free forever — no credit card required. It supports 1 workspace, up to 50 transactions per month, 5 custom workflows, and 25 data records, with offline mode and GST billing included. Upgrade any time when you need more capacity.",
      },
      {
        q: "Can I switch plans at any time?",
        a: "Yes. You can upgrade or downgrade your plan at any time from your account settings. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept UPI, NEFT/RTGS/IMPS bank transfers, and credit/debit cards. Subscriptions are billed monthly or annually in advance in Indian Rupees (INR).",
      },
    ],
  },
  {
    category: "Technical",
    id: "technical",
    items: [
      {
        q: "What technologies do you use?",
        a: "Our core stack is Next.js, React, Node.js, PostgreSQL, and Tailwind CSS. For infrastructure, we use Vercel, AWS, and DigitalOcean. We select the best tools for your specific requirements.",
      },
      {
        q: "Will I own the code after the project?",
        a: "Yes. Upon final payment, all custom code, designs, and assets are fully owned by you. We hand over the complete source code and documentation.",
      },
      {
        q: "Can you work with my existing codebase?",
        a: "Yes. We frequently help teams improve, refactor, or extend existing applications. We'll do a code audit first to understand the current state and plan accordingly.",
      },
      {
        q: "Do you build mobile apps?",
        a: "We specialise in web-based applications that are fully mobile-responsive. For native iOS/Android apps, we can recommend trusted partners or use React Native if suitable.",
      },
    ],
  },
  {
    category: "Content Creation",
    id: "content",
    items: [
      {
        q: "What types of content do you create?",
        a: "We create social media posts, blog articles, website copywriting, email newsletters, ad copy, and brand voice guides. Everything is SEO-optimised and tailored to your audience.",
      },
      {
        q: "How do the content plans work?",
        a: "Content plans are monthly subscriptions. At the start of each month we share a content calendar for your approval, then deliver all assets on time throughout the month.",
      },
      {
        q: "Can I request revisions on content?",
        a: "Yes. Each content piece comes with one round of revisions included. Additional revision rounds are available for a small fee.",
      },
    ],
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>("general-0");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Layout variant="light">
      <SEO
        title="FAQ — Answers Before the First Call | Synplix Infotech"
        description="Frequently asked questions about Synplix web development, SaaS, content creation services, pricing, timelines, and process."
        path="/faq"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.flatMap((cat) =>
            cat.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            }))
          ),
        }}
      />
      <div className="bg-background text-foreground min-h-screen">
        <section className="container pt-40 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">FAQ</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.03em] max-w-4xl mb-3">
            Frequently asked questions
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Everything you need to know about working with Synplix. Need help fast?{" "}
            <a href="mailto:outreach@synplixinfotech.in" className="text-foreground/80 hover:text-foreground underline transition-colors">Email us</a>.
          </p>
        </section>

        <section className="container pb-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <nav className="lg:w-56 shrink-0 lg:sticky lg:top-28 lg:self-start order-2 lg:order-1">
              <div className="rounded-2xl border border-foreground/10 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-3 font-medium">Categories</p>
                <ul className="space-y-1.5">
                  {faqCategories.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`#${cat.id}`}
                        className="block text-sm text-foreground/60 hover:text-foreground transition-colors py-1 leading-snug"
                      >
                        {cat.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="flex-1 min-w-0 order-1 lg:order-2 space-y-10">
              {faqCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-medium tracking-tight mb-5">{category.category}</h2>
                  <div className="flex flex-col gap-3">
                    {category.items.map((item, i) => {
                      const itemId = `${category.id}-${i}`;
                      const active = openId === itemId;
                      return (
                        <div key={itemId} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => toggle(itemId)}
                            className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group"
                            aria-expanded={active}
                          >
                            <span className="text-base font-medium tracking-tight group-hover:text-foreground/80 transition-colors">
                              {item.q}
                            </span>
                            <span
                              className={cn(
                                "shrink-0 w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 transition-transform duration-300",
                                active && "rotate-45"
                              )}
                              style={{ color: active ? "hsl(var(--accent-lime))" : undefined }}
                              aria-hidden
                            >
                              +
                            </span>
                          </button>
                          <div
                            className={cn(
                              "grid transition-all duration-300 ease-out",
                              active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                          >
                            <div className="overflow-hidden">
                              <p className="px-6 pb-5 text-foreground/70 leading-relaxed max-w-3xl">{item.a}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container pb-32">
          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left"
            style={{ backgroundColor: "hsl(var(--surface-elevated))" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Still have questions?</h3>
              <p className="text-foreground/60">Our team responds quickly during business hours (IST).</p>
            </div>
            <a
              href="mailto:outreach@synplixinfotech.in?subject=FAQ%20Enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-medium shrink-0"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              Email us →
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
