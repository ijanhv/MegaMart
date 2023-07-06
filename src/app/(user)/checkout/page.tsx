'use client';
import AddressCard from "@/components/Account/AddressCard";
import Breadcrums from "@/components/Breadcrums";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";


interface AddressProps {
    address: any;
}

const Address = ({ address } : AddressProps ) => {
    return (
        <div>
            <div className="bg-secondary-50">
                <div className="container py-4 font-poppins shadow-md sm:w-1/2 w-full">
                    <div className="flex justify-between">
                        <div>
                        <h1 className="text-secondary-600 font-semibold my-2 text-xl">Billing Address</h1>
                            <p>{address?.street}</p>
                            <p>{address?.city}</p>
                            <p>{address?.state}</p>
                            <p>{address?.country}</p>
                            <p>{address?.zipcode}</p>
                        </div>
                 
                 
                        {/* // proceed to checkout */}
                        <div className="justify-end mt-4">
                            <button className="bg-primary-600 font-poppins text-sm text-white px-2 py-3  rounded-md hover:bg-primary-500 transition">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    );
    }

const CheckoutPage = () => {
  const { data: session } = useSession();

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axios.get("/api/user", {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    enabled: !!session?.user?.accessToken,
  });

  console.log(data?.data);

  return (
    <section className="text-gray-600 body-font bg-secondary-50">
      <div className="container py-4">
        <Breadcrums currentPath="Checkout" />
      </div>
      <div className="container px-5 py-8 mx-auto">
        {isLoading ? (
            <p>Loading..</p>
        ) : error ? (
            <p>Error</p>
        ) : data?.data.length !== 0 ? (

        
        <Address address={data?.data.Address[0]} />) : (
            <p>no address</p>
        )}
      </div>
    </section>
  );
};

export default CheckoutPage;
