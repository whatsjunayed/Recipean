'use client'
import Link from "next/link";
import { useState } from "react";
import { PiChefHatBold } from "react-icons/pi";
import { MdOutlineMenuOpen, MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const navitem = [
    { title: "Home", path: "/" },
    { title: "Our Recipes", path: "/recipe-list" },
    { title: "Contact Us", path: "/contact" },
  ];
  const [list, setList] = useState('true')
  const changeValue = () => {
    setList(!list)
  }
  return (
    <div className="h-auto z-[999] w-full bg-[rgba(0,0,0,0.51)] fixed top-0 left-0">
      <div className="flex items-center px-6 justify-between w-full relative sm:max-w-[90%] mx-auto ">
        <div className="flex items-center gap-2 text-white z-50 py-2">
          <PiChefHatBold size={40} />
          <span className="text-2xl font-semibold">Recipean</span>
        </div>

        <div>
          <ul
            className={`flex flex-col items-center gap-6 absolute top-0 ${
              list ? "left-[-110%]" : "left-0"
            } h-screen w-full justify-center bg-[rgba(0,0,0,0.75)] sm:flex-row sm:static sm:h-auto sm:bg-transparent duration-500 z-10`}
          >
            {navitem.map((item, index) => (
              <li
                key={index}
                className="p-2 cursor-pointe text-white font-semibold text-lg sm:text-md relative group"
              >
                <Link href={item.path}>{item.title}</Link>
                <div className="absolute h-[2px] w-0 bg-white duration-500 bottom-2 left-0 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={changeValue}
          className="cursor-pointer sm:hidden z-50 text-white"
        >
          {list ? (
            <MdOutlineMenuOpen size={35} />
          ) : (
            <MdOutlineRestaurantMenu size={30}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
