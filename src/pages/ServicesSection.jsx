import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import ShinyButton from "@/components/magicui/shiny-button";
import { BlurFadeDemo } from "./components/PluginComponents/Images";
const slider1 =
  "https://www.futurextechnologies.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpg0nq9ss%2Fimage%2Fupload%2Fv1669728035%2FFutureX%2Fseerat2_pdjwoe.jpg&w=828&q=75";
const slider2="https://www.futurextechnologies.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpg0nq9ss%2Fimage%2Fupload%2Fv1669384675%2FFutureX%2Fcraftedbeds_cl9ch8.jpg&w=828&q=75"
const transparent="https://t3.ftcdn.net/jpg/02/96/05/52/360_F_296055218_RXc721N9fSYIz3sEV7QALYquMVP31jdJ.jpg" 

const ServiceSection = () => {
  const [active,setActive]=useState(1)
  const activeCount=(num)=>{
setActive(num)
  }
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
          opacity: 1,
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
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        });
      },
    });
  }, []);
  return (
    <section className="  py-24 tracking-widest tracking-widest bg-white    ">
                <div className="filters text-center wow fadeInUp gap-4 flex item-center align-center justify-center" data-wow-delay="200ms" data-wow-duration="1200ms">
								{/* <ul className="filter-tabs filter-btns">
									<li className={`${active===1?"active2 filter": "filter"}`} data-role="button" data-filter=".all"onClick={()=>activeCount(1)}>
                                    <ShinyButton className="bg-[#5046e6] mt-[1.6rem]" text="All " ></ShinyButton>
    
                                    </li>
									
																		
									<li className={`${active===2?"active2 filter": "filter"}`} data-role="button" data-filter=".family" onClick={()=>activeCount(2)}><span>Family</span></li>
									
																		
									<li className={`${active===3?"active2 filter": "filter"}`} data-role="button" data-filter=".financial" onClick={()=>activeCount(3)}><span>Financial</span></li>
									
																		
									<li className={`${active===4?"active2 filter": "filter"}`} data-role="button" data-filter=".insurance" onClick={()=>activeCount(4)}><span>Insurance</span></li>
									
																		
									<li className={`${active===5?"active2 filter": "filter"}`} data-role="button" data-filter=".business" onClick={()=>activeCount(5)}><span>Business</span></li>
									
																		
									<li className={`${active===6?"active2 filter": "filter"}`} data-role="button" data-filter=".banking" onClick={()=>activeCount(6)}><span>Banking</span></li>
									
																		
								</ul> */}
                         <div onClick={()=>setActive(1)}>       <ShinyButton className={`${active===1?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`}text="WordPress Development" ></ShinyButton></div>
                         <div onClick={()=>setActive(2)}>      <ShinyButton className={`${active===2?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`} text="Php Development" ></ShinyButton></div>
                         <div onClick={()=>setActive(3)}>    <ShinyButton className={`${active===3?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`} text=" CMS Development" ></ShinyButton></div>
                         <div onClick={()=>setActive(4)}>    <ShinyButton className={`${active===4?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`}text="Shopify Development" ></ShinyButton></div>
                         <div onClick={()=>setActive(5)}>    <ShinyButton className={`${active===5?`bg-[#5046e6]`:`bg-[#201d3b]`} mt-[1.6rem]`} text="React Development" ></ShinyButton></div>
      
							</div>
     <div
        class="relative overflow-hidden   pb-8 space-y-24 "
        style={{
          background: "white",
          // backgroundImage: "url(./background.jpg)",
        }}
      >
        <div class="relative">
            
          <div class="lg:mx-auto lg:grid lg:max-w-1xl lg:grid-flow-col-dense lg:grid-cols-2  lg:px-8 ">
          <div class="mt-12 sm:mt-16 lg:mt-0">
              <div class=" p-3 lg:relative lg:m-0 lg:h-full lg:px-0 w-full">
                <img src="https://test.stickydevelopers.com/wp-content/uploads/2024/08/2-1.jpg" width={"95%"}/>
              </div>
            </div>
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-4 lg:px-0 content-center ">
              <div>
                <div class="">
                  <h1
                    className="text-[4em] transition-opacity 
   duration-500 
   ease-out opacity-100 hover:opacity-0  py-3 text-center  text-[#000000] font-black "
                  >
                    Screen printing
                  </h1>

                  <div className="text-[1em] ">
         
We have team which helps companies to optimize their operations, such as supply chain management, logistics, and production processes
                  </div>
                  <ShinyButton className="bg-[#5046e6] mt-[1.6rem]" text="Our Vision" ></ShinyButton>
    
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
        <div className="py-1s0 tracking-widest ">
          <BlurFadeDemo/>
        </div>
      </section>
  );
};

export default ServiceSection;
