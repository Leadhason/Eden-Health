import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Award, Fingerprint, Flower, Sparkles, Leaf } from 'lucide-react';

const features = [
  {
    title: "Expert Expertise",
    description: "Our artisans are master-certified in textured hair health, ensuring safe, transformative results for every hair type.",
    icon: <Award size={32} strokeWidth={1.5} />
  },
  {
    title: "Tailored Formulations",
    description: "No two crowns are alike. We custom-blend treatments based on your specific porosity, density, and lifestyle needs.",
    icon: <Fingerprint size={32} strokeWidth={1.5} />
  },
  {
    title: "Organic Ingredients",
    description: "We strictly use sulfate-free, paraben-free, and organic product lines that nourish without harsh chemicals.",
    icon: <Leaf size={32} strokeWidth={1.5} />
  },
  {
    title: "Advanced Therapy",
    description: "Utilizing steam therapy and microscopic analysis to treat hydration and damage at the deepest cellular level.",
    icon: <Sparkles size={32} strokeWidth={1.5} />
  },
  {
    title: "Sanctuary Ambience",
    description: "Escape to our oasis. Enjoy private styling suites and aromatherapy designed for your absolute peace.",
    icon: <Flower size={32} strokeWidth={1.5} />
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-cream border-b border-stone-200/50">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="The Eden Standard" title="Why Choose Us?" center />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 lg:p-10 border border-stone-100 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 hover:border-terra/20">
              <div className="mb-6 text-terra/80 bg-terra/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-terra group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">{feature.title}</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
          
          {/* CTA Card */}
           <div className="bg-terra p-8 lg:p-10 flex flex-col justify-center items-center text-center text-white border border-terra group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="100" fill="currentColor" />
                    <circle cx="100%" cy="100%" r="100" fill="currentColor" />
                 </svg>
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-4">Experience Eden</h3>
                <p className="font-sans opacity-90 mb-8 leading-relaxed">Ready to transform your hair journey with us?</p>
                <Button variant="dark" className="w-full justify-center">Book Now</Button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;