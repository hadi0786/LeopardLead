import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AwrdImage from "../../../public/images/sec-bg.webp";

const AwardSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.from(text, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      yoyo: true,
    });

    ScrollTrigger.create({
      trigger: text,
      start: "top 80%",
      end: "bottom 20%",

      onEnter: () => {
        gsap.to(text, {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        gsap.to(text, {
          x: 250,
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        });
      },
      onEnterBack: () => {
        gsap.to(text, {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(text, {
          x: -250,
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        });
      },
    });
  }, []);
  return (
    <div className=" bg-black/90 ">
      <div className="absolute -z-10">
        <img
          src={
            "https://www.digitalgravity.ae/assets/images/home/services/ecommerce-development.webp"
          }
        />
      </div>

      <div className="container mx-auto">
        <div
          className="line-heading animate fadein-Right container mx-auto pt-10"
          data-delay="0.6s"
          style={{
            animation: "0.5s ease-out 0.6s 1 normal forwards running anim",
          }}
        >
          <h3
            className="outline-text translateX-right"
            style={{ transform: "translate3d(226.393px, 0px, 0px)" }}
            ref={textRef}
          >
            Awards
          </h3>
        </div>

        <div className="py-28 flex">
          <div className="flex-1 flex flex-col gap-7">
            <h3 className="text-3xl " style={{ lineHeight: 1.5 }}>
              Leopard Leads,
              <br /> a Synonym of Quality, Trust and Distinction
            </h3>
            <p>
              Client satisfaction is one of our top priorities. Our consistency,
              dedication toward work, and constant innovation have won us
              several accolades in the last decade.
              <strong>
                {" "}
                Hire web designers and web developers in Dubai
              </strong>{" "}
              from Leopard Leads to build highly responsive, scalable, and
              robust web applications with a touch of finesse.
            </p>
          </div>
          <div className="flex-1 flex items-end justify-end">
            {[1, 2, 3, 4].map((ele, index) => {
              return (
                <img
                  src="https://www.digitalgravity.ae/assets/images/home/awards/award-bagde-1.svg"
                  className="w-[20%] bg-white border"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
