import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Blog from "../../pages/Blog";
import ContactUs from "../../pages/ContactUs";
import Services from "../../pages/Services";
import AboutUS from "../../pages/About";
import Work from "../../pages/OurWork";
import ServiceSection from "../../pages/ServicesSection";

function Setting() {
  return <div>Settings</div>;
}
const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/ourWork" element={<Work />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/contact-us" element={<ServiceSection />} /> */}
        <Route path="/services" element={<ServiceSection />} />
      </Routes>
   
      <Footer />
    </BrowserRouter>
  );
};

export default index;
