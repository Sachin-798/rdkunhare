import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const VideoSection = ({ setMessage }) => {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  /* ================= FETCH VIDEOS ================= */
  const fetchVideos = async () => {
    try {
      const res = await axiosInstance.get("/admin/videos");
      setVideos(res.data.data || []);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to load videos");
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  /* ================= UPLOAD VIDEO ================= */
  const uploadVideo = async () => {
    if (!video) {
      setMessage("❌ Please select a video");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);

    try {
      setLoading(true);
      await axiosInstance.post("/admin/videos", formData);
      setMessage("✅ Video uploaded successfully");

      setVideo(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      fetchVideos();
    } catch (err) {
      console.error(err);
      setMessage("❌ Video upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE VIDEO ================= */
  const deleteVideo = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      await axiosInstance.delete(`/admin/videos/${id}`);
      setMessage("✅ Video deleted successfully");
      fetchVideos();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to delete video");
    }
  };

  return (
    <div className="space-y-10">
      {/* ================= UPLOAD CARD ================= */}
      <div className="bg-white rounded-2xl shadow p-6 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-1">Upload Video</h2>
        <p className="text-gray-500 text-sm mb-5">
          Upload service or promotional video
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="w-full border rounded-lg p-3"
          onChange={(e) => setVideo(e.target.files[0])}
        />

        <button
          onClick={uploadVideo}
          disabled={loading}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
        >
          {loading ? "Uploading..." : "Upload Video"}
        </button>
      </div>

      {/* ================= VIDEO LIST ================= */}
      <div className="bg-white rounded-2xl shadow">
        <div className="p-5 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold text-gray-800">
            Uploaded Videos
          </h3>
          <span className="text-sm text-gray-500">
            Total: {videos.length}
          </span>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Preview</th>
                <th className="px-6 py-4 text-left">Uploaded On</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {videos.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{index + 1}</td>

                  <td className="px-6 py-4">
                    <video
                      src={item.video_url}
                      controls
                      className="h-20 w-32 rounded-lg border shadow-sm"
                    />
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => deleteVideo(item.id)}
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
          {videos.map((item) => (
            <div key={item.id} className="p-4 space-y-3">
              <video
                src={item.video_url}
                controls
                className="w-full h-48 rounded-lg border"
              />

              <p className="text-sm text-gray-500">
                Uploaded on{" "}
                {new Date(item.created_at).toLocaleDateString()}
              </p>

              <button
                onClick={() => deleteVideo(item.id)}
                className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg text-sm font-semibold transition"
              >
                🗑 Delete Video
              </button>
            </div>
          ))}

          {videos.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              No videos uploaded yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
