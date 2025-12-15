import React from "react";
import work01 from "../assets/Images/work01.png";
import work02 from "../assets/Images/work02.jpg";
import work03 from "../assets/Images/work03.png";

const steps = [
  {
    title: "Consult with Team",
    desc:
      "We apply creative and technical solutions within a structure to achieve the desired environment",
    bgImage: work01,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#CB9D54]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4" />
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
  },
  {
    title: "Make a plan",
    desc:
      "Are you looking for re-fashioning your place on a special occasion – anniversaries, new years, festivals",
    bgImage: work02,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#CB9D54]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Develop & Enjoy",
    desc:
      "Precision, punctuality and professionalism define our skills to transform designs on paper",
    bgImage: work03,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#CB9D54]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7h14v14" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-gray-400 uppercase">
          3 Easy Steps
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          HOW WE WORKS
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-16 md:grid-cols-3">
        {steps.map((item, index) => (
          <div key={index} className="relative group">
            
            {/* CARD */}
            <div className="relative rounded-lg h-[380px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-[#CB9D54]/80 transition-colors duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
                <h3 className="font-roboto font-bold text-white text-3xl mb-4 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="font-roboto font-normal text-[18px] leading-[30px] text-white drop-shadow-lg">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* ICON CIRCLE (ONLY THIS CHANGES COLOR) */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -bottom-12
                w-35 h-35
                bg-white
                group-hover:bg-black
                transition-colors duration-300
                rounded-full
                flex items-center justify-center
                border-2 border-[#CB9D54]
                shadow-xl
                z-20
              "
            >
              {item.icon}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
