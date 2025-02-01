import { NavLink } from "react-router-dom";

const MenuItems = ({ item, index, expanded }) => {
  return (
    <div className="relative" key={item.name + index}>
      <NavLink
        key={index}
        to={item.link}
        className={({ isActive }) =>
          isActive
            ? `bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 hover:bg-gradient-to-tr hover:from-indigo-200 hover:to-indigo-100
            relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer group`
            : "hover:bg-indigo-50 text-indigo-600 relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer group"
        }
      >
        {item.icon}
        <span
          className={`overflow-hidden transition-all 
         ${expanded ? "w-52 ml-3" : "w-0"}
        `}
        >
          {item.name}
        </span>
        <div className="mx-auto "></div>
      </NavLink>
    </div>
  );
};

export default MenuItems;
