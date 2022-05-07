import { AiOutlineComment, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";

const icons = [
  <AiOutlineHome />,
  <FaBoxOpen />,
  <AiOutlineUser />,
  <FaUsers />,
  <BsBell />,
  <CgProfile />,
  <GiWallet />,
  <AiOutlineComment />,
];
const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-center items-center bg-white py-16 px-2 gap-4 h-full w-16 overflow-y-auto">
      {icons.map((icon) => (
        <span className="text-xl cursor-pointer duration-200 hover:text-primary-500">
          {icon}
        </span>
      ))}
    </aside>
  );
};

export default Sidebar;
