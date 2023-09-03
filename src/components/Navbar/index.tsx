import { FC } from "react";
import { NavLink } from "react-router-dom";

import { FaHome, FaClock } from "react-icons/fa";

const Navbar: FC = () => (
  <nav className="min-h-[9vh] w-full py-2 flex flex-col justify-center items-center gap-1 shadow">
    <h1
      style={{ fontFamily: "Mochiy Pop P One" }}
      className="text-4xl font-normal lowercase"
    >
      time-it
    </h1>
    <ul className="pt-1 px-1 flex items-end gap-5 border-t border-slate-100">
      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 px-1 flex items-center justify-center gap-1 ${
              isActive ? "text-black font-bold " : "text-gray-500 font-normal "
            } hover:text-black transition-all duration-300`
          }
          to="/"
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 px-1 flex items-center justify-center gap-1 ${
              isActive ? "text-black font-bold " : "text-gray-500 font-normal "
            } hover:text-black transition-color duration-300`
          }
          to="/timers"
        >
          <FaClock />
          Timers
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
