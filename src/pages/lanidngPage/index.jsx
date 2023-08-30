import React from "react";
import BlogSection from "../../Components/BlogSection/blog";
import CardSection from "../../Components/CardSection/CardSection";
import ClientsSection from "../../Components/ClientsSection/ClientsSection";
import JobSection from "../../Components/JobsSection/JobSection";
import Navbar from "../../Components/Navbar/Navbar";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
// import Footer from "../../Components/footer/footer";
import Hero from "../../Components/hero/index";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      {/* <FeaturesSection /> */}
      <ServicesSection />
      <JobSection />
      <ClientsSection />
      <BlogSection />
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
