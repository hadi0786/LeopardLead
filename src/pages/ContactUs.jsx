import React, { useState } from "react";
import ContactServicesSection from "./ContactUsComponents/ContactServicesSection";
import ContactUsSection from "./ContactUsComponents/ContactUsSection";
import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <div className="mt-32 container mx-auto">
      <section className="flex items-center py-20 bg-[#f1c40f] p-5 gap-3 rounded-[12px] ">
        <section className="flex-1 flex flex-col gap-5 py-5">
          <h6 className="text-2xl">CONTACT US</h6>
          <h4 className="text-5xl font-semibold leading-snug">
            It’s Always Nice to Talk!
          </h4>
        </section>

        <section className="flex-1">
          <p className="text-lg">
            Have a new project idea? Or you simply need to buff an existing
            digital product as per the latest trends? Get in touch today and
            we’ll hook you with our business development team. Here are all the
            ways you can contact us!
          </p>
        </section>
      </section>
      <ContactServicesSection />
      {/* <div id="contact-form" className={"pt-10"}>
        <ContactUsSection />
      </div> */}

      <section className="my-20">
        <h5 className="text-4xl mb-5 font-bold">
          Don’t Have Time? Let’s Be Fast!
        </h5>
        <div className="grid grid-cols-3 gap-4">
          {[
            "UI/UX",
            "Web Development",
            "Mobile App",
            "Product Strategy",
            "Marketing",
            "Development",
          ].map((ele, index) => {
            return (
              <div
                onClick={() => setSelectedOptions((prev) => [...prev, ele])}
                key={index}
                className={`
                    ${
                      selectedOptions.includes(ele)
                        ? "bg-gray-400 text-white"
                        : "bg-transparent"
                    }
                    border text-center py-2 rounded-full hover:opacity-50 cursor-pointer`}
              >
                {ele}
              </div>
            );
          })}
        </div>
      </section>

      <ContactUsSection />

      <section className="flex items-start bg-[#f1c40f] p-10 rounded my-20  rounded-[12px] block">
        <section className="flex flex-col gap-5 flex-1">
          <h5 className="text-4xl font-semibold">
            Your Journey to Digital Transformation Starts Here
          </h5>

          <p>
            Perfect solutions take time to brew and come forth. Book a 10-minute
            call with our consultant to discuss what you seek and we’ll love
            sharing all the secrets. Hop on to the digital change bandwagon and
            ride your way to awesomeness.
          </p>
        </section>

        <section className="flex flex-col gap-5 flex-1 p-6">
          <input
            type="text"
            placeholder="Name"
            className="p-3 outline-none text-black rounded flex-1"
          />
          <section className="text-center">
            <button className="font-semibold px-6 py-2 rounded-full border-2 ">
              <span className="relative z-10 flex justify-center items-center gap-2 text-xl  rounded-full p-2 px-10 text-center">
                <span>Send </span>
                <span className="hover:bg-red-400  duration-500 rounded-full p-4 cursor-pointer text-white -rotate-45">
                  <FaArrowRight />
                </span>
              </span>
            </button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ContactUs;
