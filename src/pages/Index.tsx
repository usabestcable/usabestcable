import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlansSection from "@/components/PlansSection";
import FeaturesSection from "@/components/FeaturesSection";
import CustomizeSection from "@/components/CustomizeSection";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import UseCasesSection from "@/components/UseCasesSection";
import InstallationProcess from "@/components/InstallationProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index page rendering...");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PlansSection />
      <FeaturesSection />
      <CustomizeSection />
      <TechnologyShowcase />
      <UseCasesSection />
      <InstallationProcess />
      <TestimonialsSection />
      <SupportSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
