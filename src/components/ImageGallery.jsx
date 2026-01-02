import React, { useEffect, useState } from "react";
// import axiosInstance from "../../utils/axiosInstance";
import axiosInstance from "../utils/axiosInstance"

const ImageGallery = () => {
  const [cards, setCards] = useState([]);

  // 🔹 Fetch services images
  const fetchServices = async () => {
    try {
      const res = await axiosInstance.get("/admin/services");

      const list =
        Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.data)
          ? res.data.data
          : Array.isArray(res.data?.data?.services)
          ? res.data.data.services
          : [];

      setCards(list);
    } catch (error) {
      console.error("Failed to fetch services:", error);
      setCards([]);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">
          Gallery
        </h1>

        <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 text-center">
          Our Project Gallery
        </h3>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No services available
            </p>
          )}

          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={card.image_url}
                alt="Service"
                className="w-full h-52 sm:h-56 md:h-60 object-cover hover:scale-105 transition duration-300"
              />

              <div className="p-4 flex flex-col flex-grow">
                <p className="text-gray-600 mt-2 text-sm md:text-base flex-grow">
                  {card.description || "—"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center group">
          <button
            className="
              inline-block
              bg-gray-800
              text-white
              px-8
              py-3
              sm:px-10
              sm:py-4
              rounded-md
              text-base
              sm:text-lg
              md:text-xl
              font-semibold
              transition
              duration-300
              hover:bg-[#cb9d54]
            "
          >
            Contact RD Kunhare
          </button>

          {/* Underline */}
          <div
            className="
              mt-2
              mx-auto
              w-51
              sm:w-65
              h-[2px]
              bg-black
              transition
              duration-300
              group-hover:bg-[#cb9d54]
            "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
