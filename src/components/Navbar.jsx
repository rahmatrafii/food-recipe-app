import React, { useState } from "react";
import Logo from "./../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-[11] bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex justify-center items-center text-white text-lg cursor-pointer"
        >
          <img src={Logo} alt="logo" className="w-[50px]" />
          Flavor <span>Verse</span>
        </a>
        <ul className="hidden md:flex text-white gap-x-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Favorite</a>
          </li>
        </ul>
        <Button
          title="Sign in"
          className="hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
        />
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px] `}
      >
        <a href="/">Home</a>
        <a href="/">Recipes</a>
        <a href="/">Favorite</a>
      </div>
    </header>
  );
};

export default Navbar;
