
import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-stone-200/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info */}
          <div>
            <SectionHeading title="Get in Touch" subtitle="Contact Us" />
            <p className="text-gray-600 mb-10 font-sans leading-relaxed text-lg">
              Have questions about our services or need help booking? Fill out the form or visit us at our studio. We can't wait to welcome you to Eden.
            </p>

            <div className="space-y-8 font-sans">
              <div className="flex items-start gap-6 group">
                <div className="bg-cream-dark p-4 rounded-full text-terra group-hover:bg-terra group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-1">Visit Us</h4>
                  <p className="text-gray-600 leading-relaxed">HRGW+QRV, Giffard Rd,<br/>Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-cream-dark p-4 rounded-full text-terra group-hover:bg-terra group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-1">Call Us</h4>
                  <p className="text-gray-600">+233 54 528 6220</p>
                  <p className="text-gray-500 text-sm mt-1">Available 9am - 8pm</p>
                </div>
              </div>

               <div className="flex items-start gap-6 group">
                <div className="bg-cream-dark p-4 rounded-full text-terra group-hover:bg-terra group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@edenhealthyhair.com</p>
                  <p className="text-gray-500 text-sm mt-1">Response within 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-cream-dark p-4 rounded-full text-terra group-hover:bg-terra group-hover:text-white transition-colors duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-charcoal mb-1">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sat - Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="bg-cream p-8 md:p-12 border border-stone-200 shadow-sm relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-terra/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>

            <h3 className="font-serif text-3xl text-charcoal mb-8 relative z-10">Request Appointment</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-charcoal/60">Name</label>
                  <input type="text" id="name" className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-terra transition-colors placeholder-gray-400" placeholder="Your Name" />
                </div>
                 <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-charcoal/60">Phone</label>
                  <input type="tel" id="phone" className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-terra transition-colors placeholder-gray-400" placeholder="Your Phone Number" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-charcoal/60">Email</label>
                <input type="email" id="email" className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-terra transition-colors placeholder-gray-400" placeholder="email@example.com" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-charcoal/60">Service</label>
                  <select id="service" className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-terra transition-colors text-gray-600">
                    <option>Select Service</option>
                    <option>Consultation</option>
                    <option>Silk Press</option>
                    <option>Hydration Treatment</option>
                    <option>Cut & Style</option>
                    <option>Color Service</option>
                    <option>Extensions</option>
                  </select>
                </div>
                 <div className="space-y-2">
                  <label htmlFor="date" className="text-xs font-bold uppercase tracking-widest text-charcoal/60">Preferred Date</label>
                  <input type="date" id="date" className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-terra transition-colors text-gray-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-charcoal/60">Message (Optional)</label>
                <textarea id="message" rows={4} className="w-full bg-white border border-stone-300 px-4 py-3 focus:outline-none focus:border-terra transition-colors placeholder-gray-400" placeholder="Any specific hair concerns or stylist preference?"></textarea>
              </div>

              <Button className="w-full justify-center mt-2">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
