import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ProcessPreview } from "@/components/ProcessPreview";
import { PricingPreview } from "@/components/PricingPreview";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <Layout variant="light">
      <SEO
        title="Synplix — Web Development, SaaS & Automation Company in Pune, India"
        description="Synplix Infotech is a leading web development company in Pune offering custom websites, SaaS platforms, business automation and content systems for startups and SMBs."
        path="/"
        keywords="synplix, web development pune, saas development india, business automation, website design pune, software company india, digital agency pune"
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
        <WhyChooseSection />
        <ProcessPreview />
        <TestimonialsSection />
        <PricingPreview />
      </div>
    </Layout>
  );
};

export default Index;
