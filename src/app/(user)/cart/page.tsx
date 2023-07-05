"use client";
import Breadcrums from "@/components/Breadcrums";
import React from "react";
import Image from "next/image";
import emptyCart1 from "../../../../src/assets/emptycart1.png";
import CartItem from "@/components/CartItem";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

const Cart = () => {
  const products = null;

  const { data: session } = useSession();

  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      axios.get("/api/user/cart", {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    enabled: !!session?.user?.accessToken,
  });

  console.log("here are cartItems", data?.data);

  const totalQuantity = data?.data.map(
    (item: any) => item.quantity
  ).reduce((a: any, b: any) => a + b, 0
  )

  const totalPrice = data?.data.reduce(
    (acc: any, item: any) => acc + item.product.price * item.quantity,
    0
  );
  console.log("total price", totalPrice);

  return (
    <section className="text-gray-600 body-font bg-secondary-50">
      <div className="container py-4">
        <Breadcrums currentPath="My Cart" />
      </div>
      <div className="container px-5 py-8 mx-auto">
        {isLoading ? (
          <p>Loading..</p>
        ) : error ? (
          <p>Error</p>
        ) : data?.data.length === 0 ? (
          <div className="items-center block md:flex">
            <Image alt="empty cart" src={emptyCart1} width={400} height={400} />
            <h1 className="text-2xl font-semibold text-center">
              Your cart is empty!
            </h1>
            <Link
            href="/products"
            className="flex mx-auto mt-5 md:mt-0 text-white bg-primary-600 border-0 py-2 px-8 focus:outline-none hover:bg-primary-500 rounded text-lg">
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 grid-cols-1 space-x-3 space-y-2">
              {data?.data.map((item: any) => (
                <CartItem
                  key={item.id}
                  // productId={item.productId}
                  quantity={item.quantity}
                  product={item.product}
                />
              ))}
            </div>

          {/* Total price and quantity */}
            <div className="flex justify-end items-center gap-6 mt-10">
                <p className="text-secondary-600 text-2xl font-semibold">
                  Subtotal ({totalQuantity} items)
                </p>
                <p className="text-secondary-600 text-2xl font-semibold">
                  ${totalPrice}
                </p>
              </div>
            <button className="flex mx-auto mt-16 text-white bg-primary-600 border-0 py-2 px-8 focus:outline-none hover:bg-primary-500 rounded text-lg">
              Checkout
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
