import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const BlogSection = ({ setMessage }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get("/admin/blog");
      setBlogs(res.data.data || []);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to load blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  /* ================= CREATE BLOG ================= */
  const submitBlog = async () => {
    if (!form.title || !form.description || !form.image) {
      setMessage("❌ All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("image", form.image);

    try {
      setLoading(true);
      await axiosInstance.post("/admin/blog", formData);
      setMessage("✅ Blog created successfully");

      setForm({ title: "", description: "", image: null });
      fetchBlogs();
    } catch (err) {
      console.error(err);
      setMessage("❌ Blog creation failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE BLOG ================= */
  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await axiosInstance.delete(`/admin/blog/${id}`);
      setMessage("✅ Blog deleted successfully");
      fetchBlogs();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to delete blog");
    }
  };

  return (
    <div className="space-y-10">
      {/* ================= ADD BLOG ================= */}
      <div className="bg-white rounded-2xl shadow p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-1">Upload Blog</h2>
        <p className="text-gray-500 text-sm mb-5">
          Add new blog with image and description
        </p>

        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Blog Description"
            className="w-full border rounded-lg p-3 resize-none"
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />

          <button
            onClick={submitBlog}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
          >
            {loading ? "Saving..." : "Create Blog"}
          </button>
        </div>
      </div>

      {/* ================= BLOG LIST ================= */}
      <div className="bg-white rounded-2xl shadow">
        <div className="p-5 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold text-gray-800">
            Blogs List
          </h3>
          <span className="text-sm text-gray-500">
            Total: {blogs.length}
          </span>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Image</th>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {blogs.map((blog, index) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>

                  <td className="px-6 py-4">
                    <img
                      src={
                        blog.image_url.includes("http://192.168.1.27:8000/storage/http")
                          ? blog.image
                          : blog.image_url
                      }
                      alt={blog.title}
                      className="h-16 w-24 object-cover rounded-lg border"
                    />
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {blog.title}
                  </td>

                  <td className="px-6 py-4 text-gray-600 line-clamp-2">
                    {blog.description}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-xs font-semibold transition"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden divide-y">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 space-y-3">
              <img
                src={
                  blog.image_url.includes("http://192.168.1.27:8000/storage/http")
                    ? blog.image
                    : blog.image_url
                }
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg border"
              />

              <h4 className="font-semibold text-lg">{blog.title}</h4>

              <p className="text-gray-600 text-sm line-clamp-3">
                {blog.description}
              </p>

              <button
                onClick={() => deleteBlog(blog.id)}
                className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg text-sm font-semibold transition"
              >
                🗑 Delete
              </button>
            </div>
          ))}

          {blogs.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              No blogs found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
