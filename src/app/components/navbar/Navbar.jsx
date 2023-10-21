import Image from "next/image";
import React from "react";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-10 w-full">
        <div className="flex justify-around  bg-white h-20 items-center shadow-md">
          <div>
            <Image src="/logo.png" width={180} height={40} alt="logo" />
          </div>
          <div className=" md:hidden ">
            <ul className="flex items-center gap-5 text-base font-medium">
              <li className="cursor-pointer">Company</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Industries</li>
              <li className="cursor-pointer">Insights</li>
              <li className="cursor-pointer">Portfolio</li>
              <li className="bg-sky-600 px-3 py-2 rounded-lg text-sm text-white cursor-pointer">
                Let's Talk
              </li>
            </ul>
          </div>
          <div className="hidden md:flex text-2xl">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
