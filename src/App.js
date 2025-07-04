import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import Saponline from "./pages/SAP/SAPmain";
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

        {/* SAP PAGES */}
        <Route path="/sap_course" element={<Saphome />} /> 
        {/* <Route path="/sap_fico_training_in_chennai" element={<Saponline />} />  */}
        <Route path="/:pageId" element={<DynamicPage />} />
        <Route path="/sap/:SappageId" element={<SapDynamicPage />} />
 
      </Routes>
      <Footer />
      <AskForDemo />
    </Router>
  </HelmetProvider>
  );
};

export default App;
