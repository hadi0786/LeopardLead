import React from "react";

const ReviewsSection = () => {
  return (
    <div className="relative bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Clutch Review */}
        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm">REVIEWED ON</p>
          <div className="flex justify-center items-center gap-1">
            <span className="text-red-500 text-xl">★★★★★</span>
          </div>
          <h3 className="text-xl font-semibold">Clutch</h3>
          <p className="text-gray-500">397 REVIEWS</p>
        </div>

        {/* G2 Review */}
        <div className="text-center bg-white border border-gray-300 p-4 rounded-lg shadow-md">
          <div className="flex justify-center items-center gap-1">
            <span className="text-red-500 text-xl">★★★★★</span>
          </div>
          <p className="text-gray-500">Read our reviews on</p>
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/100x40" alt="G2 Logo" className="h-10" />
          </div>
        </div>

        {/* Google Review */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/100x40" alt="Google Logo" className="h-8" />
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="text-black font-semibold">4.5 / 5</span>
            <span className="text-yellow-500 text-xl">★★★★☆</span>
          </div>
          <p className="text-gray-500">189 CUSTOMER REVIEWS</p>
        </div>
      </div>

      {/* Decorative Zig-Zag Line */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50L120 30L240 60L360 20L480 40L600 70L720 30L840 50L960 20L1080 60L1200 40L1320 70L1440 30V100H0V50Z"
            fill="#FFA726"
          />
        </svg>
      </div>

      {/* To Top Button */}
      <button className="fixed right-6 bottom-16 bg-white border border-gray-300 shadow-lg rounded-full px-3 py-2 text-black font-semibold hover:bg-gray-200 transition">
        ↑ <span className="block text-xs">TO TOP</span>
      </button>
    </div>
  );
};

export default ReviewsSection;
