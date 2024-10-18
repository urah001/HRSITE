import Link from "next/link";
import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">HR page</span>
          </div>
          {/* Push navbar to the right */}
          <div className="ml-auto">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
