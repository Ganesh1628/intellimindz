import React, { useEffect, useState } from 'react';

// It's assumed Tailwind CSS is set up globally in your React project.
// If not, you would typically include it in your main index.html or via a PostCSS setup.
// For the Inter font, ensure it's linked in your project's public/index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

// Import the logo image
// The path is relative to this file. Adjust if your file structure is different.
// Assuming this App.js file (or the component importing this) is in 'src/components/About_us/'
// and images are in 'src/assests/images/' (note the spelling of "assests")
import intellimindzLogo from '../../assests/images/about.png';
import aboutProfile from '../../assests/images/aboutprofile.jpeg';

// Component for SVG Icons to keep JSX cleaner
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const CertificationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l5-5-5-5" /><path d="M7 10h10M12 2a10 10 0 100 20 10 10 0 000-20z" /><path d="M12 6v6l-2 2" /></svg>
);

const LiveProjectsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const PlacementSupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const MockInterviewsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
);

const PersonalizedLearningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l.19.01.2.02.18.03.07.01.17.04.16.05.07.02.15.06.14.07.06.03.13.08.12.09.05.04.11.1.1.11.04.05.09.12.08.13.03.06.07.14.06.15.02.07.05.16.04.17.02.07.03.18.01.07.02.19.01.2.01.2.01.2.01.2-.01.2-.01.2-.01.19-.01.07-.02.18-.03.07-.02.17-.04.07-.02.16-.05.06-.03.15-.06.14-.07.05-.04.13-.08.12-.09.04-.05.11-.1.1-.11.03-.06.09-.12.08-.13.02-.07.07-.14.06-.15.02-.07.05-.16.04-.17.01-.07.03-.18.01-.07.02-.19.01-.2.01H12m0-2.69A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.52-4.48-10-10-10z" /><path d="M9 16h6M12 12v4M12 8a2 2 0 00-2 2h4a2 2 0 00-2-2z" /></svg>
);

const ResumeBuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);


// Main App Component
function App() {
    // State for the current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // useEffect to update year if component remounts (though unlikely for year to change in session)
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
        console.log("Intellimindz Clone page (React version) loaded successfully.");
    }, []);

    // Styles that were in <style> tags in HTML.
    // For a larger React app, these would typically go into a global CSS file or be handled by CSS Modules or styled-components.
    const globalStyles = `
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg-overlay::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.2); /* UPDATED: Subtle overlay for slight darkening */
            z-index: 1; 
        }
        .hero-content {
            position: relative;
            z-index: 2;
        }
        .header-with-bg {
            background-color: #f97316; /* Tailwind orange-500 */
            /* Removed background-image properties */
        }
    `;

    return (
        <>
            {/* Injecting global styles. In a real app, this is better handled via index.css or similar */}
            <style>{globalStyles}</style>
            <div className="bg-gray-100">
                {/* Header Section */}
                {/* UPDATED: Re-added 'hero-bg-overlay' class to header for subtle darkening */}
                <header className="text-white py-16 md:py-24 px-4 md:px-8 relative header-with-bg hero-bg-overlay">
                    <div className="container mx-auto hero-content"> {/* hero-content still needed for z-index of text */}
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-2">ABOUT US</h1>
                                <div className="flex items-center text-sm text-gray-200">
                                    <span>Home</span>
                                    <ChevronRightIcon />
                                    <span className="font-semibold">About Us</span>
                                </div>
                            </div>
                            <div className="mt-8 md:mt-0 bg-white text-blue-700 p-4 rounded-lg shadow-lg flex items-center max-w-xs sm:max-w-sm text-center md:text-left">
                                <img
                                    src={aboutProfile}
                                    alt="Intellimindz Representative"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4 border-2 border-blue-500 object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/CCCCCC/FFFFFF?text=Img+Error'; }}
                                />
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold">10,000+</p>
                                    <p className="text-xs md:text-sm text-gray-600">Careers We Have Guided So Well!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* About Us Section */}
                <section className="py-16 md:py-24 bg-white px-4 md:px-8">
                    <div className="container mx-auto flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12 flex justify-center">
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg flex items-center justify-center">
                                <img
                                    src={intellimindzLogo} // Using the imported logo image
                                    alt="Intellimindz Logo"
                                    className="w-full h-full object-contain rounded-lg"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/384x384/CCCCCC/FFFFFF?text=Logo+Error'; }}
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 text-gray-700">
                            <h2 className="text-sm font-semibold text-blue-600 uppercase mb-2">About Us</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Intellimindz</h3>
                            <p className="mb-4 leading-relaxed">
                                IntelliMindz stands out as a premier Training Institute in Chennai, renowned for its comprehensive suite of IT and cloud training programs. As a leading training institute in Chennai, we cater to a diverse audience, including aspiring IT professionals, experienced job seekers looking to upskill, and employers seeking to enhance their team's capabilities. Our commitment lies in bridging the knowledge and technical skills gap by offering in-depth understanding of the latest, industry-demanded technologies.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                Distinguished as a top-tier training institute in Chennai, IntelliMindz provides flexible learning modalities, encompassing both engaging classroom sessions and convenient on-demand online training. Our curriculum is meticulously designed to impart relevant software skills, directly enhancing career prospects for our students. We understand that excelling in the dynamic IT industry necessitates robust training and expert guidance, which is why our experienced faculty are dedicated to nurturing talent.
                            </p>
                            <p className="leading-relaxed">
                                At IntelliMindz, a trusted Training Institute in Chennai, we go beyond theoretical knowledge, emphasizing practical application through exposure to real-world IT industry projects during the training period. Our ultimate goal is to empower individuals to develop their capabilities and achieve significant success in their professional journeys. For those seeking a high-quality training institute in Chennai that prioritizes practical learning and career advancement, IntelliMindz is the ideal destination.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="bg-gray-900 py-12 md:py-16 px-4 md:px-8">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-12">Our Highlights</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center text-white">
                                <p className="text-4xl md:text-5xl font-bold">10,000</p>
                                <p className="text-sm md:text-base">Placements</p>
                            </div>
                            <div className="text-center text-white">
                                <p className="text-4xl md:text-5xl font-bold">98%</p>
                                <p className="text-sm md:text-base">Placement Rate</p>
                            </div>
                            <div className="text-center text-white">
                                <p className="text-4xl md:text-5xl font-bold">500+</p>
                                <p className="text-sm md:text-base">Hiring Partners</p>
                            </div>
                            <div className="text-center text-white">
                                <p className="text-4xl md:text-5xl font-bold">36</p>
                                <p className="text-sm md:text-base">Lakhs Avg. CTC</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-8">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Why Choose Us</h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Intellimindz Training Institute is dedicated to providing
                            industry-relevant training programs, expert instruction, and comprehensive
                            career support to help you succeed in your professional journey.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1: Certifications */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center">
                                <div className="bg-orange-500 p-3 rounded-full mb-4 text-white">
                                    <CertificationIcon />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-orange-400">Certifications</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">Earn recognized certifications that validate your skills and enhance your career opportunities.</p>
                            </div>
                            {/* Card 2: Live Projects */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center">
                                <div className="bg-orange-500 p-3 rounded-full mb-4 text-white">
                                    <LiveProjectsIcon />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-orange-400">Live Projects</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">Gain practical experience by working on real-time projects designed to build your hands-on expertise.</p>
                            </div>
                            {/* Card 3: Placement Support */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center">
                                <div className="bg-orange-500 p-3 rounded-full mb-4 text-white">
                                    <PlacementSupportIcon />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-orange-400">Placement Support</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">Benefit from our dedicated placement assistance to help you secure a job in your chosen field.</p>
                            </div>
                            {/* Card 4: Mock Interviews */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center">
                                <div className="bg-orange-500 p-3 rounded-full mb-4 text-white">
                                    <MockInterviewsIcon />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-orange-400">Mock Interviews</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">Improve your confidence and interview performance through regular mock interview sessions.</p>
                            </div>
                            {/* Card 5: Personalized Learning */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center">
                                <div className="bg-orange-500 p-3 rounded-full mb-4 text-white">
                                    <PersonalizedLearningIcon />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-orange-400">Personalized Learning</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">Experience tailored learning paths with direct opportunities to connect with top companies.</p>
                            </div>
                            {/* Card 6: Resume Building Sessions */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center">
                                <div className="bg-orange-500 p-3 rounded-full mb-4 text-white">
                                    <ResumeBuildingIcon />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-orange-400">Resume Building Sessions</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">Strengthen your resume with expert guidance to make it stand out to recruiters.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-gray-800 text-white py-8 text-center px-4 md:px-8">
                    <p>&copy; {currentYear} Intellimindz. All rights reserved.</p>
                    <p className="text-sm text-gray-400 mt-1">Website Clone for Demonstration</p>
                </footer>
            </div>
        </>
    );
}

export default App;