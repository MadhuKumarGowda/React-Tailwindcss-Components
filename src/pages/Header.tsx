import { BiSearch } from "react-icons/bi";
import Search from "../components/Search";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 border border-b-neutral-400 flex justify-between items-center ">
      <div className="relative">
        <BiSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2  -translate-y-1/2 left-1"
        />
        <Search />
      </div>
      <div className="flex justify-center items-center gap-3 mr-3">
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <LuShoppingCart fontSize={20} />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            2
          </div>
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <MdOutlineNotificationsActive fontSize={20} />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            20
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
