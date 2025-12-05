import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../About/About.css";

const IMG = {
  hero: "https://campus-connect-hazel-eight.vercel.app/assets/Alumni-CmjJ8L9k.webp",
  logo: "https://campus-connect-hazel-eight.vercel.app/assets/Aptech_Limited_Logo.svg-Dj5H1GN6.png",
  campus: "https://campus-connect-hazel-eight.vercel.app/assets/aptechlocation-CttQb6w0.webp",
  alumni: "https://campus-connect-hazel-eight.vercel.app/assets/middleSex-s4pNs-VH.jpg",
  labs: "https://campus-connect-hazel-eight.vercel.app/assets/years-B5jjjr6D.jpg",
  highlight1: "https://campus-connect-hazel-eight.vercel.app/assets/Partnership-DTX7U6HF.jpeg",
  highlight2: "https://campus-connect-hazel-eight.vercel.app/assets/bestIT-CntK691u.jpg",
  highlight3: "https://campus-connect-hazel-eight.vercel.app/assets/Alumni-CmjJ8L9k.webp",
  hackathon: "https://campus-connect-hazel-eight.vercel.app/assets/State-of-the-art%20labs-BvI3I2RU.jpg",
  robotics: "https://campus-connect-hazel-eight.vercel.app/assets/bestIT-CntK691u.jpg",
  music: "https://campus-connect-hazel-eight.vercel.app/assets/Music-Nights-C2yzfmGy.jpg",
  dance: "https://campus-connect-hazel-eight.vercel.app/assets/Dance%20competition-B5N9KzRw.jpg",
  international: "https://campus-connect-hazel-eight.vercel.app/assets/Hackathon-DFRru0OK.jpg",
  alumniMeet: "https://campus-connect-hazel-eight.vercel.app/assets/AlumniMeet-BVBM9YXM.jpg",
  bloodDonation: "https://campus-connect-hazel-eight.vercel.app/assets/Inter-college%20Sports-BkO_sEOm.webp",
  sports: "https://campus-connect-hazel-eight.vercel.app/assets/Inter-college%20Sports-BkO_sEOm.webp",
  location: "https://i.ibb.co/jfXwPz2/aptechlocation.webp",
};

const slides = [
  { img: IMG.alumni, title: "About CampusConnect" },
  { img: IMG.hero, title: "CampusConnect is an official event" },
  { img: IMG.sports, title: "Stay Engaged" },
];

const aboutevents = [
  { id: 1, title: "Hackathon", description: "24-hour coding marathon where teams build innovative solutions.", image: IMG.hackathon },
  { id: 2, title: "Robotics Championship", description: "Cutting-edge robotics competition.", image: IMG.robotics },
  { id: 3, title: "Annual Day", description: "Celebration of global culture.", image: IMG.international },
  { id: 4, title: "Music Nights", description: "DJs, bands, and artists light up the campus.", image: IMG.music },
  { id: 5, title: "Dance Competitions", description: "Energetic performances showcasing talent.", image: IMG.dance },
  { id: 6, title: "Sports Meet", description: "Athletes compete in major sports.", image: IMG.sports },
  { id: 7, title: "Blood Donation", description: "Life-saving voluntary blood drive.", image: IMG.bloodDonation },
  { id: 8, title: "Alumni Meet", description: "Networking & mentorship with past graduates.", image: IMG.alumniMeet },
];

const timelines = [
  { month: "Jan-Feb", title: "Sports Meet", description: "Competitions in football, basketball, and more." },
  { month: "Mar-Apr", title: "Hackathon", description: "24-hour coding challenge solving real-world problems." },
  { month: "May-Jun", title: "Cultural Day", description: "Performances, exhibitions, and cultural showcases." },
  { month: "Jul-Aug", title: "Blood Donation", description: "Life-saving voluntary donations." },
  { month: "Sep-Oct", title: "Tech & Robotics Expo", description: "Tech innovation and inter-college robotics." },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <div className="about-slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="slide" key={i}>
              <img src={slide.img} alt={slide.title} />
              <div className="slide-overlay">
                <h2>{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="overview-section" data-aos="fade-right">
        <h2>College Overview</h2>
        <p>
          Aptech Global Learning Institute (Port Harcourt, Nigeria), affiliated with 
          <strong> Middlesex University, London</strong> since 2005.
        </p>
        <p>Our campus includes modern libraries, collaborative spaces, and innovation hubs for technical and creative growth.</p>
        <div className="overview-cards">
          {[{img: IMG.logo, title:"Aptech Institute", desc:"Excellence in global tech education"},
            {img: IMG.location, title:"Location", desc:"MBM Plaza, Port Harcourt, Rivers State"},
            {img: IMG.campus, title:"Affiliation", desc:"Middlesex University, London"}].map((card,i)=>(
              <div key={i} className="overview-card" onClick={()=>setModalImage(card.img)}>
                <img src={card.img} alt={card.title}/>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
        </div>
      </section>
      <section className="highlights-section" data-aos="fade-up">
        <h2>Campus Highlights & Recognitions</h2>
        <ul className="highlights-list">
          <li>Top 10 in Nigeria</li>
          <li>Global Partnerships</li>
          <li>Best IT Training Institute 2021</li>
          <li>15+ Years of Excellence</li>
          <li>10,000+ Alumni worldwide</li>
          <li>State-of-the-art labs & hubs</li>
        </ul>
        <div className="highlights-images">
          {[IMG.highlight1, IMG.highlight2, IMG.highlight3, IMG.alumni, IMG.labs].map((img,i)=>(
            <img key={i} src={img} alt="highlight" onClick={()=>setModalImage(img)} />
          ))}
        </div>
      </section>
      <section className="events-section" data-aos="fade-left">
        <h2>Key Annual Events</h2>
        <div className="events-container">
          {aboutevents.map(ev=>(
            <div key={ev.id} className="event-card" onClick={()=>setModalImage(ev.image)}>
              <img src={ev.image} alt={ev.title}/>
              <h3>{ev.title}</h3>
              <p>{ev.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="timeline-section" data-aos="fade-up">
        <h2>Annual Timeline of Events</h2>
        <div className="timeline-container">
          {timelines.map((t,i)=>(
            <div key={i} className="timeline-item">
              <span className="month">{t.month}</span>
              <div className="timeline-content">
                <h3>{t.title}</h3>
                <p>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="join-section" data-aos="zoom-in">
        <h2>Join Us and Be Part of the Excitement!</h2>
        <p>Explore, participate, and celebrate through competitions and cultural events.</p>
        <Link to="/events" className="join-btn">Explore Events →</Link>
      </section>
      {modalImage && (
        <div className="modal-overlay" onClick={()=>setModalImage(null)}>
          <div className="modal-content" onClick={e=>e.stopPropagation()}>
            <button className="modal-close" onClick={()=>setModalImage(null)}>✕</button>
            <img src={modalImage} alt="Enlarged view"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
