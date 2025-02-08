import React, { useRef, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    name: "Facebook",
    link: "https://www.facebook.com/your-facebook-page",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/your-instagram-page",
  },
  {
    icon: <FaGithub />,
    name: "Github",
    link: "https://github.com/your-github-username",
  },
];
const Footer = () => {
  const textRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const text = textRef.current;

    gsap.from(text, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    ScrollTrigger.create({
      trigger: text,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(text, {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        gsap.to(text, {
          x: 250,
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        });
      },
      onEnterBack: () => {
        gsap.to(text, {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(text, {
          x: -250,
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        });
      },
    });
  }, [location.key]);
  return (
    <footer
      className="footer  "
      data-delay="0.4s"
      // style={{ animation: "0.5s ease-out 0.4s 1 normal forwards running anim" }}
    >
      <div
        className="line-heading  text-start    fadein-Right "
        data-delay="0.6s"
        style={{
          animation: "0.5s ease-out 0.6s 1 normal forwards running  ",
        }}
      >
        {/* <h3
          className="outline-text hover:text-gray-400  mt-20   "
          style={{
            transform: "translate3d(226.393px, 0px, 0px)",
            marginLeft: -160,
          }}
          // ref={textRef}
          // className="text-5xl"
        >
          Leopard Leads
        </h3> */}
        <img
          src="/images/logo.png"
          className="w-[30em] animate_01   object-center object-cover  "
          style={{
            transform: "translate3d(226.393px, 0px, 0px)",
            marginLeft: -160,
            height: "10rem",
            marginTop: "1rem",
          }}
        />
      </div>
      <div className="footer__top">
        <div className="container footer__container">
          <div className="twocol-row">
            <div className="footer__top--qlinks-wrapper">
              <div className="footer__top--qlinks-col">
                <div
                  className="left-descrip  fadein-Right"
                  data-delay="0.4s"
                  style={{
                    animation:
                      "0.5s ease-out 0.4s 1 normal forwards running anim",
                  }}
                >
                  <h2 className="s-font">
                    let's build <span>something awesome</span>{" "}
                  </h2>
                  <p>
                    {" "}
                    Reach out to our team and we'll get back to you within a
                    day.
                  </p>
                </div>
                <div
                  className="contact-info-wrapper  fadein-Right"
                  data-delay="0.4s"
                  style={{
                    animation:
                      "0.5s ease-out 0.4s 1 normal forwards running anim",
                  }}
                >
                  {/* <p className="address"></p> */}
                  <div className="mail mt-3">
                    <Link
                      to="mailto:discover@leopardleads.com?subject=Hello DigitalGravity!"
                      className="w-uline"
                    >
                      {" "}
                      discover@leopardleads.com
                    </Link>
                  </div>
                  <div className="num">
                    <Link to="tel:+97171371531" className="w-uline">
                      +971 7 137 1531
                    </Link>
                    <br />
                    <Link to="tel:+97171371531" className="w-uline">
                      +971 7 137 1531
                    </Link>
                  </div>
                  <div className="icon-wrapper flex gap-4">
                    <a
                      className="icon"
                      href="https://twitter.com/dgravityagency/"
                      target="_blank"
                    >
                      <FaFacebook size={30} />
                    </a>
                    <a
                      className="icon"
                      href="https://www.facebook.com/dgravityagency/"
                      target="_blank"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      className="icon"
                      href="https://www.instagram.com/dgravityagency/"
                      target="_blank"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer__top--qlinks-col">
                <div className="qlinks__col__wrapper">
                  <div
                    className="toggle-btn qlinks__col__item  fadein-Right"
                    data-delay="0.4s"
                    style={{
                      animation:
                        "0.5s ease-out 0.4s 1 normal forwardsrunning anim",
                    }}
                  >
                    <p className="">Overview</p>
                    <ul className="qlinks-menu">
                      <li className="qlinks-menu__item ">
                        <Link to="/about-us/" className="w-uline">
                          About Us
                        </Link>
                      </li>
                      <li className="qlinks-menu__item ">
                        <Link to="/services/" className="w-uline">
                          Services
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link to="/case-studies/" className="w-uline">
                          Case Studies
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link to="javascript:" className="w-uline">
                          Partners
                        </Link>
                      </li>
                      <li className="qlinks-menu__item ">
                        <Link
                          to="https://www.digitalgravity.ae/blog/"
                          target="_blank"
                          className="w-uline"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="qlinks-menu__item ">
                        <Link to="/terms-and-condition/" className="w-uline">
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link to="/privacy-policy/" className="w-uline">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="toggle-btn qlinks__col__item 
                     fadein-Right"
                    data-delay="0.6s"
                    style={{
                      animation:
                        "0.5s ease-out 0.6s 1 normal forwards running anim",
                    }}
                  >
                    <p className="  ">Web Solutions</p>
                    <ul className="qlinks-menu">
                      <li className="qlinks-menu__item">
                        <Link
                          to="/services/web-development/"
                          className="w-uline"
                        >
                          Web Development
                        </Link>
                      </li>
                      <li className="qlinks-menu__item">
                        <Link
                          to="/services/ui-ux-design-dubai/"
                          className="w-uline"
                        >
                          UI/UX Design
                        </Link>
                      </li>
                      <li className="qlinks-menu__item">
                        <Link
                          to="/services/digital-marketing-agency/"
                          className="w-uline"
                        >
                          Digital Marketing Services
                        </Link>
                      </li>
                      <li className="qlinks-menu__item">
                        <Link
                          to="/services/branding-communication-agency-dubai/"
                          className="w-uline"
                        >
                          Branding &amp; Comunication
                        </Link>
                      </li>
                      <li className="qlinks-menu__item">
                        <Link
                          to="/services/ecommerce-web-development/"
                          className="w-uline"
                        >
                          Ecommerce Web Development
                        </Link>
                      </li>
                      <li className="qlinks-menu__item">
                        <Link
                          to="/services/mobile-app-development-dubai/"
                          className="w-uline"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li className="qlinks-menu__item">
                        <Link
                          to="/services/it-resource-outsourcing-dubai/"
                          className="w-uline"
                        >
                          IT Resource Outsouring Dubai
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="toggle-btn qlinks__col__item  fadein-Right"
                    data-delay="0.8s"
                    style={{
                      animation:
                        "0.5s ease-out 0.8s 1 normal forwards running anim",
                    }}
                  >
                    <p className="  ">Digital Marketing Services</p>
                    <ul className="qlinks-menu">
                      <li className="qlinks-menu__item  ">
                        <Link
                          to="/services/pay-per-click-dubai/"
                          className="w-uline"
                        >
                          PPC
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link to="/services/seo-dubai/" className="w-uline">
                          SEO
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link
                          to="/services/conversion-rate-optimization-dubai/"
                          className="w-uline"
                        >
                          CRO
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link
                          to="/services/content-marketing-dubai/"
                          className="w-uline"
                        >
                          Content Marketing
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link
                          to="/services/social-media-marketing-dubai/"
                          className="w-uline"
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link
                          to="/services/social-media-optimization-dubai/"
                          className="w-uline"
                        >
                          Social Media Optimization
                        </Link>
                      </li>
                      <li className="qlinks-menu__item  ">
                        <Link
                          to="/services/email-marketing-dubai/"
                          className="w-uline"
                        >
                          Email Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bg"></div>
    </footer>
  );
};

export default Footer;
