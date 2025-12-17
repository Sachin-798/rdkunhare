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
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Kunhare logo" className="h-20 md:h-24 w-auto" />
            <p className="text-base md:text-2xl text-gray-300 font-light">
              Contact us for incredible interior & architect designs.
            </p>
          </div>

          {/* Button */}
          <div className="group">
            <Link
              to="/contact"
              className="
                inline-block bg-white text-black px-8 py-4 text-sm font-semibold uppercase
                transition-all duration-300
                group-hover:bg-[#cb9d54]
                group-hover:text-white
              "
            >
              Learn More
            </Link>
            <div className="mt-2 w-36 h-[2px] bg-gray-400 group-hover:bg-[#cb9d54]" />
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
              <h3 className="text-white text-xl font-bold mb-4">About</h3>
              <p className="text-white text-base mb-4">
                We are Builder and Broker of Plot, Flats, Banglow for Purchasing
                and Selling in Super Corridor, Indore-Ujjain Road.
              </p>
              <Link
                to="/about"
                className="text-white text-base hover:text-[#cb9d54] transition"
              >
                Read More
              </Link>
            </div>

            {/* LINKS */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-white text-base">
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
              <h3 className="text-white text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-white text-base">
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
              <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-white text-base">
                <li className="flex gap-3"><FaPhoneAlt /> +91-9826631470</li>
                <li className="flex gap-3"><MdEmail /> sanjaykunhare2031@gmail.com</li>
                <li className="flex gap-3"><MdLocationOn /> Indore, MP</li>

                {/* SOCIAL ICONS */}
                <li className="flex gap-6 pt-3 text-2xl">
                  <Link to="/social/twitter" className="hover:text-[#cb9d54] transition">
                    <FaTwitter />
                  </Link>
                  <Link to="https://www.facebook.com/sanjaykunhare2031/" className="hover:text-[#cb9d54] transition">
                    <FaFacebookF />
                  </Link>
                  <Link to="/social/linkedin" className="hover:text-[#cb9d54] transition">
                    <FaLinkedinIn />
                  </Link>
                  <Link to="/social/instagram" className="hover:text-[#cb9d54] transition">
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
