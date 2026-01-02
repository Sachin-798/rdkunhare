import React from "react";
import Property_in from "../../components/Property_in";


import Property_de from "../../components/property_de"
import PropertyFaq from "../../components/PropertyFaq"
import { Link } from "react-router-dom";

const Property = () => {
  return (
    <>
      <section className="w-full bg-black text-white h-40 sm:h-52 md:h-64 lg:h-65 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          {/* Main heading */}
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] uppercase">

            Property Management
          </h1>

          {/* Breadcrumb */}
          <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-gray-300">
            <Link to="/" className="hover:text-[#cb9d54] transition">
              Home
            </Link>

            <span className="mx-1">/</span>

            <Link to="/services" className="hover:text-[#cb9d54] transition">
              Services
            </Link>

            <span className="mx-1">/</span>

            <Link
              to="/services/property-management"
              className="text-white cursor-default"
            >
              Property Management
            </Link>
          </p>

        </div>
      </section>
      <Property_in />
      <Property_de />
      <PropertyFaq />
    </>
  );
};

export default Property
