
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Scissors, Droplet, Palette, Layers, Sparkles, Wind, Zap, Feather } from 'lucide-react';

type Category = 'Styling' | 'Treatments' | 'Color' | 'Extensions';

const servicesData: Record<Category, { 
  image: string; 
  items: { title: string; price: string; description: string; icon: React.ReactNode }[] 
}> = {
  'Styling': {
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop',
    items: [
      {
        title: "Signature Silk Press",
        price: "from $85",
        description: "Our signature thermal straightening service. Includes a detox shampoo, deep hydration steam treatment, blow dry, and ceramic press for body and shine without heat damage.",
        icon: <Wind size={24} />
      },
      {
        title: "Precision Designer Cut",
        price: "from $65",
        description: "A customized haircut tailored to your face shape and hair texture. Includes a wash and express style to showcase your new shape.",
        icon: <Scissors size={24} />
      },
      {
        title: "Natural Definition Twist-Out",
        price: "from $75",
        description: "Define your natural curl pattern with our two-strand twist service. Uses organic butters to lock in moisture and create long-lasting definition.",
        icon: <Feather size={24} />
      }
    ]
  },
  'Treatments': {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop',
    items: [
      {
        title: "Deep Hydration Steam",
        price: "from $45",
        description: "Intense moisture therapy using micro-mist technology to open the cuticle and infuse hydration deep into the cortex. Vital for dry, thirsty hair.",
        icon: <Droplet size={24} />
      },
      {
        title: "Scalp Detox & Exfoliation",
        price: "from $35",
        description: "A refreshing peppermint and tea tree treatment to remove product buildup, soothe itchiness, and stimulate healthy blood flow to the follicles.",
        icon: <Sparkles size={24} />
      },
      {
        title: "Protein Reconstruction",
        price: "from $50",
        description: "Strengthens weak, brittle strands. Recommended for color-treated or heat-styled hair to restore elasticity and prevent breakage.",
        icon: <Zap size={24} />
      }
    ]
  },
  'Color': {
    image: 'https://images.unsplash.com/photo-1620331313123-6c2683334663?q=80&w=2670&auto=format&fit=crop',
    items: [
      {
        title: "Single Process Color",
        price: "from $95",
        description: "All-over permanent or demi-permanent color application for gray coverage or a rich, uniform hue change. Includes a color-sealing gloss.",
        icon: <Palette size={24} />
      },
      {
        title: "Custom Balayage / Highlights",
        price: "from $185",
        description: "Hand-painted dimension customized to your cut. Creates a sun-kissed, natural look with softer grow-out lines.",
        icon: <Sparkles size={24} />
      },
      {
        title: "Gloss & Toner Refresh",
        price: "from $45",
        description: "Revive dull color and neutralize unwanted brassiness in between full color appointments. Adds incredible shine.",
        icon: <Droplet size={24} />
      }
    ]
  },
  'Extensions': {
    image: 'https://images.unsplash.com/photo-1519699047748-40baea614fda?q=80&w=2670&auto=format&fit=crop',
    items: [
      {
        title: "Luxury Sew-In Weft",
        price: "from $200",
        description: "Full or partial install using a flat braid foundation. Ideal for protective styling while maintaining access to the scalp.",
        icon: <Layers size={24} />
      },
      {
        title: "Tape-In Installation",
        price: "Consultation Required",
        description: "Seamless, flat-laying extensions perfect for adding volume and length. ideal for fine to medium density hair.",
        icon: <Feather size={24} />
      },
      {
        title: "Microlink / I-Tip Install",
        price: "Consultation Required",
        description: "Strand-by-strand installation for maximum versatility. Allows for high ponytails and easy scalp access.",
        icon: <Scissors size={24} />
      }
    ]
  }
};

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Styling');

  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Our Menu" title="Curated Services" center />

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {Object.keys(servicesData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as Category)}
              className={`font-serif text-xl md:text-2xl px-4 py-2 transition-all duration-300 border-b-2 ${
                activeCategory === category
                  ? 'text-terra border-terra'
                  : 'text-charcoal/40 border-transparent hover:text-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Image */}
            <div className="relative h-[400px] lg:h-[600px] w-full group overflow-hidden rounded-sm shadow-xl animate-fade-in">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                    key={servicesData[activeCategory].image} // Force re-render on change
                    src={servicesData[activeCategory].image} 
                    alt={activeCategory} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 animate-fade-in"
                />
            </div>

            {/* Right: Service List */}
            <div className="flex flex-col gap-8">
                {servicesData[activeCategory].items.map((item, index) => (
                    <div key={index} className="group border-b border-stone-200 pb-8 last:border-0 hover:border-terra/30 transition-colors duration-300">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <span className="text-terra/70 group-hover:text-terra transition-colors duration-300">
                                    {item.icon}
                                </span>
                                <h3 className="font-serif text-2xl text-charcoal group-hover:text-terra transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>
                            <span className="font-sans font-semibold text-lg whitespace-nowrap bg-cream-dark px-3 py-1 rounded-sm text-charcoal/80">
                                {item.price}
                            </span>
                        </div>
                        <p className="font-sans text-gray-500 leading-relaxed pl-9">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
