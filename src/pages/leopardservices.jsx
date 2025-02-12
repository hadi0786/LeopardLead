import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ServicesSections = () => {
  const [activeFilter, setActiveFilter] = useState("UI/UX Design");
  const [isDark, setIsDark] = useState(false);

  const filters = [
    "UI/UX Design",
    "Web Development",
    "Mobile Apps",
    "Branding",
    "Cloud Solutions",
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image:
        "https://img.freepik.com/free-photo/closeup-forest-foliage-tree-generative-al_169016-28582.jpg",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Apps",
      image:
        "https://img.freepik.com/free-photo/rain-forest-background-generative-ai_91128-2377.jpg",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image:
        "https://img.freepik.com/free-photo/vibrant-meadow-multi-colored-flowers-summer-generated-by-ai_24640-130988.jpg",
    },
  ];

  // Scroll animation setup
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className={`${isDark ? "dark bg-gray-900" : "bg-white"} py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-6xl font-bold font-[Poppins] text-black text-center dark:text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          RECENT PROJECTS
        </motion.h2>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="mb-16 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <motion.img
            src="https://img.freepik.com/free-photo/natures-floral-beauty-vibrant-meadow-generative-ai_188544-8585.jpg"
            alt="Featured Project"
            className="w-full h-96 object-cover transform transition-transform group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80">
            <motion.h3
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Featured Project
            </motion.h3>
            <motion.p
              className="text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              Next-gen digital experience platform
            </motion.p>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <motion.h3
                    className="text-xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span
                    className="inline-block px-3 py-1 bg-yellow-400 text-black rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSections;
