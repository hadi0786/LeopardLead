import React from "react";
import GrowServices from "./GrowService";
const OurServices = () => {
  return (
    <div>
    <div className="bg-white text-black py-16 px-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 mb-6 max-w-lg">
          Spin up a complete growth marketing department on-demand or extend
          your existing team with the specific service packages you need.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        <div className="relative w-72 h-72">
          <div
            className="absolute w-60 h-60 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/sky-landscape-digital-art-style-with-tree-silhouette_23-2151120841.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost')" }}
          ></div>
          <div
            className="absolute w-60 h-60 rounded-lg bg-cover bg-center left-12 top-6"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/sky-landscape-digital-art-style-with-tree-silhouette_23-2151120841.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost')" }}
          ></div>
        </div>
      </div>
    </div>
    <GrowServices></GrowServices>
    </div>
  );
};

export default OurServices;
