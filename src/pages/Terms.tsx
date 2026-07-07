import { Layout } from "@/components/layout/Layout";

const sections = [
  {
    title: "Engagement",
    body: "These terms apply to all project agreements between Synplix Infotech Services and its clients. Any accepted proposal or statement of work is governed by this document unless explicitly overridden in writing.",
  },
  {
    title: "Payment terms",
    body: "A deposit, typically 50%, is required before project commencement. Remaining balance is due on project completion or according to agreed milestones. Invoices are payable within 7 business days. Late payments may attract 1.5% monthly interest. Prices are quoted in INR unless otherwise specified.",
  },
  {
    title: "Intellectual property",
    body: "Upon full payment, custom code, designs, and assets created specifically for a client project are transferred to the client. Synplix retains the right to use general methodologies, tools, and frameworks used during development. Completed projects may be displayed in the Synplix portfolio unless the client requests otherwise in writing.",
  },
  {
    title: "Termination",
    body: "Either party may terminate a project agreement with 14 days' written notice. Fees for work completed up to the termination date remain payable.",
  },
  {
    title: "Liability",
    body: "Our liability for any claim arising out of or in connection with a project is limited to the fees paid for that specific project.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of India. Disputes will be resolved through good-faith negotiation and, if necessary, arbitration under Indian arbitration laws.",
  },
];

const Terms = () => (
  <Layout variant="light">
    <div className="bg-white text-black min-h-screen">
      <section className="container pt-40 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Legal</p>
        <h1 className="text-5xl md:text-6xl font-medium leading-[0.95] tracking-[-0.03em] mb-6">Terms of service</h1>
        <p className="text-black/60 max-w-2xl">The commercial and legal terms that apply when you engage Synplix Infotech Services on a project.</p>
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

export default Terms;
