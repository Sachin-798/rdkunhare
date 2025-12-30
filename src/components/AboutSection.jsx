import React from "react";
import about0011 from "../assets/Images/about0011.png";
import about03 from "../assets/Images/about03.jpg";
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

      {/* Decorative building image */}
      <img
        src={about0011}
        alt="building-outline"
        className="
          absolute
          bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-24
          right-[40px] sm:right-[80px] md:right-[120px] lg:right-[160px]
          opacity-25 pointer-events-none select-none object-contain
          w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px]
          hidden sm:block
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 md:py-24 lg:py-28">

          <div className="max-w-xl mr-auto text-left">

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              ABOUT US
            </h1>

            <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              BANGLOW <br className="hidden sm:block" /> DESIGN
            </h2>


            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 italic leading-relaxed text-justify">
              "RD Kunhare has been making private and business structures for latest 8 years. Inside this short spell of time, RD Kunhare has set out a strong groundwork for itself among the unmistakable makers in the town. RD Kunhare's stress for quality and headway is your best assertion that your necessities will be masterfully satisfied. We have an especially related gathering of laborers for the recruit with data, experience, and dominance expected to complete the jobs inside cost, specifics, and time limit. Serious agents and our consistent care in regards to nuances license us to guarantee the aggregate of our work."
            </p>

            {/* Button */}
            <div className="mt-8 sm:mt-10 inline-block group">

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
                  w-33 sm:w-32 md:w-36 lg:w-40
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
    </section>
  );
}
