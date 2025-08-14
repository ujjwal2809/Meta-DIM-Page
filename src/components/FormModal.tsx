import React, { useState } from 'react';
import { X, User, Phone, Mail, Briefcase } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  experience: string;
}

interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  phoneNumber: boolean;
  email: boolean;
  experience: boolean;
}

const FormModal: React.FC<FormModalProps> = ({ 
  isOpen, 
  onClose, 
  title = "Get Started Today", 
  subtitle = "Fill out the form below and we'll get back to you within 24 hours." 
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    experience: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    experience: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      phoneNumber: !formData.phoneNumber.trim(),
      email: !formData.email.trim(),
      experience: !formData.experience.trim()
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxF63OR0qJWOAvCs7ymfqKEZcplsz2Ib_donD6BBUEXe2b3bknEV3qJ8yeAz6GEYlOeNQ/exec", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === "success") {
          setSubmitStatus('success');
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            experience: ''
          });
          setTimeout(() => { onClose(); }, 2000);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setSubmitStatus('idle');
      setErrors({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        experience: false
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
            <p className="text-sm text-neutral-600 mt-1">{subtitle}</p>
          </div>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5 text-neutral-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 text-sm font-medium">
                ✅ Form submitted successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 text-sm font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            </div>
          )}

          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700">
              First Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'}`}
                placeholder="Enter your first name" disabled={isSubmitting}
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">First name is required</p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700">
              Last Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'}`}
                placeholder="Enter your last name" disabled={isSubmitting}
              />
            </div>
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">Last name is required</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-neutral-700">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${errors.phoneNumber ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'}`}
                placeholder="Enter your phone number" disabled={isSubmitting}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">Phone number is required</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'}`}
                placeholder="Enter your email address" disabled={isSubmitting}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required</p>
            )}
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label htmlFor="experience" className="block text-sm font-medium text-neutral-700">
              Experience *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text" id="experience" name="experience" value={formData.experience} onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-neutral-50 border rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${errors.experience ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:border-brand-500 focus:ring-brand-200'}`}
                placeholder="Describe your experience" disabled={isSubmitting}
              />
            </div>
            {errors.experience && (
              <p className="text-red-500 text-xs mt-1">Experience is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-neutral-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;