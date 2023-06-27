import React from "react";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBag, ShoppingBagIcon, Star } from "lucide-react";
import ProductCard from "./ProductCard";


const NewArrivals = () => {
  return (
    <div className="container py-10">
      <Header text="New Arrivals" />

      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-5">
        {/* Product Card */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewArrivals;
