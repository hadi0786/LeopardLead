import { useState } from "react";

export default function HoverEffectSection() {
  const [showButtons, setShowButtons] = useState({ digital: false, leopard: false });

  return (
    <section className="w-full h-[40vh] flex flex-col justify-center items-center bg-gray-100">
      {/* Digital Marketer */}
      <div
        className="relative flex items-center text-4xl font-bold mb-4 transition-all duration-300"
        onMouseEnter={() => setShowButtons((prev) => ({ ...prev, digital: true }))}
        onMouseLeave={() => setShowButtons((prev) => ({ ...prev, digital: false }))}
      >
        Digital
        {showButtons.digital && (
          <div className="mx-4 flex flex-col space-y-2 transition-opacity duration-300">
            <button className="bg-[#F2C50E] text-white px-3 py-1 text-3xl">Option 2</button>
            <button className="bg-white text-black px-3 py-1 text-3xl">Option 1</button>
          </div>
        )}
        Marketer
      </div>

      {/* Leopard Lead */}
      <div
        className="relative flex items-center text-8xl font-bold transition-all duration-300"
        onMouseEnter={() => setShowButtons((prev) => ({ ...prev, leopard: true }))}
        onMouseLeave={() => setShowButtons((prev) => ({ ...prev, leopard: false }))}
      >
        Leopard
        {showButtons.leopard && (
          <div className="mx-4 flex flex-col space-y-2 transition-opacity duration-300">
            <button className="bg-white text-black px-3 py-1 text-3xl">Option 1</button>
            <button className="bg-[#F2C50E] text-white px-3 py-1 text-3xl">Option 2</button>
          </div>
        )}
        Lead
      </div>
    </section>
  );
}
