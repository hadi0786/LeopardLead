import { useGSAP } from "@gsap/react";
import ShinyButton from "@/components/magicui/shiny-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import "../Styles/home.css";
import Example from "./Blogs";
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
import { TextParallaxContentExample } from "./myservices";
import { cn } from "@/lib/utils";
import { OrbitingCirclesDemo } from "./components/PluginComponents/CircleOrbit"; // Add missing import
import RotatingText from "../components/ui/RotatingText";
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

      {width > 900 ? (
  // Desktop Version
  <div className="flex md:flex-row flex-col bg-white items-center text-center">
    <div className="mx-auto py-10 h-[60vh] w-[100%] flex">
      {/* Vertical line animation */}
      
      {/* Content Section */}
      <div className="px-3 relative overflow-hidden w-full">
        {/* Animated Text Elements */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-center gap-0 overflow-hidden">
          <div className="marquee animate-marqueeLeft text-9xl font-bold opacity-10 text-gray-400 whitespace-nowrap min-w-full leading-none">
            INNOVATION · INNOVATION · INNOVATION · INNOVATION · INNOVATION · 
          </div>
          <div className="marquee animate-marqueeRight text-9xl font-bold opacity-10 text-gray-400 whitespace-nowrap min-w-full leading-none">
            TRANSFORMING · TRANSFORMING · TRANSFORMING · TRANSFORMING · TRANSFORMING · 
          </div>
          <div className="marquee animate-marqueeLeft text-9xl font-bold opacity-10 text-gray-400 whitespace-nowrap min-w-full leading-none">
            DIGITAL · DIGITAL · DIGITAL · DIGITAL · DIGITAL · DIGITAL · 
          </div>
        </div>

 {/* Main Content */}
 <div className="relative z-10 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <h1 className="about text-6xl text-black font-bold">OUR</h1>
            <RotatingText
              texts={['MISSION', 'VISION', 'GOALS']}
              mainClassName="px-4 text-6xl font-bold text-[#f1c40f]"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
              onRotate={(index) => setButtonActive(index + 1)}
            />
          </div>
          <div className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {content[buttonActive - 1]?.text}
          </div>
        </div>
      </div>
    </div>
  </div>
) : (
  // Mobile Version
  <div className="bg-white py-12 px-4">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">ABOUT US</h1>
      <div className="flex justify-center gap-2 mb-6">
        <RotatingText
          texts={['MISSION', 'VISION', 'GOALS']}
          mainClassName="text-lg font-medium bg-[#f1c40f] text-black px-4 py-2 rounded-full"
          rotationInterval={5000}
          onRotate={(index) => setButtonActive(index + 1)}
        />
      </div>
      <div className="space-y-6">
        <p className="text-gray-600 text-center">
          {content[buttonActive - 1]?.text}
        </p>
      </div>
    </div>
  </div>
)}
      {/* Services Section */}
      <div className="mb-16 bg-white"> {/* Added margin-bottom (mb-16) and bg-white */}
  <div className="flex justify-center items-center bg-white gap-2 mb-8">
    <h1 className="about text-6xl text-black font-bold">OUR</h1>
    <RotatingText
      texts={['SERVICES']}
      mainClassName="px-4 text-6xl font-bold text-[#f1c40f]"
      staggerFrom="last"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={5000}
      onRotate={(index) => setButtonActive(index + 1)}
    />
  </div>
  <div className="bg-white mb-25"> {/* Ensures TextParallaxContentExample also has a white background */}
    <TextParallaxContentExample />
  </div>
  <div class="h-[30vh] bg-white"></div>
  <Example></Example>
  <div className="bg-white mt-15">
      <ServicesSections></ServicesSections>
  </div>
</div>

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