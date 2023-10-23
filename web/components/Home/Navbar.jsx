"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme-toggle";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Contact Us", path: "/" },
  ];

  return (
    <nav className="w-full border-b">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold">Logo</h1>
          </Link>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
            <ModeToggle />
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="hover:text-teal-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 md:inline-block items-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
