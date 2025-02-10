import React from 'react';
import { InstagramIcon, YoutubeIcon } from 'heroicons-react'; // Or your preferred icon library

const ContactComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Main Content Container */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Text Section */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight text-gray-900">
            I REALLY LOVE TO TALK WITH PEOPLE
          </h1>
          
          <p className="text-3xl font-signature text-gray-700">John Doe</p>

          <div className="space-y-6 max-w-prose">
            <p className="text-lg text-gray-600 leading-relaxed">
              Connecting with people is my passion. Whether it's about business opportunities,
              creative collaborations, or just sharing life stories - every conversation
              is an opportunity to grow and learn something new.
            </p>

            {/* Follow Us Section */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <YoutubeIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img 
            src="/smiling-man.jpg" 
            alt="Smiling man" 
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />

          {/* Testimonial Box */}
          <div className="absolute -bottom-8 left-0 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <blockquote className="text-gray-600 italic mb-2">
              "An amazing communicator who truly listens!"
            </blockquote>
            <p className="font-semibold text-gray-900">Cynthia Sumner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;