import React from 'react'
import "./RecentFeeds.css";
import {FiClock} from "react-icons/fi";

const activities =[
    {
        id: 1,
        action: "New event created",
        details: "Tech Summer Bootcamp 2025 has been added to the system.",
        time: "8 mins ago",
    },
    {
    id: 2,
    action: "User registered",
    details: "New user joined: amarachi@mail.com",
    time: "15 mins ago",
  },
   {
    id: 3,
    action: "Event updated",
    details: "Music Festival venue was changed.",
    time: "30 mins ago",
  },
   {
    id: 4,
    action: "Ticket sold",
    details: "A user purchased 3 VIP tickets.",
    time: "1 hour ago",
  },
    
];

const RecentFeeds = () => {
  return (
    <>
      <div className="feedsContainer">
        <h3 className="feedsHeading">Recent Activity</h3>

        <div className="activityList">
            {activities.map((item) =>(
                <div key={item.id} className="activityItem">
                    <div className="activityLeft">
                        <div className="activityDot"></div>
                    
                    <div>
                    <p className='activityAction'>{item.action}</p>
                    <p className='activityDetails'>{item.details}</p>
                    </div>
                    </div>

                    <div className="activityTime">
                        <FiClock/>
                        <span>{item.time}</span>
                    </div>
                </div>

                
            ))}
        </div>
      </div>
    </>
  )
};

export default RecentFeeds
