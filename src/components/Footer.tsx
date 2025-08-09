import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="container-custom py-8 lg:py-12">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-25 h-20 rounded-md flex items-center justify-center">
                <img 
                    src="/assets/images/testimonials/devopslogo2.png" 
                    alt="DevOps Institute Mumbai Logo" 
                    className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-white">DevOps Institute Mumbai</h3>
                <p className="text-xs text-neutral-400">Career Accelerator</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm lg:text-base">
              Transform your career with India's most effective DevOps and Cloud training program.
            </p>
            
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-12 h-12" />
                <span className="text-xs lg:text-sm">1st Floor, Awfis, Bhairav Milestone, Neheru Nagar, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Phone className="w-4 h-4" />
                <span className="text-xs lg:text-sm">+91 84510 86339</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Mail className="w-4 h-4" />
                <span className="text-xs lg:text-sm">support@devopsinstitutemumbai.co.in</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Clock className="w-4 h-4" />
                <span className="text-xs lg:text-sm">Mon-Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">Quick Links</h4>
            <ul className="space-y-1 lg:space-y-2">
              {['About Program', 'Course Curriculum', 'Placement Process', 'Success Stories', 'Free Resources', 'Career Guidance'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors text-xs lg:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Training Programs */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">Training Programs</h4>
            <ul className="space-y-1 lg:space-y-2">
              {['DevOps Engineering', 'Cloud Architecture', 'Kubernetes & Docker', 'CI/CD Pipelines', 'Infrastructure as Code', 'Site Reliability Engineering'].map((program) => (
                <li key={program}>
                  <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors text-xs lg:text-sm">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">Support</h4>
            <ul className="space-y-1 lg:space-y-2 mb-4 lg:mb-6">
              {['Contact Us', 'Student Portal', 'Technical Support', 'Payment Help', 'Refund Policy', 'Terms & Conditions'].map((support) => (
                <li key={support}>
                  <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors text-xs lg:text-sm">
                    {support}
                  </a>
                </li>
              ))}
            </ul>
            
            <div>
              <h5 className="text-white font-semibold mb-2 lg:mb-3 text-sm lg:text-base">Follow Us</h5>
              <div className="flex gap-2 lg:gap-3">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-7 lg:w-8 h-7 lg:h-8 bg-neutral-800 rounded-md flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-500 transition-all duration-300"
                  >
                    <social.icon className="w-3 lg:w-4 h-3 lg:h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-xs lg:text-sm">
              © 2024 DevOps Academy. All rights reserved.
            </p>
            <div className="flex gap-4 lg:gap-6 text-xs lg:text-sm">
              <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;