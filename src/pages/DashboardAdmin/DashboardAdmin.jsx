import "./DashboardAdmin.css";
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import { IoArrowUp } from "react-icons/io5";
import RevenueChart from "../../components/Charts/RevenueChart";
import EventChart from "../../components/Charts/EventChart";
import RecentFeeds from "../../components/RecentActivity/RecentFeeds";
import SupportSummary from "../../components/Charts/SupportSummary";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Welcome from "../../components/WelcomeHeader/Welcome";
import StyledMetrics from "../../components/SiteMetrics/StyledMetrics";
import SiteMetrics from "../../components/SiteMetrics/SiteMetrics";

const DashboardAdmin = () => {
  return (
    <>
      {/* title */}
      <DashboardHeader role="Admin" name="Madueke Amara" initials="M" />
      <Welcome />
      {/* Site Metrics */}
      <div className="metricsContainer">
        <StyledMetrics
          title="Total Users"
          count={4524}
          stats="58%"
          day="Since November"
        />
        <SiteMetrics
          title="Events"
          count={345}
          stats="28%"
          day="Since November"
        />

        <SiteMetrics
          title="Tickets Today"
          count={105}
          stats="5%"
          day="Since Today"
        />
        <SiteMetrics
          title="Revenue"
          count={75}
          stats="7.5%"
          day="Since yesterday"
        />
      
        {/* <div className="metricsCard">
          <div className="metricsTitle">
            <p>Total Users</p>
            <BsFillArrowUpRightCircleFill />
          </div>
          <div className="metricsCount">
            <p>4524</p>
            <IoArrowUp />
          </div>
          <div className="recentStats">
            <button>+254</button>
            <p>Since yesterday</p>
          </div>
        </div>

        <div className="metricsCardWhite">
          <div className="metricsTitle">
            <p>Events</p>
            <BsFillArrowUpRightCircleFill  />
          </div>
          <div className="metricsCount">
            <p>345</p>
            <IoArrowUp />
          </div>
          <div className="recentStats">
            <button>8%</button>
            <p>Since yesterday</p>
          </div>
        </div>

        <div className="metricsCardWhite">
          <div className="metricsTitle">
            <p>Tickets Today</p>
            <BsFillArrowUpRightCircleFill  />
          </div>
          <div className="metricsCount">
            <p>105</p>
            <IoArrowUp />
          </div>
          <div className="recentStats">
            <button>5%</button>
            <p>Since yesterday</p>
          </div>
        </div>

         <div className="metricsCardWhite">
          <div className="metricsTitle">
            <p>Revenue Today</p>
            <BsFillArrowUpRightCircleFill  />
          </div>
          <div className="metricsCount">
            <p>1.3k</p>
            <IoArrowUp />
          </div>
          <div className="recentStats">
            <button>2.5%</button>
            <p>Since yesterday</p>
          </div>
        </div> */}
      </div>
      {/* Revenue Overview */}
      <div className="revenueContainer">
        <RevenueChart />
        <EventChart />
      </div>
      <div className="activity">
        <RecentFeeds />
        <SupportSummary />
      </div>
    </>
  );
};

export default DashboardAdmin;
