import React from "react";

const works = [
  {
    id: 1,
    title: "Designing A Visual Hook For Business Owners",
    description: "Open a business account today",
    category: "Branding",
    image: "https://img.freepik.com/free-photo/modern-smartphone-with-live-abstract-wallpaper-coming-out-screen_23-2151033614.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
  },
  {
    id: 2,
    title: "Feel Secure With Coinbase",
    description: "Secure Crypto",
    category: "Growth Marketing",
    image: "https://img.freepik.com/free-photo/modern-smartphone-with-live-abstract-wallpaper-coming-out-screen_23-2151033614.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
  },
];

const filters = ["All", "Film", "Motion", "Paid Ads", "Branding", "Growth Marketing", "Influencer"];

const RecentWork = () => {
  return (
    <div className="bg-white text-black py-10 px-5 ">
      <h2 className="text-3xl font-bold mb-4">Recent work</h2>
      <p className="text-gray-400 mb-6 max-w-2xl">
        The latest creative, campaign, motion graphics, design, and growth marketing work from our in-house agency studio.
      </p>
      <div className="flex space-x-4 mb-6">
        {filters.map((filter) => (
          <button key={filter} className="px-4 py-2 bg-[#F3C70E] text-white rounded-full text-sm hover:bg-gray-700">
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative w-full h-[500px] bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${work.image})` }}
          >
            <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs rounded-full font-semibold">
              {work.category}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {works.map((work) => (
          <p key={work.id} className="text-center text-black font-medium text-lg">
            {work.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
