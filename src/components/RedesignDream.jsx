import React from "react";

// 🔁 Replace with your own video paths
// import videoLeft from "../assets/Videos/kitchen.mp4";
// import videoRight from "../assets/Videos/construction.mp4";
import vedio01 from "../assets/Images/vedio01.mp4"
import vedio02 from "../assets/Images/vedio02.mp4"

const RedesignDream = () => {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold uppercase mb-12">
        We Redesign and Refine Your Dream
      </h2>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2">
        
        {/* LEFT VIDEO */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <video
            src={vedio01}
            controls
            className="w-full h-[250px] md:h-[350px] object-cover"
          />
        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <video
            src={vedio02}
            controls
            className="w-full h-[250px] md:h-[350px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default RedesignDream;
