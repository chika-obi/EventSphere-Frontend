import "./Sidebar.css";
import { NavLink, Outlet } from "react-router-dom";
import { LuArrowRightLeft } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";


const Sidebar = () => {
  
  return (
    <>
      <div className="app__container">
        <div className="sidebarWrapper">


        


          <div className="logoWrapper">EVENTSPHERE</div>
          <div className="sidebar">
            <ul>
              <li>
                <NavLink to={"/user/studentdashboard"}>
                  <LuArrowRightLeft />
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to={"/user/myevents"}>
                  <CgNotes />
                  My Events
                </NavLink>
              </li>
              <li>
                <NavLink to={"/user/mytickets"}>
                  <HiOutlineSpeakerphone />
                 My Tickets
                </NavLink>
              </li>
              
              <li>
                <NavLink to={"/user/notification"}>
                  <FaRegUser />
                  Notifications
                </NavLink>
              </li>
              

              <li>
                <NavLink to={"/user/settings"}>
                  <LiaSignOutAltSolid />
                  Settings
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

export default Sidebar;
