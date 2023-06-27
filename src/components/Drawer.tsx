import React from "react";

const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Tops",
    "Bottoms",
    "Shoes",
  ];

  
const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="text-primary-600 drawer-button">
          Filter Products
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-secondary-50 text-base-content">
          {/* Sidebar content here */}
          
        <div className=" container col-span-1 px-4 pb-6  overflow-hidden">
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
            </div>
          </div>
        </div>

        </ul>
      </div>
    </div>
  );
};

export default Drawer;
