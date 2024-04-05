"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarListItem from "./NavbarListItem";
import Logo from "@/public/vercel.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNav = () => setIsNavOpen(!isNavOpen);

  // const menuClasses = `fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 
  //                        transform ${isNavOpen ? "translate-x-0" : "-translate-x-full"} 
  //                        transition-transform duration-500 ease-in-out`;
  // const closeIconClasses = `absolute top-6 right-4 transition-opacity duration-0 ease-in-out ${isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`;

  const nav_dict = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    // { href: "/game", text: "Game Dev" },
    // { href: "/data", text: "Data Science" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white z-10">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className={`transition-opacity duration-300 ease-in-out relative ${isNavOpen ? 'opacity-0' : 'opacity-100'}`}>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={205} height={75} />
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex mr-1">
            {nav_dict.map(({ href, text }, index) => (
              <NavbarListItem key={index} href={href} text={text} />
            ))}
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden pl-24">
          {isNavOpen ? <AiOutlineClose size={25} /> : <HiMenuAlt4 size={25} />}
        </div>
      </div>
    </nav >
  );
};

export default Navbar;