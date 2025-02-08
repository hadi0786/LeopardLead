import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import slider1 from "../../../public/images/";
import BelgraviaLogo from "../../../public/images/belgravia-logo.png";
const slider1 =
  "https://www.digitalgravity.ae/assets/images/home/services/ecommerce-development.webp";
const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((ele, index) => {
        return (
          <SwiperSlide>
            <img
              src={slider1}
              className="hover:opacity-50 cursor-pointer hover:scale-105 duration-500"
            />
            {/* <img src={BelgraviaLogo} /> */}

            <p className="text-[#8d8d8] text-sm">
              {" "}
              Building a magnificent platform to aid the chanting purpose of the
              Belgravia London. Loud and proud among competitors.{" "}
            </p>
          </SwiperSlide>
        );
      })}
      <SwiperSlide>
        <img src={slider1} />

        <p className="text-[#8d8d8] text-sm">
          {" "}
          Building a magnificent platform to aid the chanting purpose of the
          Belgravia London. Loud and proud among competitors.{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider1} />

        <p className="text-[#8d8d8] text-sm">
          {" "}
          Building a magnificent platform to aid the chanting purpose of the
          Belgravia London. Loud and proud among competitors.{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider1} />

        <p className="text-[#8d8d8] text-sm">
          {" "}
          Building a magnificent platform to aid the chanting purpose of the
          Belgravia London. Loud and proud among competitors.{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider1} />

        <p className="text-[#8d8d8] text-sm">
          {" "}
          Building a magnificent platform to aid the chanting purpose of the
          Belgravia London. Loud and proud among competitors.{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider1} />

        <p className="text-[#8d8d8] text-sm">
          {" "}
          Building a magnificent platform to aid the chanting purpose of the
          Belgravia London. Loud and proud among competitors.{" "}
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
