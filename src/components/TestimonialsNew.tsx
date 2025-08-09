import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';

const TestimonialsNew = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);

  const filters = ['All', 'Tester', 'Developer', 'Non-tech', 'Fresher', 'Support'];

  const testimonials = [
    {
      id: 1,
      name: "Sajag Porwal",
      category: "Developer",
      image: "/assets/images/testimonials/Sagaj_Porwal.png",
      linkedinUrl: "https://www.linkedin.com/in/sajag-porwal",
      previousCompany: "Local IT Company",
      previousRole: "Junior Developer",
      currentCompany: "Sales Force",
      currentRole: "DevOps Engineer",
      testimonial: "After 8 months of rejections, I got 3 offers in 2 weeks after completing this program. The placement support is incredible and the mentors really understand what hiring managers are looking for. The hands-on projects gave me the confidence to tackle real-world scenarios during interviews.",
      previousLogo: "LC",
      currentLogo: "https://logo.clearbit.com/salesforce.com"
    },
    {
      id: 2,
      name: "Purva Mishra",
      category: "Tester",
      image: "/assets/images/testimonials/Rectangle-5.png",
      linkedinUrl: "https://www.linkedin.com/in/purva-mishra-889779166",
      previousCompany: "Testing Services",
      previousRole: "Manual Tester",
      currentCompany: "Master Card",
      currentRole: "Cloud Engineer",
      testimonial: "The mentors taught me exactly what hiring managers look for. I went from 0 interviews to 5 job offers in my first month of job search. The transition from manual testing to DevOps seemed impossible, but the structured curriculum and personal guidance made it achievable.",
      previousLogo: "TS",
      currentLogo: "https://logo.clearbit.com/mastercard.com"
    },
    {
      id: 3,
      name: "Saad Shaikh",
      category: "Fresher",
      image: "/assets/images/testimonials/Saad_Shaikh.png",
      linkedinUrl: "https://www.linkedin.com/in/saad-shaikh789",
      previousCompany: "College Graduate",
      previousRole: "Student",
      currentCompany: "RevSure AI",
      currentRole: "Site Reliability Engineer",
      testimonial: "As a fresh graduate with no industry experience, I was worried about competing with experienced professionals. This program not only taught me technical skills but also how to present myself professionally. The mock interviews and resume guidance were game-changers.",
      previousLogo: "GRAD",
      currentLogo: "/assets/images/testimonials/62fe2830964fbb752b905466_REVSURE-logo-V1-transparent.png"
    },
    {
      id: 4,
      name: "Anushka Gaikwad",
      category: "Non-tech",
      image: "/assets/images/testimonials/Anushka_Gaikwad.png",
      linkedinUrl: "https://www.linkedin.com/in/anushka-gaikwad-303b18371",
      previousCompany: "Banking Sector",
      previousRole: "Operations Executive",
      currentCompany: "Timespro",
      currentRole: "DevOps Analyst",
      testimonial: "Coming from a non-technical background, I thought DevOps was out of reach. The instructors broke down complex concepts into digestible parts and provided continuous support. The career transition seemed daunting, but the structured approach made it smooth and achievable.",
      previousLogo: "BANK",
      currentLogo: "/assets/images/testimonials/images.png"
    },
    {
      id: 5,
      name: "Ganaram Chaudhary",
      category: "Support",
      image: "/assets/images/testimonials/Ganesh_Chaudhary.png",
      linkedinUrl: "https://www.linkedin.com/in/ganaram-choudhary-562372169",
      previousCompany: "IT Support",
      previousRole: "Technical Support",
      currentCompany: "Iron Mountain",
      currentRole: "Cloud Operations Engineer",
      testimonial: "I was stuck in support roles for years with no clear path forward. This program opened doors I didn't even know existed. The industry connections and direct placement support helped me skip the usual job hunting struggle and land a role that truly utilizes my potential.",
      previousLogo: "SUP",
      currentLogo: "https://logo.clearbit.com/ironmountain.com"
    },
    {
      id: 6,
      name: "Shriharsh Gaikwad",
      category: "Developer",
      image: "/assets/images/testimonials/Shriharsh_Gaikwad.png",
      linkedinUrl: "https://www.linkedin.com/in/shriharshgaikwad",
      previousCompany: "Startup",
      previousRole: "Full Stack Developer",
      currentCompany: "engagely.ai",
      currentRole: "DevOps Consultant",
      testimonial: "The transition from development to DevOps required understanding infrastructure and operations deeply. The hands-on labs and real-world projects provided exactly that experience. The mentorship from industry experts gave me insights I couldn't get anywhere else.",
      previousLogo: "ST",
      currentLogo: "/assets/images/testimonials/Engagely-Logo.png"
    }
  ];

  const filteredTestimonials = activeFilter === 'All'
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  const currentTestimonials = filteredTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(0);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 mb-4 lg:mb-6">
            750+ Success Stories
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Real transformations from professionals just like you
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-md font-medium transition-all duration-300 text-sm lg:text-base ${
                activeFilter === filter
                  ? 'bg-brand-500 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="card p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col border border-neutral-200">
                {/* Header with photo and name */}
                <div className="flex items-center gap-4 mb-4 lg:mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 lg:w-16 h-12 lg:h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg lg:text-xl font-semibold text-neutral-900">{testimonial.name}</h3>
                      <a 
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-500 hover:text-brand-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Career Transition Visualization */}
                <div className="mb-4 lg:mb-6">
                  <div className="flex items-center justify-between">
                    {/* Previous */}
                    <div className="text-center flex-1">
                      <div className="w-12 lg:w-16 h-12 lg:h-16 bg-neutral-100 rounded-md flex items-center justify-center mx-auto mb-2">
                        <span className="text-xs lg:text-sm font-semibold text-neutral-700">{testimonial.previousLogo}</span>
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-600 font-medium">{testimonial.previousRole}</p>
                      <p className="text-xs text-neutral-500">{testimonial.previousCompany}</p>
                    </div>

                    {/* Arrow */}
                    <div className="px-4">
                      <ArrowRight className="w-6 lg:w-8 h-6 lg:h-8 text-brand-500" />
                    </div>

                    {/* Current */}
                    <div className="text-center flex-1">
                      <div className="w-16 lg:w-20 h-16 lg:h-20 bg-brand-50 rounded-md flex items-center justify-center mx-auto mb-2">
                        <img 
                          src={testimonial.currentLogo} 
                          alt="Company Logo"
                          className="h-12 lg:h-16 max-w-full object-contain"
                        />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-800 font-medium">{testimonial.currentRole}</p>
                      <p className="text-xs text-neutral-600">{testimonial.currentCompany}</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1">
                  <p className="text-neutral-700 leading-relaxed text-sm lg:text-base mb-4">
                    {testimonial.testimonial}
                  </p>
                </div>

                {/* LinkedIn Verification */}
                <div className="pt-4 border-t border-neutral-200">
                  <a 
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Read on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <button className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-neutral-100 text-neutral-700 rounded-md hover:bg-neutral-200 transition-all duration-300 text-sm lg:text-base">
            Read all success stories
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={prevPage}
              disabled={totalPages <= 1}
              className="p-2 lg:p-3 bg-neutral-100 text-neutral-700 rounded-md hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 lg:w-5 h-4 lg:h-5" />
            </button>
            
            <span className="text-neutral-600 text-sm lg:text-base">
              {currentPage + 1} / {totalPages}
            </span>
            
            <button
              onClick={nextPage}
              disabled={totalPages <= 1}
              className="p-2 lg:p-3 bg-neutral-100 text-neutral-700 rounded-md hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 lg:w-5 h-4 lg:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;