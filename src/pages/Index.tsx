import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessPreview } from "@/components/ProcessPreview";
import { PricingPreview } from "@/components/PricingPreview";

const Index = () => {
  return (
    <Layout variant="dark">
      <div className="bg-black min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ProcessPreview />
        <PricingPreview />
      </div>
    </Layout>
  );
};

export default Index;
