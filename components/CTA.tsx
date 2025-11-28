
import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center bg-terra text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" fill="currentColor"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <span className="text-sm font-sans tracking-[0.2em] uppercase mb-6 block text-white/80">
            Start Your Journey
        </span>
        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
          Ready to Embrace Your <span className="italic">Healthiest</span> Hair?
        </h2>
        <p className="font-sans text-xl text-white/90 mb-12 max-w-xl mx-auto leading-relaxed">
            Join the Eden family today. Experience expert care tailored specifically to your unique texture and lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="dark" className="w-full sm:w-auto justify-center">Book Appointment</Button>
            <Button variant="outline" className="w-full sm:w-auto justify-center border-white text-white hover:bg-white hover:text-terra hover:border-white">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
