import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About_us/About_us";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Java from "./components/Java_course/Java_course"; // Import Java Course Component
// import HeaderSAP from "./components/SAP/Header/header";
import Saphome from "./pages/Saphome";
import Saponline from "./pages/saponlinetraining";
import Sap from "./pages/sap";
import Sapim from "./pages/sapim";

const App = () => {
  return (
    <Router>
      <Header /> {/* Navigation bar will always be visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/java_course" element={<Java />} /> {/* Added Java Course Route */}
        <Route path="/sap_course" element={<Saphome />} /> 
        <Route path="/sap_fico_training_in_chennai" element={<Saponline />} /> 
        <Route path="/sap_im_training" element={<Sapim />} /> 
        <Route path="/sap" element={<Sap />} /> 
      </Routes>
    </Router>
  );
};

export default App;
