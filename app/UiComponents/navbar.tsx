"use client";
import Link from "next/link";
import React from "react";

// const Navbar = () => {
//   return (
// <div className="hidden sm:ml-auto sm:flex sm:space-x-8 text-foreground">
//   <Link
//     href="#"
//     className="text-background inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
//   >
//     Home
//   </Link>
//   <Link
//     href="#about"
//     className="text-slate-300 inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
//   >
//     About Us
//   </Link>
//   <Link
//     href="#"
//     className="text-slate-300 inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
//   >
//     Services
//   </Link>
// </div>
import { useState } from "react";
import { XIcon, MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">HR Solutions</span>
          </div>

          {/* Full Nav Links - Hidden in mobile mode */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="#" className="text-white px-3 py-2 font-medium">
              Home
            </Link>
            <Link href="#" className="text-slate-300 px-3 py-2 font-medium">
              About
            </Link>
            <Link href="#" className="text-slate-300 px-3 py-2 font-medium">
              Services
            </Link>
            <Link href="#" className="text-slate-300 px-3 py-2 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links (shown when menu button is clicked) */}
        {isOpen && (
          <div className="sm:hidden mt-4 space-y-2">
            <Link href="#" className="block text-white px-3 py-2 font-medium">
              Home
            </Link>
            <Link
              href="#"
              className="block text-slate-300 px-3 py-2 font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-slate-300 px-3 py-2 font-medium"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-slate-300 px-3 py-2 font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
