import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "Silk Press Mastery", "Hydration Therapy", "Natural Curls", "Precision Cuts", "Color Melt", 
    "Scalp Treatments", "Extensions", "Bridal Styling", "Silk Press Mastery", "Hydration Therapy"
  ];

  return (
    <div className="w-full bg-cream-dark py-6 overflow-hidden border-y border-stone-200/50">
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="h-0.5 w-8 bg-terra/50 inline-block mr-8"></span>
            <span className="text-3xl md:text-5xl font-serif font-bold text-black/10 uppercase tracking-tight">
              {item}
            </span>
          </div>
        ))}
         {/* Duplicate for seamless loop */}
         {items.map((item, index) => (
          <div key={`dup-${index}`} className="flex items-center mx-8">
            <span className="h-0.5 w-8 bg-terra/50 inline-block mr-8"></span>
            <span className="text-3xl md:text-5xl font-serif font-bold text-black/10 uppercase tracking-tight">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;