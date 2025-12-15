import React from "react";

const ServiceLayout = ({ title, description }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {title}
        </h1>

        <div className="w-20 h-[2px] bg-[#cb9d54] mx-auto mb-10"></div>

        <p className="max-w-3xl mx-auto text-center text-gray-600 text-[17px] leading-[30px]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceLayout; // ✅ MUST
