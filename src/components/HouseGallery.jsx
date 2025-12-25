import React, { useState } from "react";
import Gallery01 from "../assets/Images/Gallery01.png";
import Gallery02 from "../assets/Images/Gallery02.png";
import Gallery03 from "../assets/Images/Gallery03.png";

const houses = [
  {
    src: Gallery01,
    size: "2500 Sq.ft",
    location: "Indore, MP",
    price: "₹85 Lakhs",
    material: "UltraTech Cement, Tata Steel",
  },
  {
    src: Gallery02,
    size: "1800 Sq.ft",
    location: "Bhopal, MP",
    price: "₹62 Lakhs",
    material: "ACC Cement, JSW Steel",
  },
  {
    src: Gallery03,
    size: "3200 Sq.ft",
    location: "Ujjain, MP",
    price: "₹1.2 Crore",
    material: "Ambuja Cement, Tata Steel",
  },
];

export default function HouseGallery() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">

        {/* GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {houses.map((h, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedHouse(h)}
              className="cursor-pointer border border-black p-1 rounded-md shadow-md hover:shadow-xl transition"
            >
              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={h.src}
                  alt="House"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedHouse && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedHouse(null)}
          >
            <div
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                className="absolute top-5 right-5 z-50 text-white text-3xl font-bold"
                onClick={() => setSelectedHouse(null)}
              >
                ✕
              </button>

              {/* IMAGE FULL SCREEN */}
              <div className="w-full h-full flex items-center justify-center bg-black">
                <img
                  src={selectedHouse.src}
                  alt="Property"
                  className="
                    w-auto h-auto
                    max-w-full max-h-full
                    object-contain
                  "
                />
              </div>

              {/* DETAILS */}
              <div className="absolute bottom-0 w-full bg-white/95 p-4">
                <h3 className="text-xl font-bold mb-1">Property Details</h3>
                <p>📐 {selectedHouse.size}</p>
                <p>📍 {selectedHouse.location}</p>
                <p>💰 {selectedHouse.price}</p>
                <p>🧱 {selectedHouse.material}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
