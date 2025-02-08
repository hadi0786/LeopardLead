import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Services = () => {
  return (
    <section className="services animate" data-delay="0s">
      <section className="services__wrap">
        <div className="services__items translateX-parent">
          <div className="line-heading translateX-right">
            <h3 className="outline-text">Services</h3>
          </div>
          <div className="services-thumb-slider-wrapper">
            <Swiper>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/web-development/">Web Development</a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/mobile-app-development-dubai/">
                      Mobile Application Development
                    </a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/digital-marketing-agency/">
                      Digital Marketing
                    </a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/branding-communication-agency-dubai/">
                      Digital Branding &amp; Communication
                    </a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/ecommerce-web-development/">
                      Ecommerce Web Development
                    </a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/ui-ux-design-dubai/">UI/UX Design</a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/video-animation-dubai/">
                      Video Animation
                    </a>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-thumb__head">
                  <h2>
                    <a href="/services/it-resource-outsourcing-dubai/">
                      IT Resource Outsourcing
                    </a>
                  </h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="scroll-text">
            <span className="mouse">
              <span className="move"></span>
            </span>
            <span className="head">Scroll</span>
          </div>
        </div>
        <div className="services-slider swiper">
          <Swiper>
            <SwiperSlide>
              <div className="service-item twocol-row">
                <div className="service-item__wrapper twocol-row">
                  <div className="service-item__img">
                    <div className="img-wrapper">
                      <img
                        className="lazy-img"
                        data-class="lazy-img"
                        data-src="/assets/images/home/services/web-development.webp"
                        alt=""
                      />
                    </div>
                    <div className="descrip-wrapper">
                      <p>
                        Get an edge over your competitors and boost your
                        profitability with magnetic web experiences. Digital
                        Gravity is the choice of the UAE’s leading brands for
                        website design and web development services in Dubai.
                        Whether it’s custom web development or WordPress web
                        development, we make sure you get the best of both
                        worlds in the form of a responsive, secure, and
                        high-performance website.
                      </p>
                      <p>
                        We provide the following Web Development Services in the
                        UAE:
                      </p>
                      <ul className="service-item__list-wrapper">
                        <li>
                          <a href="/services/web-development/wordpress-development-dubai/">
                            Wordpress Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/sharepoint-development-dubai/">
                            Sharepoint Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/enterprise-development-dubai/">
                            Enterprise Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/sitecore-development-dubai/">
                            Sitecore Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/php-development-dubai/">
                            PHP Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/joomla-development-dubai/">
                            Joomla Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/asp-net-development-dubai/">
                            ASP.NET Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/cms-website-development-dubai/">
                            CMS Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/drupal-web-development-dubai/">
                            Drupal Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/ibexa-dxp-dubai/">
                            Ibexa DXP
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/laravel-web-development-dubai/">
                            Laravel Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/python-development-dubai/">
                            Python Web App Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/angularjs-development-dubai/">
                            Angularjs Development
                          </a>
                        </li>
                        <li>
                          <a href="/services/web-development/website-maintenance-services-dubai/">
                            Website Maintenance Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="anchor-wrapper services-anchor">
                    <a href="javascript:" className="arrow-anchor">
                      <span>Read More</span>
                      <div className="img-wrapper">
                        <svg
                          viewBox="0 0 19 16"
                          className="svg-convert svg-converted"
                          src="/assets/svg/anchor-arrow.svg"
                        >
                          <style type="text/css">fill: #FFFFFF;</style>
                          <path
                            className="st0"
                            d="M16.2,7.2l0,1.8L1.1,9.3l0-1.8L16.2,7.2z"
                          ></path>
                          <path
                            className="st0"
                            d="M11,13.1l-1.1-1.4L14.7,8l-5-3.6l1-1.5l6.8,5.2L11,13.1z"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="service-item__bg">
                    <img
                      className="lazy-img"
                      data-src="/assets/images/home/services/web-development-bg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more slides here */}
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default Services;
