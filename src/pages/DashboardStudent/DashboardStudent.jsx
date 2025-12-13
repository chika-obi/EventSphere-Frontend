
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx"
import Welcome from '../../components/WelcomeHeader/Welcome.jsx'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoArrowUp } from "react-icons/io5";
import { MdOutlineStreetview } from "react-icons/md";
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents.jsx';
import "./DashboardStudent.css"
import RecentFeeds from '../../components/RecentActivity/RecentFeeds.jsx';
import RecommendedEvents from '../../components/RecommendedEvents/RecommendedEvents.jsx';
import SupportSummary from "../../components/Charts/SupportSummary.jsx";

const eventsData = [
  { id: 1, title: "Music Fest", date: "Dec 25", venue: "Lagos", price: "₦5,000", image: "/images/music.jpg" },
  { id: 2, title: "Tech Conference", date: "Jan 20", venue: "Abuja", price: "₦10,000", image: "/images/tech.jpg" },
  { id: 3, title: "Art Expo", date: "Feb 15", venue: "Port Harcourt", price: "₦3,500", image: "/images/art.jpg" },
  { id: 4, title: "Comedy Night", date: "Mar 5", venue: "Lagos", price: "₦4,000", image: "/images/comedy.jpg" },
  { id: 5, title: "Music Fest", date: "Dec 25", venue: "Lagos", price: "₦5,000", image: "/images/music.jpg" },
  { id: 6, title: "Tech Conference", date: "Jan 20", venue: "Abuja", price: "₦10,000", image: "/images/tech.jpg" },
];

const DashboardStudent = () => {
  return (
    <>
     {/* title */}
      <DashboardHeader role="User" name="Madueke Amara" initials="M"/> 

      {/* welcome */}
       <Welcome /> 

       {/* Site Metrics */}
             <div className="metricsContainer">
               <div className="metricsCard">
                 <div className="metricsTitle">
                   <p>Upcoming Events</p>
                   <BsFillArrowUpRightCircleFill />
                 </div>
                 <div className="metricsCount">
                   <p>24</p>
                   <IoArrowUp />
                 </div>
                 <div className="recentStats">
                  <MdOutlineStreetview fill='#aede33'/>
                   <button>View</button>
                 </div>
               </div>
       
               <div className="metricsCardWhite">
                 <div className="metricsTitle">
                   <p>Tickets Purchased</p>
                   <BsFillArrowUpRightCircleFill  />
                 </div>
                 <div className="metricsCount">
                   <p>18</p>
                   <IoArrowUp />
                 </div>
                 <div className="recentStats">
                  <MdOutlineStreetview fill='##0f7c0f'/>
                   <button>View</button>
                 </div>
               </div>
       
               <div className="metricsCardWhite">
                 <div className="metricsTitle">
                   <p>Saved Events</p>
                   <BsFillArrowUpRightCircleFill  />
                 </div>
                 <div className="metricsCount">
                   <p>10</p>
                   <IoArrowUp />
                 </div>
                 <div className="recentStats">
                   <MdOutlineStreetview fill='##0f7c0f'/>
                   <button>View</button>
                 </div>
               </div>
       
                <div className="metricsCardWhite">
                 <div className="metricsTitle">
                   <p>Notifications</p>
                   <BsFillArrowUpRightCircleFill  />
                 </div>
                 <div className="metricsCount">
                   <p>8</p>
                   <IoArrowUp />
                 </div>
                 <div className="recentStats">
                   <MdOutlineStreetview fill='##0f7c0f'/>
                   <button>View</button>
                 </div>
               </div>
             </div>

             {/* Upcoming Events */}
             <div className='eventStats'>
              <UpcomingEvents title="Tech SummerBootcamp 2025" date="5 Dec 2025" venue="Twitter" price="free"/>
              
            </div>

            {/* Recommended Events */}
             <RecommendedEvents events={eventsData}/>
            {/* Receent Acivity */}
            <div className='summary'>
         <RecentFeeds/>
         <SupportSummary/>
      </div>
    
    </>
  )
}

export default DashboardStudent
