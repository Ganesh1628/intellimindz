import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import "./header.css";
import intellimindzLogo from "../../assests/images/intellimindz.png";
import whatsappIcon from "../../assests/images/whatsapp.png";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef();

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => setActiveDropdown(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const courseOptions = [
    "Software Development",
    "Web Development",
    "Mobile Development",
    "Software Testing",
    "Digital Marketing",
    "Cloud",
    "BPM",
    "Data Science",
    "Network & CyberSecurity",
    "Languages",
    "Database",
    "Informatica",
    "RPA",
    "Data Warehousing",
    "Others",
  ];

  const sapOptions = [
    { label: "SAP FICO", url: "/sap_fico_training_in_chennai" },
    { label: "SAP ONLINE", url: "/sap_course" },
    { label: "SAP IM TRAINING", url: "/Sap_im_training" },
    { label: "SAP ABAP", url: "/sap_abap_training_in_chennai" },
    { label: "SAP EHS", url: "/sap_ehs_training_in_chennai" },
    { label: "SAP HANA", url: "/sap_hana_training_in_chennai" },
  ];

  return (
    <header className="header" ref={menuRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={intellimindzLogo} alt="Logo" className="intellimindz_img" />
          </div>

          <nav className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__item">
                <Link to="/about_us">About Us</Link>
              </li>

              {/* Courses Dropdown */}
              <li
                className="nav__item dropdown"
                onMouseEnter={() => toggleDropdown("courses")}
                onMouseLeave={closeDropdown}
              >
                <span className="dropdown-toggle custom-dropdown">
                  Courses <IoMdArrowDropdown />
                </span>
                {activeDropdown === "courses" && (
                  <ul className="dropdown-menu show">
                    {courseOptions.map((course, idx) => (
                      <li key={idx} className="dropdown-item">
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="nav__item">
                <Link to="#">Blog</Link>
              </li>

              <li className="nav__item">
                <Link to="/contactus">Contact Us</Link>
              </li>

              {/* SAP Dropdown */}
              <li
                className="nav__item dropdown"
                onMouseEnter={() => toggleDropdown("sap")}
                onMouseLeave={closeDropdown}
              >
                <span className="dropdown-toggle custom-dropdown">
                  SAP <IoMdArrowDropdown />
                </span>
                {activeDropdown === "sap" && (
                  <ul className="dropdown-menu show">
                    {sapOptions.map((sap, idx) => (
                      <li key={idx}>
                        <Link to={sap.url} className="dropdown-item">
                          {sap.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          <div className="nav__right d-flex flex-column align-items-start">
            <p>📞 +91 9655877677</p>
            <p>📞 +91 9655877577</p>
          </div>
        </div>
      </Container>

      {/* WhatsApp Floating Icon */}
      <div className="whatsapp-icon">
        <a href="https://wa.me/919176533433" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="https://wa.me/919655877677" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </header>
  );
};

export default Header;
