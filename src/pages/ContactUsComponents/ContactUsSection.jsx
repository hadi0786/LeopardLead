import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FaArrowRight } from "react-icons/fa";
const ContactUsSection = () => {
  const [value, setValue] = useState();
  const [selectedPrice, setSelcetedPrice] = useState("");
  return (
    <section className="col-span-4  flex flex-col gap-10 w-full p-6">
      <h5 className="text-4xl font-semibold">Fill This Form Out</h5>
      <section className="w-full  flex gap-5">
        <input
          type="text"
          placeholder="Name"
          className="p-3 outline-none text-black rounded flex-1"
        />
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      </section>
      <section className="w-full  flex gap-5">
        <input
          type="text"
          placeholder="Email"
          className="p-3 outline-none text-black rounded flex-1 "
        />
        {/* <input
          type="text"
          placeholder="Phone"
          className="p-3 outline-none text-black rounded flex-1 "
        /> */}
      </section>
      <section className="w-full">
        <textarea
          name=""
          rows={6}
          id=""
          className="resize-none p-3 rounded w-full outline-none text-black"
          placeholder="Describe Your Project"
        ></textarea>
        {/* <em>
          By signing up you agree that we can process your information in
          accordance with our privacy policy
        </em> */}
      </section>

      <section>
        <h6 className="text-3xl font-semibold">Tell Us Your Budget</h6>

        <div className="flex flex-wrap gap-5 mt-8">
          {[
            "10-20k USD",
            "30-40K USD",
            "50-70K USD",
            "70-100K USD",
            "> 100K",
          ].map((ele, index) => {
            return (
              <div
                onClick={() => setSelcetedPrice(ele)}
                key={index}
                className={`
                    ${
                      selectedPrice === ele
                        ? "bg-gray-400 text-white"
                        : "bg-transparent"
                    }
                    border text-center py-2 px-8 rounded-full hover:opacity-50 cursor-pointer`}
              >
                {ele}
              </div>
            );
          })}
        </div>
      </section>
      <section className="text-center">
        <button className="font-semibold px-6 py-2 rounded-full border-2 ">
          <span className="relative z-10 flex justify-center items-center gap-2 text-xl  rounded-full p-2 px-10 text-center">
            <span>Send </span>
            <span className="hover:bg-red-500 duration-500 rounded-full p-4 cursor-pointer text-white -rotate-45">
              <FaArrowRight />
            </span>
          </span>
        </button>
      </section>

      {/* </section> */}
    </section>
    // </section>
  );
};

export default ContactUsSection;
