import React from "react";
import BlogSection from "../../Components/BlogSection/blog";
import CardSection from "../../Components/CardSection/CardSection";
import ClientsSection from "../../Components/ClientsSection/ClientsSection";
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import JobSection from "../../Components/JobsSection/JobSection";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Hero from "../../Components/hero/index";
import Layout from "../Layout";

const LandingPage = () => {
  return (
    <Layout title={"Home "}>
      <Hero />
      <CardSection />
      <FeaturesSection />
      <ServicesSection />
      <JobSection />
      <ClientsSection />
      <BlogSection />
    </Layout>
  );
};

export default LandingPage;
