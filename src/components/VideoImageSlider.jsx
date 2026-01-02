import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 👉 Local Images
import Slider01 from "../assets/Images/sliderimage01.jpeg";
import Slider02 from "../assets/Images/sliderimage02.jpg";


const slides = [
  { img: Slider01, lines: ["WE DESIGN", "YOUR", "DREAMS"] },
  { img: Slider02, lines: ["THE NEW", "FUTURE OF", "CONSTRUCTION"] },

];

const VideoImageSlider = () => {
  const [current, setCurrent] = useState(0);

  // 🔁 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* HEIGHT CONTROL */}
      <div className="relative h-[28vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh]">



        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
          >
            {/* IMAGE */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="
                w-[100%]
             
                object-cover
                object-center
                lg:object-contain
                bg-black
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 flex items-center bg-black/35">
              <div className="max-w-7xl w-full px-6 sm:px-10 md:px-16">
                {/* TEXT */}
                <div className="space-y-1 sm:space-y-2">
                  {slide.lines.map((line, i) => (
                    <h1
                      key={i}
                      className="
    text-white font-extrabold uppercase
    text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl
    leading-tight tracking-wider
    drop-shadow-2xl
  "
                    >
                      {line}
                    </h1>

                  ))}
                </div>

                {/* Button */}
                <div className="mt-8 sm:mt-10 inline-block group">

                  <Link
                    to="/"
                    className="
                  inline-block
                  text-xs sm:text-sm
                  font-semibold uppercase
                  bg-white text-black
                  px-6 sm:px-8
                  py-3 sm:py-4
                  rounded-sm
                  shadow-sm
                  transition-colors duration-300

                  group-hover:bg-[#cb9d54]
                  group-hover:text-white

                  group-active:bg-[#cb9d54]
                  group-active:text-white

                  focus-visible:bg-[#cb9d54]
                  focus-visible:text-white
                "
                    style={{ letterSpacing: "1px" }}
                  >
                    LEARN MORE
                  </Link>

                  {/* UNDERLINE */}
                  <div
                    className="
                  mt-2
                  w-32 sm:w-31 md:w-35 lg:w-39
                  h-[2px]
                  bg-gray-400/60
                  relative
                  overflow-hidden
                "
                  >
                    <span
                      className="
                    absolute left-0 top-0
                    h-full w-full
                    bg-[#cb9d54]
                    transform scale-x-0
                    origin-left
                    transition-transform duration-300

                    group-hover:scale-x-100
                    group-active:scale-x-100
                    group-focus-visible:scale-x-100
                  "
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PREV */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
      >
        <span className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
      </button>

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
      >
        <span className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default VideoImageSlider;
