import React from "react";

const RecentWork = () => {
  return (
    <div className="bg-black text-white py-10 px-6">
      <h2 className="text-3xl font-bold">Recent work</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">
        The latest creative, campaign, motion graphics, design and growth
        marketing work from our in-house agency studio
      </p>
      
      <div className="flex gap-2 mt-4 flex-wrap">
        {[
          "Film",
          "Motion",
          "Paid Ads",
          "Branding",
          "Growth Marketing",
          "Influencer",
        ].map((category) => (
          <button
            key={category}
            className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm hover:bg-gray-700"
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gradient-to-b from-orange-500 to-orange-700 rounded-2xl p-6">
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Era</span>
          <h3 className="text-2xl font-semibold mt-3">Open a business account today</h3>
          <div className="bg-white p-4 rounded-lg mt-4">
            <h4 className="text-red-600 text-lg font-bold">ANNA</h4>
            <p className="text-gray-700 mt-2">World business credit</p>
            <p className="text-gray-700 text-xl font-semibold mt-2">£152,600</p>
          </div>
          <p className="mt-4 text-lg font-bold">Designing A Visual Hook For Business Owners</p>
        </div>
        
        <div className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden">
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Coinbase</span>
          <h3 className="text-2xl font-semibold mt-3">Secure Crypto</h3>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full opacity-50"></div>
          <p className="mt-4 text-lg font-bold">Feel Secure With Coinbase</p>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;