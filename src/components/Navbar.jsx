import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import "../Styles/home.css";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../pages/BlogComponents/Button";
import useWindowSize from "../windowsize";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react"
const navOptions = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/services",
    text: "Services",
  },
  {
    path: "/ourWork",
    text: "Our Work",
  },
  {
    path: "/blogs",
    text: "Blogs",
  },
];
const Navbar = () => {
  const [menuBarAppear, setMenuBarAppear] = useState(false);
  const [active, setActive] = useState(1)
  const [isOpen, setIsOpen] = useState(false);
  const activeCount = (num) => {
    setActive(num)
  }
  console.log(active)
  useGSAP(() => {
    var tl = gsap.timeline({ repeat: 1, repeatDelay: 1 });
    tl.from(".animate_01", { y: -100, duration: 0.5 });
    tl.from(".animate_02", { y: -100, duration: 0.5, stagger: 0.2 });
    tl.from(".animate_03", { opacity: 0, duration: 2 });
  });
  const [showHover, setShowHover] = useState(false)
  const navigation = useNavigate();
  const {width}=useWindowSize()
  return (
    <>

     {width>900&& <header className="fixed w-full top-0 z-50 bg-neutral-900/10">
        <nav className="flex w-full justify-between items-start  container mx-auto h-20">
          <img
            src="/images/logo.png"
            className="w-[15em] animate_01 h-20  object-center object-cover  "
          />

          <section className="flex gap-12 items-center h-full tracking-widest ">
            {/* <NavLink
            className={"animate_02"}
            onMouseEnter={() => setMenuBarAppear(true)}
            onMouseLeave={() => setMenuBarAppear(false)}
          >
            Services
          </NavLink>

          {menuBarAppear && (
            <section className="w-full bg-white h-[300px] duration-500 banners__animation  absolute top-20 left-0 right-0 ">
              erfrmeg;krewmg;lrew
            </section>
          )} */}
            {navOptions.map((ele, index) => {
              return (
                <NavLink
                to={ele?.path}
                className="animate_02"
                key={index}
                style={{
                  color: "white",
                  transition: "color 0.3s ease"
                }}
                onClick={() => {
                  setShowHover(false);
                  // Change color to yellow on click
                  const navLink = document.getElementById(`nav-link-${index}`);
                  navLink.style.color = "#f1c40f";
                }}
                onMouseEnter={() => {
                  if (ele.path === "/services") {
                    setShowHover(true);
                  } else {
                    setShowHover(false);
                  }
                  // Change color to yellow on hover
                  const navLink = document.getElementById(`nav-link-${index}`);
                  navLink.style.color = "#f1c40f";
                }}
                onMouseLeave={() => {
                  if (ele.path === "/services") {
                    setShowHover(true);
                  } else {
                    setShowHover(false);
                  }
                  // Reset color to white when not hovering
                  const navLink = document.getElementById(`nav-link-${index}`);
                  navLink.style.color = "white";
                }}
                id={`nav-link-${index}`}
              >
                {ele?.text}
              </NavLink>
              
              );
            })}
            {/* <h6 className="h-full bg-[#f1c40f] px-6 animate_02 animate z-50 flex items-center">
            Speak to an Expert
          </h6> */}

            <Button
              title={"Let's Start Project"}
              // onClick={() => router.push("/contact-us")}
              onClick={() => navigation("/contact-us")}
              className="w-fit h-[50px] tracking-widest px-5 flex-shrink-0 animate_02 rounded-[60px] bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-c_FFFFFF text-lg font-semibold leading-[104%] hover:opacity-50 bg-[#f1c40f]"
            />
          </section>
        </nav>
      </header>}
      {width>900&&<div className="s-column-dropdown-menu dropdown-js custom bg-neutral-900" style={{ display: !showHover ? "none" : "block" }}>
        <div className="menu-slider-wrapper">
          <div className="dropdown__menu-item menu-slider-thumb-wrapper">
            <div className="menu-slider-outer v-scrollbar-style-2menu">
              <ul className="menu-slider-thumb">
                <li className={`${active === 1 ? "active1 menu-slider-thumb-slide" : "menu-slider-thumb-slide"}`} data-menu="service-tab1" onMouseEnter={() => activeCount(1)}>
                  <a href=" /services/web-development/">
                    <div className="slide-head" >
                      Web Development </div>
                  </a>
                </li>
                <li className={`${active === 2 ? "active1 menu-slider-thumb-slide" : "menu-slider-thumb-slide"}`} data-menu="service-tab2" onMouseEnter={() => activeCount(2)}>
                  <a href=" /services/mobile-app-development-dubai/">
                    <div className="slide-head">
                      Mobile Application Development </div>
                  </a>
                </li>
                <li className={`${active === 7 ? "active1 menu-slider-thumb-slide" : "menu-slider-thumb-slide"}`} data-menu="service-tab2" onMouseEnter={() => activeCount(7)}>
                  <a href=" /services/mobile-app-development-dubai/">
                    <div className="slide-head">
                  Emerging Tech Development </div>
                  </a>
                </li>

                <li className={`${active === 3 ? "active1 menu-slider-thumb-slide" : "menu-slider-thumb-slide"}`} data-menu="service-tab4" onMouseEnter={() => activeCount(3)}>
                  <a href=" /services/digital-marketing-agency/">
                    <div className="slide-head">
                      Digital Marketing </div>
                  </a>
                </li>

                <li className={`${active === 4 ? "active1 menu-slider-thumb-slide" : "menu-slider-thumb-slide"}`} data-menu="service-tab5" onMouseEnter={() => activeCount(4)}>
                  <a href=" /services/ui-ux-design-dubai/">
                    <div className="slide-head">
                      Ui/Ux Design </div>
                  </a>
                </li>
                <li className={`${active === 5 ? "active1 menu-slider-thumb-slide" : "menu-slider-thumb-slide"}`} data-menu="service-tab6" onMouseEnter={() => activeCount(5)}>
                  <a href=" /services/ecommerce-web-development/">
                    <div className="slide-head">
                      E-commerce Web development </div>
                  </a>
                </li>

                <li className={`${active === 6 ? "active1 menu-slider-thumb-slide" : "menu-slider-thumb-slide"}`} data-menu="service-tab8" onMouseEnter={() => activeCount(6)}>
                  <a href=" /services/video-animation-dubai/">
                    <div className="slide-head">
                      Video Animation </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className="menu-slider-gallery-wrapper">
            <ul className="menu-slider-gallery">
              <li className={`${active === 1 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab1" >
                <div className="slide-head">
                  Web Development </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/web-development/wordpress-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/WORDPRESS.svg" alt="" src="/assets/svg/menu/WORDPRESS.svg" />
                      </div>
                      <div className="list-item__head">
                        Wordpress Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/web-development/php-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/PHP.svg" alt="" src="/assets/svg/menu/PHP.svg" />
                      </div>
                      <div className="list-item__head">
                        Php Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/web-development/cms-website-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/CMS.svg" alt="" src="/assets/svg/menu/CMS.svg" />
                      </div>
                      <div className="list-item__head">
                        CMS Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/web-development/laravel-web-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/LARAVEL.svg" alt="" src="/assets/svg/menu/LARAVEL.svg" />
                      </div>
                      <div className="list-item__head">
                        Laravel Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/web-development/website-maintenance-services-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/WEBSITE-MAINTENANCE.svg" alt="" src="/assets/svg/menu/WEBSITE-MAINTENANCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Website Maintenance Services </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/web-development/whatsapp-business-integration/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/WEBSITE-MAINTENANCE.svg" alt="" src="/assets/svg/menu/WEBSITE-MAINTENANCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Whatsapp Integration </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/pentesting/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/WEBSITE-MAINTENANCE.svg" alt="" src="/assets/svg/menu/WEBSITE-MAINTENANCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Pentesting </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${active === 2 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab2" >
                <div className="slide-head">
                  Mobile Application Development </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/hybrid-app-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/HYBRID.svg" alt="" src="/assets/svg/menu/HYBRID.svg" />
                      </div>
                      <div className="list-item__head">
                        hybrid Apps </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/android-app-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/ANDROID.svg" alt="" src="/assets/svg/menu/ANDROID.svg" />
                      </div>
                      <div className="list-item__head">
                        Android App development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ios-app-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/IOS.svg" alt="" src="/assets/svg/menu/IOS.svg" />
                      </div>
                      <div className="list-item__head">
                        IOS app development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/react-app-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/REACT-NATIVE.svg" alt="" src="/assets/svg/menu/REACT-NATIVE.svg" />
                      </div>
                      <div className="list-item__head">
                        React Native apps </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/flutter-app-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/FLUTTER.svg" alt="" src="/assets/svg/menu/FLUTTER.svg" />
                      </div>
                      <div className="list-item__head">
                        Flutter apps </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/progressive-web-app-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/PROGRESSIVE-WEB.svg" alt="" src="/assets/svg/menu/PROGRESSIVE-WEB.svg" />
                      </div>
                      <div className="list-item__head">
                        progressive Web apps </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${active === 7 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab2" >
                <div className="slide-head">
                 Emerging Tech Development </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/hybrid-app-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/HYBRID.svg" alt="" src="/assets/svg/menu/HYBRID.svg" />
                      </div>
                      <div className="list-item__head">
                  Artifical Intelligence Development </div>
                    </a>
                  </li>
               
               
                
                  <li className="list-item">
                    <a href="/services/flutter-app-development-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/FLUTTER.svg" alt="" src="/assets/svg/menu/FLUTTER.svg" />
                      </div>
                      <div className="list-item__head">
                       Augmented Reality Development </div>
                    </a>
                  </li>
    
                </ul>
              </li>

              <li className={`${active === 3 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab4" >
                <div className="slide-head">
                  Digital Marketing </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/seo-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/SEARCH-ENGINE-OPTIMIZATION.svg" alt="" src="/assets/svg/menu/SEARCH-ENGINE-OPTIMIZATION.svg" />
                      </div>
                      <div className="list-item__head">
                        Search Engine Optimization (SEO) </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/social-media-marketing-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/SOCIAL-MEDIA-MARKETING.svg" alt="" src="/assets/svg/menu/SOCIAL-MEDIA-MARKETING.svg" />
                      </div>
                      <div className="list-item__head">
                        Social Media Management (SMM) </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/pay-per-click-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/PAY-PER-CLICK.svg" alt="" src="/assets/svg/menu/PAY-PER-CLICK.svg" />
                      </div>
                      <div className="list-item__head">
                        Paid Media Marketing (PMM) </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/email-marketing-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/EMAIL-MARKETING.svg" alt="" src="/assets/svg/menu/EMAIL-MARKETING.svg" />
                      </div>
                      <div className="list-item__head">
                        Email Marketing </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/influencer-marketing-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/influencer-marketing.svg" alt="" src="/assets/svg/menu/influencer-marketing.svg" />
                      </div>
                      <div className="list-item__head">
                        Influencer Marketing </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/aso-app-store-optimization-services-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/APP-STORE-OPTIMIZATION.svg" alt="" src="/assets/svg/menu/APP-STORE-OPTIMIZATION.svg" />
                      </div>
                      <div className="list-item__head">
                        App Store Optimization (ASO) </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${active === 4 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab5" >
                <div className="slide-head">
                  Ui/Ux Design </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/psd-to-html-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/PSD-TO-RESPONSIVE-HTML.svg" alt="" src="/assets/svg/menu/PSD-TO-RESPONSIVE-HTML.svg" />
                      </div>
                      <div className="list-item__head">
                        PSD To Responsive HTML </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/responsive-website-design-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/RESPONSIVE-WEB.svg" alt="" src="/assets/svg/menu/RESPONSIVE-WEB.svg" />
                      </div>
                      <div className="list-item__head">
                        Responsive Web Design </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ux-design-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/UX-DESIGN.svg" alt="" src="/assets/svg/menu/UX-DESIGN.svg" />
                      </div>
                      <div className="list-item__head">
                        UX Design </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/landing-page-design-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/LANDING-PAGE.svg" alt="" src="/assets/svg/menu/LANDING-PAGE.svg" />
                      </div>
                      <div className="list-item__head">
                        Landing Page Design </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ux-audit-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/UX-AUDIT.svg" alt="" src="/assets/svg/menu/UX-AUDIT.svg" />
                      </div>
                      <div className="list-item__head">
                        UX Audit </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/graphic-design-services-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/GRAPHIC-DESIGN.svg" alt="" src="/assets/svg/menu/GRAPHIC-DESIGN.svg" />
                      </div>
                      <div className="list-item__head">
                        Graphic Design </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${active === 5 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab6" >
                <div className="slide-head">
                  E-commerce Web development </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/ecommerce-web-development/woo-commerce-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/WOO-COMMERCE.svg" alt="" src="/assets/svg/menu/WOO-COMMERCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Woo Commerce Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ecommerce-web-development/mirakl-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/MIRAKL-DEVELOPMENT.svg" alt="" src="/assets/svg/menu/MIRAKL-DEVELOPMENT.svg" />
                      </div>
                      <div className="list-item__head">
                        Mirakl Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ecommerce-web-development/magento-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/MAGENTO-ECOMMERCE.svg" alt="" src="/assets/svg/menu/MAGENTO-ECOMMERCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Magento Ecommerce Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ecommerce-web-development/big-commerce-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/BIG-COMMERCE.svg" alt="" src="/assets/svg/menu/BIG-COMMERCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Big Commerce Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ecommerce-web-development/shopify-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/SHOPIFY-ECOMMERCE.svg" alt="" src="/assets/svg/menu/SHOPIFY-ECOMMERCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Shopify Ecommerce Development </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/ecommerce-web-development/shopify-plus-dubai/">
                      <div className="list-item__img">
                        <img className="" data-src="/assets/svg/menu/SHOPIFY-PLUS-ECOMMERCE.svg" alt="" src="/assets/svg/menu/SHOPIFY-PLUS-ECOMMERCE.svg" />
                      </div>
                      <div className="list-item__head">
                        Shopify Plus Ecommerce Developments </div>
                    </a>
                  </li>
                </ul>
              </li>


              <li className={`${active === 6 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab8" >
                <div className="slide-head">
                  Video Animation </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/explainer-videos-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/EXPLANIER-VIDEO.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Explainer Video Production </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/product-demo-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/PRODUCT-DEMO.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Product Demo Animation </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/3d-architectural-walkthroughs-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/3D-ARCHITECTURAL.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        3D Architectural Walkthroughs </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/medical-animation-company-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/MEDICAL-ANIMATION.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Medical Animation Studio </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/character-animation-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/CHARACTER-ANIMATION.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Character Animation Video </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/whiteboard-videos-animation-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/WHITEBOARD-ANIMATION.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Whiteboard Animation Video </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${active === 1 ? "menu-slider-gallery-slide" : "display"} `} data-menu="service-tab9">
                <div className="slide-head">
                  It Resource </div>
                <ul className="list-wrapper">
                  <li className="list-item">
                    <a href="/services/hire-mobile-app-developer-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/HIRE-MOBILE.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Hire Mobile App Developer </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/hire-scrum-master-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/HIRE-SCRUM.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Hire Scrum Master in Dubai </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/hire-nodejs-developer-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/HIRE-NODE.JS.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Hire Node.js Developer in Dubai </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/robotic-process-automation-rpa-dubai/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/HIRE-RPA.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Hire RPA in Dubai </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/google-3d-map-design-development/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/3D-GOOGLE-MAPS.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        3D Google Maps Integration </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/martech-consulting-company/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/3D-GOOGLE-MAPS.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        MarTech Consulting </div>
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="/services/oracle-netsuite-partners-in-dubai-uae/">
                      <div className="list-item__img">
                        <img className="lazy-img" data-src="/assets/svg/menu/3D-GOOGLE-MAPS.svg" alt="" />
                      </div>
                      <div className="list-item__head">
                        Oracle NetSuite Development </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>}

      {width < 900 && (
        <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-60 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
              <img
            src="/images/logo.png"
            className="w-[9em] animate_01 h-20  object-center object-cover  "
          />
              </div>

              {/* Desktop Links */}
              {/* <div className="hidden md:flex space-x-8">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#" className="text-white hover:text-gray-300">About</a>
                <a href="#" className="text-white hover:text-gray-300">Services</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
              </div> */}

              {/* Hamburger / Close Icon for Mobile */}
              <div className="">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                >
                  {isOpen ? (
                    <></>
                    // Close Icon (X)
                    // <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    // </svg>
                  ) : (
                    // Hamburger Icon
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
           <div className="md:hidden bg-[#474343] bg-opacity-80 absolute top-0 left-0 w-full h-[80vh] flex flex-col items-center fixed space-y-6">
           {/* Close Icon in the Top-Right Corner */}
           <div 
             onClick={() => setIsOpen(!isOpen)} 
             className="absolute top-4 right-4 cursor-pointer text-white"
           >
             <svg 
  className="h-8 w-8" 
  fill="none" 
  stroke="black" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>

           </div>
         
           {/* Menu Links */}
           {navOptions.map((ele, index) => {
              return (
                <NavLink
                to={ele?.path}
                className="animate_02"
                key={index}
                style={{
                  color: "white",
                  transition: "color 0.3s ease"
                }}
                onClick={() => {
                  setShowHover(false);
                  // Change color to yellow on click
                  const navLink = document.getElementById(`nav-link-${index}`);
                  navLink.style.color = "#f1c40f";
                }}
                onMouseEnter={() => {
                  if (ele.path === "/services") {
                    setShowHover(true);
                  } else {
                    setShowHover(false);
                  }
                  // Change color to yellow on hover
                  const navLink = document.getElementById(`nav-link-${index}`);
                  navLink.style.color = "#f1c40f";
                }}
                onMouseLeave={() => {
                  if (ele.path === "/services") {
                    setShowHover(true);
                  } else {
                    setShowHover(false);
                  }
                  // Reset color to white when not hovering
                  const navLink = document.getElementById(`nav-link-${index}`);
                  navLink.style.color = "white";
                }}
                id={`nav-link-${index}`}
              >
                {ele?.text}
              </NavLink>
              
              );
            })}

<Button
              title={"Let's Start Project"}
              // onClick={() => router.push("/contact-us")}
              onClick={() => navigation("/contact-us")}
              className="w-fit h-[50px] tracking-widest px-5 flex-shrink-0 animate_02 rounded-[60px] bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-c_FFFFFF text-lg font-semibold leading-[104%] hover:opacity-50 bg-[#f1c40f]"
            />
         </div>

         
         
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
