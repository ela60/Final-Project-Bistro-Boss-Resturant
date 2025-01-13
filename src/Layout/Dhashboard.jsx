import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaStar,
  FaCalendarCheck,
  FaUtensils,
  FaShoppingBag,
  FaPhoneAlt,
  FaList,
  FaUsers,
  FaBook,
} from "react-icons/fa";

import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  console.log("admin", isAdmin);

  if (isAdmin === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <h2 className="uppercase font-bold text-center text-2xl">
          Bistro Boss
        </h2>
        <h6 className="text-center text-2xl">Restaurant</h6>
        <ul className="menu p-4 space-y-4 text-lg text-black">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
              <div className="divider"></div>
            </>
          ) : (
            <></>
          )}
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaStar /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaCalendarCheck /> My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart /> My Cart ({cart ? cart.length : 0})
            </NavLink>
          </li>
          <div className="divider"></div>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/menu">
              <FaUtensils /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhoneAlt /> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
