import React from 'react';
import { Star, Quote, MapPin, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "DevOps Engineer at TCS",
      location: "Mumbai",
      image: "/assets/images/testimonials/Rahul_Sharma.jpg",
      quote: "After 8 months of rejections, I got 3 offers in 2 weeks after completing this program. The placement support is incredible.",
      previousSalary: "₹3.5 LPA",
      currentSalary: "₹8.5 LPA",
      improvement: "143% increase"
    },
    {
      name: "Roshni Ahuja",
      role: "Cloud Engineer at Infosys",
      location: "Mumbai",
      image: "/assets/images/testimonials/Roshni_Ahuja.png",
      quote: "The mentors taught me exactly what hiring managers look for. I went from 0 interviews to 5 job offers in my first month of job search.",
      previousSalary: "₹4 LPA",
      currentSalary: "₹9.2 LPA",
      improvement: "130% increase"
    },
    {
      name: "Varun Mehta",
      role: "Site Reliability Engineer at Wipro",
      location: "Mumbai",
      image: "/assets/images/testimonials/Varun_Mehta.jpg",
      quote: "I was stuck at ₹5 LPA for 2 years. The industry insights and real project experience helped me break into a senior role immediately.",
      previousSalary: "₹5 LPA",
      currentSalary: "₹12 LPA",
      improvement: "140% increase"
    }
  ];

  const stats = [
    { number: "450+", label: "Partner Companies", icon: TrendingUp },
    { number: "95%", label: "Placement Rate", icon: Star },
    { number: "₹8.5L", label: "Average Salary", icon: TrendingUp },
    { number: "12", label: "Weeks Training", icon: Star }
  ];

  return (
    <section id="testimonials" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 mb-4 lg:mb-6">
            Real Students,
            <span className="block text-brand-500">Real Success Stories</span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how our program transformed careers just like yours.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="card p-4 lg:p-6 border border-neutral-200">
                <stat.icon className="w-6 lg:w-8 h-6 lg:h-8 text-brand-500 mx-auto mb-2 lg:mb-3" />
                <div className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-1">{stat.number}</div>
                <div className="text-neutral-600 text-xs lg:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="card p-6 lg:p-8 hover:shadow-card-hover transition-all duration-300 h-full border border-neutral-200">
                <div className="flex items-center gap-1 mb-4 lg:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 text-warning-500 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mb-4 lg:mb-6">
                  <Quote className="w-6 lg:w-8 h-6 lg:h-8 text-brand-500 opacity-50" />
                </div>
                
                <p className="text-neutral-600 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 lg:w-12 h-10 lg:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm lg:text-base">{testimonial.name}</h4>
                      <p className="text-brand-500 text-xs lg:text-sm">{testimonial.role}</p>
                      <div className="flex items-center gap-1 text-neutral-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-brand-50 rounded-md p-3 lg:p-4 border border-brand-200">
                    <div className="flex justify-between items-center text-xs lg:text-sm">
                      <span className="text-neutral-600">Before: {testimonial.previousSalary}</span>
                      <span className="text-brand-500 font-semibold">{testimonial.improvement}</span>
                      <span className="text-neutral-900 font-semibold">Now: {testimonial.currentSalary}</span>
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

export default Testimonials;