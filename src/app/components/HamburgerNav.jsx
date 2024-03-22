import Link from "next/link";
import React, { useState } from "react";
export default function HamburgerNav(props) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  console.log(props.navItems);
  return (
    <div className="w-64 border-2 bg-white h-[100vh] z-50 fixed top-16 left-0 md:hidden p-5">
      <div className="relative flex  ">
        <ul className="text-black flex flex-col space-y-8 ">
          {props.navItems.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer flex">
                <img className="w-6 h-6 mr-5" src={item.icon} alt={item.name} />

                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
