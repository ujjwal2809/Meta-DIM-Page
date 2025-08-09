import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What if I'm not from Mumbai?",
      answer: "Currently, we offer training only in-person in Mumbai to ensure the highest quality of mentorship and hands-on learning. We're planning to expand to other cities soon. However, our placement network covers opportunities across India."
    },
    {
      question: "Is there a assurance I'll get a job?",
      answer: "Yes! We provide 100% placement assurance. Our 95% placement rate speaks for itself, and we continue supporting you until you land a role."
    },
    {
      question: "I'm a complete beginner. Can I still join?",
      answer: "Absolutely! Our program is designed for beginners and career changers. We start from the basics and build up your skills systematically. Many of our most successful graduates had zero DevOps experience when they started."
    },
    {
      question: "What's the difference between this and online courses?",
      answer: "Unlike online courses, you get face-to-face mentorship, immediate doubt resolution, hands-on projects, and direct placement support. Our instructors are working professionals who understand current industry needs, not just academic concepts."
    },
    {
      question: "How much does the program cost?",
      answer: "Investment details are shared during your free consultation call, where we also discuss flexible payment options and ROI. Most students recover their investment within 2-3 months of getting placed with salary hikes averaging 130%."
    },
    {
      question: "What if I can't attend full-time?",
      answer: "Our program is designed for working professionals. Classes are scheduled in the evenings and weekends. However, you'll need to commit 15-20 hours per week including assignments and projects."
    },
    {
      question: "Do you help with resume and interview preparation?",
      answer: "Yes! Resume optimization, LinkedIn profile building, mock interviews, and salary negotiation are integral parts of our program. Our hiring manager mentors know exactly what employers look for."
    },
    {
      question: "What companies do your students typically get placed in?",
      answer: "Our students work at TCS, Infosys, Wipro, Tech Mahindra, Accenture, IBM, and many startups. Our network includes 450+ companies ranging from large enterprises to growing startups across various industries."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-brand-50 rounded-md border border-brand-200 mb-6 lg:mb-8">
            <HelpCircle className="w-4 lg:w-5 h-4 lg:h-5 text-brand-500 mr-2" />
            <span className="text-brand-600 font-medium text-sm lg:text-base">Got Questions?</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 mb-4 lg:mb-6">
            Frequently Asked
            <span className="block text-brand-500">Questions</span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Here are honest answers to the most common questions about our program and placement process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="card overflow-hidden hover:shadow-card-hover transition-all duration-300 border border-neutral-200">
                  <button
                    className="w-full p-4 lg:p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-base lg:text-lg font-semibold text-neutral-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-4 lg:w-5 h-4 lg:h-5 text-brand-500" />
                      ) : (
                        <ChevronDown className="w-4 lg:w-5 h-4 lg:h-5 text-neutral-500 group-hover:text-brand-500 transition-colors" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                      <div className="border-l-4 border-brand-200 pl-4">
                        <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <div className="card p-6 lg:p-8 max-w-2xl mx-auto border border-neutral-200">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-3 lg:mb-4">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 mb-4 lg:mb-6 text-sm lg:text-base">
              Get all your doubts cleared in a free one-on-one consultation with our career experts.
            </p>
            <button className="btn-primary">
              Book Free Consultation Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;