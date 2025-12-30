import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
// import ImageSection from "../components/admin/ImageSection";
import VideoSection from "../components/admin/VideoSection";
import BlogSection from "../components/admin/BlogSection";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [active, setActive] = useState("image");
  const [message, setMessage] = useState("");

  const logout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar active={active} setActive={setActive} logout={logout} />

      <div className="flex-1 p-6 mt-12 md:mt-0">
        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
            {message}
          </div>
        )}

        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Welcome {user?.name}
          </h1>
          <p className="text-gray-600">
            Manage Images, Videos & Blog Content
          </p>
        </div>

        {/* {active === "image" && <ImageSection setMessage={setMessage} />} */}
        {active === "video" && <VideoSection setMessage={setMessage} />}
        {active === "blog" && <BlogSection setMessage={setMessage} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
