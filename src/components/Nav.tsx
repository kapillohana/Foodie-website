"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'; // Use a down caret for the dropdown

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

const Nav = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className=" flex justify-center gap-8 mr-48" >
     
        {links.map((link, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveMenu(link.name)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={link.path}
              className={`${
                link.path === pathname &&
                "text-[#282938] border-b-2 border-[#282938]"
              } capitalize font-medium hover:text-[#39DB4A] transition-all flex items-center`}
            >
              {link.name}
              {/* Dropdown arrow icon */}
              {link.submenu && (
                <FontAwesomeIcon icon={faCaretDown} className="ml-1 text-sm" />
              )}
            </Link>

            {/* Submenu logic */}
            {link.submenu && activeMenu === link.name && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 space-y-2 z-10">
                {link.submenu.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subLink.path}
                    className="block px-2 py-1 text-gray-600 hover:text-[#39DB4A] transition-colors"
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      
    </nav>
  );
};

export default Nav;
