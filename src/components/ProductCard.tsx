"use client";

import { Heart, Search, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Toaster, toast } from "react-hot-toast";

const ProductCard = ({ product }: any) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const id = parseInt(product?.id);

  const mutationWishlist = useMutation(
    () =>
      axios.post(`/api/user/wishlist/${id}`, null, {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        // Manually update the cart count
        queryClient.setQueryData(["user"], (previousData: any) => {
          // Update the cartItems count
          const updatedData = {
            ...previousData,
            data: {
              ...previousData.data,
              Wishlist: [
                // Add the new item to the existing cartItems
                ...previousData.data.Wishlist,
                // You may need to adjust the format of the new item
                { id: product.id, name: product.name, price: product.price },
              ],
            },
          };
          return updatedData;
        });

        toast.success("Item Added to wishlist");
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.error);
      },
    }
  );

  const mutationCart = useMutation(
    () =>
      axios.post(`/api/user/cart/${id}`, null, {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["cart"]);
        queryClient.invalidateQueries(["user"]); 

        toast.success("Item Added to cart");
      },
      onError: (error: any) => {

        toast.error(error?.response?.data.error || "Something went wrong");
      },
    }
  );

  return (
    <div className="shadow-md rounded overflow-hidden">
      <div className="relative ">
        <Image
          src={product?.imageUrl}
          alt="product"
          className="w-full h-[250px] object-cover"
          width={700}
          height={500}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition cursor-pointer">
          <Link
            href={`/products/${product?.id}`}
            className="text-white text-lg w-9 h-8 bg-primary-500 flex items-center rounded-full justify-center hover:bg-transparent transition"
          >
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <button
            onClick={() => mutationWishlist.mutate()}
            className="text-white text-lg w-9 h-8 bg-primary-500 flex items-center rounded-full justify-center hover:bg-transparent  transition"
          >
            <Heart size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* content */}

      <div className="pt-1 pb-1 px-4 my-2">
        <h4 className="font-poppins text-sm mb-2 text-semibold  text-secondary-700 hover:text-primary-600">
          {product?.name}
        </h4>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl font-semibold text-primary-600">
            ${product?.price}
          </p>
          <p className="text-sm text-secondary-500 line-through">$55</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-xs text-yellow-400">
            <span className="flex">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </span>
          </div>
          <div className="text-xs  text-secondary-500 ml-3">(150)</div>
        </div>
      </div>
      <button
        onClick={() => mutationCart.mutate()}
        className="w-full flex items-center justify-center gap-3 text-center border border-3 uppercase border-white py-3 text-sm bg-primary-600 text-white font-semibold rounded-b hover:bg-transparent hover:border-primary-600  hover:text-primary-600"
      >
        <ShoppingBag /> <span>Add to Cart </span>
      </button>
      <Toaster
        toastOptions={{
          className: "",
          duration: 2000,
        }}
      />
    </div>
  );
};

export default ProductCard;
