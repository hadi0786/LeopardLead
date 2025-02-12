import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Fixed import
import RotatingText from "../components/ui/RotatingText";
import HeroSection from "./hero";
import LeadershipTeam from "./team";
import AboutServices from "./about-services";
import MarketingSection from "./MarketingHome";

export const DrawCircleText = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [buttonActive, setButtonActive] = useState(1);

  // Handling window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define content array
  const content = [
    { text: "Our mission is to revolutionize marketing with innovation." },
    { text: "Our vision is to lead the digital transformation globally." },
    { text: "Our goals are to drive impactful results for our clients." },
  ];

  return (
    <div>
      <MarketingSection></MarketingSection>
      <LeadershipTeam></LeadershipTeam>
      <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50">
        <h1 className="max-w-2xl text-center text-5xl leading-snug">
          Scale your{" "}
          <span className="relative">
            Marketing
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          with Leopard Leads
        </h1>
      </div>
      <AboutServices></AboutServices>
      <section className="bg-neutral-900 py-20 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold uppercase tracking-widest">
                Get In Touch
              </h2>
              <p className="text-gray-300">
                Have a project in mind? Let's create something amazing together.
              </p>
              <div className="h-1 w-24 bg-[#f1c40f]" />
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-[#f1c40f] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-[#f1c40f] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-[#f1c40f] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-[#f1c40f] focus:outline-none"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-[#f1c40f] focus:outline-none"
            />

            <button
              type="button"
              className="w-full rounded bg-[#f1c40f] px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-[#e1b400]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
