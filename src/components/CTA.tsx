import React from 'react';
import { Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import FormModal from './FormModal';
import { useFormModal } from '../hooks/useFormModal';

const CTA = () => {
  const { isOpen, openModal, closeModal } = useFormModal();

  const benefits = [
    "Real-world project training with portfolio building",
    "Direct guidance from hiring managers and industry experts", 
    "Placement support with 450+ company network",
    "Career clarity and momentum in just 12 weeks",
    "100% placement assurance"
  ];

  return (
    <section className="section-padding bg-neutral-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-amber-400/20 backdrop-blur-sm rounded-md border border-amber-400/30 mb-6 lg:mb-8">
    <Clock className="w-4 lg:w-5 h-4 lg:h-5 text-amber-400 mr-2" />
    <span className="text-amber-300 font-medium text-sm lg:text-base">⚡ Only 5 consultation slots left this week</span>
</div>

          
          <h2 className="text-3xl lg:text-4xl xl:text-6xl font-semibold text-white mb-6 lg:mb-8 leading-tight">
            Ready to Finally Land the
            <span className="block text-brand-500">
              Job You Deserve?
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-neutral-300 mb-8 lg:mb-12 leading-relaxed">
            Stop wasting time on job boards that ignore your applications. 
            Start your transformation today with India's most effective DevOps career program.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Benefits List */}
            <div className="text-left space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6">What You'll Get:</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 lg:w-6 h-5 lg:h-6 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-base lg:text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Card */}
            <div className="card p-6 lg:p-8 bg-white">
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-4 lg:mb-6 text-center">
                Book Your Free Career Assessment
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-semibold text-brand-500 mb-2">₹0</div>
                  <p className="text-neutral-600">Completely Free Consultation</p>
                </div>
                
                <div className="space-y-2 lg:space-y-3 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 lg:w-4 h-3 lg:h-4 text-success-500" />
                    <span>Personalized career roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 lg:w-4 h-3 lg:h-4 text-success-500" />
                    <span>Resume review by hiring experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 lg:w-4 h-3 lg:h-4 text-success-500" />
                    <span>Salary negotiation guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 lg:w-4 h-3 lg:h-4 text-success-500" />
                    <span>No obligation to enroll</span>
                  </div>
                </div>
                
                <button 
                  onClick={openModal}
                  className="w-full group inline-flex items-center justify-center btn-primary transform hover:scale-105 hover:shadow-xl"
                >
                  <Phone className="w-4 lg:w-5 h-4 lg:h-5 mr-2 group-hover:animate-pulse" />
                  Book Free Consultation Now
                  <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="card p-6 lg:p-8 bg-warning-50 border border-warning-200">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-3 lg:mb-4">
              Still Unsure? Let's Talk.
            </h3>
            <p className="text-neutral-600 text-base lg:text-lg mb-4 lg:mb-6">
              Our experts will guide you through your next best step — even if it's not with us. 
              We're here to help you succeed, regardless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openModal} className="btn-secondary">
                Schedule Free Call
              </button>
              <button className="btn-secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Modal */}
      <FormModal 
        isOpen={isOpen} 
        onClose={closeModal}
        title="Book Your Free Career Assessment"
        subtitle="Get personalized guidance for your DevOps career journey"
      />
    </section>
  );
};

export default CTA;