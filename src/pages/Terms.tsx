import Layout from '@/components/layout/Layout';
import { FileText } from 'lucide-react';

const termsData = [
  {
    title: "Bookings",
    content: "Payment confirms bookings. All vehicles are rented on a first-come, first-served basis."
  },
  {
    title: "Day Trip",
    content: "Service runs for 12 hours (e.g., 7 am–7 pm) but ends by 8pm regardless."
  },
  {
    title: "Night Trip",
    content: "Night trips (9pm–5 am) and charged same rate as day trips. Although rates may vary by distant locations."
  },
  {
    title: "Extra Hours",
    content: "Additional hours are billed hourly for up to 3 hours. Beyond this, a 12-hour mandatory charge applies, payable before trip ends."
  },
  {
    title: "24hrs Booking",
    content: "Client is responsible for vehicle & driver's welfare."
  },
  {
    title: "Security Services",
    content: "Booking escort/Mopol is optional & comes at an additional cost for the duration specified."
  },
  {
    title: "Fuelling",
    content: "Vehicle comes with fuel and in the case where it's agreed that client will fuel, vehicle will come with full tank and the client will equally return full tank after the job is done."
  },
  {
    title: "Restrictions",
    content: "Vehicles must stay within agreed locations unless otherwise approved."
  },
  {
    title: "Coverage",
    content: "Additional charges apply for distant locations (e.g., Agbara, Ajah, Alaba, Abijo, Badagry, Eleko, Epe, Ikorodu, Ibeju Lekki, Iyana Iba, Lakowe, Lasu, LBS, Ojo, Sangotedo, etc."
  },
  {
    title: "Unforeseen Circumstances",
    content: "In case of a mishap, replacements or repairs will be provided within a realistic time frame."
  }
];

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-secondary py-20">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="heading-primary mb-4">Terms and Conditions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before booking our services. These guidelines ensure smooth operations and clear expectations.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {termsData.map((term, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {term.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {term.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
            <p className="text-muted-foreground italic">
              These terms and conditions aim to ensure smooth operations and clear expectations between the rental company and the client.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Have questions about our terms? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
