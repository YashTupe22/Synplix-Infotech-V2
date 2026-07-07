import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessPreview } from "@/components/ProcessPreview";
import { PricingPreview } from "@/components/PricingPreview";

const Index = () => {
  return (
    <Layout variant="light">
      <SEO
        title="Synplix Infotech Services — Web, SaaS & Automation Partner in Pune"
        description="Custom web apps, SaaS platforms, business automation and content systems for startups and SMBs. Pune-based, delivering globally."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web & SaaS Development",
          provider: { "@type": "Organization", name: "Synplix Infotech Services", url: "https://synplixinfotech.in" },
          areaServed: "Global",
        }}
      />
      <div className="bg-background min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ProcessPreview />
        <PricingPreview />
      </div>
    </Layout>
  );
};

export default Index;
