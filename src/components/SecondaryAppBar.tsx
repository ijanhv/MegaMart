import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NavProps {
  name: string;
  href: string;
}

const SecondaryAppBar = () => {
  const navLinks = [
    {
      name: "Furniture",
      href: "/",
    },
    {
      name: "Clothing",
      href: "/",
    },
    {
      name: "Electronics",
      href: "/",
    },
    {
        name: "Appliances",
        href: "/",

    },
    {
        name: "Toys",
        href: "/",
    },
    {
      name: "Beauty",
      href: "/",
    },
  ];

  return (
    <nav className="bg-secondary-700 overflow-x-auto">
      <div className="container flex">
        {/* All */}
        <div className="px-6 py-3 bg-primary-600 flex items-center cursor-pointer ">
          <MenuIcon className="text-white" size={20} strokeWidth={1.5} />
          <span className="text-white text-sm font-poppins mx-3">
            All 
          </span>
        </div>
        {/* All */}

        {/* NavLinks */}
        <div className="flex items-center justify-between flex-grow pl-12 ">
          <div className="flex items-center space-x-6 text-sm">
            {navLinks.map((link: NavProps) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-white font-poppins hover:text-primary-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* NavLinks */}
      </div>
    </nav>
  );
};

export default SecondaryAppBar;
