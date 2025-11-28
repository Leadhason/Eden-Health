import React from 'react';
import SectionHeading from './SectionHeading';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Regular Client",
    image: "/alice-1.jfif",
    quote: "I couldn't be happier with my experience at Eden. From consultation to aftercare, everything was seamless, and I feel amazing. Amazing environment!"
  },
  {
    name: "Savannah Nguyen",
    role: "Bridal Client",
    image: "/alice-2.jfif",
    quote: "From the first consultation to my final results, Eden made the entire process easy and enjoyable. I'm beyond happy with my transformation."
  },
  {
    name: "Darlene Robertson",
    role: "Color Client",
    image: "/alice-3.jfif",
    quote: "Eden is hands down the best in the business. Their expertise and care made all the difference, and I'm so happy with the results. Best of the best!"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Testimonials" title="People's Observation" center />

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col h-full justify-between">
              <div>
                <div className="flex gap-1 text-terra mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-xl leading-relaxed text-charcoal/80 italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-serif text-lg text-charcoal font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;