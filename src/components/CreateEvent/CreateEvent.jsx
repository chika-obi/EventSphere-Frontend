import React, { useState } from "react";
import "./CreateEvent.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    venue: "",
    startTime: "",
    endTime: "",
    waitList: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data:", formData);
  };

  return (
    <>
    <DashboardHeader role="Organizer" name="Madueke Amara" initials="M"/>
    <div className="create-event-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <label>
          Event Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
            required
          />
        </label>

        <label>
          Category
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="meetup">Meetup</option>
            <option value="party">Party</option>
          </select>
        </label>

        <label>
          Event Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Venue
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Enter venue"
            required
          />
        </label>

        <label>
          Start Time
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          End Time
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <div className="checkbox">
        <label className="checkbox-field">
          <input
            type="checkbox"
            name="waitList"
            checked={formData.waitList}
            onChange={handleChange}
          />
          Enable Waitlist
        </label>
        </div>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your event"
          ></textarea>
        </label>

        <button type="submit" className="publish-btn">Publish Event</button>
      </form>
    </div>
    </>
  );
};

export default CreateEvent;
