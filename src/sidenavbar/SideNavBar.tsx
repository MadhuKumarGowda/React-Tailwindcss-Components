import { BiBarChart } from "react-icons/bi";
import { GiHelp } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import MenuItems from "./MenuItems";

const SideNavBar = ({ expanded }) => {
  const menu = [
    { name: "Dashboard", link: "/dashboard", icon: <LuLayoutDashboard /> },
    { name: "Reports", link: "/statistics", icon: <BiBarChart /> },
    // { name: "Orders", link: "/", icon: <FiPackage /> },
    // { name: "Billings", link: "/", icon: <BiReceipt /> },
    // { name: "Users", link: "/", icon: <BiUserCircle /> },
    { name: "Help", link: "/help", icon: <GiHelp /> },
  ];
  return (
    <>
      <div className="flex-1 px-3 relative">
        {menu.map((item, index) => (
          <MenuItems index={index} item={item} expanded={expanded} />
        ))}
      </div>
    </>
  );
};

export default SideNavBar;
