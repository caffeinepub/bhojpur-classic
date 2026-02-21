import TopNav from './TopNav';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import VehicleGallerySection from './sections/VehicleGallerySection';
import WhyChooseSection from './sections/WhyChooseSection';
import ContactSection from './sections/ContactSection';
import Footer from './Footer';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <VehicleGallerySection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
