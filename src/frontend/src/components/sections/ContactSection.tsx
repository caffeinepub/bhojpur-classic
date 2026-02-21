import { Phone, Mail, Clock } from 'lucide-react';
import { CONTACT, COPY, BUSINESS_NAME } from '../../content/branding';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Book Your Journey Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us for reservations and inquiries. We're here to make your travel experience exceptional.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Phone Contact */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone Booking</h3>
                  <a
                    href={CONTACT.phone.tel}
                    className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {CONTACT.phone.display}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Call us directly for instant booking
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                  <p className="text-muted-foreground">
                    Available 7 days a week
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Flexible scheduling for your convenience
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Note */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 mb-8">
              <p className="text-center text-foreground font-medium">
                {COPY.flexiblePricing}
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Get a personalized quote when you call
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href={CONTACT.phone.tel}
                className="inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="h-6 w-6" />
                Call {CONTACT.phone.display} Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
