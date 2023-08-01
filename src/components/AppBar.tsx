"use client";
import Link from "next/link";
import React from "react";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AppBar = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axios.get(`/api/user/${session?.user.id}`, {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    enabled: !!session?.user?.accessToken,
    
  });

  console.log("*****USER*****", data?.data);

  const cartItems = data?.data.cartItems.map(
    (item: any) => item.quantity
  ).reduce((a: any, b: any) => a + b, 0
  )


  const wishlistItems = data?.data.Wishlist?.length;

  return (
    <nav className="py-4 shadow-sm bg-secondary-50 ">
      <div className="container flex items-center justify-between space-x-5">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-poppins text-lg text-secondary-600">
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
          {data?.data && <><Link
            href="/account/wishlist"
            className="hover:text-primary-600 transition cursor-pointer relative"
          >
            <Heart size={28} strokeWidth={1.5} />
            <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 bg-primary-500 rounded-full text-white text-xs">
              {wishlistItems}
            </span>
          </Link>
          <Link
            href="/cart"
            className="hover:text-primary-600 transition cursor-pointer relative"
          >
            <ShoppingCart size={28} strokeWidth={1.5} />
            <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 bg-primary-500 rounded-full text-white text-xs">
              {cartItems}
            </span>
          </Link>
          </>}

          <div className="flex items-center gap-2">
            <Link
              href="/account"
              className="hover:text-primary-600 transition cursor-pointer"
            >
              <User size={28} strokeWidth={1.5} />
            </Link>

            {data?.data ? (
              <p className="text-sm font-poppins">{data.data?.name}</p>
            ) : (
              <Link
                href="/api/auth/signin"
              className="text-sm font-poppins">Sign In</Link>
            )}
          </div>
        </div>
        {/* Icons */}
      </div>
    </nav>
  );
};

export default AppBar;
