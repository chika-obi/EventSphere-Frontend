import { useState } from "react";
import "./ManageEvents.css";
import { FiSearch } from "react-icons/fi";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoFilter } from "react-icons/io5";

import DashboardHeader from "../DashboardHeader/DashboardHeader";

const ManageEvents = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  const events = [
    { id: 1, title: "Tech Conference 2025", date: "2025-08-14", venue: "Eko Hotel", status: "Published" },
    { id: 2, title: "Music Festival", date: "2025-09-02", venue: "TBS Lagos", status: "Draft" },
    { id: 3, title: "Startup Pitch Day", date: "2025-12-20", venue: "Yaba Lagos", status: "Archived" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesFilter = filter === "All" || event.status === filter;
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleEdit = (event) => {
    setEditEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditEvent(null);
  };

  return (
    <>
    <DashboardHeader role="Admin" name="Madueke Amara" initials="M"/>
    <div className="manage-events-container">
      <h2 className="page-title">Manage Events</h2>

      {/* Search + Filters */}
      <div className="controls-row">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filters">
          <IoFilter className="filter-icon" />
          {["All", "Published", "Draft", "Archived"].map((item) => (
            <button
              key={item}
              className={`filter-btn ${filter === item ? "active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table */}
      <div className="event-table-wrapper">
        <table className="event-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>
                  <span className={`status-badge ${event.status.toLowerCase()}`}>
                    {event.status}
                  </span>
                </td>
                <td className="action-buttons">
                  <MdEdit className="edit-btn" onClick={() => handleEdit(event)} />
                  <MdDelete className="delete-btn" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="event-cards">
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>📅 {event.date}</p>
            <p>📍 {event.venue}</p>
            <span className={`status-badge ${event.status.toLowerCase()}`}>
              {event.status}
            </span>

            <div className="card-actions">
              <button className="edit-card" onClick={() => handleEdit(event)}>
                <MdEdit /> Edit
              </button>
              <button className="delete-card">
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && editEvent && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Event</h2>

            <label>Event Title</label>
            <input type="text" defaultValue={editEvent.title} />

            <label>Date</label>
            <input type="date" defaultValue={editEvent.date} />

            <label>Venue</label>
            <input type="text" defaultValue={editEvent.venue} />

            <label>Status</label>
            <select defaultValue={editEvent.status}>
              <option>Published</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={closeModal}>Cancel</button>
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ManageEvents;
