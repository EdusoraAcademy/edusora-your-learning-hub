import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import KurseviSection from "@/components/KurseviSection";
import ZastoSection from "@/components/ZastoSection";
import VijestiSection from "@/components/VijestiSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <KurseviSection />
      <ZastoSection />
      <VijestiSection />
      <FAQSection />
    </main>
    <Footer />
  </>
);

export default Index;
