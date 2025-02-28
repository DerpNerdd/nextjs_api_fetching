"use client"; // Mark this as a Client Component

import React, { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Client-side fetch to our custom API route
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setUsers(data);
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="text-center text-red-500 mt-4">Error: {error}</div>;
  }

  // Filter users by name (case-insensitive) using the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  // When a user is clicked, open a modal with more details
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">User List</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search users..."
          className="border p-2 rounded w-1/2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => handleUserClick(user)}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg relative max-w-md w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedUser.name}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Username:</strong> {selectedUser.username}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Website:</strong> {selectedUser.website}
            </p>
            <p className="text-gray-700">
              <strong>Company:</strong> {selectedUser.company?.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
