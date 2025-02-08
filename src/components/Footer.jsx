const Footer = () => {
  const footerLinks = [
    {
      title: "Overview",
      items: [
        "About Us", 
        "Service", 
        "Case Studies", 
        "Blog", 
        "Terms & Condition", 
        "Privacy Policy"
      ]
    },
    {
      title: "Web Solution",
      items: [
        "Web Development",
        "UI/UX Design",
        "Mobile Development",
        "IT Resource",
        "Ecommerce Website",
        "Branding & Communication"
      ]
    },
    {
      title: "Digital Marketing",
      items: [
        "PPC",
        "SEO",
        "CRO",
        "Digital Marketing",
        "Social Media Marketing",
        "Email Marketing"
      ]
    }
  ];

  return (
    <footer className="bg-black text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="md:w-1/3">
            <img 
              src="/images/logo.png" 
              alt="Company Logo" 
              className="w-48 h-auto mb-6"
            />
            <p className="text-gray-400 text-sm mb-4">
              Transforming ideas into digital reality through innovative solutions.
            </p>
            <p className="text-gray-400 text-sm">
              Got questions? Contact us at{" "}
              <a href="mailto:info@leapordlead.com" className="text-[#f1c40f] hover:text-[#ffd700]">
                info@leapordlead.com
              </a>
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerLinks.map((column, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4 border-l-4 border-[#f1c40f] pl-3">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href="#" 
                        className="text-gray-400 text-sm hover:text-[#f1c40f] transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Leopard Leads. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#f1c40f] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f1c40f] transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;