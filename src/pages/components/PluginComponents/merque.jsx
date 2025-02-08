/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import  BoxRevealDemo  from "./BoxRevealDemo";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  review
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-950/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={review.img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-black">
            {review.name}
          </figcaption>
          <p className="text-xs font-medium dark:text-black/40">{review.username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review.body}</blockquote>
    </figure>
  );
};


export function MarqueeDemo() {
  const textRef=useRef(null)

  useEffect(() => {
    const text = textRef.current;

    // Initial animation when the component mounts
    gsap.from(text, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Setting up ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: text,
      start: "top 70%",
      end: "bottom 30%",
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
          x: 250, // Move out to the right
          opacity: 0.4, // Fade out
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
          x: -250, // Move out to the left
          opacity: 0, // Fade out
          duration: 2,
          ease: "power3.out",
        });
      },
    });

    // Cleanup function to kill the ScrollTrigger when the component unmounts
    return () => {
      scrollTrigger.kill();
    };
  }, []);
  return (
    <>
    {/* <BoxRevealDemo/> */}

    <div  className=" animate fadein-Right  mx-auto"
        data-delay="0.6s"
        style={{
          animation: "0.5s ease-out 0.6s 1 normal forwards running anim",
        }}>
          <h3 
             style={{
              transform: "translate3d(226.393px, 0px, 0px)",
              WebkitTextStroke: ".8px black",  // Adding stroke
              color: "transparent",  
              fontFamily:"sans-serif",
              fontSize:"70px"
                          // Make text transparent
            }}
          className="outline-text text-6xl text-center mb-8 font-bold font-extrabold  text-[#070707]"
          ref={textRef}>
            Why Choose Us
          </h3>

          <div className="mx-4">


          <p style={{
            fontSize: "20px",        // Adjust font size for the paragraph
            color: "#070707",        // Text color for contrast
            lineHeight: "1.5",       // Increase line height for readability
            margin: "0 auto",        // Center the paragraph
            // maxWidth: "600px"        // Limit the width of the paragraph for better layout
          }}
          
          >
    Choose Leopard Leads IT Solution to transform your business with innovative, high-impact digital solutions that deliver results. Our team of experts leverages the latest in AI, VR, and data-driven digital marketing to create strategies that don’t just meet industry standards—they set them. We specialize in building engaging websites, dynamic apps, and powerful marketing campaigns tailored to elevate your brand and maximize ROI. With our commitment to quality, transparency, and measurable success, we empower your business to thrive in today’s fast-paced digital world. Partner with us to lead the market and achieve lasting growth.
  </p>
      </div>

        </div>
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} review={review}/>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} review={review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </>
  );
}
