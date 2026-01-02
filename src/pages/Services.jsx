import React from "react";
import { Link } from "react-router-dom";
import {
  FaDraftingCompass,
  FaCouch,
  FaBuilding,
  FaProjectDiagram,
  FaHome,
  FaMapMarkedAlt,
  FaYinYang,
  FaTools,
  FaClipboardCheck,
  FaCity,
} from "react-icons/fa";



const services = [
  {
    title: "Architecture Design",
    desc: "Creative and functional architectural planning tailored to your needs.",
    icon: <FaDraftingCompass />,
    path: "/services/architecture-design",
  },
  {
    title: "Interior Design",
    desc: "Modern and aesthetic interior designs for homes and offices.",
    icon: <FaCouch />,
    path: "/services/interior-design",
  },
  {
    title: "Building & Construction",
    desc: "End-to-end construction services with quality and safety assurance.",
    icon: <FaBuilding />,
    path: "/services/building-construction",
  },
  {
    title: "Structure Design",
    desc: "Strong and efficient structural designs for long-lasting buildings.",
    icon: <FaProjectDiagram />,
    path: "/services/structure-design",
  },
  {
    title: "Property Management",
    desc: "Professional management solutions for residential and commercial properties.",
    icon: <FaHome />,
    path: "/services/property-management",
  },
  {
    title: "Map Sanction",
    desc: "Quick and reliable map approval and sanction services.",
    icon: <FaMapMarkedAlt />,
    path: "/services/map-sanction",
  },
  {
    title: "Vastu",
    desc: "Vastu-compliant designs to bring harmony and positivity.",
    icon: <FaYinYang />,
    path: "/services/vastu",
  },

  // 🔥 NEW SERVICES START HERE 🔥
  // {
  //   title: "Renovation & Remodeling",
  //   desc: "Upgrade and transform existing spaces with smart renovation solutions.",
  //   icon: <FaTools />,
  //   path: "/services/renovation-remodeling",
  // },
  // {
  //   title: "Project Consultation",
  //   desc: "Expert guidance and planning support for residential and commercial projects.",
  //   icon: <FaClipboardCheck />,
  //   path: "/services/project-consultation",
  // },
  // {
  //   title: "Urban Planning",
  //   desc: "Strategic planning and design for sustainable urban development.",
  //   icon: <FaCity />,
  //   path: "/services/urban-planning",
  // },
];


const ServicesPage = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services in Indore
          </h1>
          <p className="mt-4 text-gray-600 text-xl md:text-2xl">
            We deliver end-to-end solutions with modern design, strong execution,
            and professional expertise.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="block"
            >
              <div
                className="
                  group
                  relative
                  bg-[#f4edff]
                  rounded-2xl
                  px-8
                  pt-20
                  pb-12
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                  hover:bg-[#cb9d54]
                "
              >
                {/* ICON */}
                <div
                  className="
                    absolute
                    -top-10
                    left-1/2
                    -translate-x-1/2
                    w-24
                    h-24
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-purple-600
                    text-[52px]
                    shadow-xl
                    transition
                    duration-300
                    group-hover:text-[#cb9d54]
                  "
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-semibold
                    text-gray-900
                    mb-5
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  {service.title}
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-gray-700
                    text-xl
                    md:text-2xl
                    leading-relaxed
                    mb-8
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  {service.desc}
                </p>

                {/* CTA */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-purple-600
                    text-2xl
                    font-semibold
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  Learn More
                  <span className="text-4xl">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
