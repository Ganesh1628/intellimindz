import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
// import { IoMdArrowDropdown } from "react-icons/io"; // IoMdArrowDropdown was imported but not used, removed for tidiness. You can add it back if needed.
import "./header.css";
import intellimindzLogo from "../../assests/images/intellimindz.png"; // Ensure 'assests' spelling and path are correct
import whatsappIcon from "../../assests/images/whatsapp.png";    // Ensure 'assests' spelling and path are correct
// import { Link } from "react-router-dom"; // Link was imported but not explicitly used for new functionality, can be kept if other links use it.

// Import ContactModal - Adjust path if necessary
// Assuming Header.jsx is in src/components/Header/ and ContactModal.jsx is in src/components/Hero-Section/
import ContactModal from "../Hero-Section/ContactModal";

// TopHeader import seems to be a local component, ensure path is correct
import TopHeader from "./TopHeader";


const courseOptions = [
    "Software Development", "Web Development", "Mobile Development", "Software Testing",
    "Digital Marketing", "Cloud", "BPM", "Data Science", "Network & CyberSecurity",
    "Languages", "Database", "Informatica", "RPA", "Data Warehousing", "Others",
];

// onlineOptions and sapOptions remain unchanged, so they are omitted here for brevity
// but should be kept in your actual file.
const onlineOptions = [
    "Software Development", "Web Development", "Mobile Development", "Finance & Accounting",
    "Languages", "Cloud", "BPM", "Software Testing", "Network & CyberSecurity",
    "Data Science", "Informatica", "RPA", "Data Warehousing", "Others",
];

const sapOptions = [
    { display: "SAP FICO", url: "/sap_fico_training_in_chennai" },
    { display: "SAP ONLINE", url: "/sap_course" },
    { display: "SAP IM TRAINING", url: "/Sap_im_training"},
    { display: "SAP ABAP ", url: "/sap_abap_training_in_chennai"},
    { display: "SAP EHS ", url: "/sap_ehs_training_in_chennai"},
    { display: "SAP HANA ", url: "/sap_hana_training_in_chennai"},
];


const Header = () => {
    const menuRef = useRef();
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isOnlineOpen, setIsOnlineOpen] = useState(false); // Retained for existing dropdown logic
    // const [isSapOpen, setIsSapOpen] = useState(false); // isSapOpen was declared but not used, removed.
    const [animatePhone, setAnimatePhone] = useState(false);

    // State and functions for the Enroll Now modal
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const openEnrollModal = (e) => {
        e.preventDefault(); // Prevent default anchor behavior if it were still an anchor
        setIsEnrollModalOpen(true);
    };
    const closeEnrollModal = () => setIsEnrollModalOpen(false);

    // Modified navLinks to include onClick for Enroll Now
    const navLinks = [
        { display: "Home", url: "/" }, {},
        { display: "About Us", url: "/about_us" }, {},
        { display: "Courses", url: "#", hasDropdown: true }, {},
        { display: "Blog", url: "#" }, {}, // Assuming Blog is a direct link or handled elsewhere
        { display: "contact us", url: "/contactus" }, {},
        {
            display: (
                <div className="contact-enroll-container">
                    {/* Changed <a> to <button> for semantic correctness and to attach onClick */}
                    <button onClick={openEnrollModal} className="enroll-button-header">
                        Enroll now
                    </button>
                </div>
            ),
            isEnrollButton: true // Custom flag to identify this item if needed, though direct JSX is used
        }
    ];


    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatePhone(true);
            setTimeout(() => {
                setAnimatePhone(false);
            }, 1500);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <TopHeader />
            <header className="header">
                <Container>
                    <div className="navigation d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <h2 className="d-flex align-items-center gap-1">
                                <img
                                    src={intellimindzLogo}
                                    alt="Intellimindz Logo"
                                    className="w-100 intellimindz_img"
                                    style={{ height: "80px", width: "auto", marginLeft: "-35px" }}
                                />
                            </h2>
                        </div>

                        <div className="nav d-flex align-items-center gap-5">
                            <div className="nav__menu" ref={menuRef} onClick={(e) => {
                                // Prevent menu toggle when clicking inside enroll button container if it's part of the menu structure
                                if (e.target.closest('.enroll-button-header')) {
                                    return;
                                }
                                menuToggle();
                            }}>
                                <ul className="nav__list">
                                    {navLinks.map((item, index) => {
                                        // Handle empty objects if they are intentional spacers or mistakes
                                        if (!item.display) return <React.Fragment key={`spacer-${index}`}></React.Fragment>;

                                        return (
                                            <li key={index} className="nav__item">
                                                {item.hasDropdown ? (
                                                    <div
                                                        className="dropdown-wrapper"
                                                        onMouseEnter={() => {
                                                            if (item.display === "Courses") setIsCoursesOpen(true);
                                                            else if (item.display === "Online") setIsOnlineOpen(true);
                                                        }}
                                                        onMouseLeave={() => {
                                                            if (item.display === "Courses") setIsCoursesOpen(false);
                                                            else if (item.display === "Online") setIsOnlineOpen(false);
                                                        }}
                                                    >
                                                        <a href={item.url || '#'} className="dropdown-toggle"> {/* Added item.url || '#' */}
                                                            {item.display}{" "}
                                                        </a>
                                                        {((item.display === "Courses" && isCoursesOpen) ||
                                                          (item.display === "Online" && isOnlineOpen)) ? (
                                                            <ul className="dropdown-menu">
                                                                {item.display === "Courses" ? (
                                                                    courseOptions.map((option, idx) => (
                                                                        <li key={idx} className="dropdown-item">
                                                                            {option}
                                                                        </li>
                                                                    ))
                                                                ) : item.display === "Online" ? ( // Added check for "Online"
                                                                    onlineOptions.map((option, idx) => (
                                                                        <li key={idx} className="dropdown-item">
                                                                            {option}
                                                                        </li>
                                                                    ))
                                                                ) : null}
                                                            </ul>
                                                        ) : null}
                                                    </div>
                                                ) : (
                                                    // If item.display is JSX (like our button), render it directly.
                                                    // Otherwise, if it's a string, render it as a link.
                                                    item.isEnrollButton || typeof item.display !== 'string' ? (
                                                        item.display
                                                    ) : (
                                                        <a href={item.url}>{item.display}</a>
                                                    )
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="mobile__menu">
                            <span>
                                <i className="ri-menu-line" onClick={menuToggle}></i>
                            </span>
                        </div>
                    </div>
                </Container>

                {/* Duplicated WhatsApp icons removed, keeping one or ensure they are styled differently if both are needed */}
                <div className="whatsapp-icon">
                    {/* Choose one number or ensure they are visually distinct if both are required */}
                    <a href="https://wa.me/919655877677" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>
                {/* If the second WhatsApp icon is for a different purpose, style it or position it accordingly.
                <div className="whatsapp-icon">
                    <a href="https://wa.me/919176533433" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>
                */}
            </header>

            {/* Render the ContactModal */}
            <ContactModal isOpen={isEnrollModalOpen} onClose={closeEnrollModal} />
        </>
    );
};

export default Header;