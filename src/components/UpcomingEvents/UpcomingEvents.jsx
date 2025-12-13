import React from "react";
import "./UpcomingEvents.css";

const UpcomingEvents = ({ title, date, venue, price }) => {
  return (
    <>
      <div className="events-wrapper">
        {/* Upcoming Event */}
        <div className="event-card upcoming">
          <h2>Upcoming Event</h2>
          <div className="event-details">
            <h3>React Dev Conference 2025</h3>
            <p>Date: March 28, 2025</p>
            <p>Venue: Landmark Center, Lagos</p>
            <button className="summary-btn">View Details</button>
          </div>
        </div>
        {/* Recently Attended Event */}
        <div className="event-card attended">
          <h2>Recently Attended</h2>
          <div className="event-details">
            <h3>AI Tech Expo 2024</h3>
            <p>Date: November 10, 2024</p>
            <p>Venue: Eko Hotel, Lagos</p>
            <button className="summary-btn">View Summary</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
