import Button from "@/components/Button";
import React from "react";

const AddProduct = () => {
  return (
    <div className="bg-secondary-50 min-h-screen">
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 rounded-lg mt-14">
          <h4 className="text-2xl text-secondary-600 font-medium capitalize mb-4">
            Add a new Product
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Name <span className="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product name"
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
                  name="description"
                  id="description"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product description"
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
                  name="price"
                  id="price"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product price"
                />
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
                  name="imageUrl"
                  id="imageUrl"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter image URL"
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
                  name="brand"
                  id="brand"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product brand"
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
                  name="color"
                  id="color"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product color"
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
                  name="size"
                  id="size"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product size"
                />
              </div>
              <div>
                <label
                  htmlFor="categories"
                  className="text-sm text-secondary-600 font-poppins"
                >
                  Categories
                </label>
                <select
                  
                  name="categories"
                  id="categories"
                  className="w-full border border-secondary-400 text-secondary-600 bg-secondary-50 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-primary-600"
                  placeholder="Enter product categories"
                >
                    <option value="1">Men's Clothing</option>
                    <option value="2">Women's Clothing</option>
                    <option value="2">Kids</option>
                    <option value="3">Shoes</option>
                    <option value="4">Accessories</option>
                </select>
              </div>
            
            </div>
            <div className="sm:w-1/2 w-full p-1">
                <Button 
                
                text="Add Product" />
              </div>
           
          </div>
         
        </div>
       
      </div>
    </div>
  );
};

export default AddProduct;
