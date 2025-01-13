import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingCart, FaStar, FaCalendarCheck, FaUtensils, FaShoppingBag, FaPhoneAlt, FaList, FaUsers, FaBook } from 'react-icons/fa'; 

import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO:get isAdmin value from the database
    const isAdmin = useAdmin();


    return (
        <div className='flex'>
            {/* Dashboard Sidebar */}
            <div className="w-64 min-h-screen bg-orange-400 p-4">
            <h2 className='uppercase font-bold text-center text-2xl'>Bistro boss</h2>
            <h6 className='text-center text-2xl'>Restaurant</h6>
                <ul className="menu p-4 space-y-4 text-lg text-black">
                   
                    {
                        isAdmin ? <>
                             {/* User Home */}
                    <li className="flex items-center ">
                        <NavLink to='/dashboard/adminHome' className="flex items-center text-white">
                            <FaHome className="mr-2" /> Admin Home
                        </NavLink>
                    </li>

                    {/* Reservation */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/addItems' className="flex items-center text-white">
                            <FaUtensils className="mr-2" /> Add Items
                        </NavLink>
                    </li>

                    {/* Add a Review */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/manageItems' className="flex items-center text-white">
                            <FaList className="mr-2" /> Manage Items
                        </NavLink>
                    </li>

                    {/* My Bookings */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/bookings' className="flex items-center text-white">
                            <FaBook className="mr-2" /> Manage Bookings
                        </NavLink>
                    </li>

                    {/* My Cart */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/users' className="flex items-center text-white">
                            <FaUsers className="mr-2" /> All Users
                        </NavLink>
                    </li>
                    
                    <div className='divider'></div>

                        </>
                            :
                            <>
                                 {/* User Home */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/userHome' className="flex items-center text-white">
                            <FaHome className="mr-2" /> User Home
                        </NavLink>
                    </li>

                    {/* Reservation */}
                    <li className="flex items-center">
                        <NavLink to='/dashboard/reservation' className="flex items-center text-white">
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
                            <FaShoppingCart className="mr-2" /> My Cart({cart.length})
                        </NavLink>
                    </li>
                    
                    <div className='divider'></div>

                            </>
                    }
                   
                    {/* shared nav links */}


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
            <div className='flex-1 p-8'>
                <Outlet /> {/* Render matched child route */}
            </div>
        </div>
    );
};

export default Dashboard;
