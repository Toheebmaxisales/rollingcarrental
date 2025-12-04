import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Clock, MapPin, Award } from 'lucide-react';
import heroCar from '@/assets/cars/car-2.jpeg';

const heroSlides = [
  {
    title: 'Premium Car Rental',
    subtitle: 'Experience luxury and comfort',
    description: 'Your journey begins with the perfect ride. Choose from our premium fleet of vehicles.',
  },
  {
    title: 'Airport Pickup Service',
    subtitle: 'Seamless arrivals guaranteed',
    description: 'Land in Lagos and drive away. We ensure smooth airport transfers every time.',
  },
  {
    title: 'Corporate Solutions',
    subtitle: 'Business travel made easy',
    description: 'Professional vehicles for executives. Make every business trip exceptional.',
  },
];

const highlights = [
  { icon: Award, text: 'Affordable Rates' },
  { icon: Shield, text: 'Reliable Cars' },
  { icon: MapPin, text: 'Airport Pickup' },
  { icon: Clock, text: '24/7 Support' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroCar} 
          alt="Premium Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/50 rounded-full" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute pointer-events-none'
                  }`}
                >
                  {currentSlide === index && (
                    <>
                      <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium animate-slide-down">
                        {slide.subtitle}
                      </span>
                      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mt-4 animate-slide-up">
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i} className={i === 0 ? 'text-primary' : ''}>
                            {word}{' '}
                          </span>
                        ))}
                      </h1>
                      <p className="text-secondary-foreground/90 text-lg mt-4 max-w-lg animate-slide-up delay-200">
                        {slide.description}
                      </p>
                    </>
                  )}
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-300">
                <Link to="/contact">
                  <Button className="btn-primary rounded-full px-8 py-6 text-lg group">
                    Book Your Ride
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/cars">
                  <Button variant="outline" className="btn-outline-gold rounded-full px-8 py-6 text-lg">
                    View Our Fleet
                  </Button>
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex gap-2 justify-center lg:justify-start pt-4">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-secondary-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Empty right side - image is now background */}
          <div className="hidden lg:block" />
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center md:justify-start bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-4 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
