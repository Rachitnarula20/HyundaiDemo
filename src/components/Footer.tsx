import React from 'react';
import { Car, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hyundai-blue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-8 w-auto text-white" />
              <span className="ml-2 text-xl font-bold">HYUNDAI</span>
            </div>
            <p className="text-white/70 mb-6">
              Hyundai Motor India Ltd. is committed to making premium mobility solutions accessible 
              to every Indian family.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#twitter" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#instagram" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#youtube" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#models" className="text-white/70 hover:text-white transition-colors">Models</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#offers" className="text-white/70 hover:text-white transition-colors">Offers & Promotions</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#news" className="text-white/70 hover:text-white transition-colors">News & Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#dealer" className="text-white/70 hover:text-white transition-colors">Find a Dealer</a></li>
              <li><a href="#test-drive" className="text-white/70 hover:text-white transition-colors">Book a Test Drive</a></li>
              <li><a href="#brochure" className="text-white/70 hover:text-white transition-colors">Download Brochure</a></li>
              <li><a href="#service-appointment" className="text-white/70 hover:text-white transition-colors">Service Appointment</a></li>
              <li><a href="#roadside" className="text-white/70 hover:text-white transition-colors">Roadside Assistance</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <Phone className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/70">1800-11-4645 (Toll Free)</span>
              </p>
              <p className="flex items-start">
                <Mail className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/70">care@hyundai.co.in</span>
              </p>
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Hyundai Motor India Ltd, Plot No.1, Sector 127, Noida - 201301, Uttar Pradesh
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© 2025 Hyundai Motor India Ltd. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-4 flex-wrap">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;