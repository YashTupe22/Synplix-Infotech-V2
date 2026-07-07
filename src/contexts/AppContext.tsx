import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";
type Currency = "INR" | "USD";

// Approximate INR → USD conversion (display-only)
const USD_RATE = 1 / 83;

interface AppCtx {
  theme: Theme;
  toggleTheme: () => void;
  currency: Currency;
  toggleCurrency: () => void;
  formatPrice: (inr: number) => string;
}

const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("synplix-theme") as Theme) || "light";
  });
  const [currency, setCurrency] = useState<Currency>(() => {
    if (typeof window === "undefined") return "INR";
    return (localStorage.getItem("synplix-currency") as Currency) || "INR";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("synplix-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("synplix-currency", currency);
  }, [currency]);

  const formatPrice = (inr: number) => {
    if (currency === "INR") return `₹${inr.toLocaleString("en-IN")}`;
    const usd = Math.round(inr * USD_RATE);
    return `$${usd.toLocaleString("en-US")}`;
  };

  return (
    <Ctx.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        currency,
        toggleCurrency: () => setCurrency((c) => (c === "INR" ? "USD" : "INR")),
        formatPrice,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
