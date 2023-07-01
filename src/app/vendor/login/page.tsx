"use client";
import VendorLogin from "@/components/Vendor/LoginForm";
import React, { useState } from "react";

const VendorAuth = () => {
  const [auth, setAuth] = useState<string>("login");

  return (
    <div className="bg-secondary-50 min-h-screen">
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 rounded-lg mt-14">
          <VendorLogin setAuth={setAuth} />
        </div>
      </div>
    </div>
  );
};

export default VendorAuth;
