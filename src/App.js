import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/About_us/About_us";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Contactus from "./pages/contactus";
import Footer from "./components/Footer/Footer";
import { HelmetProvider } from "react-helmet-async";
import DynamicPage from "./pages/Courses/DynamicPage.jsx";
import AskForDemo from "./components/SAP/Askfordemo/askfordemo";
import SapDynamicPage from "./pages/SAP/DynamicSapPage.jsx";
import Saphome from "./pages/Saphome";
import TopHeader from "./components/Header/TopHeader.jsx";

const App = () => {
  return (  
    <HelmetProvider>
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/sap_course" element={<Saphome />} />
          <Route path="/:pageId" element={<DynamicPage />} />
          <Route path="/sap/:SappageId" element={<SapDynamicPage />} />
          <Route path="/sap-im-training-in-chennai" element={<Navigate to="/sap/sap-im-training-in-chennai" replace />} />
          <Route path="/sap-erp-training-in-chennai" element={<Navigate to="/sap/sap-erp-training-in-chennai" replace />} />
          <Route path="/sap-abap-training-in-chennai" element={<Navigate to="/sap/sap-abap-training-in-chennai" replace />} />
          <Route path="/sap-sd-training-in-chennai" element={<Navigate to="/sap/sap-sd-training-in-chennai" replace />} />
          <Route path="/sap-ep-training-in-chennai" element={<Navigate to="/sap/sap-ep-training-in-chennai" replace />} />
          <Route path="/sap-ec-training-in-chennai" element={<Navigate to="/sap/sap-ec-training-in-chennai" replace />} />
          <Route path="/sap-pp-training-in-chennai" element={<Navigate to="/sap/sap-pp-training-in-chennai" replace />} />
          <Route path="/sap-hr-training-in-chennai" element={<Navigate to="/sap/sap-hr-training-in-chennai" replace />} />
          <Route path="/sap-lo-training-in-chennai" element={<Navigate to="/sap/sap-lo-training-in-chennai" replace />} />
          <Route path="/sap-cs-training-in-chennai" element={<Navigate to="/sap/sap-cs-training-in-chennai" replace />} />
          <Route path="/sap-pi-training-in-chennai" element={<Navigate to="/sap/sap-pi-training-in-chennai" replace />} />
          <Route path="/sap-mii-training-in-chennai" element={<Navigate to="/sap/sap-mii-training-in-chennai" replace />} />
          <Route path="/sap-ariba-training-in-chennai" element={<Navigate to="/sap/sap-ariba-training-in-chennai" replace />} />

          <Route path="/sap-basis-training-in-chennai" element={<Navigate to="/sap/sap-basis-training-in-chennai" replace />} />
          <Route path="/sap-qm-training-in-chennai" element={<Navigate to="/sap/sap-qm-training-in-chennai" replace />} />
          <Route path="/sap-srm-training-in-chennai" element={<Navigate to="/sap/sap-srm-training-in-chennai" replace />} />
          <Route path="/sap-rem-training-in-chennai" element={<Navigate to="/sap/sap-rem-training-in-chennai" replace />} />
          <Route path="/sap-grc-training-in-chennai" element={<Navigate to="/sap/sap-grc-training-in-chennai" replace />} />
          <Route path="/sap-crm-training-in-chennai" element={<Navigate to="/sap/sap-crm-training-in-chennai" replace />} />
          <Route path="/sap-pm-training-in-chennai" element={<Navigate to="/sap/sap-pm-training-in-chennai" replace />} />
          <Route path="/sap-webdynpro-training-in-chennai" element={<Navigate to="/sap/sap-webdynpro-training-in-chennai" replace />} />
          <Route path="/sap-ehs-training-in-chennai" element={<Navigate to="/sap/sap-ehs-training-in-chennai" replace />} />
          <Route path="/sap-trm-training-in-chennai" element={<Navigate to="/sap/sap-trm-training-in-chennai" replace />} />
          <Route path="/sap-bi-training-in-chennai" element={<Navigate to="/sap/sap-bi-training-in-chennai" replace />} />
          <Route path="/sap-re-training-in-chennai" element={<Navigate to="/sap/sap-re-training-in-chennai" replace />} />
          <Route path="/sap-hcm-training-in-chennai" element={<Navigate to="/sap/sap-hcm-training-in-chennai" replace />} />
          <Route path="/sap-plm-training-in-chennai" element={<Navigate to="/sap/sap-plm-training-in-chennai" replace />} />
          <Route path="/sap-bods-training-in-chennai" element={<Navigate to="/sap/sap-bods-training-in-chennai" replace />} />
          <Route path="/sap-ecm-training-in-chennai" element={<Navigate to="/sap/sap-ecm-training-in-chennai" replace />} />
          <Route path="/sap-scm-training-in-chennai" element={<Navigate to="/sap/sap-scm-training-in-chennai" replace />} />
          <Route path="/sap-fscm-training-in-chennai" element={<Navigate to="/sap/sap-fscm-training-in-chennai" replace />} />
          <Route path="/sap-bo-training-in-chennai" element={<Navigate to="/sap/sap-bo-training-in-chennai" replace />} />
          <Route path="/sap-success-factor-training-in-chennai" element={<Navigate to="/sap/sap-success-factor-training-in-chennai" replace />} />
          <Route path="/sap-mm-training-in-chennai" element={<Navigate to="/sap/sap-mm-training-in-chennai" replace />} />
          <Route path="/sap-wf-training-in-chennai" element={<Navigate to="/sap/sap-wf-training-in-chennai" replace />} />
          <Route path="/sap-solution-manager-training-in-chennai" element={<Navigate to="/sap/sap-solution-manager-training-in-chennai" replace />} />
          <Route path="/sap-ps-training-in-chennai" element={<Navigate to="/sap/sap-ps-training-in-chennai" replace />} />
          <Route path="/sap-training-in-chennai" element={<Navigate to="/sap/sap-training-in-chennai" replace />} />
          <Route path="/sap-hana-training-in-chennai" element={<Navigate to="/sap/sap-hana-training-in-chennai" replace />} />
          <Route path="/sap-le-training-in-chennai" element={<Navigate to="/sap/sap-le-training-in-chennai" replace />} />
          <Route path="/sap-apo-training-in-chennai" element={<Navigate to="/sap/sap-apo-training-in-chennai" replace />} />
          <Route path="/sap-fico-training-in-chennai" element={<Navigate to="/sap/sap-fico-training-in-chennai" replace />} />

        </Routes>
        <Footer />
        <AskForDemo />
      </Router>
    </HelmetProvider>
  );
};

export default App;