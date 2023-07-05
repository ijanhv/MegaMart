"use client";
import AddressCard from "@/components/Account/AddressCard";
import Sidebar from "@/components/Account/Sidebar";
import Breadcrums from "@/components/Breadcrums";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";

const Address = () => {
  const { data: session, status } = useSession();

  const { isLoading, error, data } = useQuery({
    queryKey: ["address"],
    queryFn: () =>
      axios.get(`/api/user/address/${session?.user.id}`, {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }),
    enabled: !!session?.user?.accessToken,
  });

  return (
    <div className="bg-secondary-50">
      <div className="container py-4">
        <Breadcrums currentPath="My Account  / Wishlist" />
      </div>
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* Sidebar */}

        <div className="col-span-12 md:col-span-3">
          <Sidebar />
          {/* Links */}
        </div>
        {/* Sidebar */}

        {/* Profiile info */}
        <div className="col-span-12 md:col-span-9 shadow rounded px-6 pt-5 pb-7">
          {session?.user?.accessToken && !isLoading && !error && data?.data && (
            <AddressCard address={data?.data} />
          )}
          {!session?.user?.accessToken && (
            <div>
              <p className="text-sm text-secondary-600 font-poppins">
                Login to view your address {" "}
                <Link href = "/auth/signin" className="bg-primary-600 p-2 rounded-md text-white text-md font-semibold ">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
        {/* Profiile info */}
      </div>
    </div>
  );
};

export default Address;
