import React, { useState } from "react";
import "./Settings.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const Settings = () => {
  const [formData, setFormData] = useState({
    orgName: "",
    email: "",
    phone: "",
    notifications: true,
    ticketAlerts: true,
    waitlistAlerts: false,
    timezone: "Africa/Lagos",
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings Updated:", formData);
  };

  return (
    <>
    <DashboardHeader role="Organizer" name="Madueke Amara" initials="M"/>
    <div className="settings-container">
      <h2>Settings</h2>

      <form className="settings-form" onSubmit={handleSubmit}>
        <section>
          <h3>Organizers Profile</h3>
          <label>
            Name
            <input
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="Enter organizers name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </label>

          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </label>
        </section>

                <section>
          <h3>Preferences</h3>

          <label>
            Timezone
            <select name="timezone" value={formData.timezone} onChange={handleChange}>
              <option value="Africa/Lagos">Africa/Lagos</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York</option>
              <option value="Europe/London">Europe/London</option>
            </select>
          </label>

          <label>
            Theme
            <select name="theme" value={formData.theme} onChange={handleChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </section>

        <section>
          <h3>Notifications</h3>

          <label className="checkbox-field">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
            />
            Enable Email Notifications
          </label>

          <label className="checkbox-field">
            <input
              type="checkbox"
              name="ticketAlerts"
              checked={formData.ticketAlerts}
              onChange={handleChange}
            />
            Ticket Sales Alerts
          </label>

          <label className="checkbox-field">
            <input
              type="checkbox"
              name="waitlistAlerts"
              checked={formData.waitlistAlerts}
              onChange={handleChange}
            />
            Waitlist Activity Alerts
          </label>
        </section>



        <button type="submit" className="save-btn">Save Settings</button>
      </form>
    </div>
    </>
  );
};

export default Settings;
