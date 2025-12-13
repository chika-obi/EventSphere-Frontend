import "./Sidebar.css";
import { NavLink, Outlet } from "react-router-dom";
import { LuArrowRightLeft } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";

const OrganizerSidebar = () => {
  return (
    <>
      <div className="app__container">
        <div className="sidebarWrapper">
          <div className="logoWrapper">EVENTSPHERE</div>
          <div className="sidebar">
            <ul>
              <li>
                <NavLink to={"/organizer/dashboard"}>
                  <LuArrowRightLeft />
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to={"/organizer/myevents"}>
                  <CgNotes />
                  My Events
                </NavLink>
              </li>
              <li>
                <NavLink to={"/organizer/mytickets"}>
                  <HiOutlineSpeakerphone />
                  My Tickets
                </NavLink>
              </li>

              <li>
                <NavLink to={"/organizer/notification"}>
                  <FaRegUser />
                  Notifications
                </NavLink>
              </li>

              <li>
                <NavLink to={"/organizer/settings"}>
                  <LiaSignOutAltSolid />
                  Settings
                </NavLink>
              </li>
              <li>
                <p className="organizer-title">ORGANIZER</p>
              </li>
              <li>
                <NavLink to={"/organizer/createevent"}>
                  <IoWalletOutline />
                  Create Events
                </NavLink>
              </li>
              <li>
                <NavLink to={"/organizer/manageevents"}>
                  <FaRegUser />
                  Manage Events
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

export default OrganizerSidebar;
