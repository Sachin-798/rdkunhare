import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function HouseGallery() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [selectedService, setSelectedService] = useState(null);
  const [serviceProperties, setServiceProperties] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);

  // Fetch services on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosInstance.get("/admin/services");
        setServices(res.data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Fetch properties for a service
  const fetchProperties = async (serviceId) => {
    try {
      setModalLoading(true);
      const res = await axiosInstance.get(
        `http://127.0.0.1:8000/api/admin/property?service_id=${serviceId}`
      );
      setServiceProperties(res.data.data || []);
    } catch (error) {
      console.error(error);
      setServiceProperties([]);
    } finally {
      setModalLoading(false);
    }
  };

  const openModal = (service) => {
    setSelectedService(service);
    fetchProperties(service.id);
  };

  const closeModal = () => {
    setSelectedService(null);
    setServiceProperties([]);
  };

  if (loading) {
    return (
      <p className="text-center py-16 text-gray-500 text-lg">Loading...</p>
    );
  }

  return (
    <>
      {/* ================= GALLERY ================= */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                onClick={() => openModal(service)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image_url}
                    alt="service"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 overflow-auto py-8"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-full max-w-4xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg hover:bg-black"
            >
              ✕
            </button>

            {/* SERVICE IMAGE */}
            <div className="w-full max-h-[50vh] overflow-hidden bg-black">
              <img
                src={selectedService.image_url}
                alt="service"
                className="w-full h-full object-contain"
              />
            </div>

            {/* SERVICE DETAILS */}
            <div className="p-5 border-b">
              <h3 className="text-xl font-semibold mb-2">
                Service Description
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* PROPERTIES */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-3">Properties</h3>

              {modalLoading ? (
                <p className="text-gray-500">Loading properties...</p>
              ) : serviceProperties.length === 0 ? (
                <p className="text-gray-400">No properties found.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceProperties.map((prop) => (
                    <div
                      key={prop.id}
                      className="border rounded-lg p-3 shadow hover:shadow-lg transition"
                    >
                      <h4 className="font-semibold text-sm mb-1">{prop.title}</h4>
                      <p className="text-xs text-gray-500 mb-2">
                        Brand: {prop.material_brand} | Size: {prop.property_size}
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        Price: ₹ {prop.price}
                      </p>
                      <p className="text-xs text-gray-500 mb-2">
                        Location: {prop.latitude}, {prop.longitude}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {prop.images?.map((img, idx) => (
                          <img
                            key={idx}
                            src={img.image_url || img} // support array of URLs or objects
                            alt="property"
                            className="w-full h-24 object-cover rounded"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
