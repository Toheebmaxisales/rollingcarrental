import { Shield, Clock, MapPin, Headphones, CreditCard, Car } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fully Insured Vehicles',
    description: 'All our vehicles come with comprehensive insurance coverage for your peace of mind.',
  },
  {
    icon: Clock,
    title: 'Flexible Rental Periods',
    description: 'Rent for a day, week, or month. We offer flexible terms to suit your schedule.',
  },
  {
    icon: MapPin,
    title: 'Airport Pickup & Drop',
    description: 'Convenient pickup and drop-off services at Lagos Airport terminals.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Our dedicated team is always available to assist you, anytime, anywhere.',
  },
  {
    icon: CreditCard,
    title: 'Competitive Pricing',
    description: 'Get the best value with our transparent and affordable rental rates.',
  },
  {
    icon: Car,
    title: 'Well-Maintained Fleet',
    description: 'Our vehicles undergo regular maintenance to ensure safety and reliability.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            The <span className="text-primary">Rolling</span> Advantage
          </h2>
          <p className="text-muted-foreground animate-slide-up delay-100">
            We go beyond just renting cars. Experience exceptional service that puts your needs first.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
