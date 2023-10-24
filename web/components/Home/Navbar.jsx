"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme-toggle";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]



export default function Navbar() {
  const [state, setState] = React.useState(false);
  const pathname = usePathname()

  const menus = [
    {
      title: "Home",
      path: "/",
      active: false
    },
    {
      title: "Blog",
      path: "/blog",
      active: false
    },
    {
      title: "About Us",
      path: "/about",
      active: false
    },
    {
      title: "Contact Us",
      path: "/contact",
      active: false
    },
  ];

  return (

    <header className="border-b py-2 ">
      <nav className=" px-4 lg:px-6 py-2.5 lg:p-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9 " alt=" Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Logo</span>
          </a>
          <div className="flex items-center lg:order-2 gap-2">
            <Button>Login</Button>
            <ModeToggle />
            <button onClick={() => setState(!state)} type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div className={`flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${state ? "block" : "hidden"
            }`} >
            <ul className="flex flex-col w-full mt-4  font-medium lg:flex-row lg:space-x-4 lg:mt-0">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.path} className={`block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 ${pathname === menu.path ? "text-teal-600" : ""}`}>{menu.title}</Link>
                </li>
              ))}
              {/* <li>
                <NavigationMenu className="flex">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Documentation
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>
    </header >

  );
}
