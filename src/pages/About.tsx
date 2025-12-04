import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Award, MapPin, Phone, ChevronRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Reliability',
    description: 'We deliver on our promises with well-maintained vehicles and punctual service.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We go the extra mile for every customer.',
  },
  {
    icon: Users,
    title: 'Professionalism',
    description: 'Our trained staff ensures a seamless rental experience from start to finish.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Premium vehicles that meet the highest standards of comfort and safety.',
  },
];

const locations = [
  {
    name: 'Head Office',
    address: 'Poatson Complex, 254 Agege Motor Road, by Airport Bus Stop, Ikeja Lagos',
  },
  {
    name: 'MMA1 Terminal',
    address: 'GAT Terminal, Murtala Muhammed Airport, Lagos',
  },
  {
    name: 'MMA2 Terminal',
    address: 'MMA2 International Terminal, Lagos',
  },
  {
    name: 'Additional Location',
    address: 'H8RP+7Q9, Lagos 101233, Lagos',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-primary rounded-full" />
          <div className="absolute bottom-10 left-10 w-40 h-40 border border-primary rounded-full" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 animate-slide-down">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 animate-slide-up">
              Your Trusted <span className="text-primary">Car Rental</span> Partner in Lagos
            </h1>
            <p className="text-secondary-foreground/80 text-lg animate-slide-up delay-100">
              Rolling Car Rental, a division of Rolling Business Solution, has been providing premium 
              car rental services across Lagos with a commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Driving Your <span className="text-primary">Success</span> Forward
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Rolling Car Rental, our mission is to provide seamless, affordable, and reliable transportation 
                solutions that empower individuals and businesses to move with confidence. We believe that 
                exceptional service begins with understanding our customers' needs and exceeding their expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a vehicle for business meetings, airport transfers, family trips, or special events, 
                we have the perfect solution. Our diverse fleet of well-maintained vehicles, combined with our 
                24/7 customer support, ensures that you're always in good hands.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-primary-foreground">R</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What <span className="text-primary">Drives</span> Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl text-center hover-lift hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Locations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Find Us <span className="text-primary">Near You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-muted rounded-2xl hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{location.name}</h3>
                  <p className="text-muted-foreground text-sm">{location.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <a href="tel:07068999680">
                <Button variant="outline" className="btn-outline-gold rounded-full px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  07068999680
                </Button>
              </a>
              <a href="tel:08057968468">
                <Button variant="outline" className="btn-outline-gold rounded-full px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  08057968468
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Experience the <span className="text-primary">Difference?</span>
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us today to book your ride or learn more about our services.
          </p>
          <Link to="/contact">
            <Button className="btn-primary rounded-full px-8 py-6 text-lg group">
              Get in Touch
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
