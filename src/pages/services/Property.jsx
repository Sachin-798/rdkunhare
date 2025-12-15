import React from "react";
import ServiceLayout from "../../components/ServiceLayout";
const Property = () => {
  return (
    <>
      {/* MAIN SERVICE LAYOUT */}
      <ServiceLayout
        title="Property Management"
        description="End-to-end property management solutions designed to maintain property value, ensure smooth operations, and deliver peace of mind to owners."
      />

      {/* EXTRA CONTENT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Our Property Management Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Maintenance & Repairs
              </h3>
              <p className="text-gray-600 leading-7">
                Regular maintenance and quick repair services to keep properties in excellent condition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Tenant Management
              </h3>
              <p className="text-gray-600 leading-7">
                Efficient handling of tenant needs, agreements, and communication for smooth operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#cb9d54]">
                Value Optimization
              </h3>
              <p className="text-gray-600 leading-7">
                Strategic planning and management to maximize returns and long-term property value.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Property;
