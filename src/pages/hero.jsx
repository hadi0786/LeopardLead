import React, { useState } from "react";

const HeroSection = () => {
  const [section, setSection] = useState("about");

  const renderContent = () => {
    switch (section) {
      case "about":
        return (
          <div className="relative z-10 px-6 md:px-16">
            <h4 className="text-sm font-semibold uppercase">DEDICATED INDUSTRY EXPERTS WITH PROVEN TRACK RECORDS</h4>
            <h1 className="text-4xl md:text-6xl font-bold my-4">
              The Team You Want On Your <span className="text-[#f1c40f]">Project</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[#f1c40f] text-4xl font-semibold mt-6">
              <div>
                <span className="block">Expert</span>
                <span className="text-sm text-white">INDUSTRY LEADERS</span>
              </div>
              <div>
                <span className="block">150+</span>
                <span className="text-sm text-white">TEAM MEMBERS</span>
              </div>
              <div>
                <span className="block">Results</span>
                <span className="text-sm text-white">DRIVEN APPROACH</span>
              </div>
            </div>
            <button className="mt-6 px-6 py-3 bg-white text-black font-bold rounded shadow-md transition">
              SPEAK WITH OUR EXPERTS →
            </button>
          </div>
        );
      case "clients":
        return (
          <div className="relative z-10 px-6 md:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">We Partner With Brands To</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-[#f1c40f]">Create Superior Digital Experiences</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {["P&G", "Newater", "NYU", "HP", "Xerox", "Sony", "Knopp Biosciences", "Tecnam", "NFL", "Grenco Science"].map((client, index) => (
                <div key={index} className="flex justify-center items-center p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
                  <span className="text-lg md:text-xl font-semibold">{client}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 px-6 py-3 bg-white text-black font-bold rounded shadow-md transition">
              REQUEST A QUOTE →
            </button>
          </div>
        );
      case "awards":
        return (
          <div className="relative z-10 px-6 md:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Our Achievements</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-[#f1c40f]">Recognized for Excellence</h3>
            <p className="mt-4 text-white">We have received numerous awards for innovation, design, and outstanding service in our industry.</p>
          </div>
        );
      case "recognition":
        return (
          <div className="relative z-10 px-6 md:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Industry Recognition</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-[#f1c40f]">Trusted by Leading Experts</h3>
            <p className="mt-4 text-white">Our work has been featured in top publications and acknowledged by global organizations.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" alt="background" className="w-full h-full object-cover opacity-30" />
      </div>
      {/* Dynamic Content */}
      {renderContent()}
      {/* Bottom Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center">
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
      </div>
      {/* Scroll Indicator */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 rotate-90 text-white text-sm tracking-widest">
        SCROLL
        <div className="w-10 h-0.5 bg-white mt-2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
