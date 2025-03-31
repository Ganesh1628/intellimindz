import HeaderSAP from "../components/SAP/Header/header";
import FactsAndFigures from "../components/SAP/FactsAndFigures/FactsAndFigures";
import FeesStructure from "../components/SAP/Fees/Fees";
import Info from "../components/SAP/Info/Info";
import SAPOverview from "../components/SAP/Overview/Sap_overview";
import Sapgeneral from "../components/SAP/SapGeneral/Sapgeneral";
import SapQuestions from "../components/SAP/Questions/Sapquestions";
import Reason from "../components/SAP/Reason/Reason";
import TeachingMethod from "../components/SAP/TeachingMethod/Teachingmethod";
import Testimonial from "../components/SAP/Saptestimonials/Saptestimonial";
import Footer from "../components/Footer/Footer";
// import AskForDemo from "../components/SAP/Header/askfordemo";
// import SearchBar from "./sapim/SearchBar";

const Saphome = () => {
    return (<>
        <HeaderSAP />
        {/* <AskForDemo/> */}
        <SAPOverview />
        <FeesStructure />
        <Sapgeneral />
        <TeachingMethod />
        <Reason />
        <FactsAndFigures />
        <Info />
        <SapQuestions />
        <Testimonial />
        <Footer />
        {/* <SearchBar /> */}
    </>
    );
}
export default Saphome;