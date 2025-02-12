import React from "react";

const MarketingSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white text-black">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold">Marketing that drives growth</h1>
        <p className="text-lg text-gray-600">
          The growth marketing agency of record for the world’s fastest growing companies.
        </p>
        
        <div className="space-y-2">
          <p className="flex items-center gap-2"><i className="fas fa-check-circle text-[#f1c40f]-500"></i> The #1 Growth Marketing Agency</p>
          <p className="flex items-center gap-2"><i className="fas fa-check-circle text-[#f1c40f]-500"></i> Nearly a decade As Industry Leaders</p>
          <p className="flex items-center gap-2"><i className="fas fa-check-circle text-[#f1c40f]-500"></i> Creative, Media & Performance</p>
        </div>
        
        <button className="px-6 py-3 bg-[#f1c40f] text-white font-semibold rounded-lg shadow-md hover:bg-black transition">
          Book a call
        </button>
        
        {/* Logo Slider */}
        <div className="mt-6 overflow-hidden whitespace-nowrap">
          <div className="flex space-x-6 animate-marquee">
            <img src="/images/1.png" alt="Logo 1" className="h-20" />
            <img src="/images/2.png" alt="Logo 2" className="h-20" />
            <img src="/images/3.png" alt="Logo 3" className="h-20" />
            <img src="/images/4.png" alt="Logo 4" className="h-20" />
          </div>
        </div>
      </div>
      
      {/* Right Content - Video Card */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 shadow-lg">
        <video autoPlay loop muted className="w-full rounded-lg">
          <source src="videos/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MarketingSection;
