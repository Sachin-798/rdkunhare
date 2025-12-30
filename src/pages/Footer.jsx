import React from "react";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative text-gray-200">

      {/* TOP CTA BAR */}
      <div className="bg-black/95 w-full">
        <div className="
      max-w-7xl
      mx-auto
      px-4 sm:px-6 lg:px-8
      py-10 sm:py-12 md:py-14
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-8
    "
        >

          {/* LEFT CONTENT */}
          <div className="
        flex
        flex-col
        sm:flex-row
        items-center
        gap-4 sm:gap-6
        text-center
        sm:text-left
      "
          >
            <img
              src={logo}
              alt="Kunhare logo"
              className="
          h-16
          sm:h-18
          md:h-20
          lg:h-24
          w-auto
          object-contain
        "
            />

            <p className="
          text-sm
          sm:text-base
          md:text-xl
          lg:text-2xl
          text-gray-300
          font-light
          leading-relaxed
          max-w-xl
        "
            >
              Contact us for incredible interior & architect designs.
            </p>
          </div>


          {/* Button */}
          <div className="mt-8 sm:mt-10 inline-block group">

            <Link
              to="/contact"
              className="
                  inline-block
                  text-xs sm:text-sm
                  font-semibold uppercase
                  bg-white text-black
                  px-6 sm:px-8
                  py-3 sm:py-4
                  rounded-sm
                  shadow-sm
                  transition-colors duration-300

                  group-hover:bg-[#cb9d54]
                  group-hover:text-white

                  group-active:bg-[#cb9d54]
                  group-active:text-white

                  focus-visible:bg-[#cb9d54]
                  focus-visible:text-white
                "
              style={{ letterSpacing: "1px" }}
            >
              LEARN MORE
            </Link>

            {/* UNDERLINE */}
            <div
              className="
                  mt-2
                  w-33 sm:w-32 md:w-36 lg:w-40
                  h-[2px]
                  bg-gray-400/60
                  relative
                  overflow-hidden
                "
            >
              <span
                className="
                    absolute left-0 top-0
                    h-full w-full
                    bg-[#cb9d54]
                    transform scale-x-0
                    origin-left
                    transition-transform duration-300

                    group-hover:scale-x-100
                    group-active:scale-x-100
                    group-focus-visible:scale-x-100
                  "
              />
            </div>

          </div>

        </div>
      </div>


      <hr />

      {/* MAIN FOOTER */}
      <div className="footer-bg footer-stripes w-full">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* ABOUT */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">About</h3>
              <p className="text-white text-xl mb-4">
                We are Builder and Broker of Plot, Flats, Banglow for Purchasing
                and Selling in Super Corridor, Indore-Ujjain Road.
              </p>
              <Link
                to="/about"
                className="text-white text-xl hover:text-[#cb9d54] transition"
              >
                Read More
              </Link>
            </div>

            {/* LINKS */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-white text-xl">
                <li><Link to="/about" className="hover:text-[#cb9d54] transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-[#cb9d54] transition">Services</Link></li>
                <li><Link to="/blog" className="hover:text-[#cb9d54] transition">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-[#cb9d54] transition">Careers</Link></li>
                <li><Link to="/gallery" className="hover:text-[#cb9d54] transition">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-[#cb9d54] transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-white text-xl">
                <li><Link to="/services/architecture-design" className="hover:text-[#cb9d54] transition">Architecture Design</Link></li>
                <li><Link to="/services/interior-design" className="hover:text-[#cb9d54] transition">Interior Design</Link></li>
                <li><Link to="/services/building-construction" className="hover:text-[#cb9d54] transition">Building & Construction</Link></li>
                <li><Link to="/services/structure-design" className="hover:text-[#cb9d54] transition">Structure Design</Link></li>
                <li><Link to="/services/property-management" className="hover:text-[#cb9d54] transition">Property Management</Link></li>
                <li><Link to="/services/map-sanction" className="hover:text-[#cb9d54] transition">Map Sanction</Link></li>
                <li><Link to="/services/vastu" className="hover:text-[#cb9d54] transition">Vastu</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-white text-xl">
                {/* PHONE */}
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-2xl" />
                  <span>+91-9826631470</span>
                </li>

                {/* EMAIL (with mailto link) */}
                <li className="flex items-center gap-3">
                  <MdEmail
                    className="
      text-2xl
      md:text-3xl
      text-white
      shrink-0
    "
                  />
                  <a
                    href="mailto:sanjaykunhare2031@gmail.com"
                    className="hover:text-[#cb9d54] transition break-all"
                  >
                    sanjaykunhare2031@gmai
                  </a>
                </li>


                {/* LOCATION */}
                <li className="flex items-center gap-3">
                  <MdLocationOn className="text-2xl" />
                  <span>Indore, MP</span>
                </li>

                {/* SOCIAL ICONS */}
                <li className="flex gap-6 pt-3">
                  <Link
                    to="/social/twitter"
                    className="hover:text-[#cb9d54] transition text-3xl"
                  >
                    <FaTwitter />
                  </Link>

                  <Link
                    to="https://www.facebook.com/sanjaykunhare2031/"
                    className="hover:text-[#cb9d54] transition text-3xl"
                  >
                    <FaFacebookF />
                  </Link>

                  <Link
                    to="/social/linkedin"
                    className="hover:text-[#cb9d54] transition text-3xl"
                  >
                    <FaLinkedinIn />
                  </Link>

                  <Link
                    to="/social/instagram"
                    className="hover:text-[#cb9d54] transition text-3xl"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-black py-4 text-center text-gray-400">
        Copyright © 2022 <span className="text-white">RD KUNHARE All Rights Reserved</span> . Powered by{" "}
        <span className="text-white">Bheemainfotech.in</span>
      </div>
    </footer>
  );
};

export default Footer;
