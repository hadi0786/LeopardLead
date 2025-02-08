import { useGSAP } from "@gsap/react";
import ShinyButton from "@/components/magicui/shiny-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import robot from "../assets/robot.mp4"
import "../Styles/home.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import ServicesSection from "./components/ServicesSection";
import SliderOne from "./components/SliderOne";
import SwiperSlider from "./components/SwiperSlider";
import Work from "./OurWork";
import { OrbitingCirclesDemo } from "./components/PluginComponents/CircleOrbit";
import { MarqueeDemo } from "./components/PluginComponents/merque";
import { color } from "framer-motion";
import useWindowSize from "../windowsize";
import {  GlobeDemo } from "./components/PluginComponents/Globe";
// import Scene from "./components/Scene";
const slider1 =
  "https://www.futurextechnologies.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpg0nq9ss%2Fimage%2Fupload%2Fv1669728035%2FFutureX%2Fseerat2_pdjwoe.jpg&w=828&q=75";
const slider2="https://www.futurextechnologies.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpg0nq9ss%2Fimage%2Fupload%2Fv1669384675%2FFutureX%2Fcraftedbeds_cl9ch8.jpg&w=828&q=75"
const transparent="https://t3.ftcdn.net/jpg/02/96/05/52/360_F_296055218_RXc721N9fSYIz3sEV7QALYquMVP31jdJ.jpg" 
const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    name: "Facebook",
    link: "https://www.facebook.com/your-facebook-page",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/your-instagram-page",
  },
  {
    icon: <FaGithub />,
    name: "Github",
    link: "https://github.com/your-github-username",
  },
  {
    icon: <FaWhatsapp />,
    name: "Whatsapp",
    link: "tel:+97171371531",
  },
  {
    icon: <FaLinkedin />,
    name: "Linkedin",
    link: "https://github.com/your-github-username",
  },
];

let blogData = [
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=220",

    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veritatis nihil nam magni accusamus a veniam. Omnis, molestias a tempora, corrupti earum quo",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=220",

    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veritatis nihil nam magni accusamus a veniam. Omnis, molestias a tempora, corrupti earum quo",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=220",

    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi veritatis nihil nam magni accusamus a veniam. Omnis, molestias a tempora, corrupti earum quo",
  },
];
let num=1;
const Home = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [buttonActive,setButtonActive]=useState(0)
  const [content,setContent]=useState(["At Leopard Leads IT Solution, our mission is to drive measurable growth for businesses with innovative, high-impact digital solutions. Through expert web and app development, targeted digital marketing services, and cutting-edge AI and VR technologies, we empower companies to reach new heights. We’re committed to making success faster, smarter, and more accessible for businesses ready to lead in the digital age.",
    "Our vision at Leopard Leads IT Solution is to become a leading force in transforming businesses through innovative technology and strategic digital solutions. We aim to set the standard in web and app development, digital marketing services, and advanced AI and VR services, helping businesses adapt, thrive, and lead in a rapidly evolving digital world. We envision a future where every business has the tools and support to maximize growth and unlock limitless potential.",
    "At Leopard Leads IT Solution, our goals are to fuel business growth through cutting-edge digital solutions, lead in digital marketing, AI, VR, web, and app innovation, and deliver exceptional client experiences. We aim to expand our reach across the UAE and beyond, offering sustainable, cost-effective solutions that drive long-term value for our clients."
    
  ])

  const [top, setTop] = useState(0); // Initialize the top position
  const dotRef = useRef(null); // Create a reference for the dot
  const {width}=useWindowSize()

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTop((prevTop) => {
  //       // If the dot reaches the bottom, reset to the top
  //       if (prevTop >= 410) {
  //         return 0;
  //       }
  //       // Move the dot down by 2 pixels
  //       return prevTop + 2;
  //     });
  //   }, 50); // Adjust the speed by changing the interval time

  //   return () => clearInterval(interval); // Clean up the interval on unmount
  // }, []);
  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from(".animate_100", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "60% center",
      end: "+=100%",
      // markers: true,
      onEnter: () => {
        tl.restart();
      },
    });
  });
  const [active,setActive]=useState(1)
  // const [buttonActive,setButtonActive]=useState(1)
  const activeCount=(num)=>{
setActive(num)
  }
//   useEffect(() => {
//     // Use setTimeout to update the message after 2000 milliseconds (2 seconds)

// setTimeout(() => {
//   num=num+1
//       setButtonActive(num);
//     }, 5000);
//     if(num>3){
//       setButtonActive(1);
//       num=1
//     }
//   }, [num]); // Empty dependency array ensures the effect runs only once

useEffect(() => {
  const timer = setInterval(() => {
    setButtonActive((prev) => (prev === content.length  ? 1 : prev + 1));
  }, 3000);

  return () => clearInterval(timer);
}, []); // Only run on mount

console.log(buttonActive,"1234")



  return (
    <section>
      <section className=" bg-white  bg-neutral-900">
        <video
          width="100%"
          height="500px"
          autoPlay={true}
          loop
          muted
          className="z-10 opacity-7 "
          style={{objectFit:"cover"}}
        >
          <source src="videos/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <section className=" z-50 bg-neutral-900/10 absolute top-[20%] right-[50%] translate-x-2/4 translate-y-2/4 flex justify-center align-items-center text-white">
      <section className="max-w-[900px] flex flex-col gap-5 w-[90%] mx-auto animate">
        <h2 className="text-6xl font-bold  flex flex-col animate">
          <span>CONNECTING BRANDS</span> <span>WITH GLOBAL AUDIENCES</span>
        </h2>
        <p className="animate">
          You have an idea, we have the talent and resources to turn it into
          a reality. Digital Gravity is a globally recognized digital agency
          elevating brands through ground-breaking user experience and
          disruptive digital products.
        </p>
        <section className="text-[20px] animate flex gap-3 items-center justify-center  text-center">
          <h6>Let's Talk</h6>
          <span className="hover:bg-red-500 duration-500 rounded-full p-4 cursor-pointer text-white">
            <FaArrowRight />
          </span>
        </section>
      </section>
    </section> */}
       {width>900&& <ul className="absolute bottom-[50%] left-10 flex flex-col gap-3">
          {socialMediaLinks.map((link, index) => (
            <li key={index} className="flex flex-col gap-3   inline-block" style={{backgroundColor:"#f1c40f",borderRadius:"100%"}}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3"
              >
                <span className="p-3 border inline-block rounded-full hover:bg-zinc-500 duration-500">
                  {link.icon}
                </span>
              </a>
            </li>
          ))}
        </ul>}
      </section>
     {width>900 &&<div className="flex md:flex-row sm:flex-col flex-col  ">
      <div className=" mx-auto pxPadding py-10 w-[60%]    flex bg-white">
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
            0% {
              top: 0; /* Start at the top */
            }
            50% {
              top: calc(100% - 48px); /* Move to the bottom minus the dot's height */
            }
            100% {
              top: 0; /* Return to the top */
            }
          }
        `}
      </style>
      <div
        style={{
          position: "absolute",
          left: "-12px", // Center the dot over the line
          width: "15px",
          height: "48px",
          borderRadius:"10%",
          backgroundColor: "#F1C40F",
          animation: "moveTopToBottom 8s ease-in-out infinite", // Animation properties
        }}
      ></div>
    </div>
        <h1 className="about">ABOUT</h1>
        <div className="">
          <h1 className="stroke">US</h1>
          <div className="para">
          <div className="flex gap-2">
          <div onClick={()=>{setButtonActive(1),console.log(buttonActive)}} >
        <ShinyButton className={`${buttonActive===1?`bg-[#F1C40F] `:`bg-gray`}   mt-[1.6rem]`}text="Our Mission" 
       
        ></ShinyButton>
        </div>
        {/* <ShinyButton
  className='bg-[#201d3b] hover:bg-[#5046e6] mt-[1.6rem]'
  text="Our Mission"
  
/> */}
<div onClick={()=>{setButtonActive(2),console.log(buttonActive)}} >
<ShinyButton
  // className='bg-[#201d3b] hover:bg-[#5046e6] mt-[1.6rem]'
  className={`${buttonActive===2?`bg-[#F1C40F] `:`bg-gray`} mt-[1.6rem]`}
  text="Our Vision"
  
>
  </ShinyButton>
  </div>
<div onClick={()=>{setButtonActive(3),console.log(buttonActive)}} >


<ShinyButton
  className={`${buttonActive===3?`bg-[#F1C40F] `:`bg-gray`} mt-[1.6rem]`}
  text="Our Goals"
>
  </ShinyButton>

  </div >
        </div>
        <div className="mt-2">
        {content[buttonActive-1]}
          </div>
           </div>
        </div>
      </div>
  <div className="w-[40%]"><OrbitingCirclesDemo/></div>

  {/* <div className="w-[35%]">
  <video
          width="100%"
          height="500px"
          autoPlay={true}
          loop
          muted
          className="z-10 opacity-7 "
        >
          <source src={robot} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  </div> */}


  
</div>}

   



      {/* <div class="container mx-auto p-4 my-16">
      <div class="flex flex-col items-center mb-8 gap-5   ">
   
        <h1 class="text-6xl font-serif font-bold tracking-widest font-serif text-yellow-300">
          Our Happy Client
        </h1>
      </div>
      <div class="p-1 flex flex-wrap items-center  justify-center my-20 gap-10 ease-in-out duration-300 ">
        {blogData.map((ele, index) => {
          return (
            <div class="group block_my_animation relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 bg-neutral-900/60 text-white !bg-neutral-900/70">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#f1c40f] transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-[#f1c40f] transition-all duration-300 group-hover:bg-sky-400">
                  <img src={ele?.src} className="rounded-full object-cover" />
                </span>
                <div class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white">
                  <p className="animate_100 tracking-widest">
                    {ele?.comment}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div> */}
      <section className="tracking-widest my-2 ">
        <ServicesSection />
      </section>
      <MarqueeDemo/>
      {/* <SliderOne /> */}
<Work/>
<section className="flex  w-full flex-col md:flex-row w-full">
  {/* Left Section with Background Image */}
  <section
    className=" md:w-[50%]  w-full flex items-center flex-row justify-center h-[440px] sm:h-[554px] md:h-[534px] lg:h-[540px] xl:h-[514px] bg-no-repeat bg-contain bg-center"
    // style={{ backgroundImage: `url(${"/globe.gif"})` }}
    style={{justifyContent:"center"}}
  >
    <GlobeDemo/>


  </section>

  {/* Contact Form Section */}
  <section className="md:w-1/2 w-full flex flex-col items-center gap-6 py-8 px-4 sm:px-8 md:py-12 lg:px-12 ">
    <h5 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#000000bd] mb-4 md:mb-6">
      CONTACT US
    </h5>

    <form className="w-full flex flex-col gap-6">
      {/* Name Inputs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="input flex-1 px-4 py-3 outline-none text-black bg-neutral-900 border-[#f1c40f] border rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input flex-1 px-4 py-3 outline-none text-black bg-neutral-900 border-[#f1c40f] border rounded"
        />
      </div>

      {/* Contact Inputs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Email"
          className="input flex-1 px-4 py-3 outline-none text-black bg-neutral-900 border-[#f1c40f] border rounded"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="input flex-1 px-4 py-3 outline-none text-black bg-neutral-900 border-[#f1c40f] border rounded"
        />
      </div>

      {/* Message Textarea */}
      <textarea
        rows="6"
        placeholder="Enter Your Message"
        className="input px-4 py-3 outline-none text-black bg-neutral-900 border-[#f1c40f] border rounded resize-none w-full"
      ></textarea>

      {/* Submit Button */}
      <div className="flex justify-center md:justify-end">
        <button className="font-semibold rounded px-8 py-3 text-lg bg-[#f1c40f] hover:bg-[#e1b90e] text-white duration-300 tracking-wider">
          SEND MESSAGE
        </button>
      </div>
    </form>
  </section>
</section>

      <section>{/* <AwardSection /> */}</section>
    </section>
  );
};

export default Home;
