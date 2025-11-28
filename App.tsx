
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Features from './components/Features';
import Process from './components/Process';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-charcoal bg-cream selection:bg-terra/30">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Process />
        <Team />
        <Gallery />
        <Contact />
        <Testimonials />
        <FAQ />
        <CTA />
      
      </main>
      <Footer />
    </div>
  );
}

export default App;
