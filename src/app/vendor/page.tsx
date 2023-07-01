'use client'
import ProductTable from "@/components/Vendor/ProductTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { PiShoppingCart } from "react-icons/pi";

interface CardProps {
  text: string;
  count: number;
}

const Card = ({ text, count } : CardProps) => {


  return (
    <div className="flex items-center justify-center h-30 bg-secondary-50 rounded-md border shadow-md border-secondary-200 ">
      <div className=" p-4 text-5xl items-center font-semibold text-secondary-700 font-poppins uppercase justify-between ">
        <PiShoppingCart />
      </div>
      <div className="flex-col p-5 items-center font-semibold text-secondary-700 font-poppins uppercase justify-between ">
        <h1 className="text-primary-700 text-md">{text}</h1>
        <p className="text-4xl text-primary-700 text-right">{count}</p>
      </div>
    </div>
  );
};

const HomePage = () => {

  let accessToken: string | null = null;
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("currentVendor");
    accessToken = storedToken ? JSON.parse(storedToken) : null;
  }
  console.log(accessToken);

  const { isLoading, error, data } = useQuery({
    queryKey: ["vendor"],
    queryFn: () =>
      axios.get("/api/vendor", {
        headers: {
          Authorization: `${accessToken}`,
        },
      }),
    enabled: !!accessToken,
  });

  console.log(data?.data);


  return (
    <div className="bg-secondary-100 min-h-screen">
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 rounded-lg mt-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Card text="PRODUCTS" count={data?.data.products.length}/>
            <Card text="PRODUCTS" count={data?.data.products.length}/>
            <Card text="PRODUCTS" count={data?.data.products.length}/>
            <Card text="PRODUCTS" count={data?.data.products.length}/>
          </div>

          <div className="gap-4 mb-4">

            <ProductTable products={data?.data.products}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
