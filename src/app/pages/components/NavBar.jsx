"use client";
import { useState } from "react";
import React from "react";
import HamburgerNav from "./HamburgerNav";
import Link from "next/link";

export default function NavBar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const hamburgerClickHandler = () => {
    // Toggle the visibility of the hamburger menu
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const navItems = [
    { name: "Home", link: "/", icon: "/img/home.png" },
    { name: "Blog", link: "/allblogs", icon: "/img/blog.png" },
    { name: "Contact Us", link: "/ContactUs", icon: "/img/contactUs.png" },
  ];

  return (
    <>
      {/* Hamburger Icon (fixed position) */}
      <div
        onClick={hamburgerClickHandler}
        className="fixed top-0 left-2 p-4 cursor-pointer z-40 visible flex items-center justify-center md:hidden"
      >
        {showHamburgerMenu ? (
          <div className="flex justify-center items-center">
            <img className="h-8 w-8" src="/img/close.png" alt="Close" />
          </div>
        ) : (
          <img className="h-8 w-8" src="/img/menu-bar.png" alt="Menu" />
        )}
      </div>

      {/* Navbar */}
      <div className="flex w-full fixed z-30 top-0 left-0 right-0 h-16 items-center justify-between bg-orange-500 pr-10 pl-10">
        <div className="bg-white h-16 w-16 ml-8 rounded-full justify-center flex items-center">
          {/* Logo */}
          <img className="object-cover" src="/img/logo.png" alt="Logo" />
        </div>
        <div className="flex space-x-5">
          {/* Navigation Links */}
          <div className="hidden md:visible md:flex justify-center">
            <ul className=" flex space-x-8 text-white text-md items-center justify-center">
              {!showHamburgerMenu &&
                navItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-purple-800 focus-visible:text-purple-900"
                    >
                      <Link  href={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Subscribe Button */}
        </div>
      </div>

      {/* Hamburger Menu Content */}
      {showHamburgerMenu && (
        <HamburgerNav
          setShowHamburgerMenu={setShowHamburgerMenu}
          navItems={navItems}
        />
      )}
    </>
  );
}
