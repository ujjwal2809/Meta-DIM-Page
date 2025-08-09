import React from 'react';
import { Shield, Target, Award, Clock } from 'lucide-react';

const Objections = () => {
  const objections = [
    {
      icon: Target,
      concern: "I didn't go to a top college",
      response: "You don't need pedigree. You need proof of skill — which our projects and mentorship give you.",
      proof: "70% of our successful graduates are from Tier-2 and Tier-3 colleges"
    },
    {
      icon: Shield,
      concern: "Everyone's applying to the same jobs",
      response: "Our network of 450+ companies opens doors others can't access. You get direct referrals, not job board competition.",
      proof: "95% of our students get interviews through direct referrals"
    },
    {
      icon: Award,
      concern: "Will this really get me a job?",
      response: "We offer placement assurance and real interview prep from actual hiring managers. Your success is our success.",
      proof: "100% placement guarantee with our comprehensive support system"
    },
    {
      icon: Clock,
      concern: "I don't have time for lengthy courses",
      response: "Our 12-week intensive program is designed for working professionals. Classroom training ensures focused learning.",
      proof: "Average time to job placement: 3 months including training"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 mb-4 lg:mb-6">
            Still Have Doubts?
            <span className="block text-brand-500">Let's Address Them Honestly</span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            We understand your concerns. Here's how we address the most common worries our students have before joining.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {objections.map((objection, index) => (
            <div key={index} className="group">
              <div className="card p-6 lg:p-8 hover:shadow-card-hover transition-all duration-300 border border-neutral-200">
                <div className="flex items-start gap-4 mb-4 lg:mb-6">
                  <div className="flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 bg-brand-50 rounded-md flex-shrink-0">
                    <objection.icon className="w-5 lg:w-6 h-5 lg:h-6 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-2">
                      "{objection.concern}"
                    </h3>
                  </div>
                </div>
                
                <div className="ml-14 lg:ml-16 space-y-4">
                  <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                    {objection.response}
                  </p>
                  
                  <div className="bg-success-50 rounded-md p-3 lg:p-4 border border-success-200">
                    <p className="text-success-600 text-xs lg:text-sm font-medium">
                      ✓ Proof: {objection.proof}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="card p-4 lg:p-6 text-center border border-neutral-200">
            <Shield className="w-8 lg:w-12 h-8 lg:h-12 text-brand-500 mx-auto mb-3 lg:mb-4" />
            <h4 className="text-base lg:text-lg font-semibold text-neutral-900 mb-2">Job Assistance</h4>
            <p className="text-neutral-600 text-xs lg:text-sm">Dedicated career support to guide you every step of the way, until you're placed.</p>
          </div>
          
          <div className="card p-4 lg:p-6 text-center border border-neutral-200">
            <Award className="w-8 lg:w-12 h-8 lg:h-12 text-brand-500 mx-auto mb-3 lg:mb-4" />
            <h4 className="text-base lg:text-lg font-semibold text-neutral-900 mb-2">Lifetime Support</h4>
            <p className="text-neutral-600 text-xs lg:text-sm">Continue to get career guidance and job referrals even after placement.</p>
          </div>
          
          <div className="card p-4 lg:p-6 text-center border border-neutral-200">
            <Target className="w-8 lg:w-12 h-8 lg:h-12 text-brand-500 mx-auto mb-3 lg:mb-4" />
            <h4 className="text-base lg:text-lg font-semibold text-neutral-900 mb-2">Small Batch Sizes</h4>
            <p className="text-neutral-600 text-xs lg:text-sm">Maximum 20 students per batch for personalized attention.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objections;