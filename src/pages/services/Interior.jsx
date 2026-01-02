import React from "react";

import ServiceLayout from "../../components/ServiceLayout";
import InteriorServices from "../../components/InteriorServices"
import DesigningSection_in from "../../components/DesigningSection_in";
import InteriorFaq from "../../components/InteriorFaq"
import { Link } from "react-router-dom";

const Interior = () => {
  return (
    <>
              <section className="w-full bg-black text-white h-40 sm:h-52 md:h-64 lg:h-65 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Main heading */}
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] uppercase">
 Interior Design
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
    to="/services/interior-design"
    className="text-white cursor-default"
  >
    Interior Design
  </Link>
</p>

      </div>
    </section>
    <InteriorServices/>
    <DesigningSection_in/>
    <InteriorFaq />
    </>
  );
};

export default Interior;
