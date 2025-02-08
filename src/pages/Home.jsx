import { useGSAP } from "@gsap/react";
import ShinyButton from "@/components/magicui/shiny-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import "../Styles/home.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import ServicesSection from "./components/ServicesSection";
import Work from "./OurWork";
import { GlobeDemo } from "./components/PluginComponents/Globe";
import useWindowSize from "../windowsize";
import ServicesSections from "./leopardservices";
import { cn } from "@/lib/utils";
import { OrbitingCirclesDemo } from "./components/PluginComponents/CircleOrbit"; // Add missing import

const socialMediaLinks = [
  { icon: <FaFacebook />, name: "Facebook", link: "#" },
  { icon: <FaInstagram />, name: "Instagram", link: "#" },
  { icon: <FaGithub />, name: "Github", link: "#" },
  { icon: <FaWhatsapp />, name: "Whatsapp", link: "#" },
  { icon: <FaLinkedin />, name: "Linkedin", link: "#" },
];

const content = [
  {
    title: "Our Mission",
    text: "At Leopard Leads IT Solution, our mission is to drive measurable growth for businesses with innovative, high-impact digital solutions...",
  },
  {
    title: "Our Vision",
    text: "Our vision at Leopard Leads IT Solution is to become a leading force in transforming businesses through innovative technology...",
  },
  {
    title: "Our Goals",
    text: "At Leopard Leads IT Solution, our goals are to fuel business growth through cutting-edge digital solutions...",
  },
];

const Home = () => {
  const { width } = useWindowSize();
  const [buttonActive, setButtonActive] = useState(1);
  const dotRef = useRef(null);

  useGSAP(() => {
    gsap.from(".animate_100", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "60% center",
      end: "+=100%",
      onEnter: () => gsap.restart(),
    });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setButtonActive((prev) => (prev === content.length ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen bg-neutral-900">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover opacity-90"
        >
          <source src="videos/main.mp4" type="video/mp4" />
        </video>

        {/* Social Links */}
        <div className="absolute bottom-8 left-8 z-50 flex flex-col gap-4">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center transition-all duration-300 hover:scale-110"
            >
              <span className="rounded-full bg-[#f1c40f] p-3 text-xl text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#f1c40f]">
                {link.icon}
              </span>
              <span className="ml-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {width > 900 && (
        <div className="flex md:flex-row flex-col bg-white">
          <div className="mx-auto py-10 w-[60%] flex">
            <div
              className="vl1"
              style={{
                borderLeft: "8px solid #1118270d",
                height: "410px",
                width: "30px",
                position: "relative",
              }}
            >
              <style>
                {`
                  @keyframes moveTopToBottom {
                    0% { top: 0; }
                    50% { top: calc(100% - 48px); }
                    100% { top: 0; }
                  }
                `}
              </style>
              <div
                style={{
                  position: "absolute",
                  left: "-12px",
                  width: "15px",
                  height: "48px",
                  borderRadius: "10%",
                  backgroundColor: "#F1C40F",
                  animation: "moveTopToBottom 8s ease-in-out infinite",
                }}
              ></div>
            </div>
            <div className="px-4">
              <h1 className="about">ABOUT</h1>
              <div className="">
                <h1 className="stroke">US</h1>
                <div className="para">
                  <div className="flex gap-2">
                    <div onClick={() => setButtonActive(1)}>
                      <ShinyButton
                        className={`${
                          buttonActive === 1 ? "bg-[#F1C40F]" : "bg-gray-300"
                        } mt-[1.6rem]`}
                        text="Our Mission"
                      />
                    </div>
                    <div onClick={() => setButtonActive(2)}>
                      <ShinyButton
                        className={`${
                          buttonActive === 2 ? "bg-[#F1C40F]" : "bg-gray-300"
                        } mt-[1.6rem]`}
                        text="Our Vision"
                      />
                    </div>
                    <div onClick={() => setButtonActive(3)}>
                      <ShinyButton
                        className={`${
                          buttonActive === 3 ? "bg-[#F1C40F]" : "bg-gray-300"
                        } mt-[1.6rem]`}
                        text="Our Goals"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    {content[buttonActive - 1]?.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <OrbitingCirclesDemo />
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-white">
              Our Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#f1c40f]" />
          </div>
          <ServicesSection />
        </div>
      </section>
      <ServicesSections></ServicesSections>

      {/* Contact Section */}
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
            ></textarea>

            <button className="w-full rounded bg-[#f1c40f] px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-[#e1b400]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;