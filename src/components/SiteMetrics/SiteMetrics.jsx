import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoArrowUp } from "react-icons/io5";
import "./SiteMetrics.css"

const SiteMetrics = ({title,count,stats, day}) => {
  return (
    <>
      <div className="metricsCardWhite">
                <div className="metricsTitle">
                  <p>{title}</p>
                  <BsFillArrowUpRightCircleFill  />
                </div>
                <div className="metricsCount">
                  <p>{count}</p>
                  <IoArrowUp />
                </div>
                <div className="recentStats">
                  <button>{stats}</button>
                  <p>{day}</p>
                </div>
              </div>
    </>
  )
}

export default SiteMetrics
