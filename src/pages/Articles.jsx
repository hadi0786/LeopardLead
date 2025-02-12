import React from "react";

const articles = [
  {
    id: 1,
    image: "https://img.freepik.com/free-vector/watercolor-mountains-background_23-2149238186.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
    tag: "DTC",
    category: "Brand",
    title: "The Cult of Water. How Liquid Death's Marketing Team Stole Our Attention",
    author: "Mulenga Agley",
    date: "Jan 30, 2025",
    readTime: "1 min read",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-vector/natural-background-with-gradient-tropical-forest-landscape_23-2148274902.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
    tag: "TikTok",
    category: "Growthcurve",
    title: "2025 Gen Zalpha Tiktok Trend Report",
    author: "Growthcurve",
    date: "Jan 10, 2025",
    readTime: "12 min read",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/futuristic-moon-background_23-2150930892.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
    tag: "Growth",
    category: "Growth Marketing",
    title: "Mastering Market Entry - Comprehensive, Data-Driven Strategies for US Expansion and Beyond",
    author: "Jay Mokashi",
    date: "Jan 09, 2025",
    readTime: "10 min read",
  },
];

const RecentArticles = () => {
  return (
    <div className="bg-white text-white py-10 px-6">
      <h2 className="text-6xl font-bold mb-6 text-black text-center">RECENT ARTICLES</h2>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {articles.map((article) => (
          <div
            key={article.id}
            className="w-72 bg-black bg-opacity-80 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="absolute top-2 left-2 bg-[#F1C50E] text-xs text-white px-2 py-1 rounded">{article.tag}</div>
              <div className="absolute top-2 right-2 bg-gray-700 text-xs text-white px-2 py-1 rounded">{article.category}</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{article.author}</p>
              <p className="text-xs text-gray-500">{article.date} • {article.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
