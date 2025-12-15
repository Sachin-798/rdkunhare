import React from "react";
import ServiceLayout from "../../components/ServiceLayout";

const MapSanction = () => {
  return (
    <>
      {/* MAIN SERVICE LAYOUT */}
      <ServiceLayout
        title="Map Sanction"
        description="We handle all approvals and map sanction processes smoothly with accurate documentation and complete compliance with local authorities."
      />

      {/* EXTRA CONTENT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Our Map Sanction Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Legal Compliance
              </h3>
              <p className="text-gray-600 leading-7">
                All drawings and documents are prepared as per government norms and regulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Documentation Support
              </h3>
              <p className="text-gray-600 leading-7">
                Complete assistance with drawings, forms, and submissions for faster approvals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Fast Approval Process
              </h3>
              <p className="text-gray-600 leading-7">
                Efficient coordination with authorities to minimize delays and rework.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MapSanction;
