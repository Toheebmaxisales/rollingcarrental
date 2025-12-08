import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import heroCar from '@/assets/cars/car-1.jpeg';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['07068999680', '08057968468'],
    action: 'tel:07068999680',
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['rollingbiz1@gmail.com'],
    action: 'mailto:rollingbiz1@gmail.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['24/7 Support Available'],
    action: null,
  },
];

const locations = [
  {
    name: 'Head Office',
    address: 'Poatson Complex, 254 Agege Motor Road by Airport Bus, Ikeja Lagos. H8RP+7Q9, Lagos 101233, Lagos',
  },
  {
    name: 'MMA1 Terminal',
    address: 'GAT Terminal, Murtala Muhammed Airport, Lagos',
  },
  {
    name: 'MMA2 Terminal',
    address: 'MMA2 International Terminal, Lagos',
  },
];

const carOptions = [
  'Toyota Land Cruiser Prado',
  'Toyota Land Cruiser V8',
  'Toyota Camry',
  'Toyota Coaster Bus',
  'Toyota Hiace Bus',
  'Toyota Sienna',
  'Other (specify in message)',
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carChoice: '',
    date: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const whatsappMessage = `
*New Booking Request*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Car Choice: ${formData.carChoice}
Preferred Date: ${formData.date}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/2347068999680?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Request Sent!',
      description: 'We\'ve opened WhatsApp with your booking details. Please send the message to complete your request.',
    });

    setIsSubmitting(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      carChoice: '',
      date: '',
      message: '',
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCar} 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-primary rounded-full" />
          <div className="absolute bottom-10 left-10 w-40 h-40 border border-primary rounded-full" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 animate-slide-down">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 animate-slide-up">
              Let's Get You <span className="text-primary">Rolling</span>
            </h1>
            <p className="text-secondary-foreground/90 text-lg animate-slide-up delay-100">
              Ready to book? Have questions? We're here to help. Reach out to us through any of the channels below 
              or fill out the booking request form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl text-center hover-lift hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    {info.action ? (
                      <a href={info.action} className="hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Form & Locations Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-right">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Request a <span className="text-primary">Booking</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="rounded-xl"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Car Choice *</label>
                    <select
                      name="carChoice"
                      value={formData.carChoice}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a vehicle</option>
                      {carOptions.map((car) => (
                        <option key={car} value={car}>{car}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your rental needs..."
                    rows={4}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full rounded-xl py-6 text-lg group"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      Send Request via WhatsApp
                      <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Locations */}
            <div className="animate-slide-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Our <span className="text-primary">Locations</span>
              </h2>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{location.name}</h3>
                      <p className="text-muted-foreground text-sm">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-secondary rounded-2xl">
                <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:07068999680"
                    className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    07068999680
                  </a>
                  <a
                    href="tel:08057968468"
                    className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    08057968468
                  </a>
                  <a
                    href="mailto:rollingbiz1@gmail.com"
                    className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    rollingbiz1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
              Find Us on <span className="text-primary">Google Maps</span>
            </h2>
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3366247393387!2d3.3517579!3d6.6027778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9227a6e0b1e9%3A0x8f6f5f6f6f6f6f6f!2sPoatson%20Complex%2C%20254%20Agege%20Motor%20Rd%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1701696000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rolling Car Rental Location"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href="https://maps.app.goo.gl/jSynJc3eirAbPThY8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
