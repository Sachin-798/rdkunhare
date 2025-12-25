import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const TopInfoBar = () => {
  return (
    <div className="w-full bg-white text-black border-b">
      <div className="max-w-7xl mx-auto px-3 lg:px-8">

        {/* FORCE SINGLE ROW */}
        <div className="
          flex
          flex-row
          justify-between
          items-center
          py-2
          text-[14px]
          whitespace-nowrap
        ">

          {/* LEFT: CONTACT INFO */}
          <div className="flex items-center gap-3 font-medium overflow-hidden">

            {/* PHONE */}
            <a
              href="tel:+919826631470"
              className="flex items-center gap-1 hover:text-[#cb9d54] transition-all duration-300"
            >
              <span className="text-base">📞</span>
              <span className="text-sm">+91-9826631470</span>
            </a>



            {/* EMAIL (HIDE ON VERY SMALL SCREEN) */}
            <a
              href="mailto:Sanjaykunhare2031@gmail.com"
              className="
                hidden
                xs:flex
                sm:flex
                items-center
                gap-1
                hover:text-[#cb9d54]
                transition-all
                duration-300
              "
            >
              <span className="text-base">📧</span>
              <span className="text-sm truncate max-w-[210px]">
                Sanjaykunhare2031@gmail.com
              </span>
            </a>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/sanjaykunhare2031/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#cb9d54] transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#cb9d54] transition-all duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#cb9d54] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#cb9d54] transition-all duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
