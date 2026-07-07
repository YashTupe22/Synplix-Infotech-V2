import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const sections = [
  {
    id: "information-collected",
    title: "1. Information We Collect",
    body: `We collect information you voluntarily provide when you contact us, request a consultation, or use our services. This may include:

• Your name and email address
• Company name and website URL
• Project details and requirements
• Any other information you choose to provide

We may also collect technical data such as IP addresses, browser type, and pages visited to improve our website experience.`,
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    body: `We use the information we collect to:

• Respond to your enquiries and provide the services you request
• Send project updates, invoices, and relevant communications
• Improve our website and service offerings
• Comply with legal obligations

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    id: "data-storage",
    title: "3. Data Storage & Security",
    body: `Your data is stored securely using industry-standard encryption and access controls. We retain your information only as long as necessary to fulfil the purposes described in this policy or as required by law. We implement technical and organisational measures to protect your data against unauthorised access, alteration, or disclosure.`,
  },
  {
    id: "cookies",
    title: "4. Cookies",
    body: `Our website may use cookies to enhance your browsing experience. These are small text files stored on your device. You can disable cookies in your browser settings, though this may affect certain functionality of our site. We use only essential and analytics cookies — no advertising cookies are used.`,
  },
  {
    id: "third-party",
    title: "5. Third-Party Services",
    body: `We may use trusted third-party services such as Google Analytics, Vercel, and email providers to operate our business. These providers have their own privacy policies and we ensure they meet adequate data protection standards.`,
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    body: `You have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data ("right to be forgotten")
• Object to processing of your data
• Withdraw consent at any time

To exercise any of these rights, please contact us at outreach@synplixinfotech.in.`,
  },
  {
    id: "changes",
    title: "7. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. The date of the latest revision will always be shown at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "8. Contact Us",
    body: `For any questions regarding this Privacy Policy, please reach out to us at:

Email: outreach@synplixinfotech.in
Synplix Infotech Services`,
  },
];

const Privacy = () => (
  <Layout variant="light">
    <SEO
      title="Privacy Policy | Synplix Infotech"
      description="Read the Synplix Infotech Services Privacy Policy to understand how we collect, use, and protect your personal information."
      path="/privacy"
    />
    <div className="bg-background text-foreground min-h-screen">
      <section className="container pt-40 pb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Legal</p>
        <h1 className="text-5xl md:text-6xl font-medium leading-[0.95] tracking-[-0.03em] mb-3">Privacy policy</h1>
        <p className="text-foreground/60 max-w-2xl">
          Synplix Infotech Services (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This policy explains how we handle your personal information when you visit our website or engage our services.
        </p>
      </section>

      <section className="container pb-32 max-w-3xl space-y-10">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="border-t border-foreground/10 pt-8 scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-3">{s.title}</h2>
            <p className="text-foreground/70 leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}

        <div className="border-t border-foreground/10 pt-10 text-center">
          <div className="rounded-2xl p-8 max-w-lg mx-auto" style={{ backgroundColor: "hsl(var(--surface-elevated))" }}>
            <p className="text-foreground font-medium mb-2">Questions about your data?</p>
            <p className="text-foreground/60 text-sm mb-4">We&apos;re happy to help with any privacy-related enquiries.</p>
            <a
              href="mailto:outreach@synplixinfotech.in?subject=Privacy%20Enquiry"
              className="inline-flex items-center gap-2 rounded-pill px-5 py-3 text-sm font-medium"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              Contact us →
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Privacy;
