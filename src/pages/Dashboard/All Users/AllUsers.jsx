import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch Users
  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Handle Make Admin
  const handleMakeAdmin = (userId) => {
    const url = `/users/admin/${userId}`;
    console.log("Request URL:", url); 
    axiosSecure
      .patch(url)
        .then((response) => {
          console.log(response);
        if (response.data.
            acknowledged
            ) {
          Swal.fire('Success', 'User has been promoted to Admin', 'success');
          refetch(); 
        } else {
          Swal.fire('Error', 'Failed to promote user to admin.', 'error');
        }
      })
      .catch((error) => {
        Swal.fire('Error', 'An error occurred while promoting the user.', 'error');
        console.error('Admin promotion error:', error.response ? error.response.data : error);
      });
  };
  

  // Handle Delete User
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              refetch(); // Refresh the user list after deletion
            }
          })
          .catch((error) => {
            Swal.fire("Error", "Failed to delete user.", "error");
            console.error("Delete error:", error);
          });
      }
    });
  };

  if (isLoading) {
    return <p className="text-center text-lg">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load users.</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4 text-center text-orange-400">
        ---All Users---
      </h2>
      <h2 className="text-xl mb-6 text-orange-700">
        Total Users: {users.length}----
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-400">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border px-4 py-2 flex bg-orange-400 items-center justify-center">
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    disabled={user.role === "admin"}
                    className="flex items-center space-x-2"
                  >
                    {user.role === "admin" ? (
                      <span className="text-green-600">Admin</span>
                    ) : (
                      <FaUsers className="hover:text-orange-800" />
                    )}
                  </button>
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
