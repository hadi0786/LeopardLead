import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  IconCloudDemo } from "./Webdevelopment";
import digitalmarketing from "../../assets/Digital marketing vid.mp4"
import uiux from "../../assets/UIUX.mp4"
import ecommerce from "../../assets/Ecommerce.mp4"
import mobileApplication from "../../assets/Mobile application.mp4"
import webdevelopment from "../../assets/webdevelopment.mp4"
import useWindowSize from "../../windowsize";
import { distance } from "framer-motion";
const CenterHighlightedList = () => {
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

  const items_data = [];

  const videos=[
    {
      src:digitalmarketing
    },
    {
      src:uiux
    }, {
      src:ecommerce
    }, {
      src:mobileApplication
    }, 

  ]
  const items = [
    {
      ref: useRef(null),
      name: "Web Development",
      text: "lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji ",
      backgroundColor: "#08080800",
      src: "https://www.digitalgravity.ae/assets/images/home/services/ecommerce-development.webp",
    },
    {
      ref: useRef(null),
      name: "Digital Marketing",
      text: "lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji ",
      backgroundColor: "#000000b3",
      src: "https://www.digitalgravity.ae/assets/images/home/services/ecommerce-development.webp",
    },
    {
      ref: useRef(null),
      name: "UI/UX design",
      text: "lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji ",
      backgroundColor: "#000000b3",
      src: "https://www.digitalgravity.ae/assets/images/home/services/ecommerce-development.webp",
    },
    {
      ref: useRef(null),
      name: "E-Commerence Development",
      text: "lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji ",
      backgroundColor: "#000000b3",
      src: "https://www.digitalgravity.ae/assets/images/home/services/digital-branding.webp",
    },
    {
      ref: useRef(null),
      name: "Mobile Development",
      text: "this is something we know lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji lorem ispososji ",
      backgroundColor: "#000000b3",
      src: "https://www.digitalgravity.ae/assets/images/home/services/digital-branding.webp",
    },
   
   
    // Add more items as needed
  ];
  const containerRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [render,setRender]=useState(false)
  const { width } = useWindowSize();

  const [activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    const container = containerRef.current;



    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestItem = null;
      let minDistance = Infinity;

      

     
items.forEach((item, index) => {
  if (item.ref.current) {
    const itemRect = item.ref.current.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;
    const distance = Math.abs(itemCenter - containerCenter); // Calculate the distance

    // Check if this item is closer than the previous closest item
    if (distance < minDistance) {
      minDistance = distance;
      closestItem = index; // Update the closestItem index
    }
  }
});

      // if(width>1500){


      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        // Check if the end of the container is reached
        console.log(scrollTop + clientHeight+11 >= scrollHeight,"end",scrollTop + clientHeight+11,scrollHeight)
        if (scrollTop + clientHeight +11>= scrollHeight) {

          setHighlightedIndex(7)
        } 
        else{ 
          setHighlightedIndex(closestItem-1)
        }
      }
     
     

        // if(highlightedIndex!=7){

        // }
      // }
      // else{
        // setHighlightedIndex(closestItem);
      // }

      // const newScrollTop = (index + 1) * itemHeight - containerRef?.current?.clientHeight;
      // containerRef.current.scrollTo({ top: newScrollTop, behavior: 'smooth' });
      
    };


    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial highlight

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [items]);
  const [style, setStyle] = useState({
    transform: 'scale(0)', // Start small
    opacity: 0,              // Start hidden
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', // Transition for the animation
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [scale,setScale]=useState(0.5)

  useEffect(() => {
    const handleScroll = () => {
      // setHasAnimated
      if(scale==0.5){
        setScale(1)
      }
      else{
        setScale(0.5)
      }
      setScale((prev)=>prev+0.5)
      console.log("hello",scale)
      setScale(1)
      if (!hasAnimated) {
        console.log("hello")
        setScale((prev)=>prev+0.5)
        setStyle({
          transform: `scale(${scale})`, // Scale to full size
          opacity: 1,           // Fade in
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        });
        setHasAnimated(true); // Prevent further animations
      }
    };

    // Trigger the animation after the component mounts
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 50); // Small delay to ensure the style is set first

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the timeout and event listener on unmount
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);


  const [animate,setAnimate]=useState(false)

  useEffect(()=>{
    if(!animate){

      if(scale==0.5){
        setScale(1)
      }
      else{
        setScale(0.5)
      }
      setAnimate(true)
    }
  },[scale])



  // const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.from(text, {
      x: -150,
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
    <>




    

   {width>748&& <div className="flex w-[100vw] ">
      {/* First Section: Our Services */}
      <section className="bg-black-600 line-heading animate fadein-Right      w-[25%] h-[600px]" style={{backgroundColor:"black",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h2 
       data-delay="0.6s"
      ref={textRef}
     style={{
      // transform: "translate3d(226.393px, 0px, 0px)", 
      // transform: `scale(${scale==1?1:0.5})`, // Scale to full size
      // opacity: 1,           // Fade in
      // // transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
      // color: '#F1C40F00',
      // fontFamily: '"Marcellus", Sans-serif',
      fontSize: '50px',
      // fontWeight: 100,
      // lineHeight: '59px',
      // letterSpacing: '0px',
      // WebkitTextStrokeWidth: '0.3px',
      // WebkitTextStrokeColor: 'white',
      // marginTop: '3rem',
      // marginBottom: '3rem',
    }}
    // style={{ transform: "translate3d(226.393px, 0px, 0px)" }}
          className="outline-text   mb-8 font-bold text-fill-transparent text-stroke text-[#F1C40F]"
      >
          Our Services   
        </h2>
       



         <div className="flex w-full items-center  mx-auto">
        <div
// ${(highlightedIndex==6 && render)?"h-[70px]":"h-[150px]"} 

className={`relative flex-1 
  
        h-[70vh]
            mt-[30px]    rounded-md  flex  
         text-white
         `}
        style={{scrollbarWidth:"none"}}
           ref={containerRef}
         >
           {/* <ul className=" px-5 h-48  flex flex-col justify-center items-start w-3/5  items-end" style={{paddingTop:"3.2rem"}}>
             {items.map((item, index) => (
               <li
               key={index}
                ref={item.ref}
                className={`px-4 py-4   ${
                  highlightedIndex === index
                    ? "text-2xl text-yellow-300 "
                    : "text-2xl  "
                }`}
                onClick={() => {
                  // if(width>1500){
                  //   setHighlightedIndex(index+1)
                  // }
                  // else{
                  //   setHighlightedIndex(index)
                  // }
                  // setRender(!render)
                
                }
                
                }
                  
              >
                {item.name}
              </li>
            ))}
          </ul> */}

<div className="services-list ml-[2vw]" style={{cursor:"pointer"}}>
        {items.map((service, index) => (
          <div
            key={index}
            className={`service-item my-2 ${index === activeIndex ? "text-yellow-300" : ""}`}
            onClick={()=>{setActiveIndex(index),console.log(index)}}
          >
            {service?.name}
          </div>
        ))}
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <rect x="9" y="3" width="6" height="18" rx="3" ry="3" stroke-width="2" stroke="currentColor" fill="none"></rect>
  <line x1="12" y1="7" x2="12" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="animate-bounce" />
</svg>
        </div>



       
      </div>

        
        
      </section>
      {console.log(highlightedIndex,"12")}

      {/* Second Section: Render a component */}
     {(render==true||render==false)&& <section className="  w-[75%] h-[600px] flex justify-center" style={{backgroundColor:activeIndex%2==0?"white":"black"}}>
        {/* <h2 className="text-white text-2xl font-bold">Our Component</h2> */}
        {
          (activeIndex==0)?
          <IconCloudDemo />
          :activeIndex==1? <video
          style={{display:activeIndex!==1?"none":"block",objectFit:"cover"}}
         
          width="100%"
          height="100%"
          autoPlay={true}
          loop
          stop
          muted
          className="z-10 opacity-7 "
        >
          <source src={digitalmarketing} />
          Your browser does not support the video tag.
        </video>:""
        }

<video
          style={{display:activeIndex!==2?"none":"block",objectFit:"cover"}}
         
          width="100%"
          height="700px"
          autoPlay={true}
          loop
          stop
          muted
          className="z-10 opacity-7 "
        >
          <source src={uiux} />
          Your browser does not support the video tag.
        </video>

        <video
        style={{display:activeIndex!==3?"none":"block",objectFit:"cover"}}
          width="100%"
          height="700px"
          autoPlay={true}
          loop
          muted
          className="z-10 opacity-7 "
        >
          <source src={ecommerce} />
          Your browser does not support the video tag.
        </video>
        <video
        style={{display:activeIndex!=4?"none":"block",objectFit:"cover"}}
        
          width="100%"
          height="700px"
          autoPlay={true}
          loop
          muted
          className="z-10 opacity-7 "
        >
          <source src={mobileApplication} />
          Your browser does not support the video tag.
        </video>
      </section>}
    </div>}



  
{
  width<748&&(
    <section className="  w-[100%] text-center  flex flex-col justify-center" >
    {/* <h2 className="text-white text-2xl font-bold">Our Component</h2> */}


    <h2 
     ref={textRef}
    //  style={{
    //   // transform: "translate3d(226.393px, 0px, 0px)", 
    //   // transform: `scale(${scale==1?1:0.5})`, // Scale to full size
    //   opacity: 1,           // Fade in
    //   // transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    //   color: 'black',
    //   fontFamily: '"Marcellus", Sans-serif',
    //   fontSize: '50px',
    //   fontWeight: 100,
    //   lineHeight: '20px',
    //   letterSpacing: '0px',
    //   WebkitTextStrokeWidth: '0.3px',
    //   WebkitTextStrokeColor: 'white',
    //   marginTop: '2rem',
    //   marginBottom: '2rem',
    // }}
    className="stroke2"
      >
          Our Services   
        </h2>
    
    
     
      <IconCloudDemo /> 

      {/* <video
      style={{objectFit:"cover"}}
     
      width="100%"
      height="100%"
      autoPlay={true}
      loop
      stop
      muted
      className="z-10 opacity-7 "
    >
      <source src={webdevelopment} />
      Your browser does not support the video tag.
    </video> */}
    
      
      <video
      style={{objectFit:"cover"}}
     
      width="100%"
      height="100%"
      autoPlay={true}
      loop
      stop
      muted
      className="z-10 opacity-7 "
    >
      <source src={digitalmarketing} />
      Your browser does not support the video tag.
    </video>
    

<video
      style={{objectFit:"cover"}}
     
      width="100%"
      height="700px"
      autoPlay={true}
      loop
      stop
      muted
      className="z-10 opacity-7 "
    >
      <source src={uiux} />
      Your browser does not support the video tag.
    </video>

    <video
    style={{objectFit:"cover"}}
      width="100%"
      height="700px"
      autoPlay={true}
      loop
      muted
      className="z-10 opacity-7 "
    >
      <source src={ecommerce} />
      Your browser does not support the video tag.
    </video>
    <video
    style={{objectFit:"cover"}}
    
      width="100%"
      height="700px"
      autoPlay={true}
      loop
      muted
      className="z-10 opacity-7 "
    >
      <source src={mobileApplication} />
      Your browser does not support the video tag.
    </video>
  </section>
  )
}




</>
    
  );
};

export default CenterHighlightedList;
