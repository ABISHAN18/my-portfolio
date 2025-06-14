
import Header from '@/components/Header';
import DockSidebar from '@/components/DockSidebar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WorkshopSection from '@/components/WorkshopSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DockSidebar />
      <Header />
      <main className="flex-grow md:mr-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkshopSection />
        <ContactSection />
      </main>
      <Footer className="md:mr-24" />
    </div>
  );
};

export default Index;
