/* eslint-disable react/prop-types */
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";

const sidebarContext = createContext();

export const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className={`h-screen transition-all ${expanded ? 'w-72' : 'w-16'}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-xl">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'} `}
            alt="img"
          />
          <button onClick={() => setExpanded(cur => !cur)} className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-200">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <sidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </sidebarContext.Provider>
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="img"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-52 ml-3 bg-slate-300 p-2 rounded-xl' : 'w-0'}`}
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
  const { expanded } = useContext(sidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
      )}
    </li>
  );
};