import { Link } from "react-router-dom";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Custom Web Applications", to: "/services/custom-web-apps" },
      { label: "SaaS Development", to: "/services/saas-development" },
      { label: "Business Automation", to: "/services/business-automation" },
      { label: "Content Systems", to: "/services/content-systems" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How we work", to: "/how-we-work" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", to: "/privacy-policy" },
      { label: "Terms of service", to: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-foreground/5">
      <div className="container py-20 md:py-28">
        <div className="mb-20 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Let&apos;s build</p>
          <h2 className="text-4xl md:text-6xl font-medium leading-[0.95] tracking-[-0.02em] mb-8">
            A partner for the product<br />you actually want to ship.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:outreach@synplixinfotech.in"
              className="inline-flex items-center gap-2 rounded-pill px-5 py-3 text-sm font-medium"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              outreach@synplixinfotech.in →
            </a>
            <a
              href="https://wa.me/918668918164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border border-foreground/20 px-5 py-3 text-sm text-foreground hover:bg-foreground/5 transition-colors"
            >
              WhatsApp +91 86689 18164
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "hsl(var(--accent-lime))" }} />
              <span className="text-sm font-medium">Synplix</span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Web, SaaS and automation partner for startups and growing businesses. Pune, India — delivering globally.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} Synplix Infotech Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Pune, Maharashtra · India</span>
            <a href="https://linkedin.com/company/synplix" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn ↗</a>
            <a href="https://saas.synplixinfotech.in" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Synplix SaaS ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
