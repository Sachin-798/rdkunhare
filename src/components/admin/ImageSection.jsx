import React, { useEffect, useRef, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import axiosInstance from "../../utils/axiosInstance";

const ImageSection = () => {
  const fileInputRef = useRef(null); // ✅ NEW

  const [formData, setFormData] = useState({
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  /* ---------------- FORM HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ---------------- POST API ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = new FormData();
      payload.append("description", formData.description);
      payload.append("image", formData.image);

      await axiosInstance.post("/admin/services", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ CLEAR ALL FIELDS
      setFormData({ description: "", image: null });
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // 🔥 THIS FIXES IT
      }

      setSuccessMsg("Image uploaded successfully ✅");
      setTimeout(() => setSuccessMsg(""), 5000);

      fetchImages();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- DELETE API ---------------- */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/admin/services/${id}`);
      fetchImages();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed");
    }
  };

  /* ---------------- GET API ---------------- */
  const fetchImages = async () => {
    try {
      const res = await axiosInstance.get("/admin/services");

      const list =
        Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.data)
          ? res.data.data
          : Array.isArray(res.data?.data?.services)
          ? res.data.data.services
          : [];

      setImageList(list);
    } catch (error) {
      console.error("Fetch error:", error);
      setImageList([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* SUCCESS MESSAGE */}
        {successMsg && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            {successMsg}
          </div>
        )}

        {/* ================= FORM ================= */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800">Upload Image</h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          >
            {/* IMAGE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Image
              </label>
              <input
                ref={fileInputRef} // ✅ IMPORTANT
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg px-4 py-2 resize-none"
                required
              />
            </div>

            {/* PREVIEW */}
            {preview && (
              <div className="md:col-span-2">
                <img
                  src={preview}
                  alt="preview"
                  className="w-full max-h-64 object-cover rounded-lg border"
                />
              </div>
            )}

            {/* SUBMIT */}
            <div className="md:col-span-2 flex justify-end">
              <button
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-60"
              >
                {loading ? "Uploading..." : "Upload Image"}
              </button>
            </div>
          </form>
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Uploaded Images</h3>
            <span className="text-sm text-gray-500">
              Total: <b>{imageList.length}</b>
            </span>
          </div>

          {/* DESKTOP TABLE */}
          <table className="hidden md:table w-full border">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {imageList.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center p-4 text-gray-500">
                    No images uploaded
                  </td>
                </tr>
              )}

              {imageList.map((item) => (
                <tr key={item.id} className="text-sm">
                  <td className="p-3 border">
                    <img
                      src={item.image_url}
                      alt=""
                      className="w-24 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 border">
                    {item.description || "—"}
                  </td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* MOBILE VIEW */}
          <div className="md:hidden space-y-4">
            {imageList.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 space-y-2">
                <img
                  src={item.image_url}
                  alt=""
                  className="w-full h-40 object-cover rounded"
                />
                <p className="text-sm">{item.description || "—"}</p>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center gap-2 text-red-500 text-sm"
                >
                  <FiTrash2 /> Delete
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageSection;
