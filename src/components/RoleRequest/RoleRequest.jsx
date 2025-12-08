import React from "react";
import "./RoleRequest.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const RoleRequest = () => {
  const requests = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      currentRole: "User",
      requestedRole: "Organizer",
      date: "Dec 10, 2025",
      status: "Pending",
    },
    {
      id: 2,
      name: "Amara Obi",
      email: "amaraobi@gmail.com",
      currentRole: "Organizer",
      requestedRole: "Admin",
      date: "Dec 09, 2025",
      status: "Pending",
    },
  ];

  return (
    <>
    <DashboardHeader role="Admin" name="Madueke Amara" initials="M"/>
    <div className="role-requests-container">
      <h2 className="page-title">Role Upgrade Requests</h2>

      <div className="requests-table">
        <div className="table-header">
          <span>Name</span>
          <span>Email</span>
          <span>Current Role</span>
          <span>Requested Role</span>
          <span>Date</span>
          <span>Actions</span>
        </div>

        {requests.map((req) => (
          <div className="table-row" key={req.id}>
            <span>{req.name}</span>
            <span>{req.email}</span>
            <span className="badge requested-role ">{req.currentRole}</span>
            <span className="badge requested">{req.requestedRole}</span>
            <span>{req.date}</span>

            <div className="actions">
              <button className="btn approve">Approve</button>
              <button className="btn reject">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default RoleRequest;
