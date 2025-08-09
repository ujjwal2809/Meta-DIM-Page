import React from 'react';

const SuccessShowcase = () => {
  const successStories = [
    {
      name: "Rahul Sharma",
      image: "/assets/images/testimonials/Rohan_Sharma.jpeg",
      companyLogo: "https://logo.clearbit.com/amazon.com"
    },
    {
      name: "Priya Patel",
      image: "/assets/images/testimonials/Priya_Patel.jpeg",
      companyLogo: "https://logo.clearbit.com/microsoft.com"
    },
    {
      name: "Amit Kumar",
      image: "/assets/images/testimonials/Amit_Kumar.jpeg",
      companyLogo: "https://logo.clearbit.com/google.com"
    },
    {
      name: "Sneha Singh",
      image: "/assets/images/testimonials/Sneha_Singh.jpeg",
      companyLogo: "https://logo.clearbit.com/techmahindra.com"
    },
    {
      name: "Neha Agrawal",
      image: "/assets/images/testimonials/Neha_Agarwa.jpeg",
      companyLogo: "https://logo.clearbit.com/tcs.com"
    },
    {
      name: "Shriharsh Gaikwad",
      image: "/assets/images/testimonials/Shriharsh_Gaikwad.png",
      companyLogo: "/assets/images/testimonials/Engagely-Logo.png"
    },
    {
      name: "Saad Shaikh",
      image: "/assets/images/testimonials/Saad_Shaikh.png",
      companyLogo: "/assets/images/testimonials/62fe2830964fbb752b905466_REVSURE-logo-V1-transparent.png"
    },
    {
      name: "Anushka Gaikwad",
      image: "/assets/images/testimonials/Anushka_Gaikwad.png",
      companyLogo: "/assets/images/testimonials/images.png"
    },
    {
      name: "Ganesh Chaudhary",
      image: "/assets/images/testimonials/Ganesh_Chaudhary.png",
      companyLogo: "https://logo.clearbit.com/ironmountain.com"
    },
    {
      name: "Rahul Saini",
      image: "/assets/images/testimonials/Rahul_Saini.jpeg",
      companyLogo: "https://logo.clearbit.com/oracle.com"
    }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedStories = [...successStories, ...successStories];

  return (
    <section className="section-padding bg-background-secondary overflow-hidden">
      <div className="container-custom mb-6 lg:mb-8">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-neutral-900 mb-2">
            750+ Successful Transitions
          </h2>
          <p className="text-neutral-600 text-sm lg:text-base">
            Join our growing community of DevOps professionals
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-background-secondary to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-background-secondary to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedStories.map((story, index) => (
            <div key={index} className="flex-shrink-0 mx-2 lg:mx-3">
              <div className="w-32 lg:w-40 h-40 lg:h-48 card p-3 lg:p-4 hover:shadow-card-hover transition-all duration-300 hover:scale-105 border border-neutral-200">
                <div className="flex flex-col h-full">
                  <div className="flex-1 flex items-center justify-center">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-14 lg:w-16 h-14 lg:h-16 rounded-full object-cover border-4 border-brand-100"
                    />
                  </div>
                  <div className="text-center mt-2 lg:mt-3">
                    <h4 className="text-xs lg:text-sm font-semibold text-neutral-800 mb-1">{story.name}</h4>
                    <div className="flex items-center justify-center h-10 lg:h-12">
                      <img 
                        src={story.companyLogo} 
                        alt="Company Logo"
                        className="h-8 lg:h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessShowcase;