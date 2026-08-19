import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FeatureGrid from "@/components/landing/FeatureGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import ImpactSection from "@/components/landing/ImpactSection";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <ImpactSection />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
