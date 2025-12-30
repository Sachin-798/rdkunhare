import React, { useState } from "react";
import {
  // FiImage,
  FiVideo,
  FiLogOut,
  FiMenu,
  FiX,
  FiEdit3,
} from "react-icons/fi";

const Sidebar = ({ active, setActive, logout }) => {
  const [open, setOpen] = useState(false);

  // ❌ Dashboard item removed
  const menuItems = [
    // { key: "image", label: "Image Upload", icon: <FiImage /> },
    { key: "video", label: "Video Upload", icon: <FiVideo /> },
    { key: "blog", label: "Upload Blog", icon: <FiEdit3 /> },
  ];

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gray-900 text-white flex items-center justify-between px-4 py-3 shadow">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <button onClick={() => setOpen(true)}>
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static flex flex-col
        `}
      >
        {/* HEADER */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-xs text-gray-400 mt-1">
              Manage content easily
            </p>
          </div>

          <button className="md:hidden" onClick={() => setOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActive(item.key);
                setOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl
                text-sm font-medium transition
                ${
                  active === item.key
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-xl"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
