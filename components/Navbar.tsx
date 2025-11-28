import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left: Contact Info */}
          <div className="hidden lg:flex items-center gap-2 text-charcoal/80 font-sans text-sm tracking-wide">
            <Phone size={16} />
            <span>Call: +233 54 528 6220</span>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center gap-2">
            {/* Abstract Logo Icon */}
            <div className="text-terra">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-serif text-2xl font-bold text-charcoal tracking-tight">Eden Healthy Hair</span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:block">
              <Button>Book Appointment</Button>
            </div>
            
            <button 
              className="text-charcoal hover:text-terra transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-cream flex flex-col items-center justify-center animate-fade-in">
          <button 
            className="absolute top-6 right-6 text-charcoal hover:text-terra transition-colors p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center gap-8 text-center">
            <a href="#about" className="text-4xl font-serif text-charcoal hover:text-terra transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="text-4xl font-serif text-charcoal hover:text-terra transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="text-4xl font-serif text-charcoal hover:text-terra transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Process</a>
            <a href="#team" className="text-4xl font-serif text-charcoal hover:text-terra transition-colors" onClick={() => setMobileMenuOpen(false)}>Team</a>
            <a href="#gallery" className="text-4xl font-serif text-charcoal hover:text-terra transition-colors" onClick={() => setMobileMenuOpen(false)}>Results</a>
            
            <hr className="w-12 border-charcoal/20 my-2" />
            
            <div className="flex flex-col gap-6 mt-2">
              <span className="flex items-center justify-center gap-2 text-xl font-serif text-charcoal/80">
                <Phone size={24}/> +233 54 528 6220
              </span>
              <Button className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;