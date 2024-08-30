import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  LifeBuoy,
  Settings,
  Receipt,
  Package,
  Boxes,
  UserCircle,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";

export const App = () => {
  return (
    <main className="App">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="DashBoard" />
        <SidebarItem icon={<BarChart3 size={20} />} text="statistics" active />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventor" />
        <SidebarItem icon={<Package size={20} />} text="Orders" />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings " />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
    </main>
  );
};
export default App;
