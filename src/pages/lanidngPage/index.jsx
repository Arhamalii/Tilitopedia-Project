import React from "react";
import BlogSection from "../../Components/BlogSection/blog";
import CardSection from "../../Components/CardSection/CardSection";
import ClientsSection from "../../Components/ClientsSection/ClientsSection";
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import JobSection from "../../Components/JobsSection/JobSection";
import Navbar from "../../Components/Navbar/Navbar";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Hero from "../../Components/hero";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      <FeaturesSection />
      <ServicesSection />
      <JobSection />
      <ClientsSection />
      <BlogSection />
    </>
  );
};

export default LandingPage;
