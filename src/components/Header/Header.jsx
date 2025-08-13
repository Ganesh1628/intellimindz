import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./header.css";
import intellimindzLogo from "../../assests/images/intellimindz.png";
import whatsappIcon from "../../assests/images/whatsapp.png";
import ContactModal from "../Hero-Section/ContactModal";

const courseOptions = [
  { name: "Java Course", url: "/java-training-in-chennai" },
  { name: "Python Course", url: "/python-training-in-chennai" },
  { name: "Data Science Course", url: "/data-science-training-in-chennai" },
  { name: "Node.js Course", url: "/nodejs-training-in-chennai" },
  { name: "Artificial Intelligence Course", url: "/aritifical-intelligence-training-in-chennai" },
  { name: "Cloud Computing Course", url: "/cloud-computing-training-in-chennai" },
  { name: "MEAN Stack Course", url: "/mean-stack-training-in-chennai" },
  { name: "AJAX Course", url: "/ajax-training-in-chennai" },
  { name: "Machine Learning Course", url: "/machine-learning-training-in-chennai" },
  { name: "DevOps Course", url: "/devOps-training-in-chennai" },
  { name: "Dot Net Course", url: "/dotnet-training-in-chennai" },
  { name: "Others", url: "#", hasSubDropdown: true },
];
const subCourseOptions = [
  // Left Sub-Dropdown (12 courses)
  { name: "Tally Course", url: "/tally-training-in-chennai" },
  { name: "Pega Course", url: "/pega-training-in-chennai" },
  { name: "Talend Course", url: "/talend-training-in-chennai" },
  { name: "MCSA Course", url: "/mcsa-training-in-chennai" },
  { name: "Blockchain Course", url: "/block-chain-training-in-chennai" },
  { name: "Citrix Course", url: "/citrix-training-in-chennai" },
  { name: "Power BI Course", url: "/powerbi-training-in-chennai" },
  { name: "Clinical SAS Course", url: "/clinicalsas-training-in-chennai" },
  { name: "Sybase Course", url: "/sybase-training-in-chennai" },
  { name: "MuleSoft Course", url: "/mulesoft-training-in-chennai" },
  { name: "HTML Course", url: "/html-training-in-chennai" },
  { name: "Go Programming Course", url: "/googlego-training-in-chennai" },
  // Center Sub-Dropdown (12 courses)
  { name: "SCCM Course", url: "/sccm-training-in-chennai" },
  { name: "MSBI Course", url: "/msbi-training-in-chennai" },
  { name: "SharePoint Course", url: "/sharepoint-training-in-chennai" },
  { name: "Informix Course", url: "/informix-training-in-chennai" },
  { name: "SharePoint Admin Course", url: "/sharepoint-admin-training-in-chennai" },
  { name: "LoadRunner Course", url: "/loadrunner-training-in-chennai" },
  { name: "Appium Course", url: "/appium-training-in-chennai" },
  { name: "Ruby on Rails Course", url: "/rubyonrails-training-in-chennai" },
  { name: "PHP Course", url: "/php-training-in-chennai" },
  { name: "Joomla Course", url: "/joomla-training-in-chennai" },
  { name: "Microsoft Hybris Course", url: "/microsofthybris-training-in-chennai" },
  { name: "Dell Boomi Course", url: "/dellboomi-training-in-chennai" },
  // Right Sub-Dropdown (12 courses)
  { name: "PMP Course", url: "/pmp-training-in-chennai" },
  { name: "Informatica BDM Course", url: "/informatica-bdm-training-in-chennai" },
  { name: "Automation Anywhere Course", url: "/automation-anywhere-training-in-chennai" },
  { name: "TIBCO Spotfire Course", url: "/tibco-spotfire-training-in-chennai" },
  { name: "Primavera Course", url: "/primavera-training-in-chennai" },
  { name: "Informatica Course", url: "/informatica-training-in-chennai" },
  { name: "Blue Prism Course", url: "/blueprism-training-in-chennai" },
  { name: "Jaspersoft Course", url: "/jaspersoft-training-in-chennai" },
  { name: "Workday Course", url: "/workday-training-in-chennai" },
  { name: "Oracle DBA Course", url: "/oracledba-training-in-chennai" },
  { name: "Teradata Course", url: "/teradata-training-in-chennai" },
  { name: "AutoCAD Course", url: "/autocad-training-in-chennai" }
];

const Header = () => {
  const menuRef = useRef();
  const dropdownRef = useRef();
  const subDropdownRef = useRef();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const openEnrollModal = (e) => {
    e.preventDefault();
    setIsEnrollModalOpen(true);
  };

  const closeEnrollModal = () => setIsEnrollModalOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCoursesOpen(false);
    setIsOthersOpen(false);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsOthersOpen(false);
  };

  const handleMouseEnterOthers = () => {
    setIsCoursesOpen(false); // Hide the main dropdown
    setIsOthersOpen(true);   // Show the center sub-dropdown
  };

  const handleMouseLeaveOthers = () => {
    setIsOthersOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      subDropdownRef.current &&
      !subDropdownRef.current.contains(event.target)
    ) {
      setIsCoursesOpen(false);
      setIsOthersOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { display: "Home", url: "/" },
    { display: "About Us", url: "/about_us" },
    { display: "Courses", url: "#", hasDropdown: true },
    { display: "Contact Us", url: "/contactus" },
    {
      display: (
        <div className="contact-enroll-container">
          <button onClick={openEnrollModal} className="enroll-button-header">
            Enroll now
          </button>
        </div>
      ),
      isEnrollButton: true,
    },
  ];

  // Split sub-courses into three groups
  const leftSubCourses = subCourseOptions.slice(0, 12);
  const centerSubCourses = subCourseOptions.slice(12, 24);
  const rightSubCourses = subCourseOptions.slice(24, 36);

  return (
    <>
      <header className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <img
                src={intellimindzLogo}
                alt="Intellimindz Logo"
                className="w-100 intellimindz_img"
                style={{ height: "80px", width: "auto", marginLeft: "-35px" }}
              />
            </div>

            <div className={`nav__menu ${isMenuOpen ? "active__menu" : ""}`} ref={menuRef}>
              <ul className="nav__list">
                {navLinks.map((item, index) => {
                  if (!item.display) return null;

                  return (
                    <li key={index} className="nav__item">
{item.hasDropdown ? (
  <div
    className="dropdown-wrapper"
    ref={dropdownRef}
    onMouseEnter={() => setIsCoursesOpen(true)}
    onMouseLeave={() => { setIsCoursesOpen(false); setIsOthersOpen(false); }}
    style={{ position: "relative" }}
  >
    <a
      href={item.url}
      className="dropdown-toggle"
      onClick={(e) => {
        e.preventDefault();
        toggleCoursesDropdown();
      }}
    >
      {item.display}
    </a>
    {/* Main dropdown */}
    {isCoursesOpen && !isOthersOpen && (
      <ul className="dropdown-menu open">
        {courseOptions.map((option, idx) => (
          <li key={idx} className="dropdown-item">
            {option.hasSubDropdown ? (
              <div
                className="sub-dropdown-wrapper"
                ref={subDropdownRef}
                onMouseEnter={handleMouseEnterOthers}
                onMouseLeave={handleMouseLeaveOthers}
              >
                <span className="dropdown-item-link">{option.name}</span>
              </div>
            ) : (
              <a
                href={option.url}
                className="dropdown-item-link"
                onClick={() => setIsCoursesOpen(false)}
              >
                {option.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    )}
    {/* Center sub-dropdown only */}
{isOthersOpen && (
  <>
    {/* Left Sub-Dropdown */}
    <ul
      className="dropdown-menu open left-sub-dropdown"
      style={{
        left: "-240px",
        top: "100%",
        minWidth: 220,
        position: "absolute",
        zIndex: 2000,
      }}
    >
      {leftSubCourses.map((subOption, subIdx) => (
        <li key={subIdx} className="dropdown-item">
          <a
            href={subOption.url}
            className="dropdown-item-link"
            onClick={() => {
              setIsCoursesOpen(false);
              setIsOthersOpen(false);
            }}
          >
            {subOption.name}
          </a>
        </li>
      ))}
    </ul>
    {/* Center Sub-Dropdown */}
    <ul
      className="dropdown-menu open center-sub-dropdown"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        top: "100%",
        minWidth: 220,
        position: "absolute",
        zIndex: 2000,
      }}
    >
      {centerSubCourses.map((subOption, subIdx) => (
        <li key={subIdx} className="dropdown-item">
          <a
            href={subOption.url}
            className="dropdown-item-link"
            onClick={() => {
              setIsCoursesOpen(false);
              setIsOthersOpen(false);
            }}
          >
            {subOption.name}
          </a>
        </li>
      ))}
    </ul>
    {/* Right Sub-Dropdown */}
    <ul
      className="dropdown-menu open right-sub-dropdown"
      style={{
        left: "calc(100% + 20px)",
        top: "100%",
        minWidth: 220,
        position: "absolute",
        zIndex: 2000,
      }}
    >
      {rightSubCourses.map((subOption, subIdx) => (
        <li key={subIdx} className="dropdown-item">
          <a
            href={subOption.url}
            className="dropdown-item-link"
            onClick={() => {
              setIsCoursesOpen(false);
              setIsOthersOpen(false);
            }}
          >
            {subOption.name}
          </a>
        </li>
      ))}
    </ul>
  </>
)}
  </div>
) : (
                        item.isEnrollButton || typeof item.display !== "string" ? (
                          item.display
                        ) : (
                          <a href={item.url} onClick={() => setIsMenuOpen(false)}>
                            {item.display}
                          </a>
                        )
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mobile__menu" onClick={toggleMenu}>
              <span>
                <i className="ri-menu-line" />
              </span>
            </div>
          </div>
        </Container>

        <div className="whatsapp-icon">
          <a href="https://wa.me/919655877677" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
        </div>
      </header>

      <ContactModal isOpen={isEnrollModalOpen} onClose={closeEnrollModal} />
    </>
  );
};

export default Header;