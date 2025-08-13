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
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^\d{10,}$/;
      const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phoneNumber = 'Phone number must be at least 10 digits';
      }
    }
    if (!formData.experience) newErrors.experience = 'Please select your experience level';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxF63OR0qJWOAvCs7ymfqKEZcplsz2Ib_donD6BBUEXe2b3bknEV3qJ8yeAz6GEYlOeNQ/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
            email: formData.email.trim(),
            experience: formData.experience
          })
        }
      );

      const responseData = await response.json();
      console.log('Response:', responseData);

      if (response.ok && responseData.status === 'success') {
        setSubmitStatus('success');
        setTimeout(() => onClose(), 2000);
      } else {
        throw new Error(responseData.message || 'Unknown error from server');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors p-2 hover:bg-neutral-50 rounded-full z-10" disabled={isSubmitting}>
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 lg:p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">{title}</h3>
            <p className="text-neutral-600 text-sm">{subtitle}</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-green-700 font-medium">Success!</p>
                <p className="text-green-600 text-sm">We’ll contact you within 24 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-red-700 font-medium">Submission Failed</p>
                <p className="text-red-600 text-sm">Please try again or call us directly.</p>
              </div>
            </div>
          )}

          {/* Your form fields remain unchanged */}
          {/* ... keep the existing form here ... */}

          {/* Rest of your form rendering is untouched */}
          {/* Submit button, inputs, and error messages are already well-written */}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
