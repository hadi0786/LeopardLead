import React from "react";

const services = [
  { title: "User Acquisition", description: "Partner with us to lead your marketing, grow your user base and accelerate your sales in record time, whilst maximising return.", icon: "\ud83d\udd0e" },
  { title: "PPC", description: "Get access to top PPC talent and the latest paid search strategies to boost growth, increase sales and outmaneuver competitors.", icon: "\ud83d\udd26" },
  { title: "Facebook Ads", description: "Our Facebook ad specialists can help you get more from the platform than you ever thought possible.", icon: "\ud83d\udc65" },
  { title: "Retargeting", description: "Re-engage leads that haven’t converted with personalised re-marketing campaigns that surface the right message at the right time.", icon: "\ud83d\udd04" }
];

const GrowServices = () => {
  return (
    <div className="bg-black text-white p-10">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full md:w-1/3 py-2 px-4 bg-gray-900 text-white rounded-full focus:outline-none"
        />
        <div className="flex mt-4 md:mt-0 space-x-4">
          <button className="px-6 py-2 border border-blue-500 text-white rounded-full hover:bg-blue-500">Grow</button>
          <button className="px-6 py-2 border border-gray-500 text-white rounded-full hover:bg-gray-500">Optimise</button>
          <button className="px-6 py-2 border border-gray-500 text-white rounded-full hover:bg-gray-500">Create</button>
        </div>
      </div>
      
      {/* Heading Section */}
      <h2 className="text-5xl font-bold mb-4">Grow</h2>
      <p className="text-gray-400 mb-8 max-w-2xl">
        Acquire new users for your app, customers for your product, subscribers for your service or members for your community.
      </p>
      
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-blue-400 text-3xl">{service.icon}</span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <a href="#" className="text-blue-400 hover:underline">learn more →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowServices;
