
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { 
    question: "What is the 'Eden' approach to healthy hair?", 
    answer: "Our approach prioritizes the long-term integrity of your hair fiber. We combine scientific analysis with organic treatments to ensure your style never compromises your hair's health. We specialize in textured hair and hydration therapy." 
  },
  { 
    question: "How often should I book a hydration treatment?", 
    answer: "For most clients with textured hair, we recommend a deep hydration or steam treatment every 2-3 weeks. This maintains moisture balance, elasticity, and shine, especially between styles." 
  },
  { 
    question: "Do I need a consultation before booking color?", 
    answer: "Yes, absolutely. To ensure we can achieve your desired look safely, we require a consultation for all new color clients. We perform a strand test to assess porosity and elasticity before applying any chemicals." 
  },
  { 
    question: "What products do you use?", 
    answer: "We curate our backbar with premium, sulfate-free, and paraben-free lines that focus on moisture retention. We use brands like Mizani, Olaplex, and our own signature organic blends for scalp treatments." 
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand life happens. We respectfully request at least 24 hours notice for cancellations. Cancellations made within 24 hours of the appointment time may be subject to a cancellation fee of 50% of the scheduled service."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-cream border-t border-stone-200/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading subtitle="Common Questions" title="Frequently Asked Questions" center />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-stone-200 bg-white transition-all duration-300 ${openIndex === index ? 'shadow-lg' : 'hover:border-terra/30'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-serif text-xl md:text-2xl pr-8 transition-colors duration-300 ${openIndex === index ? 'text-terra' : 'text-charcoal'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 text-terra transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 md:p-8 pt-0 font-sans text-gray-600 leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
