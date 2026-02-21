import { Phone, ArrowRight } from 'lucide-react';
import { COPY, CONTACT } from '../../content/branding';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading - H1 */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            {COPY.heroHeading}
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {COPY.heroSubheading}
          </p>

          {/* Flexible Pricing Note */}
          <p className="text-sm md:text-base text-primary font-medium mb-10">
            {COPY.flexiblePricing}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CONTACT.phone.tel}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              {COPY.ctaPrimary}
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary/10 transition-all"
            >
              {COPY.ctaSecondary}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
