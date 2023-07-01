import React, { useState } from "react";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Trash2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";

interface Props {
  product: any;
  quantity: number;
}

const CartItem = ({ product, quantity }: Props) => {
  const { data: session } = useSession();
  console.log("cart item is here", product);
  const [count, setCount] = useState(1);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    () =>
      axios.delete(`/api/user/cart/${product.id}`, {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["cart"]);
        queryClient.invalidateQueries(["user"]); // Pass an array of query keys

        toast.success("Product removed from cart");
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.error);
      },
    }
  );




  return (
    <>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image
            width={200}
            height={200}
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

            {/* Trach icon */}
            <div className="flex items-center text-lg font-bold">
              <button 
              onClick={() => mutation.mutate()}
              className=" text-primary-600 items-start hover:text-secondary-600">
                <Trash2Icon size={30} />
              </button>
   
      
            </div>

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
        <Toaster />
      </div>
    </>
  );
};

export default CartItem;
