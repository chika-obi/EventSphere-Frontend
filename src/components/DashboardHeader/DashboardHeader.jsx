import React from "react";
import "./DashboardHeader.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const DashboardHeader = ({ role, name, initials }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="titleContainer">
      <div className="titleleft">
          {showMenu ? (
                <IoCloseSharp
                  className="displaynav"
                  onClick={() => setShowMenu(!showMenu)}
                />
              ) : (
                <GiHamburgerMenu
                  className="displaynav"
                  onClick={() => setShowMenu(!showMenu)}
                />
              )}

              {showMenu && (
                <div className="hamburger">
                  <ul>
                    <li>
                      <NavLink to={"/user/studentdashboard"}>Overview</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/user/myevents"}>MyEvents</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/user/mytickets"}>My Tickets</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/user/notification"}>Notifications</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/user/settings"}>Settings</NavLink>
                    </li>
                    
                  </ul>
                </div>
              )
            }

        <h2>Dashboard</h2>
        </div>
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
