import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePhoneClick = () => {
    if (window.innerWidth >= 640) {
      // Desktop → show form
      setIsFormOpen(true);
    } else {
      // Mobile → open phone dialer
      window.location.href = 'tel:+918451086339';
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-20 h-20">
                <img 
                  src="/assets/images/testimonials/devopslogo1.png" 
                  alt="DevOps Institute Mumbai Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-neutral-900">DevOps Institute Mumbai</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#program" className="text-neutral-600 hover:text-brand-500 transition-colors font-medium">Program</a>
              <a href="#Features" className="text-neutral-600 hover:text-brand-500 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-neutral-600 hover:text-brand-500 transition-colors font-medium">Success Stories</a>
              <a href="#instructors" className="text-neutral-600 hover:text-brand-500 transition-colors font-medium">Instructors</a>
              <a href="#faq" className="text-neutral-600 hover:text-brand-500 transition-colors font-medium">FAQ</a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePhoneClick} 
                className="hidden sm:inline-flex items-center gap-2 btn-primary"
              >
                <Phone className="w-4 h-4" />
                +91 8451086339
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral-200">
              <div className="flex flex-col space-y-4">
                <a href="#program" className="text-neutral-600 hover:text-brand-500 transition-colors py-2 font-medium">Program</a>
                <a href="#features" className="text-neutral-600 hover:text-brand-500 transition-colors py-2 font-medium">Features</a>
                <a href="#testimonials" className="text-neutral-600 hover:text-brand-500 transition-colors py-2 font-medium">Success Stories</a>
                <a href="#instructors" className="text-neutral-600 hover:text-brand-500 transition-colors py-2 font-medium">Instructors</a>
                <a href="#faq" className="text-neutral-600 hover:text-brand-500 transition-colors py-2 font-medium">FAQ</a>
                <button 
                  onClick={handlePhoneClick} 
                  className="sm:hidden inline-flex items-center justify-center gap-2 btn-primary mt-4"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Popup Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Request a Callback</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full border border-neutral-300 p-2 rounded"
              />
              <input 
                type="tel" 
                placeholder="Your Phone Number" 
                className="w-full border border-neutral-300 p-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setIsFormOpen(false)} 
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-primary px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
