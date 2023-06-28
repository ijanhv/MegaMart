import { Heart, LogOutIcon, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="px-4 py-3 shadow flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1445429015697-fd3c1489b6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
            alt="user"
            width={50}
            height={50}
            className="rounded-full w-14 h-14 border border-3 border-primary-600 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-secondary-600">Hello</p>
          <h4 className="text-secondary-700 font-medium">Daisy</h4>
        </div>
      </div>
      {/* Links */}
      <div className="mt-6 shadow rounded p-4 divide-y divide-secondary-200 space-y-4 text-secondary-600">
        <div className="space-y-1 pl-8 ">
          <span
            // onClick={() => setActiveTab("profile")}

            className="relative block text-primary-600 cursor-pointer hover:text-primary-600 transition "
          >
            <span className="absolute -left-8 top-0 text-base">
              <User />{" "}
            </span>
            Manage Account
          </span>
          <Link
            href="/account/orders"
            className=" relative block hover:text-primary-600 transition"
          >
            Orders
          </Link>
          <Link
            href="/account/password"
            className=" relative block hover:text-primary-600 transition"
          >
            Change Password
          </Link>
          <Link
            href="/account/address"
            className="relative block hover:text-primary-600 transition"
          >
            Address
          </Link>
        </div>
        <div className="space-y-2 pl-8 pt-3 ">
          <Link href="/account" className="relative block text-primary-600 ">
            <span className="absolute -left-8 top-0 text-base">
              <ShoppingBag />{" "}
            </span>
            Order History
          </Link>
          <Link
            href="/account/orders"
            className=" relative block hover:text-primary-600 transition"
          >
            Orders
          </Link>
          <Link
            href="/account/password"
            className=" relative block hover:text-primary-600 transition"
          >
            Returns
          </Link>
          <Link
            href="/account/address"
            className=" relative block hover:text-primary-600 transition"
          >
            Cancellations
          </Link>
        </div>
        <div className="space-y-2 pl-8 pt-3 ">
          <span
            className="relative block text-secondary-600  cursor-pointer hover:text-primary-600 transition"
            // onClick={() => setActiveTab("wishlist")}
          >
            <span className="absolute -left-8 top-0 text-base">
              <Heart />{" "}
            </span>
            WishList
          </span>
        </div>
        <div className="space-y-2 pl-8 pt-3 ">
          <Link href="/account" className="relative block text-secondary-600 ">
            <span className="absolute -left-8 top-0 text-base">
              <LogOutIcon />{" "}
            </span>
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
