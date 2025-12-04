import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-secondary-foreground">Rolling</span>
                <span className="text-xs text-secondary-foreground/70 -mt-1">Car Rental</span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for reliable and affordable car rental services in Lagos. 
              A division of Rolling Business Solution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/cars', label: 'Our Cars' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <a href="tel:07068999680" className="hover:text-primary block">07068999680</a>
                  <a href="tel:08057968468" className="hover:text-primary block">08057968468</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:rollingbiz1@gmail.com" className="text-sm text-secondary-foreground/80 hover:text-primary">
                  rollingbiz1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">24/7 Support Available</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-primary">Our Locations</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  Poatson Complex, 254 Agege Motor Road, Ikeja Lagos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  MMA1 & MMA2 Terminal, Lagos Airport
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Rolling Car Rental. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/70">
              A division of Rolling Business Solution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
