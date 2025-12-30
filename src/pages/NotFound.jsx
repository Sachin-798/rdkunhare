import React from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/Images/notfound.jpg";

const NotFound = () => {
  return (
    <section
      className="
        relative
        min-h-[85vh]
        md:min-h-[95vh]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${notfound})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 "></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-3xl">

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-4">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white uppercase tracking-wide mb-4">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
          The page requested couldn't be found. This could be a spelling error in
          the URL or a removed page.
        </p>

        {/* BUTTON + UNDERLINE */}
        <div className="inline-block group">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-white
              text-black
              px-8
              py-4
              text-xs sm:text-sm
              font-semibold
              uppercase
              tracking-widest
              shadow-md
              transition-all
              duration-300

              group-hover:bg-[#cb9d54]
              group-hover:text-white
            "
          >
            ← Back Homepage
          </Link>

          {/* UNDERLINE */}
          <div
            className="
              mt-1
              w-48 sm:w-50 md:w-54
              h-[2px]
              bg-gray-300/60
              relative
              overflow-hidden
              mx-auto
            "
          >
            <span
              className="
                absolute
                left-0
                top-0
                h-full
                w-full
                bg-[#cb9d54]
                transform
                scale-x-0
                origin-left
                transition-transform
                duration-300

                group-hover:scale-x-100
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default NotFound;
