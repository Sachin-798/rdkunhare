import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/Images/logo.png";
import { FaChevronDown } from "react-icons/fa";


import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Desktop services dropdown
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const servicesRef = useRef(null);

  // Mobile services dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const showServices = servicesOpen || servicesHover;

  // Close desktop services dropdown on outside click
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
  <a
    href="https://www.facebook.com/sanjaykunhare2031/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#cb9d54] transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#cb9d54] transition"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#cb9d54] transition"
  >
    <FaLinkedinIn />
  </a>
</div>


      <nav className="w-full bg-white text-black shadow-md lg:bg-black lg:text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-35">

            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Kunhare Logo"
                className="h-30 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-10 uppercase">
              <NavLink to="/" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                Home
              </NavLink>

              <NavLink to="/about" className={`${menuStyle} text-white hover:text-[#cb9d54]`}>
                About Us
              </NavLink>

              {/* DESKTOP SERVICES DROPDOWN */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
              >
  <button
  onClick={() => setServicesOpen(!servicesOpen)}
  className={`inline-flex items-center gap-2 ${menuStyle} text-xl font-medium text-white hover:text-[#cb9d54]`}
>
  Services
  <span
    className={`transition-transform duration-300 ${
      showServices ? "rotate-180" : ""
    }`}
  >
    <FaChevronDown className="text-lg text-white" />
  </span>
</button>



                <div
                  className={`
                    absolute left-0 mt-3 w-64 bg-white border border-gray-200
                    rounded-md shadow-lg z-50 normal-case
                    transition-all duration-200
                    ${showServices
                      ? "opacity-100 scale-100"
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
                      className="block px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-100 border-b last:border-0"
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

            {/* DESKTOP SEARCH */}
            <div className="hidden lg:flex items-center">
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center rounded-full px-2 py-1 border transition-all
                  ${searchOpen ? "border-gray-400 bg-white" : "border-transparent"}
                `}
              >
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`outline-none text-sm text-black transition-all
                    ${searchOpen ? "w-40 ml-2 opacity-100" : "w-0 opacity-0"}
                  `}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2 rounded-full ${searchOpen ? "text-black" : "text-white hover:text-[#cb9d54]"
                    }`}
                >
                  <IoSearchOutline size={24} />
                </button>
              </form>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => {
                setOpen(!open);
                setMobileServicesOpen(false);
              }}
              className="lg:hidden text-4xl"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white border-t">

            {/* MOBILE SEARCH */}
            <div className="px-4 py-4 border-b">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center border rounded-full px-3 py-2"
              >
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 outline-none text-sm text-black"
                />
                <button type="submit" className="text-gray-600">
                  <IoSearchOutline size={22} />
                </button>
              </form>
            </div>

            {/* MOBILE LINKS */}
            <div className="px-4 py-3 space-y-2 uppercase">
              <Link to="/" className={`${menuStyle} block`} onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link to="/about" className={`${menuStyle} block`} onClick={() => setOpen(false)}>
                About Us
              </Link>

              {/* MOBILE SERVICES DROPDOWN */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`${menuStyle} w-full flex justify-between items-center`}
                >
                  Services
                  <span
                    className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 ml-3 space-y-2 normal-case">
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
                        className="block text-[14px] text-gray-700"
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/gallery" className={`${menuStyle} block`} onClick={() => setOpen(false)}>
                Gallery
              </Link>

              <Link to="/careers" className={`${menuStyle} block`} onClick={() => setOpen(false)}>
                Careers
              </Link>

              <Link to="/blog" className={`${menuStyle} block`} onClick={() => setOpen(false)}>
                Blog
              </Link>

              <Link to="/contact" className={`${menuStyle} block`} onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
