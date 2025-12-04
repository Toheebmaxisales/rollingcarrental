import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '2347068999680';
  const message = 'Hello! I would like to inquire about car rental services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full" />
    </a>
  );
};

export default WhatsAppButton;
