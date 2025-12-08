import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = ({ role, name, initials }) => {
  return (
    <>
      <div className="titleContainer">
        <h2>Dashboard</h2>
        <div className="titleRight">
          <input
            type="text"
            name=""
            className="searchBar"
            id=""
            placeholder="Search here..."
          />
          
          <div className="title">
            <div className="abbrv">
              <p>{initials}</p>
            </div>
            <div className="userName">
              <p className="user">{name}</p>
              <p className="role">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
