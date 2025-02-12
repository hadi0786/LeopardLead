import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [section, setSection] = useState("about");

  // GSAP Scroll Indicator Animation
  const scrollRef = useRef(null);
  useEffect(() => {
    gsap.to(scrollRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.2,
    });
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  // Intersection Observer Hook
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const renderContent = () => {
    switch (section) {
      case "about":
        return (
          <motion.div
            ref={ref}
            className="relative z-10 px-6 md:px-16 text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <h4 className="text-sm font-semibold uppercase">DEDICATED INDUSTRY EXPERTS WITH PROVEN TRACK RECORDS</h4>
            <h1 className="text-4xl md:text-6xl font-bold my-4">
              The Team You Want On Your <span className="text-[#f1c40f]">Project</span>
            </h1>
            <motion.button
              className="mt-6 px-6 py-3 bg-white text-black font-bold rounded shadow-md"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              SPEAK WITH OUR EXPERTS →
            </motion.button>
          </motion.div>
        );
      case "clients":
        return (
          <motion.div
            className="relative z-10 px-6 md:px-16 text-center"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <h2 className="text-3xl md:text-5xl font-bold">We Partner With Brands To</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-[#f1c40f]">Create Superior Digital Experiences</h3>
            <motion.button
              className="mt-6 px-6 py-3 bg-white text-black font-bold rounded shadow-md"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              REQUEST A QUOTE →
            </motion.button>
          </motion.div>
        );
      case "awards":
        return (
          <motion.div
            className="relative z-10 px-6 md:px-16 text-center"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <h2 className="text-3xl md:text-5xl font-bold">Our Achievements</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-[#f1c40f]">Recognized for Excellence</h3>
          </motion.div>
        );
      case "recognition":
        return (
          <motion.div
            className="relative z-10 px-6 md:px-16 text-center"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <h2 className="text-3xl md:text-5xl font-bold">Industry Recognition</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-[#f1c40f]">Trusted by Leading Experts</h3>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </div>

      {/* Dynamic Content */}
      {renderContent()}

      {/* Bottom Navigation */}
      <motion.div
        className="absolute bottom-4 w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex space-x-6 text-white">
          {[
            { label: "ABOUT", key: "about" },
            { label: "CLIENTS", key: "clients" },
            { label: "AWARDS", key: "awards" },
            { label: "RECOGNITION", key: "recognition" },
          ].map((item) => (
            <span
              key={item.key}
              className={`text-sm cursor-pointer ${section === item.key ? "font-bold" : "opacity-50"}`}
              onClick={() => setSection(item.key)}
            >
              {item.label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator with GSAP Animation */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 rotate-90 text-white text-sm tracking-widest">
        SCROLL
        <div ref={scrollRef} className="w-10 h-0.5 bg-white mt-2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
