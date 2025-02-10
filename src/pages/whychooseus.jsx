import React, { useState } from 'react';

const FeatureCarousel = () => {
  // Define an array of card objects.
  const cards = [
    {
      id: 1,
      title: 'Faster uploads',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bg: 'bg-[#E7BB2E]', // white background
      textColor: 'text-black',
      icon: (
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0l-3 3m3-3l3 3"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: '99.99% uptime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bg: 'bg-black', // black background
      textColor: 'text-white',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Secure storage',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bg: 'bg-[#E7BB2E]',
      textColor: 'text-black',
      icon: (
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lock icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c1.1046 0 2-.8954 2-2V7a2 2 0 00-4 0v2c0 1.1046.8954 2 2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: '24/7 support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bg: 'bg-black',
      textColor: 'text-white',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Phone icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.37l1.06 3.18a2 2 0 01-.45 1.95l-2.3 2.3a11.05 11.05 0 005 5l2.3-2.3a2 2 0 011.95-.45l3.18 1.06A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
          />
        </svg>
      ),
    },
  ];

  /* 
    We want exactly two cards visible at once on desktop.
    We’ll slide the carousel by one card width (50% of the container) at a time.
    For a non-circular carousel, the maximum valid starting index is (cards.length - 2).
  */
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = cards.length - 1; // Updated to allow full sliding
  
    const handlePrev = () => {
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };
  
    const handleNext = () => {
      if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

  return (
    <div className="container font-[Poppins] mx-auto p-4">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-6xl">
          <span className="font-bold text-black">We're good. </span>
          <span className="text-gray-500">Here's why.</span>
        </h1>
      </div>

      {/* Desktop Carousel Section (visible on md and larger screens) */}
      {/* Desktop Carousel */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 48}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-1/2 p-4 relative"
                style={{ zIndex: cards.length - index }}
              >
                <div className={`${card.bg} ${card.textColor} p-8 h-72 relative`}>
                  <div className="absolute top-4 right-4">{card.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                  <p className="text-lg">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute -top-12 right-2 flex space-x-2">
        <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-black p-4 hover:bg-gray-800 focus:outline-none disabled:opacity-50"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="bg-black p-4 hover:bg-gray-800 focus:outline-none disabled:opacity-50"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile View: Stack all cards vertically (visible on screens smaller than md) */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className={`${card.bg} ${card.textColor} p-8 rounded-lg relative`}>
              <div className="absolute top-4 right-4">{card.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
