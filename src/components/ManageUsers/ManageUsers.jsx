
import React, { useState } from "react";
import "./ManageUsers.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const ManageUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "user" },
    { id: 2, name: "Sarah Lucky", email: "sarah@yahoo.com", role: "organizer" },
    { id: 3, name: "Michael Kane", email: "michael@gmail.com", role: "user" },
    { id: 4, name: "Uche Jumbo", email: "jumbo@gmail.com", role: "admin" },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesFilter = filter === "all" || user.role === filter;
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <>
      <DashboardHeader role="Admin" name="Madueke Amara" initials="M" />

      <div className="manage-users-container">
        <h2 className="page-title">Manage Users</h2>

        {/* Search + Filter */}
        <div className="top-controls">
          <input
            type="text"
            placeholder="Search users..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Users</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="organizer">Organizer</option>
          </select>
        </div>

        {/* Users Table */}
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Role">{user.role}</td>

                  <td data-label="Actions">
                    <button className="edit-btn" onClick={() => openModal(user)}>
                      Edit
                    </button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit User Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3>Edit User</h3>

              <label>Name</label>
              <input type="text" defaultValue={selectedUser.name} />

              <label>Email</label>
              <input type="text" defaultValue={selectedUser.email} />

              <label>Role</label>
              <select defaultValue={selectedUser.role}>
                <option value="user">User</option>
                <option value="organizer">Organizer</option>
                <option value="admin">Admin</option>
              </select>

              <div className="modal-actions">
                <button className="save-btn">Save</button>
                <button className="modal-close-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageUsers;

