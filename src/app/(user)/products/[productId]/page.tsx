"use client";
import Breadcrums from "@/components/Breadcrums";
import { Dot, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axios from "axios";

const ProductDetails = () => {
  const pathname = usePathname();
  console.log(pathname);

  const productId = parseInt(pathname.split("/")[2]);
  console.log(productId);

  const { data: session } = useSession();

  const { isLoading, error, data } = useQuery(["product", productId], () =>
    axios.get(`/api/products/${productId}`, {
      headers: {
        Authorization: `${session?.user.accessToken}`,
      },
    })
  );

  console.log(data?.data);

  return (
    <div className="bg-secondary-50 pb-10">
      <div className="container py-4 items-center gap-3 ">
        <Breadcrums currentPath="Products /  ProductID" />
      </div>
      {/* Product Details */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Product Image */}
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Something went wrong</div>
        ) : (
          <>
            <div>
              <Image
                alt="product"
                src="https://m.media-amazon.com/images/I/71LT4PvFFXL._AC_UY1100_.jpg"
                width={500}
                height={500}
                className="w-full"
              />
              <div className="grid grid-cols-5 gap-5 mt-4">
                <Image
                  alt="product"
                  src="https://m.media-amazon.com/images/I/71CNQkp9LwL._AC_SX466_.jpg"
                  width={100}
                  height={100}
                  className="w-full cursor-pointer border border-3 border-primary-600"
                />
                <Image
                  alt="product"
                  src="https://m.media-amazon.com/images/I/71CNQkp9LwL._AC_SX466_.jpg"
                  width={100}
                  height={100}
                  className="w-full cursor-pointer border "
                />
                <Image
                  alt="product"
                  src="https://m.media-amazon.com/images/I/71CNQkp9LwL._AC_SX466_.jpg"
                  width={100}
                  height={100}
                  className="w-full cursor-pointer border "
                />
                <Image
                  alt="product"
                  src="https://m.media-amazon.com/images/I/71CNQkp9LwL._AC_SX466_.jpg"
                  width={100}
                  height={100}
                  className="w-full cursor-pointer border "
                />
                <Image
                  alt="product"
                  src="https://m.media-amazon.com/images/I/71CNQkp9LwL._AC_SX466_.jpg"
                  width={100}
                  height={100}
                  className="w-full cursor-pointer border "
                />
              </div>
            </div>
            {/* Product Image end */}

            {/* Description */}
            <div>
              <h2 className="text-3xl text-secondary-700 uppercase mb-2">
                {data?.data.name}
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex gap-1 text-md text-yellow-400">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <div className="text-sm text-secondary-600 ml-3">
                  (134 Reviews)
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-secondary-600 font-semibold space-x-2">
                  <span>Availability: </span>{" "}
                  <span className="text-green-600 ml-2">In Stock</span>
                </p>
                <p className="text-secondary-600 font-semibold space-x-2">
                  <span>Brand: </span>{" "}
                  <span className="text-secondary-500 ml-2">
                    {data?.data.brand}
                  </span>
                </p>
                <p className="text-secondary-600 font-semibold space-x-2">
                  <span>Category: </span>{" "}
                  <span className="text-secondary-500 ml-2">
                    {data?.data.category}
                  </span>
                </p>
                <p className="text-secondary-600 font-semibold space-x-2">
                  <span>Size: </span>{" "}
                  <span className="text-secondary-500 ml-2">In Stock</span>
                </p>
              </div>
              <div className="flex items-baseline mb-1 space-x-2 mt-3">
                <p className="text-2xl font-semibold text-primary-600">
                  ${data?.data.price}
                </p>
                <p className="text-lg text-secondary-500 line-through">$55</p>
              </div>

              <p className="text-secondary-500 mt-4">
                {data?.data.description}
              </p>

              <div className="mt-4 gap-3 flex">
                <button className="w-1/2 flex items-center justify-center gap-3 text-center border border-3 uppercase border-white py-3 text-sm bg-primary-600 text-white font-semibold rounded-md hover:bg-transparent hover:border-primary-600  hover:text-primary-600">
                  <ShoppingBag /> <span>Add to Cart </span>
                </button>
                <button className="w-1/2 flex items-center justify-center gap-3 text-center border border-3 uppercase border-secondary-600 py-3 text-sm text-secondary-600 font-semibold rounded-md  hover:border-primary-600  hover:text-primary-600">
                  <Heart /> <span>Wishlist </span>
                </button>
              </div>

              <div className="mt-4">
                <h3 className="text-secondary-700 text-md font-semibold">
                  Best Offers
                </h3>
                <ul>
                  <li>
                    <h4 className="mt-5 flex items-center text-secondary-600 text-sm font-semibold">
                      15% Instant Discount on AU Credit Cards
                    </h4>
                    <p className="my-2 text-secondary-600 text-xs">
                      Min Spend Rs 2,000, Max Discount Rs 1,000.
                    </p>
                    <p className="text-primary-600 text-xs cursor-pointer">
                      Terms and Conditions
                    </p>
                  </li>
                  <li>
                    <h4 className="mt-5 flex items-center text-secondary-600 text-sm font-semibold">
                      10% Instant Discount on Punjab National Bank Credit Cards
                    </h4>
                    <p className="my-2 text-secondary-600 text-xs">
                      Min Spend Rs 2,000, Max Discount Rs 1,000.
                    </p>
                    <p className="text-primary-600 text-xs cursor-pointer">
                      Terms and Conditions
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Description end*/}
      </div>
      {/* Product Details */}
    </div>
  );
};

export default ProductDetails;
