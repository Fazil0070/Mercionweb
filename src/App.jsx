import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import WhyMercion from './components/WhyMercion';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <Pricing />
        <Comparison />
        <WhyMercion />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
