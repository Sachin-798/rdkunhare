import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const ImageSection = ({ setMessage }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageDesc, setImageDesc] = useState("");

  const [services, setServices] = useState([]);
  const [propertiesMap, setPropertiesMap] = useState({});
  const [loading, setLoading] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);

  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const [property, setProperty] = useState({
    title: "",
    material_brand: "",
    property_size: "",
    price: "",
  });

  /* ================= FETCH SERVICES ================= */
  const fetchServices = async () => {
    try {
      const res = await axiosInstance.get("/admin/services");
      const data = res.data.data || [];
      setServices(data);
    } catch (error) {
      console.error(error);
      setMessage("❌ Services fetch failed");
    }
  };

  /* ================= FETCH PROPERTIES (SERVICE-WISE) ================= */
  const fetchPropertiesByService = async (serviceId) => {
    try {
      const res = await axiosInstance.get(`/admin/property/service/${serviceId}`);
      setPropertiesMap((prev) => ({
        ...prev,
        [serviceId]: res.data.data || [],
      }));
    } catch (error) {
      console.error(error);
      setMessage("❌ Properties fetch failed");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* ================= SERVICE ================= */
  const uploadService = async () => {
    if (!image || !imageDesc.trim()) {
      setMessage("❌ Image and description required");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", imageDesc);

    try {
      setLoading(true);
      await axiosInstance.post("/admin/services", formData);
      setMessage("✅ Service uploaded");

      setImage(null);
      setPreview(null);
      setImageDesc("");
      fetchServices();
    } catch (error) {
      console.error(error);
      setMessage("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (id) => {
    if (!window.confirm("Delete service?")) return;

    try {
      await axiosInstance.delete(`/admin/services/${id}`);
      setServices((prev) => prev.filter((s) => s.id !== id));

      // remove properties of deleted service
      setPropertiesMap((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });

      setExpandedServiceId(null);
      setMessage("✅ Service deleted");
    } catch (error) {
      console.error(error);
      setMessage("❌ Delete failed");
    }
  };

  /* ================= PROPERTY ================= */
  const submitProperty = async () => {
    try {
      const formData = new FormData();
      formData.append("title", property.title);
      formData.append("material_brand", property.material_brand);
      formData.append("property_size", property.property_size);
      formData.append("price", property.price);
      formData.append("service_id", currentServiceId);

      await axiosInstance.post("/admin/property", formData);

      // Refresh only the current service's properties
      setExpandedServiceId(currentServiceId);
      await fetchPropertiesByService(currentServiceId);

      setMessage("✅ Property added");
      setShowAddModal(false);

      setProperty({
        title: "",
        material_brand: "",
        property_size: "",
        price: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Property upload failed");
    }
  };

  /* ================= UI ================= */
  return (
    <div className="space-y-10">
      {/* UPLOAD SERVICE */}
      <div className="bg-white rounded-xl shadow p-6 max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Upload Service</h2>

        <label className="block mb-4 cursor-pointer">
          <div className="border-2 border-dashed rounded-xl p-6 text-center">
            {preview ? (
              <img src={preview} className="h-40 mx-auto rounded-lg" />
            ) : (
              <p className="text-gray-400">Click to upload image</p>
            )}
          </div>
          <input
            type="file"
            hidden
            onChange={(e) => {
              setImage(e.target.files[0]);
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </label>

        <textarea
          className="w-full border rounded-lg p-3"
          placeholder="Description"
          value={imageDesc}
          onChange={(e) => setImageDesc(e.target.value)}
        />

        <button
          onClick={uploadService}
          disabled={loading}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Upload
        </button>
      </div>

      {/* SERVICES TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Properties</th>
              <th className="px-6 py-4 text-center">Add</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              const serviceProperties = propertiesMap[service.id] || [];

              return (
                <React.Fragment key={service.id}>
                  <tr className="border-t">
                    <td className="px-6 py-4">
                      <img
                        src={service.image_url}
                        className="h-16 w-16 rounded object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">{service.description}</td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          if (isExpanded) {
                            setExpandedServiceId(null);
                          } else {
                            setExpandedServiceId(service.id);
                            fetchPropertiesByService(service.id);
                          }
                        }}
                        className="text-blue-600 underline"
                      >
                        {isExpanded ? "Hide" : "Show"} ({serviceProperties.length})
                      </button>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          setCurrentServiceId(service.id);
                          setShowAddModal(true);
                        }}
                        className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Add Property
                      </button>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteService(service.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  {isExpanded && (
                    <tr>
                      <td colSpan="5" className="px-6 py-4">
                        <table className="min-w-full text-sm border">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2">Title</th>
                              <th className="px-4 py-2">Brand</th>
                              <th className="px-4 py-2">Size</th>
                              <th className="px-4 py-2">Price</th>
                              <th className="px-4 py-2">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {serviceProperties.map((prop) => (
                              <tr key={prop.id} className="border-t">
                                <td className="px-4 py-2">{prop.title}</td>
                                <td className="px-4 py-2">{prop.material_brand}</td>
                                <td className="px-4 py-2">{prop.property_size}</td>
                                <td className="px-4 py-2">{prop.price}</td>
                                <td className="px-4 py-2">
                                  <button
                                    onClick={() => {
                                      setSelectedProperty(prop);
                                      setShowViewModal(true);
                                    }}
                                    className="text-blue-600 underline"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ADD PROPERTY MODAL */}
      {showAddModal && (
        <Modal title="Add Property" onClose={() => setShowAddModal(false)}>
          {["title", "material_brand", "property_size", "price"].map((field) => (
            <input
              key={field}
              className="w-full border p-2 rounded mb-2"
              placeholder={field.replace("_", " ")}
              value={property[field]}
              onChange={(e) =>
                setProperty({ ...property, [field]: e.target.value })
              }
            />
          ))}

          <button
            onClick={submitProperty}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Save Property
          </button>
        </Modal>
      )}

      {/* VIEW PROPERTY MODAL */}
      {showViewModal && selectedProperty && (
        <Modal title="Property Details" onClose={() => setShowViewModal(false)}>
          <Detail label="Title" value={selectedProperty.title} />
          <Detail label="Brand" value={selectedProperty.material_brand} />
          <Detail label="Size" value={selectedProperty.property_size} />
          <Detail label="Price" value={selectedProperty.price} />
        </Modal>
      )}
    </div>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
    <div className="bg-white rounded-xl p-6 w-full max-w-xl relative">
      <button onClick={onClose} className="absolute top-3 right-4 text-xl">
        ✕
      </button>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

const Detail = ({ label, value }) => (
  <p className="text-sm mb-2">
    <strong>{label}:</strong> {value}
  </p>
);

export default ImageSection;
