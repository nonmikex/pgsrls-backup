import React from "react";
import Navbar from "../components/navigation/Navbar";
import Slider from "../components/home/Slider";
import ConstructionFeatures from "../components/home/FeaturesCard";
import AboutUs from "../components/home/AboutUs";
import WhatWeOffer from "../components/home/WhatWeOffer";
import Videos from "../components/home/Videos";
import Footer from "../components/navigation/Footer";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-[4rem]">
        <Slider />
      </div>
      <ConstructionFeatures />
      <AboutUs />
      <WhatWeOffer />
      <Videos />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
