import React from "react";

interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

interface AddressCardProps {
  address: Address;
}

const AddressCard = ({ address }: AddressCardProps) => {
  return (
    <div className=" rounded px-3 py-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-secondary-600 font-poppins font-semibold">
          Address
        </h2>
        <button className="text-sm text-primary-600 font-poppins">Edit</button>
      </div>
      {!address ? <>
        <p className="text-sm text-secondary-600 font-poppins">
            <span className="text-primary-600 text-md font-semibold ">
            Add your address
            </span>
        </p>
      
      </> : <div className="mt-4 space-y-3">
  
          <p className="text-sm text-secondary-600 font-poppins">
            <span className="text-primary-600 text-md font-semibold ">
              Street:{" "}
            </span>
            {address?.street}
          </p>
          <p className="text-sm text-secondary-600 font-poppins">
            <span className="text-primary-600 text-md font-semibold ">
              City:{" "}
            </span>
            {address?.city}
          </p>
          <p className="text-sm text-secondary-600 font-poppins">
            <span className="text-primary-600 text-md font-semibold ">
              State:{" "}
            </span>
            {address?.state}
          </p>
      
          <p className="text-sm text-secondary-600 font-poppins">
            <span className="text-primary-600 text-md font-semibold ">
              Country:{" "}
            </span>
            {address?.country}
          </p>
          <p className="text-sm text-secondary-600 font-poppins">
            <span className="text-primary-600 text-md font-semibold ">
              Zip Code:{" "}
            </span>
            {address?.zipcode}
          </p>

      </div>}
    </div>
  );
};

export default AddressCard;
