import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const team = [
  {
    name: "Helena Jacklin",
    role: "Senior Stylist",
    image: "/alice-4.jfif"
  },
  {
    name: "Hashall Gibbs",
    role: "Color Specialist",
    image: "/alice-5.jfif"
  },
  {
    name: "Marlon Brando",
    role: "Texture Expert",
    image: "/alice-6.jfif"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading subtitle="Our Team" title="Meet the Artisans" />
          <div className="mb-12">
             <Button variant="outline">All Members</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors z-10 duration-500"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-3xl text-charcoal mb-2">{member.name}</h3>
                <p className="font-sans text-terra font-medium tracking-wide text-sm uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;