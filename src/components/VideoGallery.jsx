import React from "react";

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
              className="relative w-full rounded-lg overflow-hidden shadow-md bg-black"
            >
              {/* VIDEO */}
              <video
                src={video}
                controls
                className="w-full h-[320px] object-cover"
              />

              {/* SIMPLE HOVER COLOR */}
              <div
                className="
                  absolute inset-0
                  bg-transparent
                  hover:bg-black/30
                  transition-colors
                  duration-300
                  pointer-events-none
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoGallery;
