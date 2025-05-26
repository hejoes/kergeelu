import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import Footer from "@/components/Footer";
import StickyMobileButton from "@/components/StickyMobileButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <div className="pb-20 lg:pb-0">
        <Footer />
      </div>
      <StickyMobileButton />
    </main>
  );
}
