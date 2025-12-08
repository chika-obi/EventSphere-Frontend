import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Welcome from "../WelcomeHeader/Welcome";
import "./Notification.css";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "Event Published",
      message: "Your event 'Tech Conference 2025' has been successfully published.",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "New Ticket Sale",
      message: "You have sold 3 new tickets for 'Design Workshop'.",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Waitlist Update",
      message: "5 new users joined the waitlist for 'Music Fest 2025'.",
      time: "Yesterday",
    },
  ];

  return (
    <>
    <DashboardHeader role="Organizer" name="Madueke Amara" initials="M"/>
    <div className="notification-container">
      <h2>Notifications</h2>

      <div className="notification-list">
        {notifications.map((note) => (
          <div key={note.id} className="notification-card">
                    <div>
                        <div className="activityDot"></div>
                    
                    </div>
                    <div>
            <h3>{note.title}</h3>
            <p>{note.message}</p>
            <span className="time">{note.time}</span>
            </div>
          </div>
         
        ))}
      </div>
    </div>
    </>
  );
};

export default Notification;



