import React from "react";

// 🔁 Replace with your actual video paths
import video1 from "../assets/Images/gl01.mp4";
import video2 from "../assets/Images/gl02.mp4";
import video3 from "../assets/Images/gl03.mp4";
import video4 from "../assets/Images/gl04.mp4";

const videos = [video1, video2, video3, video4];

const VideoGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group w-full rounded-lg overflow-hidden shadow-lg bg-black"
            >
              {/* VIDEO */}
              <video
                src={video}
                controls
                className="
                  w-full
                  h-[350px]
                  object-cover
                  transform
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/30
                  group-hover:bg-[#CB9D54]/50
                  transition-all
                  duration-700
                "
              />

              {/* PLAY ICON */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoGallery;
