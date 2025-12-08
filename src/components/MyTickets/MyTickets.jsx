import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./MyTickets.css";


const MyTickets = () => {
const tickets = [
{
id: 1,
eventName: "Tech Conference 2025",
date: "March 14, 2025",
venue: "Lagos Landmark Center",
type: "VIP Ticket",
},
{
id: 2,
eventName: "Design Workshop",
date: "April 2, 2025",
venue: "Abuja Innovation Hub",
type: "Regular Ticket",
},
{
id: 3,
eventName: "Music Fest 2025",
date: "May 22, 2025",
venue: "Port Harcourt Arena",
type: "Early Bird",
},
];


return (
    <>
    <DashboardHeader role="Organizer" name="Madueke Amara" initials="M"/>
<div className="tickets-container">
<h2>My Tickets</h2>


<div className="tickets-list">
{tickets.map((ticket) => (
<div key={ticket.id} className="ticket-card">
<h3>{ticket.eventName}</h3>
<p><strong>Date:</strong> {ticket.date}</p>
<p><strong>Venue:</strong> {ticket.venue}</p>
<p><strong>Ticket Type:</strong> {ticket.type}</p>
<button className="view-btn">View Ticket</button>
</div>
))}
</div>
</div>
</>
);
};


export default MyTickets;