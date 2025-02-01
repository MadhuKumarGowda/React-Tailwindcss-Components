import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import Logo from "./Logo";
import SideNavBar from "./SideNavBar";
import UserAvatar from "./UserAvatar";

const SideBarWrapper = ({ toggleSidebar, expanded }) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border border-r shadow-md">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Logo expanded={expanded} />
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <SideNavBar expanded={expanded} />
        <div className="border-t flex p-3">
          <UserAvatar expanded={expanded} />
        </div>
      </nav>
    </aside>
  );
};

export default SideBarWrapper;
