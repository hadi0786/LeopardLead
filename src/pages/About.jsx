import React, { useEffect, useRef, useState } from "react";
import ShinyButton from "@/components/magicui/shiny-button";
let num=1;
const AboutUS = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [buttonActive,setButtonActive]=useState(1)
  const [content,setContent]=useState(["At Leopard Leads IT Solution, our mission is to drive measurable growth for businesses with innovative, high-impact digital solutions. Through expert web and app development, targeted digital marketing services, and cutting-edge AI and VR technologies, we empower companies to reach new heights. We’re committed to making success faster, smarter, and more accessible for businesses ready to lead in the digital age.",
    "Our vision at Leopard Leads IT Solution is to become a leading force in transforming businesses through innovative technology and strategic digital solutions. We aim to set the standard in web and app development, digital marketing services, and advanced AI and VR services, helping businesses adapt, thrive, and lead in a rapidly evolving digital world. We envision a future where every business has the tools and support to maximize growth and unlock limitless potential.",
    "At Leopard Leads IT Solution, our goals are to fuel business growth through cutting-edge digital solutions, lead in digital marketing, AI, VR, web, and app innovation, and deliver exceptional client experiences. We aim to expand our reach across the UAE and beyond, offering sustainable, cost-effective solutions that drive long-term value for our clients."
    
  ])

  const [top, setTop] = useState(0); // Initialize the top position
  const dotRef = useRef(null); // Create a reference for the dot

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((prevTop) => {
        // If the dot reaches the bottom, reset to the top
        if (prevTop >= 410) {
          return 0;
        }
        // Move the dot down by 2 pixels
        return prevTop + 2;
      });
    }, 50); // Adjust the speed by changing the interval time

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);
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
//   }, [num]);
console.log(buttonActive,"buttonActive")
  return (
    <div className=" mx-auto pxPadding py-20 mt-24   flex bg-white">
   <div
      className="vl1"
      style={{
        borderLeft: "8px solid #1118270d",
        height: "410px",
        width:"30px",
        position: "relative",
        // overflow: "hidden"
      }}
    >
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          top: `${top}px`, // Use state to set the top position
          left: "-8px", // Center the dot over the line
          width: "8px",
          height: "48px",
          backgroundColor: "#F1C40F",
          // borderRadius: "50%",
          transition: "top 0.1s linear" // Optional: Smooth transition
        }}
      ></div>
    </div> {/* //Animation */}
    <h1 className="about">ABOUT</h1>
    <div className="">
      <h1 className="stroke">US</h1>
      <div className="para">
        <div className="flex gap-2">
          <div onClick={()=>{setButtonActive(1),console.log(buttonActive)}} >
        <ShinyButton className={`${buttonActive===1?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`}text="Our Vision" 
        
        ></ShinyButton>
        </div>
        {/* <ShinyButton
  className='bg-[#201d3b] hover:bg-[#5046e6] mt-[1.6rem]'
  text="Our Mission"
  
/> */}
<div onClick={()=>{setButtonActive(2),console.log(buttonActive)}} >
<ShinyButton
  // className='bg-[#201d3b] hover:bg-[#5046e6] mt-[1.6rem]'
  className={`${buttonActive===2?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`}
  text="Our Vision"
  
>
  </ShinyButton>
  </div>
<div onClick={()=>{setButtonActive(3),console.log(buttonActive)}} >


<ShinyButton
  className={`${buttonActive===3?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`}
>
  </ShinyButton>

  </div>
        {/* <ShinyButton className={`${buttonActive===2?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`} text="Explore" ></ShinyButton>
        <ShinyButton className={`${buttonActive===3?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`} text=" Explore" ></ShinyButton> */}
     </div>
        {content[buttonActive-1]}
      </div>
    </div>
  </div>
  );
};

export default AboutUS;
