import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

        <div className="absolute w-[520px] h-[520px] bg-cyan-500/10 blur-3xl rounded-full top-1/4 -left-64" />
        <div className="absolute w-[420px] h-[420px] bg-indigo-500/10 blur-3xl rounded-full bottom-0 right-[-20%]" />
      </div>

      <Navigation />
      <FloatingShapes />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
