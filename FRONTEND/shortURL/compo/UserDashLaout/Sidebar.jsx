import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link2 } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { UserRound } from "lucide-react";
import { House } from "lucide-react";

const Sidebar = ({ isopen, setisopen }) => {
  const sidebtn = () => {
    setisopen(!isopen);
    console.log("btn is", isopen);
  };

  return (
    <div>
      <aside
        className={`fixed left-0 top-20 bottom-0 ${
          isopen ? "w-64" : "w-20"
        } border-r border-blue-400/20 bg-[#071d38]`}
      >
        <div className="p-5">
          <button
            className={`mb-5 flex h-10 items-center text-xl text-gray-400 
              ${isopen ? "justify-start px-4" : "w-full justify-center"}`}
            onClick={sidebtn}
          >
            ☰
          </button>
          {/* //-------------------HOME--------- */}
          <div className="space-y-2">
            <NavLink
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-300 hover:bg-white/5"
                }`
              }
              to="/dashboard"
            >
              <House
                size={25}
                strokeWidth={2}
                className="text-blue-300 shrink-0"
              />{" "}
              {isopen && <p>Dashboard</p>}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-300 hover:bg-white/5"
                }`
              }
              to="/my-link"
            >
              <Link2
                size={25}
                strokeWidth={2}
                className="text-blue-300 shrink-0"
              />
              {isopen && <p>My Links</p>}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-300 hover:bg-white/5"
                }`
              }
              to="/analysis"
            >
              <BarChart3
                size={25}
                strokeWidth={2}
                className="text-blue-300 shrink-0"
              />{" "}
              {isopen && <p>Analysis</p>}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-300 hover:bg-white/5"
                }`
              }
              to="/my-profile"
            >
              <UserRound
                size={25}
                strokeWidth={2}
                className="text-blue-300 shrink-0"
              />
              {isopen && <p>Profile</p>}
            </NavLink>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            {/* <NavLink className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-300 transition hover:bg-white/5" to="/logout">
  ↪{isopen && <p>Logout</p>}
</NavLink> */}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
