import React from 'react';
import { Building, CheckCircle, TrendingUp, Users } from 'lucide-react';

const Companies = () => {
  const companyLogos = [
    { name: "TCS", category: "IT Services", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Infosys", category: "IT Services", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "Wipro", category: "IT Services", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "Tech Mahindra", category: "IT Services", logo: "https://logo.clearbit.com/techmahindra.com" },
    { name: "HCL", category: "IT Services", logo: "https://logo.clearbit.com/hcltech.com" },
    { name: "Cognizant", category: "IT Services", logo: "https://logo.clearbit.com/cognizant.com" },
    { name: "Accenture", category: "Consulting", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "Capgemini", category: "Consulting", logo: "https://logo.clearbit.com/capgemini.com" },
    { name: "IBM", category: "Technology", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Oracle", category: "Technology", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "Microsoft", category: "Technology", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", category: "Cloud", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Flipkart", category: "E-commerce", logo: "https://logo.clearbit.com/flipkart.com" },
    { name: "Paytm", category: "Fintech", logo: "https://logo.clearbit.com/paytm.com" },
    { name: "Zomato", category: "Food Tech", logo: "https://logo.clearbit.com/zomato.com" },
    { name: "Swiggy", category: "Food Tech", logo: "https://logo.clearbit.com/swiggy.com" },
  ];

  const placementStats = [
    {
      icon: Users,
      number: "450+",
      label: "Partner Companies",
      description: "Actively hiring DevOps professionals",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Placement Rate",
      description: "Students placed within 3 months",
    },
    {
      icon: CheckCircle,
      number: "₹8.5L",
      label: "Average Package",
      description: "Starting salary for our graduates",
    },
    {
      icon: Building,
      number: "100%",
      label: "Placement Assurance",
      description: "We guarantee job placement",
    },
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 mb-4 lg:mb-6">
            Our Students Work At
            <span className="block text-brand-500">India's Top Companies</span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Skip the job boards and get direct access to our exclusive network of 450+ companies 
            actively seeking DevOps and Cloud professionals.
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {companyLogos.map((company, index) => (
            <div key={index} className="group">
              <div className="p-3 lg:p-4 hover:shadow-lg transition-all duration-300 h-24 flex flex-col items-center justify-center border border-neutral-200 bg-white rounded-md">
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="h-8 lg:h-10 w-auto object-contain mb-2"
                  loading="lazy"
                  onError={(e) => (e.target.src = '/fallback-logo.png')} // optional fallback
                />
                <div className="text-center">
                  <div className="text-neutral-900 font-semibold text-xs lg:text-sm">{company.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Process */}
        <div className="p-6 lg:p-8 border border-neutral-200 bg-white rounded-lg">
          <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 text-center mb-6 lg:mb-8">
            Our Placement Process
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <span className="text-lg lg:text-2xl font-semibold text-brand-500">1</span>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-2">Resume & Profile Building</h4>
              <p className="text-neutral-600 text-sm lg:text-base">
                Optimize your resume with hiring manager insights. Build a compelling LinkedIn profile.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <span className="text-lg lg:text-2xl font-semibold text-brand-500">2</span>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-2">Interview Preparation</h4>
              <p className="text-neutral-600 text-sm lg:text-base">
                Mock interviews with real hiring managers. Technical and behavioral interview coaching.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 lg:w-16 h-12 lg:h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <span className="text-lg lg:text-2xl font-semibold text-brand-500">3</span>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-2">Direct Company Referrals</h4>
              <p className="text-neutral-600 text-sm lg:text-base">
                Get referred directly to our partner companies. Skip the application queue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
