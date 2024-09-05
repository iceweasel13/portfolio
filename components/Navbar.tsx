import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <div className="flex justify-between fixed w-full gap-5 p-6 sm:px-12 md:px24 lg:px-36 xl:px-60 z-50 backdrop-blur-sm ">
      <h1 className="text-2xl text-slate-50 font-extrabold">
        Nihat.
      </h1>
      <div className=" flex items-center justify-between gap-5 text-lg text-slate-50 max-sm:hidden ">
        <Link href={"/"} className="hover:text-blue-400">
          Home
        </Link>
        <Link
          href={"/about"}
          className="hover:text-blue-400"
        >
          Services
        </Link>
        <Link
          href={"/projects"}
          className="hover:text-blue-400"
        >
          Projects
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-blue-400"
        >
          Contact
        </Link>
      </div>{" "}
      <MobileNav />
    </div>
  );
};

export default Navbar;
