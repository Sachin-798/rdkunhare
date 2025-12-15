import React from "react";
import logo from "../assets/Images/logo.png"; // update path if needed
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";



const Footer = () => {
    return (
        <footer className="relative text-gray-200">
            {/* TOP CTA BAR */}
            <div className="bg-black/95 w-full">
                <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <img src={logo} alt="Kunhare logo" className="h-20 md:h-24 w-auto object-contain" />
                        <p className="text-base md:text-2xl text-gray-300 font-light leading-snug">
                            Contact us for incredible interior & architect designs.
                        </p>
                    </div>

                    <div className="flex flex-col items-start group">
                        <a
                            href="#"
                            className="inline-block text-xs md:text-sm font-semibold uppercase bg-white text-black 
      px-6 md:px-8 py-3 md:py-4 rounded-sm shadow-sm transition-all duration-300
      group-hover:bg-[#cb9d54] group-hover:text-white"
                            style={{ letterSpacing: "1px" }}
                            aria-label="Learn more about Kunhare"
                        >
                            LEARN MORE
                        </a>

                        {/* Underline below button */}
                        <div className="mt-1 w-full">
                            <div className="w-40 h-[2px] bg-gray-400/60 transition-all duration-300 group-hover:bg-[#cb9d54]" />
                        </div>
                    </div>

                </div>
            </div>
            <hr />

            {/* MAIN FOOTER (background image + content) */}
            <div className="footer-bg footer-stripes w-full">
                <div className="container mx-auto px-4 py-16">
                    {/* ADD footer-main class here so all column body text uses Roboto 500 and given color/size */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 footer-main">
                        {/* ABOUT */}
                        <div>
                            <h3 className="text-white font-semibold text-xl mb-4">About</h3>

                            <p className="mb-4 text-justify">
                                “We are Builder and Broker of Plot, Flats, Banglow for Purchasing and Selling in
                                Super Corridor, Indore-Ujjain Road.”
                            </p>

                            <a href="#" className="text-sm text-gray-300 hover:underline">Read More</a>
                        </div>

                        {/* LINKS */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-xl ">Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Services</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Gallery</a></li>
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* SERVICES */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-xl ">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Architecture Design</a></li>
                                <li><a href="#" className="hover:text-white">Interior Design</a></li>
                                <li><a href="#" className="hover:text-white">Building & Construction</a></li>
                                <li><a href="#" className="hover:text-white">Structure Design</a></li>
                                <li><a href="#" className="hover:text-white">Property Management</a></li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-xl">Contact Us</h3>
                            <ul className="space-y-3">
                                {/* Phone */}
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt className="w-5 h-5 text-gray-300" />
                                    <span>+91-9826631470</span>
                                </li>

                                {/* Email */}
                                <li className="flex items-center gap-3">
                                    <MdEmail className="w-5 h-5 text-gray-300" />
                                    <span>Sanjaykunhare2031@gmail.com</span>
                                </li>

                                {/* Address */}
                                <li className="flex items-start gap-3">
                                    <MdLocationOn className="w-14 h-14 text-gray-300 " />
                                    <span>31, Kailashpuri, Chandragupta Mourya Square Indore</span>
                                </li>

                                {/* Social Icons */}
                                <li className="pt-3">
                                    <div className="flex items-center gap-6">

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-[#cb9d54] transition-all duration-300 transform hover:scale-125"
                                            aria-label="twitter"
                                        >
                                            <FaTwitter className="w-6 h-6" />
                                        </a>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-[#cb9d54] transition-all duration-300 transform hover:scale-125"
                                            aria-label="facebook"
                                        >
                                            <FaFacebookF className="w-6 h-6" />
                                        </a>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-[#cb9d54] transition-all duration-300 transform hover:scale-125"
                                            aria-label="linkedin"
                                        >
                                            <FaLinkedinIn className="w-6 h-6" />
                                        </a>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-[#cb9d54] transition-all duration-300 transform hover:scale-125"
                                            aria-label="instagram"
                                        >
                                            <FaInstagram className="w-6 h-6" />
                                        </a>

                                    </div>
                                </li>


                            </ul>

                        </div>
                    </div>


                </div>
            </div>



            <div className="w-full bg-black py-4">
                <p
                    className="text-center"
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        fontStyle: "normal",
                        fontWeight: "500",
                        color: "rgb(157, 157, 157)",
                        fontSize: "16px",
                        lineHeight: "30px",
                    }}
                >
                    Copyright © 2022 <span style={{ color: "white" }}>RD KUNHARE</span> All Rights Reserved.
                    Powered By <span style={{ color: "white" }}>mrdigito.com</span>
                </p>
            </div>





        </footer>
    );
};

export default Footer;
