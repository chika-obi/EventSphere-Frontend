import React, { useState } from "react";
import "../Contact/Contact.css";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (placeholder)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDHyzPwqfYOAunzlTRlQ7IOaerQ3rYRXGxg&s"
          alt="Contact Hero"
          className="contact-hero-img"
        />
        <div className="contact-hero-text">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Get in touch with us anytime!</p>
        </div>
      </div>
      <div className="contact-cards">
        <div className="contact-card form-card">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-card map-card">
          <h2>Our Location</h2>
          <iframe
            title="Aptech Global Learning Institute"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.007196022594!2d7.0123!3d4.8242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069c0f5d8c18d17%3A0x123456789abcdef!2sAptech%20Global%20Learning%20Institute!5e0!3m2!1sen!2sng!4v1711000000000!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
