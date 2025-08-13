import React, { useState, useEffect } from 'react';
import { Phone, Play, X, CheckCircle, Award, Users, Code, Star, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['DevOps Engineer', 'Cloud Engineer', 'SRE'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a 10-digit phone number';
    if (!formData.experience) newErrors.experience = 'Select your experience level';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSuccess(true);
      setTimeout(() => {
        setShowForm(false);
        setSuccess(false);
        setFormData({ name: '', email: '', phone: '', experience: '' });
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* ... rest of your hero code above stays same ... */}

      {/* Popup Lead Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-md p-8 border border-neutral-200 shadow-card-hover max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors p-2 hover:bg-neutral-50 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
            
            {!success ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-500 rounded-md flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Get Your Free Career Assessment
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Discover your path to a high-paying DevOps career
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-md focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="fresher">Fresh Graduate</option>
                      <option value="0-2">0-2 Years</option>
                      <option value="2-5">2-5 Years</option>
                    </select>
                    {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 btn-primary transform hover:scale-105 shadow-lg"
                  >
                    Get My Free Assessment
                  </button>
                  
                  <p className="text-xs text-neutral-600 text-center flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                    Only 5 consultation slots left this week
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-success-500 mx-auto" />
                <h4 className="text-xl font-semibold text-neutral-900">Form Submitted!</h4>
                <p className="text-neutral-600">We’ll contact you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
