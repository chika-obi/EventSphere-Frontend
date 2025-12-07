
// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import EventCard from "../components/EventCard"; // adapt path if different

// Dummy data for featured events (you can later fetch from API)
const featuredEvents = [
  {
    id: 1,
    title: "TechFest 2025 – Hackathon",
    category: "Technical",
    date: "2025-12-05",
    time: "10:00 AM",
    venue: "CSE Block",
    badge: "Trending",
    description:
      "24-hour coding marathon for students across all departments.",
  },
  {
    id: 2,
    title: "Cultural Night Fiesta",
    category: "Cultural",
    date: "2025-12-10",
    time: "6:30 PM",
    venue: "Main Auditorium",
    badge: "Upcoming",
    description:
      "Music, dance, drama and comedy – showcase your talent!",
  },
  {
    id: 3,
    title: "Cloud & DevOps Workshop",
    category: "Workshop",
    date: "2025-12-12",
    time: "9:00 AM",
    venue: "Seminar Hall 2",
    badge: "Limited Seats",
    description:
      "Hands-on workshop on Docker, Kubernetes and CI/CD pipelines.",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-tagline">College Event Information System</p>
          <h1>
            Welcome to <span>EventSphere</span>
          </h1>
          <p className="home-hero-text">
            Discover technical fests, cultural nights, workshops, sports and
            more — all in one place. Register, track and share your campus
            experiences effortlessly.
          </p>

          <div className="home-hero-actions">
            <Link to="/events" className="btn-primary">
              Browse Events
            </Link>
            <button
              className="btn-outline"
              type="button"
              onClick={() => {
                const section = document.getElementById("home-gallery");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Gallery
            </button>
          </div>

          <div className="home-hero-meta">
            <span>🎓 20+ Departments</span>
            <span>📅 Live & Upcoming Events</span>
            <span>⭐ Feedback & Certificates</span>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="home-hero-main-img">
            {/* Mina – replace these with real images in src/assets/images */}
            <img
              src={require("../assets/images/hero-main.jpg")}
              alt="Students attending a college event"
            />
          </div>
          <div className="home-hero-secondary">
            <img
              src={require("../assets/images/hero-secondary.jpg")}
              alt="Stage performance at cultural fest"
            />
            <div className="home-hero-stat">
              <p>+120 Events Hosted</p>
              <span>last academic year</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS (EventCard integration) */}
      <section className="home-section" id="home-featured">
        <div className="home-section-header">
          <h2>Featured Events</h2>
          <Link to="/events" className="home-view-all">
            View all events →
          </Link>
        </div>

        <div className="home-event-grid">
          {featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              // Adjust these props if your EventCard API is different
              badge={event.badge}
              onViewDetails={() => console.log("View details", event.id)}
              onRegister={() => console.log("Register for", event.id)}
            />
          ))}
        </div>
      </section>

      {/* GALLERY – for Ethel */}
      <section className="home-section alt" id="home-gallery">
        <div className="home-section-header">
          <h2>Gallery Highlights</h2>
          <p className="home-section-subtitle">
            A snapshot of campus life – curated by the EventSphere gallery team.
          </p>
        </div>

        <div className="home-gallery-grid">
          <div className="home-gallery-item">
            <img
              src={require("../assets/images/gallery-1.jpg")}
              alt="Coding marathon"
            />
            <div className="home-gallery-caption">
              TechFest all-night hackathon
            </div>
          </div>
          <div className="home-gallery-item">
            <img
              src={require("../assets/images/gallery-2.jpg")}
              alt="Cultural dance"
            />
            <div className="home-gallery-caption">
              Cultural Night – dance performance
            </div>
          </div>
          <div className="home-gallery-item">
            <img
              src={require("../assets/images/gallery-3.jpg")}
              alt="Workshop"
            />
            <div className="home-gallery-caption">
              Cloud workshop in full session
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="home-section home-cta">
        <div className="home-cta-content">
          <h2>Ready to host your next event?</h2>
          <p>
            Organizers can submit event proposals, manage registrations, track
            attendance and upload media — all through EventSphere.
          </p>
          <Link to="/login" className="btn-primary">
            Login as Organizer / Admin
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
