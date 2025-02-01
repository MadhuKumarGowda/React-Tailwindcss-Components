import { BiUserCircle, BiBarChart, BiReceipt } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { GiHelp } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";

export const menuItems = [
  { name: "Dashboard", link: "/", icon: LuLayoutDashboard },
  { name: "Reports", link: "/", icon: BiBarChart },
  { name: "Orders", link: "/", icon: FiPackage },
  { name: "Billings", link: "/", icon: BiReceipt },
  { name: "Users", link: "/", icon: BiUserCircle },
  { name: "Help", link: "/", icon: GiHelp },
];
