import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

// import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import TrainingOptions from "../components/Training/TrainingOptions";
import ChooseUs from "../components/Choose-us/ChooseUs";
// import Features from "../components/Feature-section/Features";
// import FreeCourse from "../components/Free-course-section/FreeCourse";
import FAQ from "../components/FAQ's/questions";
import Testimonials from "../components/Testimonial/Testimonials";
// import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
// import AboutUs from "../components/About_us/About_us";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <TrainingOptions />
      {/* <AboutUs /> */}
      <Courses />
      <ChooseUs />
      {/* <AboutUs /> */}
      {/* <Features /> */}
      {/* <FreeCourse /> */}
      <FAQ />
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </Fragment>
  );
};



export default Home;
