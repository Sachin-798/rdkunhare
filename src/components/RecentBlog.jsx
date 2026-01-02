import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get("/admin/blog");
      setBlogs(res.data.data || []);
    } catch (error) {
      console.error("Failed to load blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Blog</h2>
          <h3 className="text-xl md:text-3xl font-bold text-gray-700">
            Recent Posts
          </h3>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading blogs...</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={blog.image}   
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-indigo-600 text-sm font-medium block mb-2">
                  {new Date(blog.created_at).toDateString()}
                </span>

                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  {blog.title}
                </h4>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {blog.description}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}

          {!loading && blogs.length === 0 && (
            <p className="col-span-3 text-center text-gray-500">
              No blogs found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
