import {
  LayoutDashboard,
  Settings,
  Shirt,
  ShoppingBagIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { TbClothesRack, TbShirt } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { BsPlusSquare } from "react-icons/bs";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/vendor/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Products",
    href: "/vendor/products",
    icon: <Shirt />,
  },
  {
    name: "Add Product",
    href: "/vendor/add-product",
    icon: <BsPlusSquare />,
  },
  {
    name: "Orders",
    href: "/vendor/orders",
    icon: <ShoppingBagIcon />,
  },
  {
    name: "Customers",
    href: "/vendor/customers",
    icon: <User />,
  },
  {
    name: "Settings",
    href: "/vendor/settings",
    icon: <Settings />,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-5 container transition-transform -translate-x-full bg-secondary-800 shadow-md sm:translate-x-0">
      <div className="container pb-10">
        <h1 className="font-poppins text-3xl font-semibold  text-secondary-50">
            MegaMart
        </h1>
      </div>
      <div className="h-full container pb-4 overflow-y-auto bg-secondary-800">
        <ul className="space-y-8 text-sm font-poppins">
          {sidebarLinks.map((link, i) => (
            <li key={i} className="">
              <Link
                href={link.href}
                className="flex items-center  text-secondary-50 rounded-lg hover:text-primary-300 transition duration-200"
              >
                {link.icon}
                <span className="ml-3">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
