"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Ensure correct casing
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Socials from "./Socials";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/Menu",
    submenu: [
      { name: "Breakfast", path: "/menu/breakfast" },
      { name: "Lunch", path: "/menu/lunch" },
      { name: "Dinner", path: "/menu/dinner" },
    ],
  },
  {
    name: "services",
    path: "/#services",
    submenu: [
      { name: "Catering", path: "/services/catering" },
      { name: "Event Planning", path: "/services/event-planning" },
      { name: "Delivery", path: "/services/delivery" },
    ],
  },
  {
    name: "Offers",
    path: "/offers",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#282938]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#F5FCFF] gap-6">
        {/* Logo */}
        <Link href="/" className="flex justify-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#39DB4A] w-10 h-8 rounded-md flex items-center justify-center">
              <img className="h-5 w-5" src="/images/Foodie.png" alt="Logo" />
            </div>
            <img className="h-6 w-14 mt-1" src="/images/oodi.png" alt="" />
          </div>
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-xl capitalize hover:text-primary-hover transition-all ${
                  pathname === link.path ? "font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Socials Component */}
        <div className="flex justify-center">
          <Socials containerStyles="flex gap-4" iconStyles="text-gray-600 hover:text-gray-900 transition-all" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
