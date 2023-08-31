import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/footer";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>

      <Navbar />
      <main>
        <Toaster />
        {children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
