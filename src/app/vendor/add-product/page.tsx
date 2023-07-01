"use client";
import Button from "@/components/Button";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let accessToken: string | null = null;
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("currentVendor");
    accessToken = storedToken ? JSON.parse(storedToken) : null;
  }
  console.log(accessToken);

  const mutation = useMutation(
    (productData: any) =>
      axios.post("/api/vendor/products", productData, {
        headers: {
          Authorization: `${accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        toast.success("Product added successfully");
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.error);
      },
    }
  );

  const onSubmit = (data: any) => {
    const price = parseFloat(data.price);
    const isFeatured = data.isFeatured === "true";
    const inventory = parseInt(data.inventory);

    const productData = {
      name: data.name,
      description: data.description,
      price,
      isFeatured,
      imageUrl: data.imageUrl,
      brand: data.brand,
      color: data.color,
      size: data.size,
      category: data.category,
      inventory,
      vendorId: 2,
    };

    mutation.mutate(productData);
  };

  return (
    <div className="bg-secondary-50 min-h-screen">
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <h4 className="text-2xl text-secondary-600 font-medium capitalize mb-4">
            Add a new Product
          </h4>
          <div className="space-y-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Name <span className="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product name"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Description <span className="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  id="description"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product description"
                  {...register("description", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Price <span className="text-primary-600">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product price"
                  {...register("price", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="isFeatured"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  isFeatured <span className="text-primary-600">*</span>
                </label>
                <select
                  id="isFeatured"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  {...register("isFeatured", { required: true })}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="imageUrl"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter image URL"
                  {...register("imageUrl")}
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product brand"
                  {...register("brand")}
                />
              </div>
              <div>
                <label
                  htmlFor="color"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Color
                </label>
                <input
                  type="text"
                  id="color"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product color"
                  {...register("color")}
                />
              </div>
              <div>
                <label
                  htmlFor="inventory"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Inventory
                </label>
                <input
                  type="number"
                  id="inventory"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product inventory"
                  {...register("inventory")}
                />
              </div>
              <div>
                <label
                  htmlFor="size"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Size
                </label>
                <input
                  type="text"
                  id="size"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product size"
                  {...register("size")}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product category"
                  {...register("category")}
                >
                  <option value="1">Men's Clothing</option>
                  <option value="2">Women's Clothing</option>
                  <option value="3">Kids</option>
                  <option value="4">Shoes</option>
                  <option value="5">Accessories</option>
                </select>
              </div>
            </form>
            <div className="sm:w-1/2 w-full p-1">
              <button onClick={handleSubmit(onSubmit)}>
                <Button text="Add Product" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
