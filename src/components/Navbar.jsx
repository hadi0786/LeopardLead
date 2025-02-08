import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../pages/BlogComponents/Button";
import useWindowSize from "../windowsize";

const navOptions = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/services", text: "Services" },
  { path: "/ourWork", text: "Our Work" },
  { path: "/blogs", text: "Blogs" },
];

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

const Navbar = () => {
  const [active, setActive] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [showHover, setShowHover] = useState(false);
  const navigation = useNavigate();
  const { width } = useWindowSize();

  useGSAP(() => {
    gsap.from(".animate_01", { y: -100, duration: 0.8, ease: "power4.out" });
    gsap.from(".animate_02", {
      y: -100,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });
    gsap.from(".animate_03", { opacity: 0, duration: 1.5 });
  });

  const activeService = servicesList[active - 1];

  const getIconForRoute = (path) => {
    switch(path) {
      case '/': return 'fa-home';
      case '/about': return 'fa-info-circle';
      case '/services': return 'fa-cogs';
      case '/ourWork': return 'fa-briefcase';
      case '/blogs': return 'fa-blog';
      default: return 'fa-link';
    }
  };

  return (
    <>
      {width > 900 && (
        <header className="fixed w-full font-poppins top-0 z-50 bg-black/15 hover:bg-black/20 transition-all duration-300 border-b border-black/15">
          <nav className="flex w-full justify-between items-center container mx-auto h-28 px-8">
            {/* Larger Logo */}
            <img
              src="/images/logo.png"
              className="w-[22em] animate_01 h-28 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              alt="Logo"
            />

            <section className="flex gap-10 items-center h-full">
              {navOptions.map((ele, index) => (
                <NavLink
                  to={ele.path}
                  className="animate_02 relative group text-white/90 hover:text-[#f1c40f] transition-all duration-300 px-3 py-2"
                  key={index}
                  onMouseEnter={() => ele.path === "/services" && setShowHover(true)}
                  onMouseLeave={() => ele.path === "/services" && setShowHover(false)}
                >
                  {ele.text}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#f1c40f] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </NavLink>
              ))}

              <Button
                title={"Let's Start Project"}
                onClick={() => navigation("/contact-us")}
                className="animate_02 relative overflow-hidden group px-8 py-3 rounded-full bg-gradient-to-r from-[#f1c40f] to-[#ffd700] text-black font-bold hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Let's Start Project</span>
              </Button>
            </section>
          </nav>

          {/* Enhanced Services Dropdown with FA Icons */}
          {showHover && (
            <div className="absolute w-full bg-black/30 backdrop-blur-xl border-t border-gray/30 shadow-2xl">
              <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="grid grid-cols-4 gap-8">
                  <div className="col-span-1 border-r border-gray-700 pr-8">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#f1c40f] to-[#ffd700] bg-clip-text text-transparent mb-6">
                      Our Services
                    </h3>
                    <ul className="space-y-4">
                      {servicesList.map((service, index) => (
                        <li 
                          key={index}
                          className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all ${
                            active === index+1 
                              ? 'bg-gradient-to-r from-[#f1c40f]/20 to-[#ffd700]/10 border border-[#f1c40f]/30'
                              : 'hover:bg-gray-800/50'
                          }`}
                          onMouseEnter={() => setActive(index+1)}
                        >
                          <i className={`${service.icon} text-2xl text-[#f1c40f] w-8`}></i>
                          <span className="text-white/90 text-lg font-medium">{service.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-3 pl-8">
                    <div className="grid grid-cols-3 gap-6">
                      {activeService?.items?.map((item, index) => (
                        <a 
                          key={index} 
                          href={item.link}
                          className="group p-6 bg-gray-800/50 rounded-2xl hover:bg-gradient-to-br from-[#f1c40f]/10 to-[#ffd700]/05 transition-all duration-300 border border-gray-700 hover:border-[#f1c40f]/30 relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#f1c40f] to-[#ffd700] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                          <div className="flex items-center space-x-4 mb-4">
                            <i className={`${item.icon} text-3xl text-[#f1c40f] group-hover:scale-125 transition-transform duration-300`}></i>
                            <h4 className="text-xl font-bold bg-gradient-to-r from-[#f1c40f] to-[#ffd700] bg-clip-text text-transparent">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm text-white/70 leading-relaxed">
                            Professional {item.title} services with modern solutions and expert implementation.
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      )}

      {width < 900 && (
        <nav className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-24">
              {/* Larger Mobile Logo */}
              <img
                src="/images/logo.png"
                className="w-[16em] h-24 object-contain transition-transform duration-300 hover:scale-105"
                alt="Logo"
              />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-black backdrop-blur-lg">
              <div className="flex flex-col items-center pt-28 space-y-6">
                <div className="w-full max-w-md px-6 space-y-4">
                  {navOptions.map((ele, index) => (
                    <NavLink
                      key={index}
                      to={ele.path}
                      className="flex items-center text-xl text-white/90 hover:text-[#f1c40f] py-4 px-6 border-b border-gray-800 last:border-0 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <i className={`fas ${getIconForRoute(ele.path)} mr-4 w-6 text-center`}></i>
                      {ele.text}
                    </NavLink>
                  ))}

                  <Button
                    title={"Let's Start Project"}
                    onClick={() => {
                      navigation("/contact-us");
                      setIsOpen(false);
                    }}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#f1c40f] to-[#ffd700] text-black font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all mt-6"
                  />
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;