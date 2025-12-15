import React from "react";
import ServiceLayout from "../../components/ServiceLayout";

const Vastu = () => {
  return (
    <>
      {/* MAIN SERVICE LAYOUT */}
      <ServiceLayout
        title="Vastu"
        description="Vastu-compliant planning designed to ensure harmony, positivity, prosperity, and overall well-being in your living and working spaces."
      />

      {/* EXTRA CONTENT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Our Vastu Planning Approach
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Positive Energy Flow
              </h3>
              <p className="text-gray-600 leading-7">
                Designs focused on balancing natural elements to enhance peace and positivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Scientific & Traditional Balance
              </h3>
              <p className="text-gray-600 leading-7">
                A harmonious blend of traditional Vastu principles with modern architectural needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Customized Consultation
              </h3>
              <p className="text-gray-600 leading-7">
                Tailored Vastu solutions based on plot direction, layout, and client requirements.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Vastu;
