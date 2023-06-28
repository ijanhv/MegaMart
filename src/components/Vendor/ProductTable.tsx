'use client';
import React, { useState } from "react";
import { Search } from "lucide-react";
import { TbClockHour1 } from "react-icons/tb";
import { RiArrowDropDownLine, RiDeleteBin5Fill } from "react-icons/ri";
import { LuEdit } from "react-icons/lu";
import Modal from "./Modal";

const tableData = [
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
];

const ProductTable = () => {

    const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <div className="md:flex space-y-4 block items-center justify-between p-4">
        <div className="">
          <button
            className="inline-flex items-center text-md text-gray-500 bg-secondary-50 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-none rounded-lg text-sm px-3 py-1.5"
            type="button"
          >
            <span className="mr-1 text-lg">
              <TbClockHour1 />
            </span>
            Last 30 days
            <span className="mr-1 text-3xl">
              <RiArrowDropDownLine />
            </span>
          </button>
          {/* <!-- Dropdown menu --> */}
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={20} />
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-70 bg-gray-50 focus:border-none focus:ring-0 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-secondary-700 bg-primary-600">
        <thead className="text-xs text-secondary-50 uppercase ">
          <tr>
           
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
                Delete
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto h-[400px]">
          {tableData.map((item, i) => (
            <tr key={i} className="bg-secondary-50 border-b hover:bg-gray-50 ">
              
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {item.name}
              </th>
              <td className="px-6 py-4">{item.color}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.price}</td>
              <td 
              
              className="px-6 py-4 ">
                <button className="text-primary-600 hover:text-secondary-600 text-xl cursor-pointer" onClick={() => setShowModal(true)}>
                <LuEdit />
                </button>
              </td>
                <td className="px-6 py-4 text-primary-600 hover:text-secondary-600 text-xl cursor-pointer">
                    <RiDeleteBin5Fill />
                 </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal &&  <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default ProductTable;
