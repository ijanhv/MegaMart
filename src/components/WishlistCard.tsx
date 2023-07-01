import { Trash } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const WishlistCard = ({ product }: any) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const id = parseInt(product?.id);

  const mutation = useMutation(
    () =>
      axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["wishlist"]);
        queryClient.invalidateQueries(["user"]); // Pass an array of query keys
        toast.success("Product removed from wishlist");
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.error);
      },
    }
  );

  const mutationCart = useMutation(
    () =>
      axios.post(`/api/user/cart/${product.productId}`, null, {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
  

        queryClient.refetchQueries(["user"]);
        queryClient.invalidateQueries(["user"]); // Pass an array of query keys


        toast.success("Item Added to cart");
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.error);
      },
    }
  );

  console.log(product);
  return (
    <>
      <div className="flex items-center justify-between gap-6 my-2 p-2 border border-gray-200 rounded">
        <div className="w-36 flex-shrink-0">
          <Image
            src={product.product.imageUrl}
            width={100}
            height={100}
            alt="product"
            className="w-full h-[150px] object-cover object-top"
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-secondary-700 text-xl font-medium uppercase">
            {product.product.name}
          </h2>
          <p className="text-secondary-600 text-sm">
            Availability: <span className="text-green-500">In Stock</span>
          </p>
        </div>

        <div className="text-primary-600 text-lg font-semibold">
          ${product.product.price}
        </div>
        <div className="hidden md:block">
        <button
          onClick={() => mutationCart.mutate()}
          className="bg-primary-600 w-full uppercase tracking-wide font-poppins text-sm text-white px-2 py-3 border-primary-600 border-3 shadow-md rounded-md hover:bg-transparent hover:text-primary-600 hover:border-primary-600 transition"
        >
          Add to Cart
        </button>
        </div>

        <div className="text-secondary-600 text-sm">
          <button 
          onClick={() => mutation.mutate()}>
            <Trash />
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => mutationCart.mutate()}
          className="bg-primary-600 w-full uppercase tracking-wide font-poppins text-sm text-white px-2 py-3 border-primary-600 border-3 shadow-md rounded-md hover:bg-transparent hover:text-primary-600 hover:border-primary-600 transition"
        >
          Add to Cart
        </button>
      </div>
      <Toaster />
    </>
  );
};

export default WishlistCard;
