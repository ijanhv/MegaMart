import Wishlist from "@/components/Account/Wishlist";
import Breadcrums from "@/components/Breadcrums";
import { Heart, LogOutIcon, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Sidebar from "@/components/Account/Sidebar";

const WishlistPage = () => {
  return (
    <div className="bg-secondary-50">
      <div className="container py-4">
        <Breadcrums currentPath="My Account  / Wishlist" />
      </div>
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* Sidebar */}
        
        <div className="col-span-12 md:col-span-3">
          <Sidebar />
          {/* Links */}</div>
        {/* Sidebar */}

        {/* Profiile info */}
        <div className="col-span-12 md:col-span-9 shadow rounded px-6 pt-5 pb-7">
          <Wishlist />
        </div>
        {/* Profiile info */}
      </div>
    </div>
  );
};

export default WishlistPage;
