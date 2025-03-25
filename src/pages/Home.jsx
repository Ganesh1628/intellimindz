import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import Courses from "../components/Courses-section/Courses";
import TrainingOptions from "../components/Training/TrainingOptions";
import ChooseUs from "../components/Choose-us/ChooseUs";
import FAQ from "../components/FAQ's/questions";
import Testimonials from "../components/Testimonial/Testimonials";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <TrainingOptions />
      <Courses />
      <ChooseUs />
      <FAQ />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;