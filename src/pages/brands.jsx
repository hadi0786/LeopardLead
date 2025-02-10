const PartnersSection = () => {
  // Placeholder array for partner images (replace with actual image paths)
  const partners = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    // Add more images as needed
  ];

  return (
    <section className="min-h-screen bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto mb-12 md:mb-16 from-[Poppins] lg:mb-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-black">
          Meet our{' '}
          <span className="text-black from-[Poppins]">
            amazing
          </span>{' '}
          partners
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black from-[Poppins]">
          the heart of our{' '}
          <span className="text-black from-[Poppins]">
            success!
          </span>
        </h2>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 md:h-16 lg:h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;