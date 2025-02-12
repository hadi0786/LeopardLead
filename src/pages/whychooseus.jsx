import React, { useState } from 'react';

const FeatureCarousel = () => {
  const cards = [
    { id: 1, title: 'Faster uploads', description: 'Lorem ipsum dolor sit amet.', bg: 'bg-[#E7BB2E]', textColor: 'text-black' },
    { id: 2, title: '99.99% uptime', description: 'Lorem ipsum dolor sit amet.', bg: 'bg-black', textColor: 'text-white' },
    { id: 3, title: 'Secure storage', description: 'Lorem ipsum dolor sit amet.', bg: 'bg-[#E7BB2E]', textColor: 'text-black' },
    { id: 4, title: '24/7 support', description: 'Lorem ipsum dolor sit amet.', bg: 'bg-black', textColor: 'text-white' },
    { id: 5, title: 'Secure storage', description: 'Lorem ipsum dolor sit amet.', bg: 'bg-[#E7BB2E]', textColor: 'text-black' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [bars, setBars] = useState([]);
  const maxIndex = Math.ceil(cards.length / 2) - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setBars([...bars, bars.length % 2 === 0 ? 'bg-[#E7BB2E]' : 'bg-black']);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setBars(bars.slice(0, -1));
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Heading */}
      <div className="text-6xl mb-6 font-[Poppins] font-bold">
        <span className="text-[#E7BB2E]">We're good. </span>
        <span className="text-black text-opacity-80">Here's why.</span>
      </div>

      <div className="relative flex items-start">
        {/* Left Bars - Adjusted to align directly with the first card */}
        <div className="flex h-72 items-center">
          {bars.map((bar, index) => (
            <div key={index} className={`${bar} w-3 h-full`} />
          ))}
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {cards.map((card, index) => (
              <div key={card.id} className={`flex-shrink-0 w-1/2 ${index === 0 ? 'pl-0' : 'px-2'}`}>
                <div className={`${card.bg} ${card.textColor} p-8 h-72 text-center shadow-lg flex flex-col justify-center`}>
                  <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                  <p className="text-lg">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="bg-black p-4 text-white disabled:opacity-50">Prev</button>
        <button onClick={handleNext} disabled={currentIndex === maxIndex} className="bg-black p-4 text-white disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default FeatureCarousel;
