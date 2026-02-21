export default function VehicleGallerySection() {
  const vehicles = [
    {
      src: '/assets/generated/bhojpur-bus-1.dim_1600x900.jpg',
      alt: 'Bhojpur Classic branded AC bus - front view showcasing our well-maintained fleet',
    },
    {
      src: '/assets/generated/bhojpur-bus-2.dim_1600x900.jpg',
      alt: 'Bhojpur Classic AC bus at a scenic tourist location - side profile view',
    },
    {
      src: '/assets/generated/bhojpur-bus-3.dim_1600x900.jpg',
      alt: 'Bhojpur Classic bus interior showcasing comfortable seating and modern amenities',
    },
  ];

  return (
    <section id="vehicles" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Well-maintained, comfortable AC buses designed for your travel comfort and safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-2xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={vehicle.src}
                  alt={vehicle.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            All our buses are equipped with air conditioning, comfortable seating, and modern safety features to ensure a pleasant journey.
          </p>
        </div>
      </div>
    </section>
  );
}
