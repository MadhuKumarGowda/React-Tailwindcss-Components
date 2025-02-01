import { BiSearch } from "react-icons/bi";
import Search from "../components/Search";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Cart from "../components/Cart";
import Notification from "../components/Notification";

const Header = () => {
  return (
    <div className="bg-white h-14 px-4 py-1 border border-b-neutral-400 flex justify-between items-center ">
      <div className="relative">
        <BiSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2  -translate-y-1/2 left-1"
        />
        <Search />
      </div>
      <div className="flex justify-center items-center gap-3 mr-5">
        <Cart />
        <Notification />
      </div>
    </div>
  );
};

export default Header;
