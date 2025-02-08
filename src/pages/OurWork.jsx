import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurFadeDemo } from "./components/PluginComponents/Images";
const slider1 =
  "https://www.futurextechnologies.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpg0nq9ss%2Fimage%2Fupload%2Fv1669728035%2FFutureX%2Fseerat2_pdjwoe.jpg&w=828&q=75";
const slider2="https://www.futurextechnologies.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpg0nq9ss%2Fimage%2Fupload%2Fv1669384675%2FFutureX%2Fcraftedbeds_cl9ch8.jpg&w=828&q=75"
const transparent="https://t3.ftcdn.net/jpg/02/96/05/52/360_F_296055218_RXc721N9fSYIz3sEV7QALYquMVP31jdJ.jpg" 

const Work = () => {
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
    <section className="  py-24 tracking-widest tracking-widest bg-neutral-900">
        <div  className="line-heading animate fadein-Right  mx-auto"
        data-delay="0.6s"
        style={{
          animation: "0.5s ease-out 0.6s 1 normal forwards running anim",
        }}>
          <h3 
             style={{ transform: "translate3d(226.393px, 0px, 0px)" }}
          className="outline-text text-6xl text-center mb-8 font-bold text-fill-transparent text-stroke text-[#F1C40F]"
          ref={textRef}>
            Our Successful Projects
          </h3>
        </div>
        <div className="filters text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
								<ul className="filter-tabs filter-btns">
									<li className={`${active===1?"active2 filter": "filter"}`} data-role="button" data-filter=".all"onClick={()=>activeCount(1)}><span>All</span></li>
									
																		
									<li className={`${active===2?"active2 filter": "filter"}`} data-role="button" data-filter=".family" onClick={()=>activeCount(2)}><span>Family</span></li>
									
																		
									<li className={`${active===3?"active2 filter": "filter"}`} data-role="button" data-filter=".financial" onClick={()=>activeCount(3)}><span>Financial</span></li>
									
																		
									<li className={`${active===4?"active2 filter": "filter"}`} data-role="button" data-filter=".insurance" onClick={()=>activeCount(4)}><span>Insurance</span></li>
									
																		
									<li className={`${active===5?"active2 filter": "filter"}`} data-role="button" data-filter=".business" onClick={()=>activeCount(5)}><span>Business</span></li>
									
																		
									<li className={`${active===6?"active2 filter": "filter"}`} data-role="button" data-filter=".banking" onClick={()=>activeCount(6)}><span>Banking</span></li>
									
																		
								</ul>
							</div>

        <div className="py-1s0 tracking-widest ">
          <BlurFadeDemo/>
          {/* <SwiperSlider /> */}
          {/* <div class="grid grid-cols-3 gap-3">
            <div class="transform">
              <a
                href="https://goldenvape.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              />
              <div className="transform">
                <div
                  class="PortfolioItem loEHik move-up"
                  id="portfolio-item-4"
                >
                  <div class="reveal-content__RevealContainer-sc-zetwe7-0 iYtsYf animation-complete">
                    <span className="span2">
                      <span className="span1">
                        <img
                          alt=""
                          aria-hidden="true"
                          src={transparent}
                          className="withImg"
                        />
                      </span>
                      <img
                        alt="GoldenVape"
                        src={slider1}
                        decoding="async"
                        data-nimg="intrinsic"
                        class="PortfolioItem__NxtImage-sc-y2fm3o-0 cWjVsJ withIm2"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="">
              <a
                href="https://goldenvape.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              />
              <div className="transform">
                <div
                  class="PortfolioItem__Item-sc-y2fm3o-5 loEHik move-up"
                  id="portfolio-item-4"
                >
                  <div class="reveal-content__RevealContainer-sc-zetwe7-0 iYtsYf animation-complete">
                    <span className="span2">
                      <span className="span1" >
                        <img
                          alt=""
                          aria-hidden="true"
                          src={transparent}
                          className="withImg"
                        />
                      </span>
                      <img
                        alt="GoldenVape"
                        src={slider2}
                        decoding="async"
                        data-nimg="intrinsic"
                        class="PortfolioItem__NxtImage-sc-y2fm3o-0 cWjVsJ withIm2"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="">
              <a
                href="https://goldenvape.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              />
              <div className="transform">
                <div
                  class="PortfolioItem__Item-sc-y2fm3o-5 loEHik move-up"
                  id="portfolio-item-4"
                >
                  <div class="reveal-content__RevealContainer-sc-zetwe7-0 iYtsYf animation-complete">
                    <span className="span2">
                      <span className="span1">
                        <img
                          alt=""
                          aria-hidden="true"
                          src={transparent}
                          className="withImg"
                        />
                      </span>
                      <img
                        alt="GoldenVape"
                        src={slider1}
                        decoding="async"
                        data-nimg="intrinsic"
                        class="PortfolioItem__NxtImage-sc-y2fm3o-0 cWjVsJ withIm2"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
  );
};

export default Work;
