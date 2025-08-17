import React, { useState, useEffect } from 'react';
import { Phone, Play, X, CheckCircle, Award, Users, Code, Star, ArrowRight, Zap } from 'lucide-react';
import FormModal from './FormModal';
import { useFormModal } from '../hooks/useFormModal';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { isOpen, openModal, closeModal } = useFormModal();

  const roles = ['DevOps Engineer', 'Cloud Engineer', 'SRE'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f8f9fa%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative container-custom pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Microsoft Partnership Badge */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-md border border-neutral-200 shadow-card">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/images/company-logos/microsoft.svg" 
                  alt="Microsoft" 
                  className="w-8 h-8"
                />
                <span className="text-neutral-600 font-medium">In partnership with Microsoft</span>
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-neutral-900">Land a high-paying</span>
                  <br />
                  <span className="text-neutral-900">
                    <span 
                      key={currentRole}
                      className="text-brand-500 inline-block min-w-[180px] transition-opacity duration-500 ease-in-out"
                    >
                      {roles[currentRole]}
                    </span>
                  </span>
                  <span className="text-neutral-900"> role</span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-neutral-600 font-normal">in just 12 weeks</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-neutral-600 font-normal max-w-2xl mx-auto lg:mx-0">
                  Take charge of your career with India's most effective DevOps training program
                </p>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-neutral-600 font-medium">95% Placement Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-500 rounded-full animate-pulse delay-300"></div>
                  <span className="text-neutral-600 font-medium">₹8.5L Avg Package</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warning-500 rounded-full animate-pulse delay-700"></div>
                  <span className="text-neutral-600 font-medium">450+ Partners</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openModal}
                  className="group relative inline-flex items-center justify-center btn-primary transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Get Free Career Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
               <button
                  className="btn-secondary flex items-center"
                  onClick={() => {
    document.getElementById('placement-training')?.scrollIntoView({ behavior: 'smooth' });
  }}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-neutral-600">
               </div>
            </div>
            
            {/* Right Column - Interactive Video & Features */}
            <div className="relative">
              {/* Main Video Container */}
              <div className="relative group">
                <div className="card p-8">
                  {/* Video Section */}
                  <div className="aspect-video bg-neutral-50 rounded-md mb-6 relative overflow-hidden group/video">
                    {/* YouTube Embedded Video */}
                    <iframe
                      className="w-full h-full rounded-md"
                      src="https://www.youtube.com/embed/cAcEKUifawY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=cAcEKUifawY&disablekb=1&fs=0&iv_load_policy=3"
                      title="DevOps Training Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={false}
                    ></iframe>
                    
                    {/* Floating elements around video */}
                    <div className="absolute top-4 right-4 bg-success-50 rounded-md px-3 py-1 border border-success-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                        <span className="text-success-600 text-xs font-medium">Live Now</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-50 rounded-md p-4 border border-neutral-200">
                      <Award className="w-6 h-6 text-brand-500 mb-2" />
                      <h4 className="text-neutral-900 font-semibold text-sm mb-1">100% Placement</h4>
                      <p className="text-neutral-600 text-xs">450+ hiring partners</p>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-md p-4 border border-neutral-200">
                      <Users className="w-6 h-6 text-brand-500 mb-2" />
                      <h4 className="text-neutral-900 font-semibold text-sm mb-1">Expert Training</h4>
                      <p className="text-neutral-600 text-xs">Industry professionals</p>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-md p-4 border border-neutral-200">
                      <CheckCircle className="w-6 h-6 text-success-500 mb-2" />
                      <h4 className="text-neutral-900 font-semibold text-sm mb-1">Certifications</h4>
                      <p className="text-neutral-600 text-xs">AWS, Azure, GCP</p>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-md p-4 border border-neutral-200">
                      <Code className="w-6 h-6 text-brand-500 mb-2" />
                      <h4 className="text-neutral-900 font-semibold text-sm mb-1">8+ Projects</h4>
                      <p className="text-neutral-600 text-xs">Real-world experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud Provider Logos */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center gap-4 bg-white rounded-md px-6 py-3 border border-neutral-200 shadow-card">
                  <span className="text-neutral-600 text-sm font-medium">Certified by:</span>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://logo.clearbit.com/amazon.com" 
                      alt="AWS" 
                      className="w-10 h-10"
                    />
                    <img 
                      src="https://logo.clearbit.com/azure.microsoft.com" 
                      alt="Azure" 
                      className="w-10 h-10"
                    />
                    <img 
                      src="https://logo.clearbit.com/cloud.google.com" 
                      alt="Google Cloud" 
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
         <div className="mt-16 lg:mt-20 text-center">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white rounded-md px-6 py-4 border border-neutral-200 shadow-card">
    
    <div className="flex items-center gap-2">
      <Star className="w-5 h-5 text-warning-500 fill-current" />
      <span className="text-neutral-900 font-semibold">4.9/5</span>
      <span className="text-neutral-600 text-sm">Student Rating</span>
    </div>

    {/* Divider visible only on sm+ screens */}
    <div className="hidden sm:block w-px h-6 bg-neutral-200"></div>

    <div className="flex items-center gap-2">
      <Users className="w-5 h-5 text-brand-500" />
      <span className="text-neutral-900 font-semibold">750+</span>
      <span className="text-neutral-600 text-sm">Success Stories</span>
    </div>

    {/* Divider visible only on sm+ screens */}
    <div className="hidden sm:block w-px h-6 bg-neutral-200"></div>

    <div className="flex items-center gap-2">
      <Award className="w-5 h-5 text-success-500" />
      <span className="text-neutral-900 font-semibold">12 Weeks</span>
      <span className="text-neutral-600 text-sm">To Career Change</span>
    </div>
  </div>
        </div>


      {/* Form Modal */}
      <FormModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title="Get Your Free Career Assessment"
        subtitle="Discover your path to a high-paying DevOps career"
      />
    </section>
  );
};

export default Hero;