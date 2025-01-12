import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingCart, FaStar, FaCalendarCheck, FaUtensils, FaShoppingBag, FaPhoneAlt } from 'react-icons/fa'; // ✅ Added FaStar & FaCalendarCheck

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* Dashboard Sidebar */}
            <div className="w-64 min-h-screen bg-orange-400 p-4">
                <ul className="menu p-4 space-y-4 text-lg">
                    <h2 className='uppercase'>Bistro boss</h2>
                    <h6>Restaurant</h6>
                    {/* User Home */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/userHome' className="flex items-center text-white">
                            <FaHome className="mr-2" /> User Home
                        </NavLink>
                    </li>

                    {/* Reservation */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/userHome' className="flex items-center text-white">
                            <FaCalendar className="mr-2" /> Reservation
                        </NavLink>
                    </li>

                    {/* Add a Review */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/review' className="flex items-center text-white">
                            <FaStar className="mr-2" /> Add a Review
                        </NavLink>
                    </li>

                    {/* My Bookings */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/bookings' className="flex items-center text-white">
                            <FaCalendarCheck className="mr-2" /> My Bookings
                        </NavLink>
                    </li>

                    {/* My Cart */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/cart' className="flex items-center text-white">
                            <FaShoppingCart className="mr-2" /> My Cart
                        </NavLink>
                    </li>
                    <div className='divider'></div>
                    <li className="flex items-center">
                        <NavLink to='/' className="flex items-center text-white">
                            <FaHome className="mr-2" />  Home
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink to='/order/menu' className="flex items-center text-white">
                            <FaUtensils className="mr-2" />  Menu
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink to='/shop' className="flex items-center text-white">
                            <FaShoppingBag className="mr-2" /> Shop
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink to='/contact' className="flex items-center text-white">
                            <FaPhoneAlt className="mr-2" />  Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className='flex-1'>
                <Outlet /> {/* Render matched child route */}
            </div>
        </div>
    );
};

export default Dashboard;
