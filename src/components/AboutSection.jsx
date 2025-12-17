import React from "react";
import about0011 from "../assets/Images/about0011.png"; // building outline
import about03 from "../assets/Images/about03.jpg"; // background pattern image
import { Link } from "react-router-dom";


export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">

      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url(${about03})`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Building outline (decorative image) */}
      <img
        src={about0011}
        alt="building-outline"
        className="
    absolute bottom-0
    left-[60px] sm:left-[80px] md:left-[120px] lg:left-[160px]
    opacity-25 pointer-events-none select-none object-contain

    w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px]
    hidden sm:block
  "
      />






      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 md:py-24 lg:py-28">

          <div className="max-w-xl ml-auto text-right sm:text-right text-center sm:text-right">


            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              ABOUT US
            </h2>

            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              BANGLOW <br className="hidden sm:block" /> DESIGN
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 italic leading-relaxed text-justify">
              "RD Kunhare has been making private and business structures for latest 8 years. Inside this short spell of time, RD Kunhare has set out a strong groundwork for itself among the unmistakable makers in the town. RD Kunhare's stress for quality and headway is your best assertion that your necessities will be masterfully satisfied. We have an especially related gathering of laborers for the recruit with data, experience, and dominance expected to complete the jobs inside cost, specifics, and time limit. Serious agents and our consistent care in regards to nuances license us to guarantee the aggregate of our work."
            </p>


            {/* Button */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center sm:items-start group">

              <Link
                to="/contact"
                className="
    inline-block
    text-xs sm:text-sm
    font-semibold uppercase
    bg-white text-black
    px-6 sm:px-8
    py-3 sm:py-4
    rounded-sm
    shadow-sm
    transition-all duration-300

    group-hover:bg-[#cb9d54]
    group-hover:text-white

    active:bg-[#cb9d54]
    active:text-white
    focus-visible:bg-[#cb9d54]
    focus-visible:text-white
  "
                style={{ letterSpacing: "1px" }}
              >
                LEARN MORE
              </Link>


              {/* Underline */}
              <div
                className="
      mt-2
      w-32 sm:w-36 md:w-40     /* 👈 mobile width bada */
      h-[2px]
      bg-gray-400/60
      transition-all duration-300 ease-in-out
      origin-center

      /* Desktop hover */
      group-hover:bg-[#cb9d54]
      group-hover:scale-x-110

      /* Mobile touch */
      active:bg-[#cb9d54]
      active:scale-x-110
      focus-visible:bg-[#cb9d54]
      focus-visible:scale-x-110
    "
              />
            </div>


          </div>

        </div>
      </div>

    </section>
  );
}
