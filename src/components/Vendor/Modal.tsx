import React from "react";
import { TfiClose } from "react-icons/tfi";
import Button from "../Button";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

const Modal = ({ setShowModal }: ModalProps) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-5xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
              <div className="p-4 rounded-lg ">
                <h4 className="text-3xl text-secondary-600 font-medium capitalize mb-4">
                  Edit #3225252
                </h4>
                <div className="space-y-7">
                  <div className="grid grid-cols-3 gap-8">
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
                
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
              onClick={() => setShowModal(false)}
              >
              <Button
                text="Save Changes"
                
              />
              </button>

            
          
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
