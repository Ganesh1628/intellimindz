import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About_us/About_us";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Java from "./components/Java_course/Java_course"; // Import Java Course Component
import Saphome from "./pages/Saphome";
import Saponline from "./pages/SAP/SAPmain";
import Sapabap from "./pages/SAP/sap_abap";
import Sappim from "./pages/sapim";
import Sapbasis from "./pages/SAP/sap_basis";
import Saperp from "./pages/SAP/sap_erp";
import Sapim from "./pages/SAP/sap_im";
import Sapmii from "./pages/SAP/sap_mii";
import Sapep from "./pages/SAP/sap_ep";
import Sapec from "./pages/SAP/sap_ec";
import Sappp from "./pages/SAP/sap_pp";
import Sappi from "./pages/SAP/sap_pi";
import Saplo from "./pages/SAP/sap_lo";
import Sapcs from "./pages/SAP/sap_cs";
import Saphr from "./pages/SAP/sap_hr";
import Sapariba from "./pages/SAP/sap_ariba";
import Sapqm from "./pages/SAP/sap_qm";
import Sapsrm from "./pages/SAP/sap_srm";
import Saprem from "./pages/SAP/sap_rem";
import Sapgrc from "./pages/SAP/sap_grc";
import Sapcrm from "./pages/SAP/sap_crm";
import Sappm from "./pages/SAP/sap_pm";
import Sapre from "./pages/SAP/sap_re";
import Sapehs from "./pages/SAP/sap_ehs";
import Sapwebdynpro from "./pages/SAP/Sap_webdynpro";
import Sapbi from "./pages/SAP/Sap_bi";
import Saphana from "./pages/sap_hana";
import Contactus from "./pages/contactus";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/java_course" element={<Java />} /> {/* Added Java Course Route */}
        <Route path="/sap_course" element={<Saphome />} /> 
        <Route path="/sap_fico_training_in_chennai" element={<Saponline />} /> 
        <Route path="/sap_im_training" element={<Sappim />} /> 
        <Route path="/sap_abap_training_in_chennai" element={<Sapabap />} /> 
        <Route path="/sap_erp_training_in_chennai" element={<Saperp />} /> 
        <Route path="/sap_ep_training_in_chennai" element={<Sapep />} /> 
        <Route path="/sap_ec_training_in_chennai" element={<Sapec />} /> 
        <Route path="/sap_pp_training_in_chennai" element={<Sappp />} /> 
        <Route path="/sap_pi_training_in_chennai" element={<Sappi />} /> 
        <Route path="/sap_lo_training_in_chennai" element={<Saplo />} /> 
        <Route path="/sap_cs_training_in_chennai" element={<Sapcs />} /> 
        <Route path="/sap_hr_training_in_chennai" element={<Saphr />} /> 
        <Route path="/sap_im_training_in_chennai" element={<Sapim />} /> 
        <Route path="/sap_mii_training_in_chennai" element={<Sapmii />} /> 
        <Route path="/sap_ariba_training_in_chennai" element={<Sapariba />} /> 
        <Route path="/sap_basis_training_in_chennai" element={<Sapbasis />} /> 
        <Route path="/sap_qm_training_in_chennai" element={<Sapqm />} /> 
        <Route path="/sap_srm_training_in_chennai" element={<Sapsrm />} /> 
        <Route path="/sap_rem_training_in_chennai" element={<Saprem />} /> 
        <Route path="/sap_grc_training_in_chennai" element={<Sapgrc />} /> 
        <Route path="/sap_crm_training_in_chennai" element={<Sapcrm />} /> 
        {/* <Route path="/sap_ehs_training_in_chennai" element={<Sapehs />} />  */}
        <Route path="/sap_hana_training_in_chennai" element={<Saphana />} /> 
        <Route path="/sap_pm_training_in_chennai" element={<Sappm />} /> 
        <Route path="/sap_re_training_in_chennai" element={<Sapre />} /> 
        <Route path="/sap_ehs_training_in_chennai" element={<Sapehs />} /> 
        <Route path="/sap_Webdynpro_training_in_chennai" element={<Sapwebdynpro />} /> 
        <Route path="/sap_bi_training_in_chennai" element={<Sapbi />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
