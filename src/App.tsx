import React from 'react';
import Navbar from './components/Navbar';
import MobileBottomBar from './components/MobileBottomBar';
import Hero from './components/Hero';
import SuccessShowcase from './components/SuccessShowcase';
import TestimonialsNew from './components/TestimonialsNew';
import Solution from './components/Solution';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Instructors from './components/Instructors';
import Companies from './components/Companies';
import Objections from './components/Objections';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MobileBottomBar />
      <Hero />
      <SuccessShowcase />
      <TestimonialsNew />
      <Solution />
      <Features />
      <Testimonials />
      <Instructors />
      <Companies />
      <Objections />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;