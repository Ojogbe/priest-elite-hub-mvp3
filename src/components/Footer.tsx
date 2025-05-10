
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/lovable-uploads/a3aaa974-98d0-405e-98e8-e6f695b9f6bc.png" alt="Priest Elite Hub" className="h-12" />
            </Link>
            <p className="text-gray-600 mb-4">Raising Traders, Empowering Lives</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-priest-orange">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-priest-orange">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-priest-orange">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-priest-orange">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-priest-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-priest-orange transition-colors">Home</Link></li>
              <li><Link to="/mentorship" className="text-gray-600 hover:text-priest-orange transition-colors">Mentorship Plans</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-priest-orange transition-colors">Blog & Updates</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-priest-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-priest-orange">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@priestelitehub.com</li>
              <li>WhatsApp: +1234567890</li>
              <li>Telegram: @PriestEliteHub</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-priest-orange">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get the latest updates and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-priest-orange w-full"
              />
              <Button className="bg-priest-orange hover:bg-priest-orange-dark text-white rounded-l-none">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Priest Elite Hub. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Includes 1-year free website management & 2 months social media content/design
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
