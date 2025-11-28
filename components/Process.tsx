import React from 'react';
import SectionHeading from './SectionHeading';
import { User, Activity, Scissors, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Free Consultation",
    desc: "Personalized discussions to understand your hair goals, history, and needs before we touch a single strand.",
    icon: <User size={48} className="text-charcoal group-hover:text-terra transition-colors" />
  },
  {
    id: 2,
    title: "Scalp & Hair Analysis",
    desc: "We assess your unique porosity and density to craft a personalized treatment plan for long-term health.",
    icon: <Activity size={48} className="text-charcoal group-hover:text-terra transition-colors" />
  },
  {
    id: 3,
    title: "Precision Treatment",
    desc: "Receive advanced care with precision cutting and coloring for stunning, safe results.",
    icon: <Scissors size={48} className="text-charcoal group-hover:text-terra transition-colors" />
  },
  {
    id: 4,
    title: "Home Care Guide",
    desc: "We equip you with the knowledge and products to maintain your salon-fresh look until your next visit.",
    icon: <ClipboardCheck size={48} className="text-charcoal group-hover:text-terra transition-colors" />
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-cream border-t border-stone-200/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Our Process" 
          title="Working Process" 
          center 
        />

        <div className="grid md:grid-cols-2 gap-px bg-stone-200/50 border border-stone-200/50">
          {steps.map((step) => (
            <div key={step.id} className="bg-cream p-12 lg:p-16 flex flex-col justify-between min-h-[300px] group hover:bg-white transition-colors duration-500">
              <div>
                <span className="font-serif text-charcoal/60 text-lg mb-4 block">
                  {`{ Step ${step.id} }`}
                </span>
                <h3 className="font-serif text-3xl text-charcoal mb-4">{step.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
              <div className="self-end mt-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;