import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.jpeg";
import HamburgurMenue from "@/components/navbar/HamburgurMenue";
import HamburgurIcon from "@/components/navbar/HamburgurIcon";
import UserIcon from "@/components/navbar/UserIcon";

const Navbar = () => {
  const [isHamburgerOpen, setOpenHamburger] = useState(false);
  const [isPersonOpen, setPersonOpen] = useState(false);
  window.onscroll = () => {
    isPersonOpen && setPersonOpen(false);
  };
  return (
    <>
      <nav className="sticky top-0 w-full left-0 px-4 py-4 flex justify-between items-center bg-white z-10 ">
        <HamburgurIcon handleOpen={setOpenHamburger} />
        <div className="flex items-center mr-auto">
          <UserIcon isOpen={isPersonOpen} handleOpen={setPersonOpen} />
          <Link className="text-3xl font-bold leading-none" to="/">
            <img src={logo} className="md:w-10 w-8" />
          </Link>
        </div>
      </nav>
      <HamburgurMenue isOpen={isHamburgerOpen} handleOpen={setOpenHamburger} />
    </>
  );
};
export default Navbar;
