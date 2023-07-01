'use client'

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    let accessToken: string | null = null;
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("currentVendor");
      accessToken = storedToken ? JSON.parse(storedToken) : null;
    }
    console.log(accessToken);

    const { isLoading, error, data } = useQuery({
      queryKey: ["vendor"],
      queryFn: () =>
        axios.get("/api/vendor", {
          headers: {
            Authorization: `${accessToken}`,
          },
        }),
      enabled: !!accessToken,
    });

    console.log(data?.data);



  return (
    <>
    <nav className="fixed top-0  w-full bg-secondary-50 shadow">
      <div className="px-4 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              type="button"
              data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-none"
            >
              <span className="sr-only">Open sidebar</span>
              <GiHamburgerMenu className="text-secondary-700 text-2xl font-semibold" />
            </button>
            <Link href="/vendor" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl text-primary-600 font-poppins">
                MegaMart
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div className="flex gap-4 items-center font-poppins">
                  <h3 className="text-secondary-700 text-lg ">{data?.data.name}</h3>
                  <Image 
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
             
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neil Sims
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </nav>

    
    </>
  );
};

export default Navbar;
