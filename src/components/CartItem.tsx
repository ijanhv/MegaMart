import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { MinusIcon, PlusIcon } from "lucide-react";

interface Props {
  product: any;
  quantity: number;
}

const CartItem = ({ product, quantity }: Props) => {
  console.log("cart item is here", product);
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={product.imageUrl}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {product.name}
            </h2>
            <h3 className="text-primary-600 font-semibold mb-3">
              {product.brand}
            </h3>
            <p className="mb-4">{product.description}</p>
            <div className="flex justify-between">
            <span className="inline-flex">
              <div>
                <p className=" text-secondary-500">
                  Price: ${product.price * quantity}
                </p>
                <p className=" text-secondary-500">Qty: {quantity}</p>
              </div>
            </span>
            {/* <div className="flex items-center gap-4 font-bold">
              <button className="bg-primary-600 text-white rounded-full p-0.5 hover:bg-primary-500"
              onClick={() => setCount((prev) => prev + 1)}
              >
                <PlusIcon />
              </button>
              {count}
              <button className="bg-primary-600 text-white rounded-full p-0.5 hover:bg-primary-500"
              onClick={() => setCount((prev) => prev - 1)}
              >
                <MinusIcon />
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
