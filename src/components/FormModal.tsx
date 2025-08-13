import React, { useState, useEffect } from 'react';
import { X, User, Phone, Mail, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  experience: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  experience?: string;
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

const FormModal: React.FC<FormModalProps> = ({ 
  isOpen, 
  onClose, 
  title = "Get Your Free Career Assessment",
  subtitle = "Take the first step towards your DevOps career transformation"
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    experience: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const experienceOptions = [
    { value: '', label: 'Select your experience level' },
    { value: 'fresher', label: 'Fresh Graduate (0 years)' },
    { value: '0-2', label: '0-2 Years Experience' },
    { value: '2-5', label: '2-5 Years Experience' },
    { value: '5+', label: '5+ Years Experience' }
  ];

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        experience: ''
      });
      setErrors({});
      setSubmitStatus('idle');
    }
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Phone Number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^\d{10,}$/;
      const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phoneNumber = 'Phone number must be at least 10 digits';
      }
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyWNfLAXWObKzXDJy5MdOMGAfATkr5U5jA2s293Lvm9Fa9Jz7z9QxRvcBu0PkG4oZ7s/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
          email: formData.email.trim(),
          experience: formData.experience,
          timestamp: new Date().toISOString(),
          source: 'DevOps Institute Mumbai Website'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors p-2 hover:bg-neutral-50 rounded-full z-10"
          disabled={isSubmitting}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
              {title}
            </h3>
            <p className="text-neutral-600 text-sm">
              {subtitle}
            </p>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
              <div>
                <p className="text-success-700 font-medium">Success!</p>
                <p className="text-success-600 text-sm">We'll contact you within 24 hours.</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-red-700 font-medium">Submission Failed</p>
                <p className="text-red-600 text-sm">Please try again or call us directly.</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                First Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.firstName 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'
                  }`}
                  placeholder="Enter your first name"
                  disabled={isSubmitting}
                />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                Last Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.lastName 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'
                  }`}
                  placeholder="Enter your last name"
                  disabled={isSubmitting}
                />
              </div>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-neutral-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.phoneNumber 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'
                  }`}
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address (Optional)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 transition-all"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-2">
                Experience Level *
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.experience 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'
                  }`}
                  disabled={isSubmitting}
                >
                  {experienceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.experience && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.experience}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full py-4 btn-primary disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : submitStatus === 'success' ? (
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Submitted Successfully!
                </div>
              ) : (
                'Get My Free Assessment'
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-neutral-500 text-center">
              We respect your privacy. Your information will only be used to contact you about our DevOps training program.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;