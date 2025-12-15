import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 🔽 Services dropdown states
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const servicesRef = useRef(null);

  const showServices = servicesOpen || servicesHover;

  // close services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuStyle = "font-medium text-[15px] leading-[30px] tracking-wide";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="w-full bg-black text-white py-2 px-5 flex justify-end items-center space-x-5 lg:hidden">
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
      </div>

      <nav className="w-full bg-white text-black shadow-md lg:bg-black lg:text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-35">

            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Kunhare Logo" className="h-30 w-auto object-contain" />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-10 uppercase">
              <NavLink to="/" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                Home
              </NavLink>

              <NavLink to="/about" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                About Us
              </NavLink>

              {/* SERVICES DROPDOWN */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`inline-flex items-center gap-1 ${menuStyle} text-[18px] text-white hover:text-[#cb9d54] transition-colors duration-300`}

                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-300 ${showServices ? "rotate-180" : ""
                      }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* DROPDOWN */}
                <div
                  className={`
      absolute left-0 mt-3 w-64 bg-white border border-gray-200
      rounded-md shadow-lg z-50
      transform origin-top transition-all duration-200 ease-out
      normal-case
      ${showServices
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                    }
    `}
                >
                  {[
                    { label: "Architecture Design", path: "/services/architecture-design" },
                    { label: "Interior Design", path: "/services/interior-design" },
                    { label: "Building & Construction", path: "/services/building-construction" },
                    { label: "Structure Design", path: "/services/structure-design" },
                    { label: "Property Management", path: "/services/property-management" },
                    { label: "Map Sanction", path: "/services/map-sanction" },
                    { label: "Vastu", path: "/services/vastu" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="
          block px-5 py-2.5
          text-[15px] leading-[30px] font-medium
          text-gray-700 hover:bg-gray-100
          border-b border-gray-200 last:border-b-0
          normal-case
        "
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>


              <NavLink to="/gallery" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                Gallery
              </NavLink>

              <NavLink to="/careers" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                Careers
              </NavLink>

              <NavLink to="/blog" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                Blog
              </NavLink>

              <NavLink to="/contact" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                Contact Us
              </NavLink>
            </div>

            {/* SEARCH DESKTOP */}
            <div className="hidden lg:flex items-center">
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center rounded-full px-2 py-1 border transition-all duration-300
      ${searchOpen ? "border-gray-400 bg-white" : "border-transparent"}`}
              >
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`outline-none text-sm text-black placeholder-gray-500 transition-all duration-300
        ${searchOpen ? "w-40 ml-2 opacity-100" : "w-0 opacity-0"}`}
                />

                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`
        p-2 rounded-full transition-all duration-300
        ${searchOpen ? "text-black hover:bg-gray-100" : "text-white hover:text-[#cb9d54]"}
      `}
                >
                  {/* SEARCH ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.65" y1="16.65" x2="21" y2="21" />
                  </svg>
                </button>
              </form>
            </div>


            {/* MOBILE HAMBURGER */}
            <button onClick={() => setOpen(!open)} className="lg:hidden text-4xl ">
              {open ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2 uppercase">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Careers", to: "/careers" },
                { label: "Blog", to: "/blog" },
                { label: "Contact Us", to: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`${menuStyle} block text-black`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
