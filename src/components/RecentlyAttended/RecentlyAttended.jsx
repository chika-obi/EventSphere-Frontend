import React from 'react'
import "./RecentlyAttended.css"

const RecentlyAttended = ({title, date}) => {
  return (
    <>
    <div>
        <div className="recentlyattendedContainer">
            <h3>Recently Attended</h3>
        </div>
      <p>Title:{title}</p>
      <p>Date:{date}</p>
    </div>
    </>
  )
}

export default RecentlyAttended
