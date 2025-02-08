import { useState } from 'react';

const ServicesSections = () => {
  const [activeFilter, setActiveFilter] = useState('UI/UX Design');
  const [isDark, setIsDark] = useState(false);

  const filters = ['UI/UX Design', 'Web Development', 'Mobile Apps', 'Branding', 'Cloud Solutions'];
  
  const projects = [
    { 
      title: 'E-commerce Platform', 
      category: 'Web Development',
      image: 'https://img.freepik.com/free-photo/closeup-forest-foliage-tree-generative-al_169016-28582.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_incoming'
    },
    { 
      title: 'Mobile Banking App',
      category: 'Mobile Apps',
      image: 'https://img.freepik.com/free-photo/rain-forest-background-generative-ai_91128-2377.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_incoming'
    },
    { 
      title: 'Brand Identity', 
      category: 'Branding',
      image: 'https://img.freepik.com/free-photo/vibrant-meadow-multi-colored-flowers-summer-generated-by-ai_24640-130988.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_incoming'
    },
    { 
      title: 'Cloud Migration', 
      category: 'Cloud Solutions',
      image: 'https://img.freepik.com/free-photo/spectral-light-illuminates-transparent-red-colored-red-roses-abstract-flower-art-generative-ai_157027-1729.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_incoming'
    },
    { 
      title: 'Dashboard UI Kit', 
      category: 'UI/UX Design',
      image: 'https://img.freepik.com/free-photo/natures-beauty-close-up-purple-wildflowers-bloom-generative-ai_188544-8591.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_incoming'
    },
    { 
      title: 'AI Analytics', 
      category: 'Cloud Solutions',
      image: 'https://img.freepik.com/free-photo/colorful-flower-is-displayed-black-background_1340-23726.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_incoming'
    },
  ];

  return (
    <section className={`${isDark ? 'dark bg-gray-900' : 'bg-white'} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-black text-center dark:text-white mb-12">
          Delivering excellence across a portfolio of successful projects!
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mb-16 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <img 
            src="https://img.freepik.com/free-photo/natures-floral-beauty-vibrant-meadow-generative-ai_188544-8585.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_incoming" 
            alt="Featured Project"
            className="w-full h-96 object-cover transform transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80">
            <h3 className="text-3xl font-bold text-white mb-2">Featured Project</h3>
            <p className="text-gray-200">Next-gen digital experience platform</p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-black rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSections;