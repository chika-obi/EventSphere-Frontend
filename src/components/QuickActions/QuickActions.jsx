import React from 'react';
import { FaPlus, FaTicketAlt, FaCalendarCheck, FaChartLine, FaUpload, FaClipboardList } from "react-icons/fa";
import "./QuickActions.css";

const QuickActions = () => {
    const actions = [
    { label: "Create Event", icon: <FaPlus />, onClick: () => console.log("Create Event") },
    { label: "Ticket Sales", icon: <FaTicketAlt />, onClick: () => console.log("Ticket Sales") },
    { label: "Manage Bookings", icon: <FaClipboardList />, onClick: () => console.log("Manage Bookings") },
    { label: "Analytics", icon: <FaChartLine />, onClick: () => console.log("Analytics") },
    { label: "Upload Media", icon: <FaUpload />, onClick: () => console.log("Upload Media") },
    { label: "Upcoming Events", icon: <FaCalendarCheck />, onClick: () => console.log("Upcoming Events") },
  ];
  return (
    <>
       <div className="quick-actions-container">
      <h3 className="section-title">Quick Actions</h3>

      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className="action-card"
            onClick={action.onClick}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default QuickActions
