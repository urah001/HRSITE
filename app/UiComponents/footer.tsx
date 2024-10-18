import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HR Solutions</h3>
            <p className="text-slate-300">
              Empowering your workforce with innovative HR solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-blue-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-slate-300">
              123 HR Street, Business City, 12345
            </p>
            <p className="text-slate-300">Phone: (123) 456-7890</p>
            <p className="text-slate-300">Email: info@hrsolutions.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-300">
            &copy; 2024 HR Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
