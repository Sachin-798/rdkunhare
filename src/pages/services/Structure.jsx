import React from "react";
import ServiceLayout from "../../components/ServiceLayout";

const Structure = () => {
  return (
    <>
      {/* MAIN SERVICE LAYOUT */}
      <ServiceLayout
        title="Structure Design"
        description="We provide structurally sound and efficient designs that ensure safety, durability, and full compliance with engineering standards."
      />

      {/* EXTRA CONTENT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Our Structural Design Expertise
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Safety First
              </h3>
              <p className="text-gray-600 leading-7">
                Designs focused on structural stability, load management, and long-term safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Cost-Effective Solutions
              </h3>
              <p className="text-gray-600 leading-7">
                Optimized structural planning to reduce material costs without compromising strength.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Code Compliance
              </h3>
              <p className="text-gray-600 leading-7">
                All designs strictly follow local building codes, safety norms, and engineering standards.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Structure;
