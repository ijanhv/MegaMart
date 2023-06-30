'use client'
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import WishlistCard from "../WishlistCard";


const Wishlist = () => {
  const { data: session } = useSession();

  const { isLoading, error, data } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      axios.get("/api/user/wishlist", {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    enabled: !!session?.user?.accessToken,


  });

  console.log(data?.data);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
        {
          data?.data.map((product: any) => (
            <WishlistCard key={product.id} product={product}/>
          ))

        }
          
        </>
      )}
    </>
  );
};

export default Wishlist;
