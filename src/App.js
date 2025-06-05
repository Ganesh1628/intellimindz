import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About_us/About_us";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Java from "./components/Java_course/Java_course"; // Import Java Course Component
import Saphome from "./pages/Saphome";
import Saponline from "./pages/SAPmain";
import Sapabap from "./pages/sap_abap";
import Sapim from "./pages/sapim";
import Sapehs from "./pages/sap_ehs";
import Sapbasis from "./pages/sap_basis";
import Sapqm from "./pages/sap_qm";
import Saphana from "./pages/sap_hana";
import Contactus from "./pages/contactus";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header /> {/* Navigation bar will always be visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/java_course" element={<Java />} /> {/* Added Java Course Route */}
        <Route path="/sap_course" element={<Saphome />} /> 
        <Route path="/sap_fico_training_in_chennai" element={<Saponline />} /> 
        <Route path="/sap_im_training" element={<Sapim />} /> 
        <Route path="/sap_abap_training_in_chennai" element={<Sapabap />} /> 
        <Route path="/sap_basis" element={<Sapbasis />} /> 
        <Route path="/sap_qm" element={<Sapqm />} /> 
        <Route path="/sap_ehs_training_in_chennai" element={<Sapehs />} /> 
        <Route path="/sap_hana_training_in_chennai" element={<Saphana />} /> 
      </Routes>
      <Footer /> {/* ✅ Footer always visible */}
    </Router>
  );
};

export default App;
