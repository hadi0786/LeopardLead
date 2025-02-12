import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  {
    src: "https://img.freepik.com/free-photo/wet-fresh-beautiful-colorful-feather-textured-background_23-2148114617.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
    title: "Cloud-Based Efficiency",
    description:
      "Leverage the power of cloud computing to streamline your business operations, increase flexibility, and enhance data security with our SAAS solutions.",
    tags: ["CLOUD", "AUTOMATION", "SECURITY"],
  },
  {
    src: "https://img.freepik.com/free-photo/view-nature-landscape-with-lake-boat_23-2150763786.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
    title: "Seamless Integration",
    description:
      "Our SAAS solutions integrate seamlessly with your existing workflow, allowing you to scale effortlessly while maintaining operational consistency and performance.",
    tags: ["INTEGRATION", "SCALABILITY", "PERFORMANCE"],
  },
  {
    src: "https://img.freepik.com/free-photo/ai-generated-boat-picture_23-2150647901.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
    title: "AI-Driven Insights",
    description:
      "Harness the power of artificial intelligence to gain deep insights into customer behavior, automate tasks, and make data-driven decisions with confidence.",
    tags: ["AI", "ANALYTICS", "INSIGHTS"],
  },
  {
    src: "https://img.freepik.com/free-photo/sky-landscape-digital-art-style-with-tree-silhouette_23-2151120841.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_authors_boost",
    title: "Scalable Growth",
    description:
      "From startups to enterprises, our SAAS solutions provide a scalable foundation, ensuring high availability, rapid deployment, and cost-effective expansion.",
    tags: ["GROWTH", "FLEXIBILITY", "COST-EFFICIENCY"],
  },
];

export default function ExperienceShowcase() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full px-6 lg:px-12 py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-gray-800">SAAS Solutions</h2>
        <p className="text-gray-600 mt-3">
          Elevate your business with cutting-edge software solutions tailored for efficiency, security, and growth.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Main Image Section */}
        <div className="relative w-full lg:w-[50%] flex justify-center">
          <motion.img
            key={current}
            src={images[current].src}
            alt="SAAS Feature"
            className="h-[500px] w-[450px] rounded-xl object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Dynamic Tags - Positioned Within the Image */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/90 px-3 py-2 rounded-full">
            {images[current].tags.map((tag) => (
              <span key={tag} className="text-black text-xs font-semibold">{tag}</span>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full"
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          >
            ➜
          </button>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-[50%] flex flex-col justify-between items-start text-left mt-6 lg:mt-0 pl-6">
          {/* Upper Content: Title and Description */}
          <div>
            <h1 className="text-4xl font-semibold">{images[current].title}</h1>
            <p className="text-gray-600 mt-2">{images[current].description}</p>
          </div>

          {/* Bottom Content: Thumbnails */}
          <div className="flex space-x-4 mt-6">
            {images.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.img
                  src={img.src}
                  alt="Thumbnail"
                  className={`h-20 w-20 rounded-lg cursor-pointer object-cover ${
                    index === current ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                  whileHover={{ scale: 1.1 }}
                />
                <p className="text-xs text-gray-600 mt-1">{img.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
