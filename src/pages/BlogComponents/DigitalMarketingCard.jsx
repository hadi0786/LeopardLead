import { useState } from "react";
// import { BlueArrow, Calendar } from "/pubimages";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const DigitalMarketingCard = ({ data, containerClass }) => {
  const [arrowHover, setArrowHover] = useState(false);
  return (
    <div
      className={`min-w-fit h-full flex flex-col max-w-full rounded-[15px] border  overflow-hidden bg-c_F3F4F5   ${containerClass}`}
    >
      <div className="overflow-hidden">
        <img
          src={
            "https://tse1.mm.bing.net/th?id=OIP.F7V7TpEd-tG3KSvM0jNrRgHaEi&pid=Api"
          }
          alt="Digital Marketing"
          title="Digital Marketing"
          width={1600}
          height={900}
          className="w-full aspect-video cursor-pointer hover:scale-110 duration-500"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-start">
        <div className="flex justify-start items-center gap-5">
          <div className="flex justify-start items-center gap-2"></div>
        </div>
        <div className="mt-2 mb-3">
          <p className="text-c_0B0B0B text-xl font-bold cursor-pointer text-[#f1c40f]">
            Understanding Digital Transformation to Unlock Businesses to their
            Full Potential
          </p>
          <p className="text-c_000000 mt-2 text-sm overflow-hidden line-clamp-5 cursor-pointer text-sm">
            In a world driven by constant innovation and technological
            disruption, businesses face a critical choice: adapt or be left
            behind. This is where digital transformation comes into play.
            Digital transformation is not simply about adopting the latest
            technology trends. It’s a holistic approach that involves
            reimagining business processes, leveraging technology, and fostering
            a
          </p>
        </div>
        <div className="flex justify-between items-center gap-3 row-gap-20 mt-auto">
          <Button
            title={
              <span className="relative flex justify-center items-center gap-2 z-10">
                Read More
                <span className="hover:bg-red-500 hover:-rotate-45 duration-500 rounded-full p-4 cursor-pointer text-white">
                  <FaArrowRight />
                </span>
              </span>
            }
            className="font-bold text-xl text-c_089DE5 hover:text-toprimary "
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCard;
