import React from "react";
import { useState } from "react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const Navbar = ({ isLoggedIn, userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
       <nav className="bg-gray-800  text-gray-100 ">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 fixed z-50 bg-opacity-80 bg-gray-800  ">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-yellow-500">BistroBoss</a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-yellow-500">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-yellow-500">Our Menu</Link>
          </li>
          <li>
            <Link to="/order/salad" className="hover:text-yellow-500">Order</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-yellow-500">Login</Link>
          </li>
          {/* <li>
            <a href="/contact" className="hover:text-yellow-500">Contact Us</a>
          </li> */}
          <li>
            <a href="/dashboard" className="hover:text-yellow-500">Dashboard</a>
          </li>
          <li>
            <a href="/shop" className="hover:text-yellow-500">Shop</a>
          </li>
          <li>
            <a href="/cart" className="relative hover:text-yellow-500">
              <ShoppingCartIcon className="h-6 w-6 inline-block" />
              {/* Replace '2' with a dynamic count */}
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs rounded-full px-1">2</span>
            </a>
          </li>
          <li>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <UserIcon className="h-6 w-6" />
                <span>{userName}</span>
              </div>
            ) : (
              <a
                href="/signin"
                className="bg-yellow-500 text-gray-900 py-1 px-4 rounded hover:bg-yellow-600"
              >
                Sign In
              </a>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 border-t border-gray-700 space-y-2 px-4 py-2">
          <li>
            <a href="/" className="block hover:text-yellow-500">Home</a>
          </li>
          <li>
            <a href="/contact" className="block hover:text-yellow-500">Contact Us</a>
          </li>
          <li>
            <a href="/dashboard" className="block hover:text-yellow-500">Dashboard</a>
          </li>
          <li>
            <a href="/shop" className="block hover:text-yellow-500">Shop</a>
          </li>
          <li>
            <a href="/cart" className="block hover:text-yellow-500">
              <ShoppingCartIcon className="h-6 w-6 inline-block" /> Cart
            </a>
          </li>
          <li>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <UserIcon className="h-6 w-6" />
                <span>{userName}</span>
              </div>
            ) : (
              <a
                href="/signin"
                className="block bg-yellow-500 text-gray-900 py-1 px-4 rounded hover:bg-yellow-600"
              >
                Sign In
              </a>
            )}
          </li>
        </ul>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
