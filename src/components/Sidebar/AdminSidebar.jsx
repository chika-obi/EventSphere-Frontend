import "./Sidebar.css";
import { NavLink, Outlet } from "react-router-dom";
import { LuArrowRightLeft } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";

const AdminSidebar = () => {
  return (
    <>
      <div className="app__container">
        <div className="sidebarWrapper">
          <div className="logoWrapper">EVENTSPHERE</div>
          <div className="sidebar">
            <ul>
              <li>
                <NavLink to={"/admin/admindashboard"}>
                  <LuArrowRightLeft />
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to={"/admin/myevents"}>
                  <CgNotes />
                  My Events
                </NavLink>
              </li>
              
              <li>
                <NavLink to={"/admin/mytickets"}>
                  <IoWalletOutline />
                  My Tickets 
                </NavLink>
              </li>
              
              <li>
                <NavLink to={"/admin/notification"}>
                  <FaRegUser />
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink to={"/admin/settings"}>
                  <FaRegUser />
                  Settings
                </NavLink>
              </li>
              <li>
                <p className="organizer-title">ORGANIZER</p>
                </li>
              <li>
                <NavLink to={"/admin/createevent"}>
                  <LiaSignOutAltSolid />
                  Create Event
                </NavLink>
              </li>
              <li>
                <NavLink to={"/admin/manageevents"}>
                  <FaRegUser />
                 Manage Events
                </NavLink>
              </li>
              <li>
                <p className="organizer-title">SYSTEM ADMIN</p>
                
              </li>
              <li>
                <NavLink to={"/admin/manageusers"}>
                  <HiOutlineSpeakerphone />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to={"/admin/rolerequest"}>
                  <FaRegUser />
                  Role Requests
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="app__content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
