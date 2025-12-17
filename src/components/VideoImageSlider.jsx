import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

// Images
import Slider01 from "../assets/Images/slider01.png";
import Slider02 from "../assets/Images/slider02.png";
import Slider03 from "../assets/Images/slider03.jpg";
import Slider04 from "../assets/Images/slider04.jpg";
import Slider05 from "../assets/Images/slider05.png";
import Slider06 from "../assets/Images/slider06.png";

const slides = [
  { left: Slider01, right: Slider02, title: "WE DESIGN YOUR DREAMS" },
  { left: Slider03, right: Slider04, title: "THE NEW FUTURE OF CONSTRUCTION" },
  { left: Slider05, right: Slider06, title: "UNIQUE INTERIOR DESIGNS" },
];

// 🔥 Animation sets per slide
const slideAnimations = [
  {
    left: "animate-zoom-in",
    right: "animate-slide-right",
    text: "animate-fade-up",
  },
  {
    left: "animate-zoom-out",
    right: "animate-slide-up",
    text: "animate-fade-left",
  },
  {
    left: "animate-zoom-rotate",
    right: "animate-slide-down",
    text: "animate-fade-right",
  },
];

const VideoImageSlider = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      <Swiper
        modules={[Autoplay, Navigation, EffectCreative]}
        grabCursor
        effect="creative"
        creativeEffect={{
          prev: { shadow: true, translate: ["-20%", 0, -1] },
          next: { translate: ["100%", 0, 0] },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        loop
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((slide, index) => {
          const anim = slideAnimations[index % slideAnimations.length];

          return (
            <SwiperSlide key={index} className="bg-black">
              {({ isActive }) => (
                <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden">

                  {/* LEFT IMAGE */}
                  <div className="w-full md:w-1/2 h-full overflow-hidden">
                    <img
                      src={slide.left}
                      alt="design"
                      className={`w-full h-full object-cover brightness-75 transition-transform duration-[6000ms]
                        ${isActive ? anim.left : "scale-125"}`}
                    />
                  </div>

                  {/* RIGHT IMAGE */}
                  <div
                    className={`w-full md:w-1/2 h-full absolute md:relative right-0 top-0 overflow-hidden z-10
                      ${isActive ? anim.right : "translate-x-full"}`}
                  >
                    <img
                      src={slide.right}
                      alt="design-alt"
                      className="w-full h-full object-cover brightness-75"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute inset-0 z-20 flex items-center px-8 md:px-20 bg-black/20">
                    <div
                      className={`max-w-3xl ${
                        isActive ? anim.text : "opacity-0"
                      }`}
                    >
                      <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
                        {slide.title}
                      </h1>

                      <div className="flex flex-col items-start group">
                        <Link
                          to="/contact"
                          className="inline-block text-sm font-semibold uppercase bg-white text-black px-10 py-4 transition-all duration-300 group-hover:bg-[#cb9d54] group-hover:text-white"
                          style={{ letterSpacing: "2px" }}
                        >
                          LEARN MORE
                        </Link>

                        {/* underline (fixed width) */}
                        <div className="mt-2 w-46 h-[2px] bg-white/40 transition-colors duration-500 group-hover:bg-[#cb9d54]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}

        {/* NAVIGATION */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-4">
          <button className="custom-prev w-14 h-14 flex items-center justify-center border border-white/20 text-white rounded-full hover:bg-[#cb9d54] hover:border-[#cb9d54] transition-all">
            <FaChevronLeft size={20} />
          </button>
          <button className="custom-next w-14 h-14 flex items-center justify-center border border-white/20 text-white rounded-full hover:bg-[#cb9d54] hover:border-[#cb9d54] transition-all">
            <FaChevronRight size={20} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default VideoImageSlider;
