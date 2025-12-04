import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CarShowcase from '@/components/home/CarShowcase';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CarShowcase />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
