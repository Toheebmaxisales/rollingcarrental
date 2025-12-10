import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, Fuel, Settings } from 'lucide-react';

import car1 from '@/assets/cars/car-1.jpeg';
import car2 from '@/assets/cars/car-2.jpeg';
import car3 from '@/assets/cars/car-3.jpeg';
import car8 from '@/assets/cars/car-8.jpeg';

const featuredCars = [
  {
    id: 1,
    name: 'Toyota Land Cruiser Prado',
    category: 'SUV',
    image: car1,
    features: { seats: 7, fuel: 'Petrol', transmission: 'Automatic' },
    price: '₦150,000/day',
  },
  {
    id: 2,
    name: 'Toyota Land Cruiser V8',
    category: 'Luxury SUV',
    image: car2,
    features: { seats: 7, fuel: 'Petrol', transmission: 'Automatic' },
    price: '₦250,000/day',
  },
  {
    id: 3,
    name: 'Toyota Camry',
    category: 'Sedan',
    image: car3,
    features: { seats: 5, fuel: 'Petrol', transmission: 'Automatic' },
    price: '₦100,000/day',
  },
  {
    id: 4,
    name: 'Toyota Hiace Low Roof',
    category: 'Bus',
    image: car8,
    features: { seats: 14, fuel: 'Diesel', transmission: 'Manual' },
    price: '₦120,000/day',
  },
];

const CarShowcase = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Our Fleet
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            Featured <span className="text-primary">Vehicles</span>
          </h2>
          <p className="text-muted-foreground animate-slide-up delay-100">
            Discover our selection of premium vehicles perfect for any occasion, from business trips to family adventures.
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {car.name}
                </h3>

                {/* Features */}
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{car.features.seats}</span>
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
                  <span className="font-semibold text-primary">{car.price}</span>
                  <Link to="/contact">
                    <Button size="sm" className="btn-secondary rounded-full text-xs">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in delay-500">
          <Link to="/cars">
            <Button variant="outline" className="btn-outline-gold rounded-full px-8 py-6 group">
              View All Vehicles
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
