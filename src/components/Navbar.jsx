import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/Images/logo.png";
import TopInfoBar from "./TopInfoBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching:", searchQuery);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <TopInfoBar />

      <nav className="w-full bg-white text-black shadow-md lg:bg-black lg:text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-30 lg:h-34">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-20 lg:h-24 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative pb-2
                    font-medium text-[15px] leading-[30px] tracking-wide uppercase
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white"
                        : "text-white hover:text-[#cb9d54]"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* DESKTOP SEARCH */}
            <div className="hidden lg:flex items-center">
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center rounded-full px-3 py-2 border transition-all ${
                  searchOpen ? "border-gray-400 bg-white" : "border-transparent"
                }`}
              >
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`outline-none text-sm text-black transition-all duration-300 ${
                    searchOpen ? "w-44 ml-2 opacity-100" : "w-0 opacity-0"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2 ${
                    searchOpen
                      ? "text-black"
                      : "text-white hover:text-[#cb9d54]"
                  }`}
                >
                  <IoSearchOutline size={22} />
                </button>
              </form>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
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
                className="flex items-center border rounded-full px-4 py-3"
              >
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 outline-none text-sm"
                />
                <button type="submit" className="text-gray-600">
                  <IoSearchOutline size={20} />
                </button>
              </form>
            </div>

            {/* MOBILE LINKS (NO UNDERLINE) */}
            <div className="px-4 py-6 space-y-5 uppercase text-[15px] font-medium">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    block w-full
                    ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-gray-700"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
