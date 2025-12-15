import React, { useState } from "react";
import plan from "../assets/Images/plan.jpg";

const accordionData = [
  {
    title: "QUALITY",
    content: "We are severe about nature of item we use.",
  },
  {
    title: "AFFORDABLE LUXURY",
    content:
      "Our administrations is very reasonable in its group guaranteeing extraordinary incentive for cash",
  },
  {
    title: "LIFESTYLE BASED DESIGN",
    content:
      "We plan an extensive subject-based answer for you covering all parts of the inside plan, and not simply woodwork. Our plans are roused by your way of life.",
  },
];

const WhyWeAreDifferent = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            Why We Are Different
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            SINCE WE SIMPLY <br />
            DON'T PLAN A SPACE
          </h2>

          <p className="text-gray-600 leading-7 mb-10 max-w-xl">
            We concentrate on the tale of your life and teach it in your
            current circumstance to make the space always rousing for you.
            Our client-focused plan approach.
          </p>

          {/* ACCORDION */}
          <div className="bg-white shadow-sm rounded-md overflow-hidden max-w-xl">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b last:border-none">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold"
                >
                  {item.title}
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE WITH EFFECT */}
        <div className="relative group w-full rounded-md overflow-hidden shadow-lg">
          {/* IMAGE */}
          <img
            src={plan}
            alt="Modern House"
            className="
              w-full
              h-auto
              object-cover
              transform
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/20
         
              transition-all
              duration-700
            "
          />
        </div>

      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
