import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DetailsSection from "@/components/sections/DetailsSection";
import ProgramSection from "@/components/sections/ProgramSection";
import RsvpCtaSection from "@/components/sections/RsvpCtaSection";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <DetailsSection />
        <RsvpCtaSection />
      </main>
      <Footer />
    </>
  );
}
