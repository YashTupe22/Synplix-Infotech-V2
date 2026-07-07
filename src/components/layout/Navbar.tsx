import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavbarProps { variant?: "light" | "dark"; }

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/faq", label: "FAQ" },
];

export function Navbar({ variant = "dark" }: NavbarProps) {
  const isDark = variant === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
            ? "bg-neutral-950/85 backdrop-blur-md border-b border-white/10"
            : "bg-white/80 backdrop-blur-md border-b border-black/5"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between py-4 lg:py-5">
        <Link to="/" className={cn("flex items-center gap-2 font-medium tracking-tight", isDark ? "text-black" : "text-black")}>
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "hsl(var(--accent-lime))" }} aria-hidden />
          <span className="text-sm md:text-base">Synplix</span>
          <span className={cn("hidden sm:inline text-xs uppercase tracking-[0.15em]", isDark ? "text-black/40" : "text-black/40")}>Infotech</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isDark
                    ? isActive ? "text-black" : "text-black/60 hover:text-black"
                    : isActive ? "text-black" : "text-black/60 hover:text-black",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "hsl(var(--accent-lime))", color: "hsl(var(--accent-lime-foreground))" }}
          >
            Start a project <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn("lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md", isDark ? "text-black" : "text-black")}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={cn("lg:hidden border-t", isDark ? "bg-white border-black/10" : "bg-white border-black/10")}>
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-base py-2",
                    isDark ? (isActive ? "text-black" : "text-black/70") : (isActive ? "text-black" : "text-black/70"),
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
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
