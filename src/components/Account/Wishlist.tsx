import Image from "next/image";
import React from "react";
import Button from "../Button";
import { Trash } from "lucide-react";

const WishlistCard = () => {
return (
    <>
    <div className="flex items-center justify-between gap-6 my-3 p-4 border border-gray-200 rounded">
        <div className="w-28 flex-shrink-0">
          <Image
            src="https://m.media-amazon.com/images/I/71CNQkp9LwL._AC_SX466_.jpg"
            width={100}
            height={100}
            alt="product"
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-secondary-700 text-xl font-medium uppercase">
            FableStreet
          </h2>
          <p className="text-secondary-600 text-sm">
            Availability: <span className="text-green-500">In Stock</span>
          </p>
        </div>

        <div className="text-primary-600 text-lg font-semibold">$45</div>
        <div className="hidden md:block">
          <Button text="Add to Cart" />
        </div>

        <div className="text-secondary-600 text-sm">
          <Trash />
        </div>
      </div>
      <div className="md:hidden">
        <Button text="Add to Cart" />
      </div>
      </>
)
}
const Wishlist = () => {
  return (
    <>
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
    </>
  );
};

export default Wishlist;
