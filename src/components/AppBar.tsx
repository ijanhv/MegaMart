import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

const AppBar = () => {
  return (
   
    <nav className="py-4 shadow-sm bg-secondary-50 ">
      <div className="container flex items-center justify-between space-x-5">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-poppins text-lg">
            <span className="text-primary-600 font-extrabold">MEGA</span>MART
          </h1>
        </Link>
        {/* Logo */}

        {/* Search Bar */}
        <div className="w-full max-w-md relative sm:flex hidden ">
          <span className="absolute text-lg top-3 left-4 text-secondary-400 ">
            <Search />
          </span>
          {/* // keep on one line */}

          <input
            type="text"
            className="w-full text-sm border bg-secondary-50 border-primary-600 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder="Search for products"
          />
          <button className="bg-primary-600 font-poppins text-sm text-white px-2 py-3  rounded-r-md hover:bg-primary-500 transition">
            Search
          </button>
        </div>
        {/* Search Bar */}

        {/* Icons */}
        <div className="flex items-center space-x-7 text-center text-secondary-600 text-sm ">
          <Link href="user/account/wishlist" className="hover:text-primary-600 transition cursor-pointer">
            <Heart size={28} strokeWidth={1.5} />
          </Link>
          <Link href="user/cart" className="hover:text-primary-600 transition cursor-pointer relative">
            <ShoppingCart size={28} strokeWidth={1.5} />
            <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 bg-primary-500 rounded-full text-white text-xs">
          6
        </span>
          </Link>

          <Link href="user/account" className="hover:text-primary-600 transition cursor-pointer">
            <User size={28} strokeWidth={1.5} />
          </Link>
        </div>
        {/* Icons */}
      </div>
    </nav>
  );
};

export default AppBar;
