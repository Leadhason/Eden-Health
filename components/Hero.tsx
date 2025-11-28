import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16 relative">
            {/* Decoration Images - Absolute positioned relative to text container for responsiveness */}
            <div className="hidden lg:block absolute -top-12 -left-32 w-48 h-64 overflow-hidden rounded-sm shadow-xl transform -rotate-6 transition-transform hover:rotate-0 duration-500">
               <img src="https://picsum.photos/seed/hair1/300/400" alt="Beautiful hair model" className="w-full h-full object-cover" />
            </div>
            <div className="hidden lg:block absolute -bottom-8 -right-24 w-56 h-72 overflow-hidden rounded-sm shadow-xl transform rotate-6 transition-transform hover:rotate-0 duration-500 z-[-1]">
               <img src="https://picsum.photos/seed/hair2/300/400" alt="Salon interior" className="w-full h-full object-cover" />
            </div>

            <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] text-charcoal mb-8 animate-fade-in">
              Where Beauty <br/>
              <span className="italic font-light">Meets</span> Precision.
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto tracking-wide">
              "Transform your look, elevate your confidence with Eden. We specialize in healthy hair care tailored to your unique texture."
            </p>
            
            <div className="flex justify-center gap-4">
               <Button>View Services</Button>
               <Button variant="outline" withArrow={false}>Our Story</Button>
            </div>
        </div>

        {/* Mobile Image (Visible only on small screens) */}
        <div className="lg:hidden mt-8 w-full max-w-sm mx-auto overflow-hidden rounded-sm shadow-lg">
          <img src="https://picsum.photos/seed/hair3/600/400" alt="Salon work" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;