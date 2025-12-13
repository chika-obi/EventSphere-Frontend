import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoArrowUp } from "react-icons/io5";
import "./SiteMetrics.css"

const StyledMetrics = ({title, count, stats, day}) => {
  return (
    <>
      <div className="metricsCard">
                <div className="metricsTitle">
                  <p>{title}</p>
                  <BsFillArrowUpRightCircleFill />
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

export default StyledMetrics
