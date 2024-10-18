import React from "react";
import Navbar from "../components/navigation/Navbar";
import HeaderBanner from "../layouts/HeaderBanner";
import ServicesList from "../components/services/ServicesList";
import Footer from "../components/navigation/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <HeaderBanner title="Servizi" />
      <ServicesList />
      <Footer />
    </>
  );
}

export default Services;
