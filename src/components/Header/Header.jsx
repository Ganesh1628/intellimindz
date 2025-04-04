import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import "./header.css";
import intellimindzLogo from "../../assests/images/intellimindz.png";
import whatsappIcon from "../../assests/images/whatsapp.png";
import { Link } from "react-router-dom";

const navLinks = [
  { display: "Home", url: "/" }, {},
  { display: "About Us", url: "/about_us" }, {},
  { display: "Courses", url: "#", hasDropdown: true }, {},
  { display: "Blog", url: "#" }, {},
  { display: "contact us", url: "#" }, {},
  // { display: "Online", url: "#", hasDropdown: true }, {},
  { display: "SAP", url: "#", hasDropdown: true }, {},
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
  { display: "SAP", url: "/sap_course" },
  { display: "SAP Online", url: "/sap_fico_training_in_chennai" },
  { display: "SAP IM Training", url: "/Sap_im_training"},
  { display: "SAP ", url: "/sap"},
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
                          else if (item.display === "SAP") setIsSapOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (item.display === "Courses") setIsCoursesOpen(false);
                          else if (item.display === "Online") setIsOnlineOpen(false);
                          else if (item.display === "SAP") setIsSapOpen(false);
                        }}
                      >
                        <a href={item.url} className="dropdown-toggle">
                          {item.display}{" "}
                        </a>
                        {(item.display === "Courses" && isCoursesOpen) ||
                        (item.display === "Online" && isOnlineOpen) ||
                        (item.display === "SAP" && isSapOpen) ? (
                          <ul
                            className="dropdown-menu"
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "0",
                              background: "rgb(124, 147, 252)",
                              color: "black",
                              listStyle: "none",
                              padding: "10px 0",
                              boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.15)",
                              borderRadius: "15px",
                              minWidth: "220px",
                              zIndex: 9999,
                              transition: "opacity 0.3s ease, transform 0.3s ease",
                              opacity: 1,
                              transform: "translateY(0)",
                              maxHeight: "500px",
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }}
                          >
                            {item.display === "Courses" ? (
                              courseOptions.map((option, idx) => (
                                <li
                                  key={idx}
                                  className="dropdown-item"
                                  style={{
                                    padding: "6px 20px",
                                    cursor: "pointer",
                                    transition: "background 0.2s ease",
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    borderRadius: "50px",
                                    borderBottom: idx !== courseOptions.length - 1 ? "1px solid #f0f0f0" : "none",
                                  }}
                                >
                                  {option}
                                </li>
                              ))
                            ) : item.display === "Online" ? (
                              onlineOptions.map((option, idx) => (
                                <li
                                  key={idx}
                                  className="dropdown-item"
                                  style={{
                                    padding: "6px 20px",
                                    cursor: "pointer",
                                    transition: "background 0.2s ease",
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    borderRadius: "50px",
                                    borderBottom: idx !== onlineOptions.length - 1 ? "1px solid #f0f0f0" : "none",
                                  }}
                                >
                                  {option}
                                </li>
                              ))
                            ) : (
                              sapOptions.map((option, idx) => (
                                <Link 
                                  key={idx} 
                                  to={option.url}
                                  className="dropdown-item" 
                                  style={{
                                    display: "block",
                                    padding: "6px 20px",
                                    cursor: "pointer",
                                    transition: "background 0.2s ease",
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    borderRadius: "50px",
                                    borderBottom: idx !== sapOptions.length - 1 ? "1px solid #f0f0f0" : "none",
                                    color: "black",
                                    textDecoration: "none",
                                  }}
                                >
                                  {option.display}
                                </Link>
                              ))
                            )}
                            <div
                              style={{
                                position: "sticky",
                                bottom: "0",
                                width: "100%",
                                height: "0px",
                                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                pointerEvents: "none",
                              }}
                            >
                              <div
                                style={{
                                  // backgroundColor: "#F0E68C",
                                  borderRadius: "0%",
                                  padding: "0px",
                                  display: "flex",
                                  width: "100%",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <IoMdArrowDropdown size={22} color="black" />
                              </div>
                            </div>
                          </ul>
                        ) : null}
                      </div>
                    ) : (
                      <a href={item.url}>{item.display}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex flex-column align-items-start">
              <p className={`mb-0 d-flex align-items-center gap-2}`}>
                <i className="ri-phone-line"></i> +91 9655877677
              </p>
              <p className={`mb-0 d-flex align-items-center gap-2}`}>
                <i className="ri-phone-line"></i> +91 9655877577
              </p>
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
  );
};

export default Header;