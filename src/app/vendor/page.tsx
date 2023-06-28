import ProductTable from "@/components/Vendor/ProductTable";
import React from "react";
import { PiShoppingCart } from "react-icons/pi";

const Card = () => {
  return (
    <div className="flex items-center justify-center h-30 bg-secondary-50 rounded-md border shadow-md border-secondary-200 ">
      <div className=" p-4 text-5xl items-center font-semibold text-secondary-700 font-poppins uppercase justify-between ">
        <PiShoppingCart />
      </div>
      <div className="flex-col p-5 items-center font-semibold text-secondary-700 font-poppins uppercase justify-between ">
        <h1 className="text-primary-700 text-md">Products</h1>
        <p className="text-4xl text-primary-700 text-right">10</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-secondary-100 min-h-screen">
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 rounded-lg mt-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="gap-4 mb-4">
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
