import React from "react";
import map01 from "../assets/Images/map01.png";
import map02 from "../assets/Images/map02.png";
import map03 from "../assets/Images/map03.png";

const ArchitectureShowcase = () => {
  const images = [
    {
      id: 1,
      src: map01,
      title: "Architectural Sketch",
      alt: "Architectural Sketch Design",
    },
    {
      id: 2,
      src: map02,
      title: "Floor Planning",
      alt: "House Floor Plan",
    },
    {
      id: 3,
      src: map03,
      title: "3D Interior View",
      alt: "3D Interior Design",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Architectural Design Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From conceptual sketches to detailed planning and immersive 3D visualizations
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[280px] sm:h-[300px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/40 transition duration-500"></div>

              {/* Text Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="px-6 py-2 rounded-full backdrop-blur-md bg-white/20 border border-white/30
                                text-white text-lg font-semibold
                                opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                                transition duration-500">
                  {img.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArchitectureShowcase;
