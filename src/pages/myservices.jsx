import React, { useState } from "react";

const servicesData = {
  "Web Development": {
    title: "Web Development Service",
    description:
      "Build modern, responsive websites with cutting-edge technologies.",
    videoId: "9No-FiEInLA"
  },
  "UI/UX Design": {
    title: "UI/UX Design Service",
    description: "Create intuitive user experiences with stunning interfaces.",
    videoId: "dQw4w9WgXcQ"
  },
  SEO: {
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic.",
    videoId: "9bZkp7q19f0"
  }
};

// Helper function that returns a service-specific icon.
// The `colorClass` prop allows the parent to control the icon's color dynamically.
const getServiceIcon = (service, colorClass) => {
  switch (service) {
    case "Web Development":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-colors duration-300 ${colorClass}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Code brackets icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          />
        </svg>
      );
    case "UI/UX Design":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-colors duration-300 ${colorClass}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Pencil icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232a2.5 2.5 0 113.536 3.536L7 21H3v-4L15.232 5.232z"
          />
        </svg>
      );
    case "SEO":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-colors duration-300 ${colorClass}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Magnifying glass icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const MyServiceSection = () => {
  const [selectedService, setSelectedService] = useState("Web Development");

  return (
    <div className="bg-white min-h-screen p-8 md:p-12 lg:p-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#545454] mb-4 animate-fade-in-down">
          {servicesData[selectedService].title}
        </h1>
        <p className="text-[#545454] text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">
          {servicesData[selectedService].description}
        </p>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Side Icons (Desktop) */}
        <div className="hidden md:flex flex-col gap-8 absolute left-0 top-1/2 -translate-y-1/2 z-10">
          {Object.keys(servicesData).map((service) => (
            <div
              key={service}
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div
                className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  selectedService === service
                    ? "ring-4 ring-blue-500 ring-opacity-50 bg-blue-50"
                    : "hover:bg-blue-50"
                }`}
              >
                {getServiceIcon(
                  service,
                  selectedService === service ? "text-blue-600" : "text-gray-600"
                )}
              </div>
              <span className="text-sm font-medium text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105">
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* Discount Badge (Desktop) */}
        <div
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white p-10 rounded-xl shadow-2xl z-30
          transform transition-all duration-300 hover:-translate-y-1/3 hover:shadow-2xl"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[#545454] mb-2 animate-pulse">
              Save 50% OFF
            </div>
            <button className="bg-[#545454] text-white px-6 py-2 rounded-lg hover:bg-[#555555] transition-all duration-300 hover:scale-105 active:scale-95">
              Contact Us
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mx-auto max-w-3xl relative transform transition-all duration-300 hover:shadow-2xl"
        >
          {/* Video Container */}
          <div
            className="aspect-video bg-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.005] relative group"
          >
            <iframe
              className="w-full h-full transform transition-all duration-500 group-hover:scale-105"
              src={`https://www.youtube.com/embed/${servicesData[selectedService].videoId}`}
              title="Demo video"
              allowFullScreen
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Mobile Elements */}
        <div className="md:hidden mt-8">
          {/* Mobile Icons */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.keys(servicesData).map((service) => (
              <div
                key={service}
                className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${
                  selectedService === service
                    ? "bg-blue-600 ring-4 ring-blue-300"
                    : "bg-white hover:bg-blue-50"
                }`}
                onClick={() => setSelectedService(service)}
              >
                {getServiceIcon(
                  service,
                  selectedService === service ? "text-white" : "text-gray-600"
                )}
              </div>
            ))}
          </div>

          {/* Mobile Discount Badge */}
          <div
            className="bg-white p-6 rounded-xl shadow-lg text-center mb-8 transform transition-all duration-300 hover:scale-105"
          >
            <div className="text-xl font-bold text-blue-600 mb-2 animate-pulse">
              Save 50% OFF
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServiceSection;
