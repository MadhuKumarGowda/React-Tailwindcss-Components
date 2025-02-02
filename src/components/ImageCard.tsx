import { BiBookmark, BiHeart, BiShare } from "react-icons/bi";
import Iocnbutton from "./Iocnbutton";

const ImageCard = ({ title, bgImage, children, ...props }) => {
  return (
    <div
      {...props}
      className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group"
    >
      <img
        src={bgImage}
        alt="background Image"
        className="transition-transform group-hover:scale-110 duration-300"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-2"> {title} </h3>
          {children}
          <div className="space-x-4 mt-4">
            <Iocnbutton>
              <BiHeart />
            </Iocnbutton>
            <Iocnbutton>
              <BiBookmark />
            </Iocnbutton>
            <Iocnbutton>
              <BiShare />
            </Iocnbutton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
