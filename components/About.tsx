import React from 'react';
import Button from './Button';
import { Play } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    "10,000+ Happy clients served",
    "5+ Years of expert care",
    "20+ Specialized treatments.",
    "30+ Skilled professionals."
  ];

  return (
    <section id="about" className="bg-terra text-white pt-24 md:pt-32 pb-12 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center">
            {/* Tagline */}
            <span className="text-sm font-sans tracking-widest uppercase mb-8 block text-white/80">
                • About us
            </span>
            
            {/* Main Quote */}
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12 text-center max-w-5xl">
                "We are dedicated to elevating standards in beauty and care, creating confidence and timeless elegance for everyone."
            </h2>
            
            {/* CTA */}
            <div className="mb-24">
                <Button variant="dark">Discover More</Button> 
            </div>

            {/* Stats Row */}
            <div className="w-full flex flex-wrap justify-center lg:justify-between gap-6 md:gap-8 py-8 border-t border-white/20 mb-8">
                {stats.map((stat, index) => (
                    <span key={index} className="font-serif text-lg md:text-xl text-white/90">
                        {`{ ${stat} }`}
                    </span>
                ))}
            </div>

            {/* Video Player */}
            <div className="w-full relative cursor-pointer group overflow-hidden shadow-2xl">
                <div className="relative aspect-[16/9] md:aspect-[2.35/1] w-full bg-stone-900">
                    <img 
                        src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2500&auto=format&fit=crop" 
                        alt="Brand Video" 
                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-cream rounded-full flex items-center justify-center shadow-lg">
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-terra ml-1 fill-current" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;