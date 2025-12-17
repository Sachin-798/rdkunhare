import React from "react";

import icon1 from "../assets/Images/icone01.png";
import icon2 from "../assets/Images/icone02.png";
import icon3 from "../assets/Images/icone03.png";
import icon4 from "../assets/Images/icone04.png";

const features = [
  {
    id: 1,
    icon: icon1,
    number: "8+",
    label: "Years of Experience",
  },
  {
    id: 2,
    icon: icon2,
    number: "10+",
    label: "Team Members",
  },
  {
    id: 3,
    icon: icon3,
    number: "50+",
    label: "Project Success",
  },
  {
    id: 4,
    icon: icon4,
    number: "100+",
    label: "Happy Customers",
  },
];

export default function FeaturesRow() {
  return (
    <section
      aria-label="company-stats"
      className="w-full relative"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            135deg,
            rgba(255,255,255,0.04) 0px,
            rgba(255,255,255,0.04) 1px,
            transparent 1px,
            transparent 12px
          ),
          linear-gradient(180deg, #000000 0%, #080808 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={item.id}
              className={`group flex flex-col items-center text-center py-10
                ${index !== 0 ? "md:border-l md:border-gray-700/60" : ""}
              `}
            >
              {/* ICON */}
              <div className="mb-6 w-24 h-24 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="
                    w-20 h-20 object-contain
                    transition-all duration-300

                    /* DEFAULT WHITE */
                    filter brightness-0 invert

                    /* HOVER + MOBILE TAP GOLD */
                    group-hover:[filter:invert(63%)_sepia(52%)_saturate(469%)_hue-rotate(358deg)_brightness(94%)_contrast(92%)]
                    active:[filter:invert(63%)_sepia(52%)_saturate(469%)_hue-rotate(358deg)_brightness(94%)_contrast(92%)]
                  "
                />
              </div>

              {/* NUMBER */}
              <h3 className="text-4xl md:text-5xl font-semi-bold text-white">
                {item.number}
              </h3>

              {/* LABEL */}
              <p className="mt-3 text-xs md:text-sm uppercase tracking-widest text-gray-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
