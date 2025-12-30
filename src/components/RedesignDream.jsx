import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch videos from API
  const fetchVideos = async () => {
    try {
      const res = await axiosInstance.get("/admin/videos");
      // Assuming API returns { data: [{ id, video_url, title }, ...] }
      setVideos(res.data.data || []);
    } catch (error) {
      console.error("Failed to fetch videos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold uppercase mb-12">
        We Redesign and Refine Your Dream
      </h2>

      {/* Loading */}
      {loading && <p className="text-center text-gray-500">Loading videos...</p>}

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full rounded-lg overflow-hidden shadow-lg"
          >
            <video
              src={video.video_url}
              controls
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
          </div>
        ))}

        {!loading && videos.length === 0 && (
          <p className="col-span-2 text-center text-gray-500">
            No videos uploaded yet
          </p>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
