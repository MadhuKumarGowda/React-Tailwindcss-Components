import { BiLogOut } from "react-icons/bi";
import { CgLogOut, CgMoreVertical } from "react-icons/cg";

const UserAvatar = ({ expanded }) => {
  const logout = () => {
    alert("Logout Success.");
  }; //logout
  return (
    <>
      <img
        src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
        alt="user avatar"
        className="w-10 h-10 rounded-full"
      />
      <div
        className={`
                flex justify-between items-center 
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
             `}
      >
        <div className="leading-4">
          <h4 className="font-semibold"> Madhu Kumar K S</h4>
          <span className="text-xs text-gray-600"> madhu@gmail.com</span>
        </div>
        <BiLogOut
          size={20}
          className="hover:cursor-pointer"
          title="Logout"
          onClick={() => logout()}
        />
      </div>
    </>
  );
};

export default UserAvatar;
