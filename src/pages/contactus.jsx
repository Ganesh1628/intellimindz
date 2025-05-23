import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, BookOpen, Building, Send, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

// Ensure 'assests' spelling and path are correct for your project structure
import contactImageFromFile from '../assests/images/contact.png';

const SocialIcon = ({ children, href }) => (
    <a href={href || '#'} className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
        {children}
    </a>
);

// Consider renaming this component to ContactPage for better clarity if this file is contact.jsx
const App = () => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.firstName.trim()) errors.firstName = "First name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.mobile.trim()) {
            errors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobile) && !/^\+?\d{10,15}$/.test(formData.mobile)) {
            errors.mobile = "Mobile number is invalid. Use 10 digits or include country code.";
        }
        if (!formData.course.trim()) errors.course = "Course is required";
        if (!formData.city.trim()) errors.city = "City is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitMessage('');
        if (validateForm()) {
            setIsSubmitting(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setSubmitMessage('Form submitted successfully!');
            console.log('Form data submitted:', formData);
        } else {
            setSubmitMessage('Please correct the errors in the form.');
        }
    };

    const InputField = ({ label, name, placeholder, value, onChange, error, icon, type = "text" }) => (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <div className="relative rounded-md shadow-sm">
                {icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none w-10 pl-3">
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
                    className={`block w-full py-3 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm leading-normal ${icon ? 'pl-12 pr-4' : 'px-4'}`}
                />
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );

    return (
        // MODIFIED: Changed pt-24 to pt-28 to further increase top padding.
        // Adjust this value (e.g., pt-24, pt-32) if needed.
        <div className="min-h-screen bg-gray-50 font-sans pt-28">
            {/* Top Bar (This is part of the contact page component) */}
            <header className="bg-gray-800 text-white py-4 shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl font-bold">Contact Us</h1>
                    <p className="text-xs sm:text-sm">Home / Contact Us</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">
                        {/* Content for this heading was removed as per previous request. You can add a title like "Get in Touch" here if desired. */}
                    </h2>
                    <hr className="mb-6 sm:mb-8 border-gray-200"/>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                        {/* Form Section */}
                        <div className="w-full md:w-1/2 lg:w-3/5">
                            <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-2">Ready to Get Started?</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mb-6">
                                Your Email Address will not be Published.
                            </p>
                            <form onSubmit={handleSubmit} noValidate>
                                <InputField
                                    label="First Name"
                                    name="firstName"
                                    placeholder="Enter name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={formErrors.firstName}
                                    icon={<User size={18} className="text-gray-400" />}
                                />
                                <InputField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={formErrors.email}
                                    icon={<Mail size={18} className="text-gray-400" />}
                                />
                                <InputField
                                    label="Mobile No"
                                    name="mobile"
                                    type="tel"
                                    placeholder="Enter number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    error={formErrors.mobile}
                                    icon={<Phone size={18} className="text-gray-400" />}
                                />
                                <InputField
                                    label="Course"
                                    name="course"
                                    placeholder="Enter the course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    error={formErrors.course}
                                    icon={<BookOpen size={18} className="text-gray-400" />}
                                />
                                <InputField
                                    label="City"
                                    name="city"
                                    placeholder="Enter city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    error={formErrors.city}
                                    icon={<Building size={18} className="text-gray-400" />}
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out flex items-center justify-center disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        <Send size={18} className="mr-2" />
                                    )}
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                                {submitMessage && (
                                    <p className={`mt-4 text-sm text-center ${formErrors && Object.keys(formErrors).length > 0 && !isSubmitting ? 'text-red-500' : 'text-green-600'}`}>
                                        {submitMessage}
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center">
                            <img
                                src={contactImageFromFile}
                                alt="Contact representation"
                                className="rounded-lg object-cover w-full max-w-md h-auto md:h-[500px]"
                                onError={(e) => { e.target.src = 'https://placehold.co/400x500/CCCCCC/777777?text=Image+Load+Error&font=sans'; }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Address and Map */}
                <div className="mt-10 md:mt-16 bg-white p-6 sm:p-8 rounded-lg shadow-xl">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Address Details */}
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Reach Out to Us</h3>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-center">
                                    <Phone size={20} className="text-red-500 mr-3 flex-shrink-0" />
                                    <div>
                                        <a href="tel:+919655877677" className="hover:text-red-600 transition-colors">+91 9655877677</a>
                                        <span className="mx-1">/</span>
                                        <a href="tel:+919655877577" className="hover:text-red-600 transition-colors">+91 9655877577</a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Mail size={20} className="text-red-500 mr-3 flex-shrink-0" />
                                    <a href="mailto:info@intellimindz.com" className="hover:text-red-600 transition-colors">info@intellimindz.com</a>
                                </div>
                                <div className="flex items-start">
                                    <MapPin size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                                    <p>
                                        No: 7/15, Velachery Rd, opp. to The Chennai Mobiles, United Colony, Medavakkam, Chennai, Tamil Nadu 600100
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">Keep in Touch</h4>
                                <div className="flex space-x-4">
                                    <SocialIcon href="#"><Facebook size={24} /></SocialIcon>
                                    <SocialIcon href="#"><Instagram size={24} /></SocialIcon>
                                    <SocialIcon href="#"><Youtube size={24} /></SocialIcon>
                                    <SocialIcon href="#"><Twitter size={24} /></SocialIcon>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-auto bg-gray-200 rounded-lg shadow-md overflow-hidden">
                            <iframe
                                title="Google Map Location - Intellimindz"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7961245101246!2d80.18335171140168!3d12.920821215935401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0046621343%3A0x3eb65a424fdcfc17!2sIntellimindz!5e0!3m2!1sen!2sin!4v1747758670324!5m2!1sen!2sin" // Ensure this is the correct map embed URL
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer placeholder */}
            {/* <footer className="bg-gray-800 text-white py-6 mt-10 md:mt-16"> ... </footer> */}
        </div>
    );
};

export default App; // Consider renaming to ContactPage