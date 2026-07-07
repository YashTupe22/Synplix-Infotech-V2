import { Layout } from "@/components/layout/Layout";

const sections = [
  {
    title: "Information we collect",
    body: "We may collect your name and email address, company name and website URL, project details and requirements, and technical data such as IP address, browser type and pages visited.",
  },
  {
    title: "How we use your information",
    body: "We use your information to respond to enquiries, deliver contracted services, invoice for work, and improve our website. We do not sell, rent, or trade personal information to third parties for marketing purposes.",
  },
  {
    title: "Third-party services",
    body: "We rely on a small number of trusted service providers, including Google Analytics for anonymous traffic measurement, Vercel for hosting, and email service providers for transactional communication.",
  },
  {
    title: "Data retention",
    body: "We retain personal information only as long as necessary to fulfil the purposes for which it was collected, meet legal and accounting obligations, and resolve disputes.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by writing to outreach@synplixinfotech.in.",
  },
  {
    title: "Contact",
    body: "For any privacy-related question, contact us at outreach@synplixinfotech.in or +91 86689 18164.",
  },
];

const Privacy = () => (
  <Layout variant="light">
    <div className="bg-white text-black min-h-screen">
      <section className="container pt-40 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Legal</p>
        <h1 className="text-5xl md:text-6xl font-medium leading-[0.95] tracking-[-0.03em] mb-6">Privacy policy</h1>
        <p className="text-black/60 max-w-2xl">This policy describes how Synplix Infotech Services collects, uses and protects information about visitors and clients.</p>
      </section>
      <section className="container pb-32 max-w-3xl space-y-10">
        {sections.map((s) => (
          <div key={s.title} className="border-t border-black/10 pt-8">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-3">{s.title}</h2>
            <p className="text-black/70 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
    </div>
  </Layout>
);

export default Privacy;
