import React from "react";

import work01 from "../assets/Images/work01.png";
import work02 from "../assets/Images/work02.jpg";
import work03 from "../assets/Images/work03.png";

import how01 from "../assets/Images/how01.png";
import how02 from "../assets/Images/how02.png";
import how03 from "../assets/Images/how03.png";

const steps = [
  {
    title: "Consult with Team",
    desc:
      "We apply creative and technical solutions within a structure to achieve the desired environment",
    bgImage: work01,
    icon: how01,
  },
  {
    title: "Make a plan",
    desc:
      "Are you looking for re-fashioning your place on a special occasion – anniversaries, new years, festivals",
    bgImage: work02,
    icon: how02,
  },
  {
    title: "Develop & Enjoy",
    desc:
      "Precision, punctuality and professionalism define our skills to transform designs on paper",
    bgImage: work03,
    icon: how03,
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">

        <h2 className="
  text-2xl
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
  font-bold
  mt-2
">
          HOW WE WORKS
        </h2>

        <h3 className="
  text-xl
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  font-bold
 
  uppercase
  mt-2
">
          3 Easy Steps
        </h3>


      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-16 md:grid-cols-3">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative group focus:outline-none"
            tabIndex={0} // 👈 mobile tap enable
          >
            {/* CARD */}
            <div className="relative rounded-lg h-[380px] overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              />

              {/* Overlay (Desktop Hover + Mobile Tap) */}
              <div
                className="
                  absolute inset-0
                  bg-black/60
                  group-hover:bg-[#CB9D54]/80
                  group-active:bg-[#CB9D54]/80
                  group-focus-within:bg-[#CB9D54]/80
                  transition-colors duration-500
                "
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
                <h3 className="font-roboto font-bold text-white text-3xl mb-4 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="font-roboto text-[18px] leading-[30px] text-white drop-shadow-lg">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Icon Circle */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -bottom-12
                w-32 h-32
                bg-white
                group-hover:bg-black
                group-active:bg-black
                group-focus-within:bg-black
                transition-colors duration-300
                rounded-full
                flex items-center justify-center
                border-2 border-[#CB9D54]
                shadow-xl
                z-20
              "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
