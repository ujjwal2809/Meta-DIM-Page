import React from 'react';
import { Award, Building, Users, Code } from 'lucide-react';

const Instructors = () => {
  const instructors = [
    {
      name: "Vikash Singh",
      role: "Senior DevOps Architect",
      company: "Ex-Amazon, Current: Tech Mahindra",
      experience: "12+ years",
      image: "/assets/images/testimonials/Vikash_Singh.png",
      expertise: ["AWS", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      description: "Led DevOps transformation for 50+ enterprise clients. Specialist in cloud migration and automation.",
      certifications: ["AWS Solutions Architect", "Kubernetes Certified", "Terraform Certified"]
    },
    {
      name: "Neha Agarwal",
      role: "Cloud Solutions Architect",
      company: "Ex-Microsoft, Current: Accenture",
      experience: "10+ years",
      image: "/assets/images/testimonials/Neha_Agrawal.png",
      expertise: ["Azure", "Docker", "Monitoring", "Security"],
      description: "Designed cloud solutions for Fortune 500 companies. Expert in scalable architecture and security best practices.",
      certifications: ["Azure Solutions Architect", "Docker Certified", "Security+ Certified"]
    },
    {
      name: "Rajesh Kumar",
      role: "Hiring Manager & Mentor",
      company: "Current: Cognizant (15+ years)",
      experience: "15+ years",
      image: "/assets/images/testimonials/Rajesh_Kumar.jpg",
      expertise: ["Talent Acquisition", "Interview Strategy", "Career Coaching"],
      description: "Hired 500+ DevOps professionals. Knows exactly what hiring managers look for in candidates.",
      certifications: ["HR Certified", "Interview Expert", "Career Coach"]
    }
  ];

  return (
    <section id="instructors" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 mb-4 lg:mb-6">
            Learn From Industry Leaders
            <span className="block text-brand-500">Who Know What Works</span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Our instructors aren't just teachers — they're working professionals and hiring managers 
            who understand exactly what today's employers want.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="group">
              <div className="card p-6 lg:p-8 hover:shadow-card-hover transition-all duration-300 hover:transform hover:scale-105 border border-neutral-200">
                <div className="text-center mb-4 lg:mb-6">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-20 lg:w-24 h-20 lg:h-24 rounded-full object-cover mx-auto border-4 border-brand-200"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 lg:w-8 h-6 lg:h-8 bg-brand-500 rounded-full flex items-center justify-center">
                      <Award className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-1">{instructor.name}</h3>
                  <p className="text-brand-500 font-medium text-sm lg:text-base mb-1">{instructor.role}</p>
                  <p className="text-neutral-500 text-xs lg:text-sm mb-2">{instructor.company}</p>
                  
                  <div className="inline-flex items-center gap-2 bg-brand-50 px-3 py-1 rounded-md">
                    <Users className="w-3 lg:w-4 h-3 lg:h-4 text-brand-500" />
                    <span className="text-brand-500 text-xs lg:text-sm font-medium">{instructor.experience}</span>
                  </div>
                </div>
                
                <p className="text-neutral-600 text-center mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  {instructor.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-neutral-900 font-semibold mb-2 flex items-center gap-2 text-sm lg:text-base">
                      <Code className="w-3 lg:w-4 h-3 lg:h-4 text-brand-500" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-brand-50 text-brand-600 px-2 lg:px-3 py-1 rounded-md text-xs lg:text-sm border border-brand-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-neutral-900 font-semibold mb-2 flex items-center gap-2 text-sm lg:text-base">
                      <Building className="w-3 lg:w-4 h-3 lg:h-4 text-brand-500" />
                      Certifications
                    </h4>
                    <div className="space-y-1">
                      {instructor.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="text-neutral-600 text-xs lg:text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <div className="card p-6 lg:p-8 border border-neutral-200">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-3 lg:mb-4">
              Get Personal Mentorship From Industry Experts
            </h3>
            <p className="text-neutral-600 mb-4 lg:mb-6 text-sm lg:text-base">
              Our instructors don't just teach — they mentor, guide, and support you until you land your dream job.
            </p>
            <button className="btn-primary">
              Meet Your Mentors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;