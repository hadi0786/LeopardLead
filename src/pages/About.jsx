import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Fixed import
import RotatingText from "../components/ui/RotatingText";

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

      {width > 900 ? (
        // Desktop Version
        <div className="flex md:flex-row flex-col bg-neutral-50 items-center text-center">
          <div className="mx-auto py-10 h-[60vh] w-[100%] flex">
            {/* Content Section */}
            <div className="px-3 relative overflow-hidden w-full">
              {/* Animated Text Elements */}
              <div className="absolute top-0 left-0 w-full flex flex-col items-center gap-0 overflow-hidden">
                <div className="marquee animate-marqueeLeft text-9xl font-bold opacity-10 text-gray-400 whitespace-nowrap min-w-full leading-none">
                  INNOVATION · INNOVATION · INNOVATION · 
                </div>
                <div className="marquee animate-marqueeRight text-9xl font-bold opacity-10 text-gray-400 whitespace-nowrap min-w-full leading-none">
                  TRANSFORMING · TRANSFORMING · TRANSFORMING · 
                </div>
                <div className="marquee animate-marqueeLeft text-9xl font-bold opacity-10 text-gray-400 whitespace-nowrap min-w-full leading-none">
                  DIGITAL · DIGITAL · DIGITAL · 
                </div>
              </div>

              {/* Main Content */}
              <div className="relative z-10 text-center">
                <div className="flex justify-center items-center gap-2 mb-8">
                  <h1 className="about text-6xl text-black font-bold">OUR</h1>
                  <RotatingText
                    texts={["MISSION", "VISION", "GOALS"]}
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
                texts={["MISSION", "VISION", "GOALS"]}
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
    </div>
  );
};
