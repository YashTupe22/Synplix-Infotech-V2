import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: `By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    id: "services",
    title: "2. Services Provided",
    body: `Synplix Infotech Services provides custom web application development, SaaS platform development, business automation, and content creation services. The specific scope, deliverables, timeline, and pricing for each project are defined in a separate Statement of Work (SOW) or project agreement signed by both parties.`,
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    body: `• A deposit (typically 50%) is required before project commencement.
• The remaining balance is due upon project completion or as per the agreed milestone schedule.
• Invoices are payable within 7 business days of issue.
• Late payments may attract an interest charge of 1.5% per month.
• All prices are quoted in Indian Rupees (INR) unless otherwise specified.`,
  },
  {
    id: "ip",
    title: "4. Intellectual Property",
    body: `Upon receipt of full payment, all custom code, designs, and assets created specifically for your project are transferred to you.

We retain the right to use general methodologies, tools, and frameworks used during development. We may display your completed project in our portfolio unless you request otherwise in writing.

Third-party assets (fonts, libraries, stock images) are subject to their own licence agreements.`,
  },
  {
    id: "revisions",
    title: "5. Revisions & Changes",
    body: `The number of revision rounds included is specified in the project agreement. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.

Significant changes to project scope after sign-off may require a revised quote and timeline adjustment.`,
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    body: `Both parties agree to keep confidential any proprietary or sensitive information shared during the project. We will not disclose your business information, strategies, or technical details to third parties without your consent except where required by law.`,
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    body: `Our liability is limited to the total fees paid for the specific project in question. We are not liable for indirect, incidental, or consequential damages arising from use of our deliverables.

We are not responsible for third-party services, hosting providers, or infrastructure beyond our direct control.`,
  },
  {
    id: "termination",
    title: "8. Termination",
    body: `Either party may terminate a project agreement with 14 days' written notice. In the event of termination, you are liable for payment for all work completed up to the termination date. The deposit is non-refundable unless Synplix fails to deliver agreed deliverables.`,
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    body: `These terms are governed by the laws of India. Any disputes shall be resolved through good-faith negotiation, and if necessary, through binding arbitration in accordance with Indian arbitration laws.`,
  },
  {
    id: "contact",
    title: "10. Contact",
    body: `For any questions about these Terms, contact us at:

Email: outreach@synplixinfotech.in
Synplix Infotech Services`,
  },
];

const Terms = () => (
  <Layout variant="light">
    <SEO
      title="Terms of Service | Synplix Infotech"
      description="Read the Terms of Service for Synplix Infotech Services — governing use of our website and engagement of our development services."
      path="/terms"
    />
    <div className="bg-background text-foreground min-h-screen">
      <section className="container pt-40 pb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Legal</p>
        <h1 className="text-5xl md:text-6xl font-medium leading-[0.95] tracking-[-0.03em] mb-3">Terms of service</h1>
        <p className="text-foreground/60 max-w-2xl">
          These Terms of Service govern your use of the Synplix Infotech Services website and the engagement of our professional services. Please read them carefully.
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
            <p className="text-foreground font-medium mb-2">Questions about these terms?</p>
            <p className="text-foreground/60 text-sm mb-4">Reach out and we&apos;ll get back to you within 48 hours.</p>
            <a
              href="mailto:outreach@synplixinfotech.in?subject=Terms%20Enquiry"
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

export default Terms;
