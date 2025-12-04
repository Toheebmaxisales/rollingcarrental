import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 animate-slide-up">
            Ready to Hit the <span className="text-primary">Road?</span>
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 animate-slide-up delay-100">
            Book your perfect ride today and experience the Rolling Car Rental difference. 
            Professional service, premium vehicles, unbeatable value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <Link to="/contact">
              <Button className="btn-primary rounded-full px-8 py-6 text-lg group">
                Book Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:07068999680">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-secondary-foreground/20 animate-fade-in delay-300">
            <p className="text-secondary-foreground/70 text-sm mb-2">Or reach us directly at</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:07068999680" className="text-primary hover:underline font-medium">
                07068999680
              </a>
              <span className="text-secondary-foreground/50">•</span>
              <a href="tel:08057968468" className="text-primary hover:underline font-medium">
                08057968468
              </a>
              <span className="text-secondary-foreground/50">•</span>
              <a href="mailto:rollingbiz1@gmail.com" className="text-primary hover:underline font-medium">
                rollingbiz1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
