"use client";
import React, { useState } from "react";
import Breadcrums from "@/components/Breadcrums";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import Drawer from "@/components/Drawer";
import { Grid, ListIcon, Table } from "lucide-react";
import { List } from "immutable";
import ProductCard from "@/components/ProductCard";

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Tops",
  "Bottoms",
  "Shoes",
];

const Products = () => {
  return (
    <div className="bg-secondary-50">
      <Breadcrums currentPath="Products" />
      <div className="container md:hidden">
        <Drawer />
      </div>

      <div className="container grid grid-cols-4 gap-6 pb-16 items-start">
        {/* Sidebar start */}

        <div className="hidden md:block col-span-1 px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            <div className="">
              <h3 className="text-lg text-secondary-600 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="category1"
                      className="mr-2 text-primary-600 bg-secondary-50"
                    />
                    <label
                      htmlFor="category1"
                      className="text-sm text-secondary-600 font-poppins"
                    >
                      {item}
                    </label>
                    <div className="ml-auto text-secondary-600 text-sm">
                      (15)
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg text-secondary-600 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div className="space-y-2">
                {categories.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="category1"
                      className="mr-2 text-primary-600"
                    />
                    <label
                      htmlFor="category1"
                      className="text-sm text-secondary-600 font-poppins"
                    >
                      {item}
                    </label>
                    <div className="ml-auto text-secondary-600 text-sm">
                      (15)
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg text-secondary-600 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center gap-5">
                <input
                  type="text"
                  className="w-1/2 text-sm border bg-secondary-50 border-secondary-600 p-2 rounded-md focus:outline-none"
                  placeholder="Min"
                />
                <input
                  type="text"
                  className="w-1/2 text-sm border bg-secondary-50 border-secondary-600 p-2 rounded-md focus:outline-none"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg text-secondary-600 mb-3 uppercase font-medium">
                Size
              </h3>
              <div className="mt-4 flex items-center gap-5">
                <input
                  type="range"
                  className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                  id="customRange1"
                />
              </div>
            </div>

            <div className="pt-4">
              <button className="text-md w-full p-2 border border-transparent bg-primary-600 hover:bg-transparent hover:text-primary-600 hover:border-primary-600 mb-3 text-white rounded-md uppercase font-medium">
                Apply
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar end */}

        {/* Products */}
        <div className="md:col-span-3 col-span-4">
          {/* Sorting */}
          <div className="flex items-center mb-4 justify-between">
            <select className="w-44 text-sm text-secondary-500 px-4 bg-secondary-50 border py-3 border-secondary-400 items-center rounded focus:outline-none cursor-pointer">
              <option value="All">All</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <div className="border border-primary-600 w-10 h-9 flex items-center justify-center text-white bg-primary-600 rounded-md cursor-pointer">
                <Grid size={20} strokeWidth={1.5} />
              </div>
              <div className="border border-primary-600 w-10 h-9 flex items-center justify-center text-white bg-primary-600 rounded-md cursor-pointer">
                <ListIcon />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* Sorting */}
        </div>
        {/* Products */}

        {/* Product */}
      </div>
    </div>
  );
};

export default Products;
