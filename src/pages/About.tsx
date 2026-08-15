import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Globe2,
  Handshake,
  MessageCircle,
  Search,
  Settings2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const solutionAreas = [
  {
    title: "Web Development",
    body: "Professional, responsive and business-focused websites that give customers a clear way to understand and contact your business.",
    icon: Globe2,
  },
  {
    title: "AI Solutions",
    body: "Practical AI support for real business problems, from smarter workflows to better use of existing information.",
    icon: BrainCircuit,
  },
  {
    title: "Business Automation",
    body: "Systems that reduce repetitive work, connect tools and help teams spend more time on meaningful tasks.",
    icon: Workflow,
  },
  {
    title: "SEO & Digital Growth",
    body: "Better structure, content and search visibility so the right audience can find and trust your business online.",
    icon: Search,
  },
  {
    title: "WhatsApp & Communication Automation",
    body: "Customer communication flows that improve lead handling, follow-ups and everyday business conversations.",
    icon: MessageCircle,
  },
];

const growthPrinciples = [
  {
    title: "Better Presence",
    body: "A stronger digital presence helps customers understand your business and take the next step with confidence.",
  },
  {
    title: "Less Manual Work",
    body: "Automation removes repetitive tasks so your team can focus on customers, decisions and growth.",
  },
  {
    title: "Lower Costs",
    body: "Useful technology can improve efficiency and reduce avoidable operational effort over time.",
  },
  {
    title: "Faster Processes",
    body: "Better systems help work move faster, with fewer delays and clearer information.",
  },
];

const workSteps = [
  {
    title: "Understand",
    body: "We study your business, goals, current process and technology before recommending a direction.",
  },
  {
    title: "Recommend",
    body: "We suggest the approach that makes sense for your business, not technology for its own sake.",
  },
  {
    title: "Build Together",
    body: "You stay involved through decisions, previews and feedback while the solution takes shape.",
  },
  {
    title: "Explain",
    body: "We make technical decisions understandable without adding unnecessary jargon.",
  },
  {
    title: "Support",
    body: "After delivery, we remain available where ongoing guidance, fixes or improvements are needed.",
  },
  {
    title: "Grow Together",
    body: "As your business changes, your technology can evolve with it instead of holding it back.",
  },
];

const philosophy = [
  {
    title: "Simple",
    body: "Businesses should not need to understand every technical detail to benefit from modern technology.",
  },
  {
    title: "Purposeful",
    body: "Every tool, feature and system should solve a real business problem or create a practical improvement.",
  },
  {
    title: "Forward-looking",
    body: "Good technology decisions should prepare a business for the way customers, teams and markets are changing.",
  },
];

const About = () => {
  return (
    <Layout variant="light">
      <SEO
        title="About Synplix Infotech — Web Development & AI Solutions Company"
        description="Learn how Synplix Infotech, a Pune-based web development company, helps businesses grow with AI, automation, and modern technology solutions."
        path="/about"
        keywords="about synplix, synplix infotech pune, web development company india, ai solutions, technology company pune"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Synplix Infotech",
          url: "https://synplixinfotech.in/about",
          mainEntity: {
            "@type": "Organization",
            name: "Synplix Infotech Services",
            url: "https://synplixinfotech.in",
            areaServed: "India",
            description:
              "Synplix Infotech helps Indian businesses adopt AI, web development, automation, SEO and modern technology solutions.",
          },
        }}
      />

      <div className="bg-background text-foreground min-h-screen">
        <section className="relative overflow-hidden pt-40 pb-20 md:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-44 -right-48 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--accent-lime)) 0%, transparent 62%)" }}
          />
          <div className="container relative">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-foreground/40">About Synplix</p>
            <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
              Technology that moves your business forward.
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <p className="max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg lg:col-span-6">
                Synplix Infotech helps Indian businesses adopt AI and modern technology to improve their digital presence,
                automate work and build better processes without making technology feel complicated.
              </p>
              <div className="flex flex-wrap items-center gap-4 lg:col-span-6 lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
                >
                  Let&apos;s grow together <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-pill border border-foreground/20 px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Explore our services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container grid grid-cols-1 gap-10 border-t border-foreground/10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">Who we are</p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              A technology partner for businesses across India.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/65 md:text-lg lg:col-span-8">
            <p>
              Synplix is a technology company that helps local businesses, startups, individual professionals,
              e-commerce brands and growing companies use modern technology with clarity.
            </p>
            <p>
              We work where business needs meet practical technology: websites, AI, automation, SEO and customer
              communication systems. The goal is not to add complexity. The goal is to help a business work better,
              present itself better and stay ready for what comes next.
            </p>
          </div>
        </section>

        <section className="border-t border-foreground/10 py-16 md:py-24">
          <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">Why we exist</p>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                Businesses should not have to navigate technology change alone.
              </h2>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 md:p-10 lg:col-span-7">
              <Bot className="mb-6 text-accent-lime" size={32} aria-hidden />
              <p className="text-lg leading-relaxed text-foreground/70">
                AI, automation, digital platforms, communication tools and search behaviour are changing quickly.
                Many business owners know technology matters, but they do not always know what they need, what to
                ignore or how to implement the right solution affordably.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/70">
                Synplix exists so business owners can focus on running and growing their business while we help them
                keep pace with the technology that supports it.
              </p>
            </div>
          </div>
        </section>

        <section className="container border-t border-foreground/10 py-16 md:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">What we do</p>
              <h2 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.02em] md:text-6xl">
                Practical solutions for real business progress.
              </h2>
            </div>
            <p className="max-w-md text-foreground/60">
              These service areas exist to help businesses become easier to find, easier to run and easier to scale.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-2 lg:grid-cols-5">
            {solutionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="bg-background p-6 transition-colors hover:bg-foreground/[0.03]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-sm text-foreground/40">0{index + 1}</span>
                    <Icon className="text-accent-lime" size={22} aria-hidden />
                  </div>
                  <h3 className="mb-3 text-xl font-medium tracking-tight">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/60">{area.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="container border-t border-foreground/10 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">What growth means</p>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                Growth should show up in the way a business actually works.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
              {growthPrinciples.map((item) => (
                <article key={item.title} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
                  <CheckCircle2 className="mb-5 text-accent-lime" size={24} aria-hidden />
                  <h3 className="mb-2 text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/60">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/70">
            We do not measure our work only by whether a project was delivered. We care about whether the technology
            creates a meaningful improvement for the business.
          </p>
        </section>

        <section className="border-t border-foreground/10 py-16 md:py-24">
          <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">Why Synplix</p>
              <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.02em] md:text-6xl">
                More than a technology agency. A partner for what&apos;s next.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-foreground/65 lg:col-span-7">
              <p>
                We do not want to deliver a website or solution and disappear. Synplix is built around a more useful
                client relationship: clear communication, honest recommendations and shared decisions.
              </p>
              <p>
                Clients should be able to ask questions, understand what is being built and stay informed throughout
                development. As their business evolves, Synplix can continue helping their technology evolve with it.
              </p>
            </div>
          </div>
        </section>

        <section className="container border-t border-foreground/10 py-16 md:py-24">
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-foreground/40">How we work</p>
          <ol className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10">
            {workSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-12 gap-4 bg-background p-6 md:gap-6 md:p-8">
                <div className="col-span-12 font-mono text-sm text-foreground/40 sm:col-span-2">0{index + 1}</div>
                <div className="col-span-12 sm:col-span-4">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">{step.title}</h3>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-foreground/60 sm:col-span-6 md:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="container border-t border-foreground/10 py-16 md:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">Technology philosophy</p>
            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.02em] md:text-6xl">
              Simple enough to use. Smart enough to make a difference. Ready for what&apos;s next.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {philosophy.map((item) => (
              <article key={item.title} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8">
                <Settings2 className="mb-6 text-accent-lime" size={26} aria-hidden />
                <h3 className="mb-3 text-2xl font-medium tracking-tight">{item.title}</h3>
                <p className="leading-relaxed text-foreground/60">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-foreground/10 py-16 md:py-24">
          <div className="container grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">India-focused mission</p>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                Built for India&apos;s next chapter.
              </h2>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 md:p-10 lg:col-span-8">
              <Sparkles className="mb-6 text-accent-lime" size={28} aria-hidden />
              <p className="text-lg leading-relaxed text-foreground/70">
                Indian businesses are adopting digital technology quickly, and the country&apos;s business and technology
                ecosystem continues to expand. But small and growing businesses do not always have easy access to the
                advanced tools, guidance and implementation support they need.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/70">
                As Indian businesses move into a more technology-driven economy, Synplix wants to make modern
                technology more accessible to the businesses driving that growth.
              </p>
            </div>
          </div>
        </section>

        <section className="container border-t border-foreground/10 py-16 md:py-24">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: "hsl(var(--surface-elevated))" }}
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">Our vision</p>
                <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.02em] md:text-6xl">
                  A trusted technology partner for businesses.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <Handshake className="mb-6 text-accent-lime" size={32} aria-hidden />
                <p className="text-lg leading-relaxed text-foreground/70">
                  Our long-term vision is to make advanced technology accessible to small and growing businesses and
                  grow alongside the clients who trust us with their digital future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-32">
          <div className="grid grid-cols-1 gap-8 border-t border-foreground/10 pt-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/40">Our promise</p>
              <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.02em] md:text-6xl">
                Your business is moving forward. Let&apos;s make sure your technology keeps up.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/60">
                We help businesses adopt the right technology, simplify their operations and stay ready for what&apos;s next.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
              >
                Start a conversation <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-pill border border-foreground/20 px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Explore our solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
