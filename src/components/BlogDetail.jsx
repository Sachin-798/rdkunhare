import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await axiosInstance.get(`/admin/blog/${id}`);
      setBlog(res.data.data);
    } catch (error) {
      console.error("Blog not found", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="py-32 text-center">Loading...</p>;
  }

  if (!blog) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 text-indigo-600 hover:underline"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-indigo-600 font-semibold hover:underline"
        >
          ← Back
        </button>

        {/* ✅ IMAGE FIXED HERE */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 bg-white">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[450px] object-contain"
          />
        </div>

        <article className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          <p className="text-sm text-gray-500 mb-8">
            Published on {new Date(blog.created_at).toDateString()}
          </p>

          <div className="text-lg text-gray-700 leading-8 whitespace-pre-line">
            {blog.description}
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
