import React from "react";
import "./RecommendedEvents.css";

const RecommendedEvents = () => {
  const events = [
    {
      id: 1,
      title: "Frontend Developers Meetup",
      date: "Jan 22, 2025",
      location: "Lagos, Nigeria",
      
    },
    {
      id: 2,
      title: "AI & Machine Learning Expo",
      date: "Feb 14, 2025",
      location: "Abuja, Nigeria",
      
    },
    {
      id: 3,
      title: "React Conference",
      date: "Mar 9, 2025",
      location: "Nairobi, Kenya",
    
    },
  ];

  return (
    <div className="recommended-container">
      <h2 className="recommended-title">Recommended Events</h2>

      <div className="recommended-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
           
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p className="location">{event.location}</p>
              <button className="view-btn">View Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedEvents;

