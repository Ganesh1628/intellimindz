import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import "./header.css";
import intellimindzLogo from "../../assests/images/intellimindz.png";
import whatsappIcon from "../../assests/images/whatsapp.png";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";

const navLinks = [
  { display: "Home", url: "/" }, {},
  { display: "About Us", url: "/about_us" }, {},
  { display: "Courses", url: "#", hasDropdown: true }, {},
  { display: "Blog", url: "#" }, {},
  { display: "contact us", url: "/contactus" }, {},
  // { display: "Online", url: "#", hasDropdown: true }, {},
  // { display: "SAP", url: "#", hasDropdown: true }, {},
  { 
    display: (
      <div className="contact-enroll-container">
        {/* <a href="/contactus" className="contact-link">contact us</a> */}
        <a href="/enroll" className="enroll-button-header">Enroll now</a>
      </div>
    ), 
    url: "#" 
  }
];

const onlineOptions = [
  "Software Development",
  "Web Development",
  "Mobile Development",
  "Finance & Accounting",
  "Languages",
  "Cloud",
  "BPM",
  "Software Testing",
  "Network & CyberSecurity",
  "Data Science",
  "Informatica",
  "RPA",
  "Data Warehousing",
  "Others",
];

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
  const [isOnlineOpen, setIsOnlineOpen] = useState(false);
  const [isSapOpen, setIsSapOpen] = useState(false);
  const [animatePhone, setAnimatePhone] = useState(false);

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
                style={{ height: "100px", width: "auto", marginLeft: "-35px" }}
              />
            </h2>
          </div>

<div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
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
                        <a href={item.url} className="dropdown-toggle">
                          {item.display}{" "}
                        </a>
                        {(item.display === "Courses" && isCoursesOpen) ||
                        (item.display === "Online" && isOnlineOpen) ? (
                          <ul className="dropdown-menu">
                            {item.display === "Courses" ? (
                              courseOptions.map((option, idx) => (
                                <li key={idx} className="dropdown-item">
                                  {option}
                                </li>
                              ))
                            ) : (
                              onlineOptions.map((option, idx) => (
                                <li key={idx} className="dropdown-item">
                                  {option}
                                </li>
                              ))
                            )}
                            {/* <div className="dropdown-arrow-container"> */}
                              {/* <div className="dropdown-arrow">
                                <IoMdArrowDropdown size={22} color="black" />
                              </div> */}
                            {/* </div> */}
                          </ul>
                        ) : null}
                      </div>
                    ) : (
                      typeof item.display === 'string' ? (
                        <a href={item.url}>{item.display}</a>
                      ) : (
                        item.display
                      )
                    )}
                  </li>
                ))}
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

      <div className="whatsapp-icon">
        <a href="https://wa.me/919176533433" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
      <div className="whatsapp-icon">
        <a href="https://wa.me/919655877677" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </header>
    </>
  );
};

export default Header;