import { UserCheck, Bus, MapPin, BadgeDollarSign } from 'lucide-react';
import { WHY_CHOOSE } from '../../content/branding';

const iconMap = {
  'user-check': UserCheck,
  'bus': Bus,
  'map-pin': MapPin,
  'badge-dollar-sign': BadgeDollarSign,
};

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Bhojpur Classic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your safety, comfort, and satisfaction are our top priorities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {WHY_CHOOSE.map((reason, index) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
