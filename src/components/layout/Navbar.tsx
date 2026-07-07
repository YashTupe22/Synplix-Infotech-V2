import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import logo from "@/assets/logo.png";


interface NavbarProps { variant?: "light" | "dark"; }

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/showcase", label: "Showcase" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/faq", label: "FAQ" },
];

export function Navbar({ variant = "dark" }: NavbarProps) {
  const isDark = variant === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, currency, toggleCurrency } = useApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? isDark
            ? "bg-background/85 backdrop-blur-md border-b border-foreground/10"
            : "bg-background/80 backdrop-blur-md border-b border-foreground/5"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-5">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-tight text-foreground lg:justify-self-start">
          <img src={logo} alt="Synplix Infotech" className="h-8 w-auto" />
        </Link>


        <nav className="hidden lg:flex items-center justify-center gap-8 lg:justify-self-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:justify-self-end">
          {/* Currency toggle */}
          <button
            type="button"
            onClick={toggleCurrency}
            className="hidden sm:inline-flex items-center gap-1 rounded-md border border-foreground/10 px-2.5 py-1.5 text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
            aria-label={`Switch currency, currently ${currency}`}
            title={`Currency: ${currency}`}
          >
            {currency}
            <span className="text-foreground/40" aria-hidden>⇄</span>
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Theme: ${theme}`}
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 ml-1"
            style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
          >
            Start a project <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background border-foreground/10">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn("text-base py-2", isActive ? "text-foreground" : "text-foreground/70")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={toggleCurrency}
                className="inline-flex items-center gap-1 rounded-md border border-foreground/10 px-3 py-2 text-xs font-medium text-foreground/70"
              >
                {currency} <span className="text-foreground/40" aria-hidden>⇄</span>
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-foreground/10 text-foreground/70"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </button>
            </div>
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-pill px-4 py-3 text-sm font-medium"
              style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
            >
              Start a project →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
