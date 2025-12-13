import React from "react";
import "./MyEvents.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const MyEvents = () => {
  const events = [
    {
      id: 1,
      title: "Tech Summit 2025",
      date: "Jan 14, 2025",
      location: "Lagos, Nigeria",
      status: "Published",
     
    },
    {
      id: 2,
      title: "Design Meetup",
      date: "Feb 02, 2025",
      location: "Abuja, Nigeria",
      status: "Draft",
     
    },
    {
      id: 3,
      title: "Tech Summit 2025",
      date: "Jan 14, 2025",
      location: "Lagos, Nigeria",
      status: "Published",
     
    },
    {
      id: 4,
      title: "Design Meetup",
      date: "Feb 02, 2025",
      location: "Abuja, Nigeria",
      status: "Draft",
     
    },
  ];

  return (
    <>
    <DashboardHeader role="Organizer" name="Madueke Amara" initials="M"/>
    <div className="my-events-container">
      <h2 className="my-events-header">My Events</h2>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
           

            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-details">📅 {event.date}</p>
              <p className="event-details">📍 {event.location}</p>

              <span
                className={`status-badge ${
                  event.status === "Published"
                    ? "status-published"
                    : "status-draft"
                }`}
              >
                {event.status}
              </span>

              <div className="event-actions">
                <button className="btn-manage">Manage</button>
                <button className="btn-view">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MyEvents;