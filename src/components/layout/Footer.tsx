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
              className="inline-flex items-center gap-2 rounded-pill px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ↗
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
            <a href="https://instagram.com/synplix.in" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram ↗</a>
            <a href="https://saas.synplixinfotech.in" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Synplix SaaS ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
