import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden sm:ml-auto sm:flex sm:space-x-8 text-foreground">
      <Link
        href="#"
        className="text-background inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
      >
        Home
      </Link>
      <Link
        href="#about"
        className="text-slate-300 inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
      >
        About Us
      </Link>
      <Link
        href="#"
        className="text-slate-300 inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
      >
        Services
      </Link>
      <Link
        href="#"
        className="text-slate-300 inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
