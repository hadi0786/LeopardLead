import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../pages/BlogComponents/Button";
import useWindowSize from "../windowsize";

const servicesList = [
  {
    title: "Web Development",
    icon: "fas fa-code",
    items: [
      { title: "WordPress", icon: "fab fa-wordpress", link: "#" },
      { title: "PHP", icon: "fab fa-php", link: "#" },
      { title: "React JS", icon: "fab fa-react", link: "#" },
      { title: "Next JS", icon: "fas fa-cog", link: "#" },
      { title: "Node JS", icon: "fab fa-node", link: "#" },
      { title: "Laravel", icon: "fab fa-laravel", link: "#" },
    ]
  },
  {
    title: "Mobile Development",
    icon: "fas fa-mobile-alt",
    items: [
      { title: "React Native", icon: "fab fa-react", link: "#" },
      { title: "Flutter", icon: "fas fa-mobile", link: "#" },
      { title: "Swift", icon: "fab fa-swift", link: "#" },
      { title: "Kotlin", icon: "fas fa-code", link: "#" },
    ]
  },
  {
    title: "Design Services",
    icon: "fas fa-palette",
    items: [
      { title: "UI/UX Design", icon: "fab fa-figma", link: "#" },
      { title: "Graphic Design", icon: "fas fa-paint-brush", link: "#" },
      { title: "Motion Design", icon: "fas fa-film", link: "#" },
    ]
  },
];

const saasSolutions = [
  {
    title: "SAAS Products",
    icon: "fas fa-cloud",
    items: [
      { title: "CRM Solutions", icon: "fas fa-users-cog", link: "/saas/solutions" },
      { title: "ERP Systems", icon: "fas fa-chart-line", link: "/saas/solutions" }
    ]
  },
  {
    title: "Pricing Models",
    icon: "fas fa-tags",
    items: [
      { title: "Subscription Plans", icon: "fas fa-calendar-alt", link: "/saas/pricing" },
      { title: "Custom Pricing", icon: "fas fa-handshake", link: "/saas/pricing" }
    ]
  }
];

const navOptions = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { 
    text: "Services",
    subItems: servicesList
  },
  { path: "/ourWork", text: "Projects" },
  { 
    text: "SAAS Solutions",
    subItems: saasSolutions
  },
  { path: "/blogs", text: "Blogs" },
];

const Navbar = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeSaas, setActiveSaas] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showSaas, setShowSaas] = useState(false);
  const navigation = useNavigate();
  const { width } = useWindowSize();

  useGSAP(() => {
    gsap.from(".nav-logo", {
      y: -100,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      delay: 0.2
    });
    
    gsap.from(".nav-item", {
      y: -100,
      duration: 0.6,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.4
    });

    gsap.from(".nav-cta", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.6
    });
  });

  const handleDropdown = useCallback((type, show) => {
    if (type === 'services') {
      setShowServices(show);
      setShowSaas(false);
    } else {
      setShowSaas(show);
      setShowServices(false);
    }
  }, []);

  const getIconForRoute = useCallback((path) => {
    const icons = {
      '/': 'fa-home',
      '/about': 'fa-info-circle',
      '/services': 'fa-cogs',
      '/ourWork': 'fa-briefcase',
      '/blogs': 'fa-blog',
      '/saas/solutions': 'fa-cloud',
      '/saas/pricing': 'fa-tag'
    };
    return icons[path] || 'fa-link';
  }, []);

  return (
    <>
      {width > 900 && (
        <header className="w-full font-poppins z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
          <nav className="flex w-full justify-between items-center container mx-auto h-24 px-8">
            <motion.img
              src="/images/logo1.png"
              className="nav-logo w-40 object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt="Logo"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
            />

            <section className="flex gap-8 items-center h-full">
              {navOptions.map((ele, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => ele.subItems && handleDropdown(ele.text.toLowerCase().includes('services') ? 'services' : 'saas', true)}
                  onMouseLeave={() => ele.subItems && handleDropdown(ele.text.toLowerCase().includes('services') ? 'services' : 'saas', false)}
                >
                  <NavLink
                    to={ele.path || "#"}
                    className="nav-item relative text-gray-700 hover:text-[#f1c40f] transition-all duration-300 px-3 py-2 flex items-center group"
                  >
                    <span className="relative z-10">
                      {ele.text}
                      {ele.subItems && (
                        <i className="fas fa-chevron-down text-xs ml-2 transition-transform group-hover:rotate-180"></i>
                      )}
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#f1c40f] to-[#ffd700] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </NavLink>

                  <AnimatePresence>
                    {ele.text === "Services" && showServices && (
                      <motion.div
                        className="absolute top-full left-0 w-[800px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-4 gap-6">
                            <div className="col-span-1 border-r border-gray-200 pr-6">
                              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f1c40f] to-[#ffd700] bg-clip-text text-transparent mb-4">
                                Our Services
                              </h3>
                              <ul className="space-y-3">
                                {servicesList.map((service, index) => (
                                  <motion.li 
                                    key={index}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                      activeService === index
                                        ? 'bg-gradient-to-r from-[#f1c40f]/10 to-[#ffd700]/05 border border-[#f1c40f]/20'
                                        : 'hover:bg-gray-50'
                                    }`}
                                    onMouseEnter={() => setActiveService(index)}
                                    whileHover={{ x: 5 }}
                                  >
                                    <i className={`${service.icon} text-lg text-[#f1c40f] w-6`}></i>
                                    <span className="text-gray-700 font-medium">{service.title}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div className="col-span-3 pl-6">
                              <div className="grid grid-cols-3 gap-4">
                                {servicesList[activeService]?.items?.map((item, index) => (
                                  <motion.a 
                                    key={index}
                                    href={item.link}
                                    className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#f1c40f]/30 relative"
                                    whileHover={{ y: -5 }}
                                  >
                                    <div className="flex items-center gap-3 mb-3">
                                      <i className={`${item.icon} text-2xl text-[#f1c40f] group-hover:scale-110 transition-transform`}></i>
                                      <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                      Professional {item.title} services with modern solutions and expert implementation.
                                    </p>
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {ele.text === "SAAS Solutions" && showSaas && (
                      <motion.div
                        className="absolute top-full left-0 w-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-1 border-r border-gray-200 pr-6">
                              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f1c40f] to-[#ffd700] bg-clip-text text-transparent mb-4">
                                SAAS Solutions
                              </h3>
                              <ul className="space-y-3">
                                {saasSolutions.map((solution, index) => (
                                  <motion.li 
                                    key={index}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                      activeSaas === index
                                        ? 'bg-gradient-to-r from-[#f1c40f]/10 to-[#ffd700]/05 border border-[#f1c40f]/20'
                                        : 'hover:bg-gray-50'
                                    }`}
                                    onMouseEnter={() => setActiveSaas(index)}
                                    whileHover={{ x: 5 }}
                                  >
                                    <i className={`${solution.icon} text-lg text-[#f1c40f] w-6`}></i>
                                    <span className="text-gray-700 font-medium">{solution.title}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div className="col-span-1 pl-6">
                              <div className="grid grid-cols-1 gap-4">
                                {saasSolutions[activeSaas]?.items?.map((item, index) => (
                                  <motion.a 
                                    key={index}
                                    href={item.link}
                                    className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#f1c40f]/30 relative"
                                    whileHover={{ y: -5 }}
                                  >
                                    <div className="flex items-center gap-3 mb-3">
                                      <i className={`${item.icon} text-2xl text-[#f1c40f] group-hover:scale-110 transition-transform`}></i>
                                      <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                      Custom {item.title} solutions tailored to your business needs.
                                    </p>
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Button
                title={"Let's Start Project"}
                onClick={() => navigation("/contact-us")}
                className="nav-cta relative overflow-hidden group px-6 py-3 rounded-full bg-gradient-to-r from-[#f1c40f] to-[#ffd700] text-black font-bold hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-rocket text-sm" />
                  Let's Start Project
                </span>
              </Button>
            </section>
          </nav>
        </header>
      )}

      {width <= 900 && (
        <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <img
                src="/images/logo.png"
                className="w-32 object-contain"
                alt="Logo"
              />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-white/95 backdrop-blur-lg"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="flex flex-col items-center pt-20 space-y-4 px-4">
                  {navOptions.map((ele, index) => (
                    <div key={index} className="w-full">
                      <NavLink
                        to={ele.path || "#"}
                        className="flex items-center justify-between text-lg text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => !ele.subItems && setIsOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <i className={`fas ${getIconForRoute(ele.path)} w-5 text-center text-[#f1c40f]`} />
                          {ele.text}
                        </div>
                        {ele.subItems && (
                          <i className="fas fa-chevron-down text-xs transition-transform" />
                        )}
                      </NavLink>

                      {ele.subItems && (
                        <div className="ml-8 pl-3 border-l-2 border-gray-200">
                          {ele.subItems.map((subItem, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subItem.link || subItem.path}
                              className="flex items-center gap-3 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-50"
                              onClick={() => setIsOpen(false)}
                            >
                              <i className={`fas ${getIconForRoute(subItem.path)} w-5 text-center text-[#f1c40f]/80`} />
                              {subItem.text || subItem.title}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <Button
                    title={"Let's Start Project"}
                    onClick={() => {
                      navigation("/contact-us");
                      setIsOpen(false);
                    }}
                    className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-[#f1c40f] to-[#ffd700] text-black font-bold hover:shadow-lg transition-transform hover:scale-105"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}
    </>
  );
};

export default Navbar;