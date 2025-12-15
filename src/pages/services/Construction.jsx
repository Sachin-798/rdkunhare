import React from "react";
import ServiceLayout from "../../components/ServiceLayout";

const Construction = () => {
  return (
    <>
      {/* MAIN SERVICE LAYOUT */}
      <ServiceLayout
        title="Building & Construction"
        description="From planning to execution, we deliver reliable and high-quality construction solutions with a strong focus on safety, durability, and timely delivery."
      />

      {/* EXTRA CONTENT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Our Construction Expertise
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Quality Materials
              </h3>
              <p className="text-gray-600 leading-7">
                We use premium-grade materials to ensure strength, safety, and longevity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                On-Time Delivery
              </h3>
              <p className="text-gray-600 leading-7">
                Well-planned execution ensures projects are completed within committed timelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Safety & Compliance
              </h3>
              <p className="text-gray-600 leading-7">
                Strict adherence to safety standards and construction regulations at every stage.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Construction;
