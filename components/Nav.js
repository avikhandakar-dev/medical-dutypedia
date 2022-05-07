import { AiOutlineHome } from "react-icons/ai";
import { ImFire } from "react-icons/im";
import { BsBell } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "Tranding",
    href: "/",
    icon: <ImFire />,
  },
  {
    name: "Notifications",
    href: "/",
    icon: <BsBell />,
  },
  {
    name: "Home",
    href: "/",
    icon: <FaRegPaperPlane />,
  },
];
const Nav = () => {
  return (
    <div className="flex justify-center items-center bg-white py-3 px-8 gap-4">
      {navLinks.map((item) => (
        <Link href={item.href}>
          <a className="text-primary-500 duration-200 hover:scale-110 w-12 aspect-square rounded-full bg-gray-50 shadow-sm flex justify-center items-center text-2xl">
            {item.icon}
          </a>
        </Link>
      ))}
      <div className="ml-4 flex gap-2 items-center md:border border-primary-50 rounded-full pr-4">
        <div className="avatar">
          <div className="w-14 rounded-full border border-primary-500">
            <img src="https://api.lorem.space/image/face?hash=92310" />
          </div>
        </div>
        <p className="hidden md:block">Omor Akbar</p>
      </div>
    </div>
  );
};

export default Nav;
