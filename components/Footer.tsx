import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-stone-800">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Brand */}
        <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-terra">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Eden Healthy Hair</h2>
            <p className="font-sans text-white/50 text-sm mt-3 tracking-widest uppercase">Where beauty meets precision</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 font-sans text-sm tracking-widest uppercase text-white/70">
            <a href="#" className="hover:text-terra transition-colors duration-300">Home</a>
            <a href="#services" className="hover:text-terra transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-terra transition-colors duration-300">About</a>
            <a href="#gallery" className="hover:text-terra transition-colors duration-300">Gallery</a>
            <a href="#contact" className="hover:text-terra transition-colors duration-300">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mb-16">
            <a href="#" className="text-white/60 hover:text-terra hover:scale-110 transition-all duration-300"><Instagram size={20} /></a>
            <a href="#" className="text-white/60 hover:text-terra hover:scale-110 transition-all duration-300"><Facebook size={20} /></a>
            <a href="#" className="text-white/60 hover:text-terra hover:scale-110 transition-all duration-300"><Linkedin size={20} /></a>
            <a href="#" className="text-white/60 hover:text-terra hover:scale-110 transition-all duration-300"><Twitter size={20} /></a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 font-sans gap-4">
            <p>© {new Date().getFullYear()} Eden Healthy Hair. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;