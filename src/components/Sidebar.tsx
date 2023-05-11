import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";

const Sidebar: React.FC<{}> = () => {
  return (
    <nav className="w-full md:max-w-[300px] bg-slate-100 md:h-screen font-bold text-2xl md:p-[20px] py-[10px] px-[15px] text-[#444444]">
      <div className="gap-y-5 flex md:block items-center justify-between">
        <ul className="md:block flex items-center">
          <li>
            <Link
              to="/"
              className="py-[10px] drop-shadow-md flex items-center hover:bg-white hover:rounded-md"
            >
              <FaUserAlt className="mx-2" />
              <h1 className="hidden md:flex">Contact</h1>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="flex py-[10px] md:mt-3 drop-shadow-md items-center hover:bg-white hover:rounded-md"
            >
              <AiOutlineLineChart className="mx-2" />
              <h1 className="hidden md:flex">Charts and Maps</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
