import React, { useState, useEffect } from 'react';
import { Phone, Mail, User, BookOpen, Building, Send, X } from 'lucide-react';
import contactImageFromFile from '../../assests/images/contacted.png';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    mobile: '',
    course: '',
    city: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ firstName: '', email: '', mobile: '', course: '', city: '' });
        setFormErrors({});
        setSubmitMessage('');
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile) && !/^\+?\d{10,15}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number is invalid. Use 10 digits or include country code.';
    }
    if (!formData.course.trim()) errors.course = 'Course is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage('');
    if (validateForm()) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitMessage('Form submitted successfully!');
      console.log('Form data submitted:', formData);
    } else {
      setSubmitMessage('Please correct the errors in the form.');
    }
  };

  const InputField = ({ label, name, placeholder, value, onChange, error, icon, type = 'text' }) => (
    <div className="mb-3">
      <label htmlFor={name} className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none w-8 pl-2">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`block w-full py-2 rounded-md border ${
            error ? 'border-red-500' : 'border-gray-300'
          } focus:ring-indigo-500 focus:border-indigo-500 text-xs ${icon ? 'pl-10 pr-3' : 'px-3'}`}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-sans animate-fadeIn">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out;
        }
      `}</style>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[70vh] overflow-y-auto relative animate-scaleUp mt-16">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row gap-6 pt-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Ready to Get Started?</h3>
            <p className="text-xs text-gray-600 mb-4">Your Email Address will not be Published.</p>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <InputField
                label="First Name"
                name="firstName"
                placeholder="Enter name"
                value={formData.firstName}
                onChange={handleChange}
                error={formErrors.firstName}
                icon={<User size={16} className="text-gray-400" />}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
                icon={<Mail size={16} className="text-gray-400" />}
              />
              <InputField
                label="Mobile No"
                name="mobile"
                type="tel"
                placeholder="Enter number"
                value={formData.mobile}
                onChange={handleChange}
                error={formErrors.mobile}
                icon={<Phone size={16} className="text-gray-400" />}
              />
              <InputField
                label="Course"
                name="course"
                placeholder="Enter the course"
                value={formData.course}
                onChange={handleChange}
                error={formErrors.course}
                icon={<BookOpen size={16} className="text-gray-400" />}
              />
              <InputField
                label="City"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
                error={formErrors.city}
                icon={<Building size={16} className="text-gray-400" />}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-md shadow-md transition duration-300 ease-in-out flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <Send size={16} className="mr-2" />
                )}
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {submitMessage && (
                <p
                  className={`mt-3 text-xs text-center ${
                    formErrors && Object.keys(formErrors).length > 0 && !isSubmitting ? 'text-red-500' : 'text-green-600'
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <img
              src={contactImageFromFile}
              alt="Contact representation"
              className="rounded-lg object-contain w-full h-48"
              style={{ width: "340px", height: "340px", maxWidth: "100%" }}
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = e.target.nextSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div
              style={{
                display: 'none',
                textAlign: 'center',
                width: '100%',
                height: '192px',
                border: '1px dashed #ccc',
                padding: '16px',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <p className="text-gray-500 text-xs">Image not found.</p>
              <p className="text-gray-400 text-xs mt-1">
                Please check path: {typeof contactImageFromFile === 'string' ? contactImageFromFile : 'Image path not set'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;