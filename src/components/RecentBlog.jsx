// import React from "react";
// import { Link } from "react-router-dom";

// // 👉 Local images
// import Slider05 from "../assets/Images/slider05.png";
// import Slider01 from "../assets/Images/slider01.png";
// import Slider03 from "../assets/Images/slider03.jpg";

// const blogs = [
//   {
//     img: Slider05,
//     date: "Jan 01, 2023",
//     title: "Smart Ways to Invest in Residential Properties for Long-Term Growth",
//     desc: "Explore proven strategies to invest in residential real estate and maximize returns with low risk and high appreciation potential.",
//     slug: "residential-property-investment",
//   },
//   {
//     img: Slider01,
//     date: "Feb 01, 2023",
//     title: "How Builders and Brokers Help You Find the Perfect Property",
//     desc: "Learn how experienced builders and real estate brokers simplify property buying, selling, and investment decisions.",
//     slug: "builder-broker-guide",
//   },
//   {
//     img: Slider03,
//     date: "Mar 01, 2023",
//     title: "Complete Guide to Analyzing Property Value Before You Buy",
//     desc: "Understand location, pricing trends, legal checks, and ROI factors to make confident and profitable property purchases.",
//     slug: "property-value-analysis",
//   },
// ];

// const RecentBlog = () => {
//   return (
//     <section className="bg-gray-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4"> Blog </h1> <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 "> Recent Posts </h2>
      
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//             >
//               {/* Image */}
//               <div className="w-full h-72 overflow-hidden">
//                 <img
//                   src={blog.img}
//                   alt={blog.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <span className="text-indigo-600 text-sm font-medium block mb-2">
//                   {blog.date}
//                 </span>

//                 <h4 className="text-xl font-semibold mb-3 text-gray-800 leading-snug">
//                   {blog.title}
//                 </h4>

//                 <p className="text-gray-600 mb-6">
//                   {blog.desc}
//                 </p>

//                 <Link
//                   to={`/blog/${blog.slug}`}
//                   className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
//                 >
//                   Read more →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default RecentBlog;

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
            Recent Posts
          </h2>
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
                  src={blog.image_url}
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

                {/* 🔗 ID ke sath redirect */}
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
