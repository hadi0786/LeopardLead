export default function AboutServices() {
    const services = [
      { title: "SaaS Design", desc: "We specialize in designing diverse SaaS", color: "bg-pink-500", icon: "✏️" },
      { title: "App Design", desc: "Mobile for both iOS and Android platforms", color: "bg-orange-500", icon: "📱" },
      { title: "Webflow & Framer", desc: "Seamless, interactive web design excellence", color: "bg-blue-500", icon: "💻" },
      { title: "Brand Identity", desc: "Brand identity reflecting innovation, trust", color: "bg-purple-500", icon: "🎨" },
      { title: "Web Design", desc: "Creating user-friendly, increased sales", color: "bg-pink-600", icon: "🌐" },
      { title: "Development", desc: "Front-end development & CMS", color: "bg-purple-600", icon: "⚙️" },
    ];
    return (
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900">We take ideas from concept to design, launch company</h2>
          <div className="mt-6 flex justify-center items-center space-x-2 text-gray-700">
            <span className="font-semibold">Our Services</span>
          </div>
        </div>
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`w-10 h-10 flex items-center justify-center text-white ${service.color} rounded-full text-xl`}>
                  {service.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
              <a href="#" className="text-gray-500 text-lg">↗</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  