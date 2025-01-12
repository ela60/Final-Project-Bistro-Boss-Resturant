import React, { useContext, useState } from "react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext); // Get user and logOut from context
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <nav className="bg-gray-800 text-gray-100">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 fixed z-50 bg-opacity-80 bg-gray-800">
          {/* Logo Section */}
          <div className="text-xl font-bold">
            <Link to="/" className="hover:text-yellow-500">
              BistroBoss
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-yellow-500">
                Our Menu
              </Link>
            </li>
            <li>
              <Link to="/order/salad" className="hover:text-yellow-500">
                Order
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-yellow-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/dashboard/cart" className="relative hover:text-yellow-500">
                <ShoppingCartIcon className="h-6 w-6 inline-block" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs rounded-full px-1">{cart.length}</span>
              </Link>
            </li>
            <li>
              {user ? (
                <div className="flex items-center space-x-2">
                  {/* User Profile Image */}
                  <div className="relative group">
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      className="w-8 h-8 rounded-full"
                    />
                    {/* User Name Tooltip */}
                    <span className="absolute hidden group-hover:block bg-gray-700 text-white text-xs p-2 rounded-md mt-1 left-1/2 transform -translate-x-1/2">
                      {user.displayName || "User"}
                    </span>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-yellow-500 text-gray-900 py-1 px-4 rounded hover:bg-yellow-600"
                >
                  Sign In
                </Link>
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
              <Link to="/" className="block hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="block hover:text-yellow-500">
                Our Menu
              </Link>
            </li>
            <li>
              <Link to="/order/salad" className="block hover:text-yellow-500">
                Order
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="block hover:text-yellow-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block hover:text-yellow-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block hover:text-yellow-500">
                <ShoppingCartIcon className="h-6 w-6 inline-block" /> Cart
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="w-full bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block bg-yellow-500 text-gray-900 py-1 px-4 rounded hover:bg-yellow-600"
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
