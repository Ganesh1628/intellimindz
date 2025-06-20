import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About_us/About_us";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Contactus from "./pages/contactus";
import Footer from "./components/Footer/Footer";
import { HelmetProvider } from "react-helmet-async";

// SAP PAGES
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
import Sapbods from "./pages/SAP/sap_bods";
import Saptrm from "./pages/SAP/sap_trm";
import Saphcm from "./pages/SAP/sap_hcm";
import Sapfscm from "./pages/SAP/sap_fscm";
import Sapplm from "./pages/SAP/sap_plm";
import Sapecm from "./pages/SAP/sap_ecm";
import Sapscm from "./pages/SAP/sap_scm";
import Sapsuccessfactor from "./pages/SAP/sap_success_factor";
import Sapbo from "./pages/SAP/sap_bo";
import Sapmm from "./pages/SAP/sap_mm";
import Sapwf from "./pages/SAP/sap_wf";
import Sapapo from "./pages/SAP/sap_apo";
import Sapps from "./pages/SAP/sap_ps";
import Sapsolutionmanager from "./pages/SAP/sap_solution_manager";
import Saptraining from "./pages/SAP/sap_training";
import Saphana from "./pages/SAP/sap_hana";
import Saple from "./pages/SAP/sap_le";

// OTHER COURSES
import Itilmain from "./pages/Courses/itil.jsx";
import Javamain from "./pages/Courses/java.jsx";
import Mcsemain from "./pages/Courses/mcse.jsx";
import Ssrsmain from "./pages/Courses/ssrs.jsx";
import Dsmain from "./pages/Courses/datascience.jsx";
import Etltestingmain from "./pages/Courses/etl_testing.jsx";
import Ccnamain from "./pages/Courses/ccna.jsx";
import Softskillmain from "./pages/Courses/soft_skill.jsx";
import Dotnetmain from "./pages/Courses/dotnet.jsx";
import Iosmain from "./pages/Courses/ios.jsx";
import Androidmain from "./pages/Courses/android.jsx";
import Seleniummain from "./pages/Courses/selenium.jsx";
import Wordpressmain from "./pages/Courses/wordpress.jsx";
import Abinitiomain from "./pages/Courses/abinitio.jsx";
import Mobileappmain from "./pages/Courses/mobileapp.jsx";
import Matlabmain from "./pages/Courses/matlab.jsx";
import Salesforcemain from "./pages/Courses/salesforce.jsx";
import Mainframeadminmain from "./pages/Courses/mainframeadmin.jsx";
import Datastagemain from "./pages/Courses/datastage.jsx";
import Iotmain from "./pages/Courses/iot.jsx";
import Ssasmain from "./pages/Courses/ssas.jsx";
import Qlikmain from "./pages/Courses/qliklink.jsx";
import Bigdatamain from "./pages/Courses/bigdata.jsx";
import Openstackmain from "./pages/Courses/openstack.jsx";
import Digitalmarketmain from "./pages/Courses/digital_marketing.jsx";
import Informaticadatamain from "./pages/Courses/informaticadata.jsx";
import Ccnpmain from "./pages/Courses/ccnp.jsx";
import Spokenengmain from "./pages/Courses/spoken_english.jsx";
import Cognostm1main from "./pages/Courses/cognostm1.jsx";
import Pythonmain from "./pages/Courses/python.jsx";
import Meanstackmain from "./pages/Courses/mean_stack.jsx";
import Mainframemain from "./pages/Courses/mainframe.jsx";
import Nodejsmain from "./pages/Courses/nodejs.jsx";
import Sccmmain from "./pages/Courses/sccm.jsx";
import Msbimain from "./pages/Courses/msbi.jsx";
import Tallymain from "./pages/Courses/tally.jsx";
import Cloudcomputermain from "./pages/Courses/cloud_computer.jsx";
import Mcsamain from "./pages/Courses/mcsa.jsx";
import Talendmain from "./pages/Courses/talend.jsx";
import ArtificialIntmain from "./pages/Courses/artifical_int.jsx";
import Ajaxmain from "./pages/Courses/ajax.jsx";
import Informaticabdmmain from "./pages/Courses/iformatica_bdm.jsx";
import Machinelearningmain from "./pages/Courses/machine_learning.jsx";
import Devopsmain from "./pages/Courses/devops.jsx";
import Blockchainmain from "./pages/Courses/block_chain.jsx";
import Citrixmain from "./pages/Courses/citrix.jsx";
import Sharepointadminmain from "./pages/Courses/sharepoint_admin.jsx";
import Loadrunnermain from "./pages/Courses/loadrunner.jsx";
import Appiummain from "./pages/Courses/appium.jsx";
import Sharepointmain from "./pages/Courses/sharepoint.jsx";
import Informixmain from "./pages/Courses/informix.jsx";
import Informaticamain from "./pages/Courses/informatica.jsx";
import Tibcospotfiremain from "./pages/Courses/tibco_spotfire.jsx";
import Automationanywheremain from "./pages/Courses/automationanywhere.jsx";
import Primaveramain from "./pages/Courses/primavera.jsx";
import Blueprismmain from "./pages/Courses/blueprism.jsx";
import Pegamain from "./pages/Courses/pega.jsx";
import Powerbimain from "./pages/Courses/powerbi.jsx";
import Tableaumain from "./pages/Courses/tableau.jsx";
import Jaspersoftmain from "./pages/Courses/jaspersoft.jsx";
import Workdaymain from "./pages/Courses/workday.jsx";
import Oracledbamain from "./pages/Courses/oracledba.jsx";
import Teradatamain from "./pages/Courses/teradata.jsx";
import Autocadmain from "./pages/Courses/autocad.jsx";
import Clinicalsasmain from "./pages/Courses/clinicalsas.jsx";
import Sybasemain from "./pages/Courses/sybase.jsx";
import Mulesoftmain from "./pages/Courses/mulesoft.jsx";
import Htmlmain from "./pages/Courses/html.jsx";
import Googlegomain from "./pages/Courses/googlego.jsx";
import Rubyonrailsmain from "./pages/Courses/rubyonrails.jsx";
import Phpmain from "./pages/Courses/php.jsx";
import Joomlamain from "./pages/Courses/joomla.jsx";
import Microsofthybrismain from "./pages/Courses/microsofthybris.jsx";
import Dellboomimain from "./pages/Courses/dellboomi.jsx";
import Pmpmain from "./pages/Courses/pmp.jsx";
import Pentahomain from "./pages/Courses/pentaho.jsx";
import Angularjsmain from "./pages/Courses/angularjs.jsx";
import Windowspowershellmain from "./pages/Courses/windowspowershell.jsx";

const App = () => {
  return (
        <HelmetProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />

        {/* SAP PAGES */}
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
        <Route path="/sap_pm_training_in_chennai" element={<Sappm />} /> 
        <Route path="/sap_re_training_in_chennai" element={<Sapre />} /> 
        <Route path="/sap_ehs_training_in_chennai" element={<Sapehs />} /> 
        <Route path="/sap_Webdynpro_training_in_chennai" element={<Sapwebdynpro />} /> 
        <Route path="/sap_bi_training_in_chennai" element={<Sapbi />} /> 
        <Route path="/sap_bods_training_in_chennai" element={<Sapbods />} /> 
        <Route path="/sap_trm_training_in_chennai" element={<Saptrm />} /> 
        <Route path="/sap_hcm_training_in_chennai" element={<Saphcm />} /> 
        <Route path="/sap_fscm_training_in_chennai" element={<Sapfscm />} /> 
        <Route path="/sap_plm_training_in_chennai" element={<Sapplm />} /> 
        <Route path="/sap_ecm_training_in_chennai" element={<Sapecm />} /> 
        <Route path="/sap_scm_training_in_chennai" element={<Sapscm />} /> 
        <Route path="/sap_success_factor_training_in_chennai" element={<Sapsuccessfactor />} /> 
        <Route path="/sap_bo_training_in_chennai" element={<Sapbo />} /> 
        <Route path="/sap_mm_training_in_chennai" element={<Sapmm />} /> 
        <Route path="/sap_wf_training_in_chennai" element={<Sapwf />} /> 
        <Route path="/sap_apo_training_in_chennai" element={<Sapapo />} /> 
        <Route path="/sap_ps_training_in_chennai" element={<Sapps />} /> 
        <Route path="/sap_solution_manager_training_in_chennai" element={<Sapsolutionmanager />} /> 
        <Route path="/sap_training_in_chennai" element={<Saptraining />} /> 
        <Route path="/sap_hana_training_in_chennai" element={<Saphana />} /> 
        <Route path="/sap_le_training_in_chennai" element={<Saple />} /> 

        {/* OTHER COURSES (18-06-2025)*/}
        <Route path="/itil_training_in_chennai" element={<Itilmain />} /> 
        <Route path="/java_training_in_chennai" element={<Javamain />} /> 
        <Route path="/mcse_training_in_chennai" element={<Mcsemain />} /> 
        <Route path="/ssrs_training_in_chennai" element={<Ssrsmain />} /> 
        <Route path="/data_science_training_in_chennai" element={<Dsmain />} /> 
        <Route path="/etl_testing_training_in_chennai" element={<Etltestingmain />} /> 
        <Route path="/ccna_training_in_chennai" element={<Ccnamain />} /> 
        <Route path="/soft_skill_training_in_chennai" element={<Softskillmain />} /> 
        <Route path="/dotnet_training_in_chennai" element={<Dotnetmain />} /> 
        <Route path="/ios_training_in_chennai" element={<Iosmain />} /> 
        <Route path="/android_training_in_chennai" element={<Androidmain />} /> 
        <Route path="/selenium_training_in_chennai" element={<Seleniummain />} /> 
        <Route path="/wordpress_training_in_chennai" element={<Wordpressmain />} /> 
        <Route path="/abinitio_training_in_chennai" element={<Abinitiomain />} /> 
        <Route path="/mobile_application_training_in_chennai" element={<Mobileappmain />} /> 
        <Route path="/matlab_training_in_chennai" element={<Matlabmain />} /> 
        <Route path="/sales_force_training_in_chennai" element={<Salesforcemain />} /> 
        {/* 19-06-2025 */}
        <Route path="/mainframe_admin_training_in_chennai" element={<Mainframeadminmain />} /> 
        <Route path="/datastage_training_in_chennai" element={<Datastagemain />} /> 
        <Route path="/iot_training_in_chennai" element={<Iotmain />} /> 
        <Route path="/ssas_training_in_chennai" element={<Ssasmain />} /> 
        <Route path="/qlikview_training_in_chennai" element={<Qlikmain />} /> 
        <Route path="/big_data_training_in_chennai" element={<Bigdatamain />} /> 
        <Route path="/openstack_training_in_chennai" element={<Openstackmain />} /> 
        <Route path="/digital_marketing_training_in_chennai" element={<Digitalmarketmain />} /> 
        <Route path="/informatica_data_quality_training_in_chennai" element={<Informaticadatamain />} /> 
        <Route path="/ccnp_training_in_chennai" element={<Ccnpmain />} /> 
        <Route path="/spoken_english_training_in_chennai" element={<Spokenengmain />} /> 
        <Route path="/cognos_tm1_training_in_chennai" element={<Cognostm1main />} /> 
        <Route path="/python_training_in_chennai" element={<Pythonmain />} /> 
        <Route path="/mean_stack_training_in_chennai" element={<Meanstackmain />} /> 
        <Route path="/main_frame_training_in_chennai" element={<Mainframemain />} /> 
        <Route path="/nodejs_training_in_chennai" element={<Nodejsmain />} /> 
        <Route path="/sccm_training_in_chennai" element={<Sccmmain />} /> 
        <Route path="/msbi_training_in_chennai" element={<Msbimain />} /> 
        <Route path="/tally_training_in_chennai" element={<Tallymain />} /> 
        <Route path="/cloud_computing_training_in_chennai" element={<Cloudcomputermain />} /> 
        {/* 20-06-2025 */}
        <Route path="/mcsa_training_in_chennai" element={<Mcsamain />} /> 
        <Route path="/talend_training_in_chennai" element={<Talendmain />} /> 
        <Route path="/aritifical_intelligence_training_in_chennai" element={<ArtificialIntmain />} /> 
        <Route path="/ajax_training_in_chennai" element={<Ajaxmain />} /> 
        <Route path="/informatica_bdm_training_in_chennai" element={<Informaticabdmmain />} /> 
        <Route path="/machine_learning_training_in_chennai" element={<Machinelearningmain />} /> 
        <Route path="/devOps_training_in_chennai" element={<Devopsmain />} /> 
        <Route path="/block_chain_training_in_chennai" element={<Blockchainmain />} /> 
        <Route path="/citrix_training_in_chennai" element={<Citrixmain />} /> 
        <Route path="/sharepoint_admin_training_in_chennai" element={<Sharepointadminmain />} /> 
        <Route path="/loadrunner_training_in_chennai" element={<Loadrunnermain />} /> 
        <Route path="/appium_training_in_chennai" element={<Appiummain />} /> 
        <Route path="/sharepoint_training_in_chennai" element={<Sharepointmain />} /> 
        <Route path="/informix_training_in_chennai" element={<Informixmain />} /> 
        <Route path="/informatica_training_in_chennai" element={<Informaticamain />} /> 
        <Route path="/tibco_spotfire_training_in_chennai" element={<Tibcospotfiremain />} /> 
        <Route path="/automation_anywhere_training_in_chennai" element={<Automationanywheremain />} /> 
        <Route path="/primavera_training_in_chennai" element={<Primaveramain />} /> 
        <Route path="/blueprism_training_in_chennai" element={<Blueprismmain />} /> 
        <Route path="/pega_training_in_chennai" element={<Pegamain />} /> 
        <Route path="/powerbi_training_in_chennai" element={<Powerbimain />} /> 
        <Route path="/tableau_training_in_chennai" element={<Tableaumain />} /> 
        <Route path="/jaspersoft_training_in_chennai" element={<Jaspersoftmain />} /> 
        <Route path="/workday_training_in_chennai" element={<Workdaymain />} /> 
        <Route path="/oracledba_training_in_chennai" element={<Oracledbamain />} /> 
        <Route path="/teradata_training_in_chennai" element={<Teradatamain />} /> 
        <Route path="/autocad_training_in_chennai" element={<Autocadmain />} /> 
        <Route path="/clinicalsas_training_in_chennai" element={<Clinicalsasmain />} /> 
        <Route path="/sybase_training_in_chennai" element={<Sybasemain />} /> 
        <Route path="/mulesoft_training_in_chennai" element={<Mulesoftmain />} /> 
        <Route path="/html_training_in_chennai" element={<Htmlmain />} /> 
        <Route path="/googlego_training_in_chennai" element={<Googlegomain />} /> 
        <Route path="/rubyonrails_training_in_chennai" element={<Rubyonrailsmain />} /> 
        <Route path="/php_training_in_chennai" element={<Phpmain />} /> 
        <Route path="/joomla_training_in_chennai" element={<Joomlamain />} /> 
        <Route path="/microsofthybris_training_in_chennai" element={<Microsofthybrismain />} /> 
        <Route path="/dellboomi_training_in_chennai" element={<Dellboomimain />} /> 
        <Route path="/pmp_training_in_chennai" element={<Pmpmain />} /> 
        <Route path="/pentaho_training_in_chennai" element={<Pentahomain />} /> 
        <Route path="/angularjs_training_in_chennai" element={<Angularjsmain />} /> 
        <Route path="/windowspowershell_training_in_chennai" element={<Windowspowershellmain />} /> 
      </Routes>
      <Footer />
    </Router>
  </HelmetProvider>
  );
};

export default App;
