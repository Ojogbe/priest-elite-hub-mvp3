
import React from 'react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hello, I'm interested in Priest Elite Hub mentorship." 
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button 
      onClick={handleClick}
      className="whatsapp-button bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-full shadow-lg flex items-center gap-2 px-4 py-6"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.6 6.8A7.8 7.8 0 0 0 12 4.8a8 8 0 0 0-8 8 8 8 0 0 0 1.2 4.2L4 22l5.4-1.4a8 8 0 0 0 3.8 1 8 8 0 0 0 8-8 7.8 7.8 0 0 0-3.6-6.8z"></path>
        <path d="M14.4 15.2a2.1 2.1 0 0 1-1.3.8 2.5 2.5 0 0 1-1.8-.3 10 10 0 0 1-2.9-2.3 11.8 11.8 0 0 1-1.9-3.2 2.1 2.1 0 0 1 .3-2.1 2.1 2.1 0 0 1 1.9-.9h.2c.1 0 .3 0 .4.4l.6 1.6c.1.5 0 1-.4 1.3-.2.1-.3.2-.2.3a7.8 7.8 0 0 0 1.5 1.7 6.8 6.8 0 0 0 1.8 1c.2.1.3 0 .4-.1l.7-.8.6-.3c.3.2.7.5 1 .8l.5.9v.1c.1.3-.1.6-.4.8z"></path>
      </svg>
      <span>Chat with Us</span>
    </Button>
  );
};

export default WhatsAppButton;
