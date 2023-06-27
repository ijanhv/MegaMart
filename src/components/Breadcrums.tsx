"use client";

import { Home } from "lucide-react";
import React from "react";

interface BreadcrumsProps {
    currentPath: string;
}

const Breadcrums = ({ currentPath } : BreadcrumsProps) => {
  return (
    <div className="container py-4 flex items-center gap-1">
      <Home className="text-secondary-600" />
      <span className="text-sm text-secondary-600 font-poppins">Home</span>
      <span className="text-sm text-primary-600 font-poppins">/</span>
      <span className="text-sm text-primary-600 font-poppins cursor-pointer">
        {currentPath}
      </span>
    </div>
  );
};

export default Breadcrums;
