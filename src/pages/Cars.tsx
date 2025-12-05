import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Fuel, Settings, ChevronRight } from 'lucide-react';

import car1 from '@/assets/cars/car-1.jpeg';
import car2 from '@/assets/cars/car-2.jpeg';
import car3 from '@/assets/cars/car-3.jpeg';
import car4 from '@/assets/cars/car-4.jpeg';
import car6 from '@/assets/cars/car-6.jpeg';
import car8 from '@/assets/cars/car-8.jpeg';
import car9 from '@/assets/cars/car-9.jpeg';
import car10 from '@/assets/cars/car-10.jpeg';
import car11 from '@/assets/cars/car-11.jpeg';
import carHilux from '@/assets/cars/car-hilux.jpeg';

const allCars = [
  {
    id: 1,
    name: 'Toyota Land Cruiser Prado',
    category: 'SUV',
    image: car1,
    features: { seats: 7, fuel: 'Petrol', transmission: 'Automatic' },
    price: 'From ₦50,000/day',
    description: 'Premium SUV perfect for executive travel and family trips.',
  },
  {
    id: 2,
    name: 'Toyota Land Cruiser V8',
    category: 'Luxury SUV',
    image: car2,
    features: { seats: 7, fuel: 'Petrol', transmission: 'Automatic' },
    price: 'From ₦80,000/day',
    description: 'Ultimate luxury SUV for VIP transportation and special occasions.',
  },
  {
    id: 3,
    name: 'Toyota Camry',
    category: 'Sedan',
    image: car3,
    features: { seats: 5, fuel: 'Petrol', transmission: 'Automatic' },
    price: 'From ₦35,000/day',
    description: 'Elegant sedan ideal for business meetings and city travel.',
  },
  {
    id: 4,
    name: 'Toyota Coaster Bus',
    category: 'Bus',
    image: car4,
    features: { seats: 30, fuel: 'Diesel', transmission: 'Manual' },
    price: 'From ₦70,000/day',
    description: 'Spacious bus for group transportation and corporate events.',
  },
  {
    id: 5,
    name: 'Toyota Hiace Bus (High Roof)',
    category: 'Bus',
    image: car6,
    features: { seats: 14, fuel: 'Diesel', transmission: 'Manual' },
    price: 'From ₦45,000/day',
    description: 'Comfortable bus for medium-sized groups and airport transfers.',
  },
  {
    id: 6,
    name: 'Toyota Hiace Bus',
    category: 'Bus',
    image: car8,
    features: { seats: 14, fuel: 'Diesel', transmission: 'Manual' },
    price: 'From ₦45,000/day',
    description: 'Reliable bus for staff transportation and group travel.',
  },
  {
    id: 7,
    name: 'Toyota Sienna (Gold)',
    category: 'Minivan',
    image: car9,
    features: { seats: 7, fuel: 'Petrol', transmission: 'Automatic' },
    price: 'From ₦40,000/day',
    description: 'Comfortable minivan for family travel and airport pickups.',
  },
  {
    id: 8,
    name: 'Toyota Sienna (Blue)',
    category: 'Minivan',
    image: car10,
    features: { seats: 7, fuel: 'Petrol', transmission: 'Automatic' },
    price: 'From ₦40,000/day',
    description: 'Spacious minivan with excellent comfort for long journeys.',
  },
  {
    id: 9,
    name: 'Toyota Hiace Grand Cabin',
    category: 'Bus',
    image: car11,
    features: { seats: 14, fuel: 'Diesel', transmission: 'Manual' },
    price: 'From ₦50,000/day',
    description: 'Modern high-roof bus with premium comfort features.',
  },
  {
    id: 10,
    name: 'Toyota Hilux Pickup',
    category: 'Pickup',
    image: carHilux,
    features: { seats: 5, fuel: 'Diesel', transmission: 'Manual' },
    price: 'From ₦45,000/day',
    description: 'Rugged pickup truck ideal for rough terrain and cargo transport.',
  },
];

const categories = ['All', 'SUV', 'Luxury SUV', 'Sedan', 'Bus', 'Minivan', 'Pickup'];

const Cars = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCars = activeCategory === 'All'
    ? allCars
    : allCars.filter(car => car.category === activeCategory);

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
              Our Fleet
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 animate-slide-up">
              Explore Our <span className="text-primary">Premium</span> Vehicles
            </h1>
            <p className="text-secondary-foreground/80 text-lg animate-slide-up delay-100">
              From luxury SUVs to comfortable buses, we have the perfect vehicle for every occasion. 
              All our vehicles are well-maintained and ready for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Cars Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <div
                key={car.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {car.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{car.description}</p>

                  {/* Features */}
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{car.features.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="w-4 h-4" />
                      <span>{car.features.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings className="w-4 h-4" />
                      <span>{car.features.transmission}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-semibold text-primary text-lg">{car.price}</span>
                    <Link to="/contact">
                      <Button className="btn-secondary rounded-full group/btn">
                        Request Booking
                        <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Need a <span className="text-primary">Custom</span> Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Contact us and we'll help you find the perfect vehicle for your needs.
          </p>
          <Link to="/contact">
            <Button className="btn-primary rounded-full px-8 py-6 text-lg group">
              Contact Us
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Cars;
