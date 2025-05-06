import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, FileText, Car } from 'lucide-react';
import CallbackModal from './CallbackModal'; // ✅ adjust path if needed

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Car className={`h-8 w-auto ${isScrolled ? 'text-hyundai-blue' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-hyundai-blue' : 'text-white'}`}>
              HYUNDAI
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#models" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-hyundai-blue' : 'text-white hover:text-hyundai-silver'}`}>
              Models
            </a>
            <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-hyundai-blue' : 'text-white hover:text-hyundai-silver'}`}>
              Services
            </a>
            <a href="#offers" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-hyundai-blue' : 'text-white hover:text-hyundai-silver'}`}>
              Offers
            </a>
            <a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-hyundai-blue' : 'text-white hover:text-hyundai-silver'}`}>
              About Us
            </a>
          </nav>

          {/* Quick Links + Callback */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#locate"
              className={`flex items-center text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-hyundai-blue' : 'text-white hover:text-hyundai-silver'
              }`}
            >
              <MapPin className="h-4 w-4 mr-1" />
              Dealer Locator
            </a>
            <a
              href="#price"
              className={`flex items-center text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-hyundai-blue' : 'text-white hover:text-hyundai-silver'
              }`}
            >
              <FileText className="h-4 w-4 mr-1" />
              Price List
            </a>
            <button
              onClick={() => setIsCallbackOpen(true)}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-colors border ${
                isScrolled
                  ? 'border-hyundai-blue text-hyundai-blue hover:bg-hyundai-blue hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-hyundai-blue'
              }`}
            >
              Request a Callback
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-hyundai-blue' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-hyundai-blue' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-[60px] left-0 right-0 h-screen bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container mx-auto py-6 px-4">
            <nav className="flex flex-col space-y-6">
              <a href="#models" className="text-lg font-medium text-gray-800 hover:text-hyundai-blue" onClick={toggleMenu}>
                Models
              </a>
              <a href="#services" className="text-lg font-medium text-gray-800 hover:text-hyundai-blue" onClick={toggleMenu}>
                Services
              </a>
              <a href="#offers" className="text-lg font-medium text-gray-800 hover:text-hyundai-blue" onClick={toggleMenu}>
                Offers
              </a>
              <a href="#about" className="text-lg font-medium text-gray-800 hover:text-hyundai-blue" onClick={toggleMenu}>
                About Us
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a href="#locate" className="flex items-center text-gray-800 hover:text-hyundai-blue mb-4" onClick={toggleMenu}>
                  <MapPin className="h-5 w-5 mr-2" />
                  Dealer Locator
                </a>
                <a href="#price" className="flex items-center text-gray-800 hover:text-hyundai-blue" onClick={toggleMenu}>
                  <FileText className="h-5 w-5 mr-2" />
                  Price List
                </a>
              </div>
              <button
                onClick={() => {
                  setIsCallbackOpen(true);
                  toggleMenu();
                }}
                className="mt-4 px-4 py-2 w-full border border-hyundai-blue text-hyundai-blue rounded-md hover:bg-hyundai-blue hover:text-white transition"
              >
                Request a Callback
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Modal */}
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </>
  );
};

export default Header;
