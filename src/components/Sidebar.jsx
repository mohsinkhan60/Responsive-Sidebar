/* eslint-disable react/prop-types */
import { ChevronFirst, MoreVertical } from "lucide-react";

export const Sidebar = ({ children }) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-xl w-72">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className="overflow-hidden transition-all w-32"
            alt="img"
          />
          <button className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-200">
            <ChevronFirst />
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="img"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center w-52 ml-3 bg-pink-300 rounded-md p-2`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Mohsin Khan</h4>
              <span className="text-xs text-gray-600">mohsin@gmail.com</span>
            </div>
            <MoreVertical className="cursor-pointer" size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;

export const SidebarItem = ({ icon, text, active, alert }) => {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span className="w-52 ml-3">{text}</span>
    </li>
  );
};
