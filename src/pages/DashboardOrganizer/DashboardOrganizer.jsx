import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Welcome from "../../components/WelcomeHeader/Welcome";
import SiteMetrics from "../../components/SiteMetrics/SiteMetrics";
import StyledMetrics from "../../components/SiteMetrics/StyledMetrics";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import "./DashboardOrganizer.css";
import RevenueChart from "../../components/Charts/RevenueChart";
import TicketSales from "../../components/Charts/TicketSales";
import RecentFeeds from "../../components/RecentActivity/RecentFeeds";
import QuickActions from "../../components/QuickActions/QuickActions";
import SupportSummary from "../../components/Charts/SupportSummary";

const DashboardOrganizer = () => {
  return (
    <>
      <DashboardHeader role="Organizer" name="Madueke Amara" initials="M" />
      <Welcome />
      <div className="metricsContainer">
        <StyledMetrics
          title="Total Events"
          count={12000}
          stats="58%"
          day="Since November"
        />
        <SiteMetrics
          title="Total Attendees"
          count={8000}
          stats="28%"
          day="Since November"
        />
        <SiteMetrics
          title="Total Revenue"
          count="$25000"
          stats="35%"
          day="Since November"
        />
        <SiteMetrics
          title="Active Events"
          count={75}
          stats="12%"
          day="Since yesterday"
        />
      </div>
      <UpcomingEvents
        title="Tech SummerBootcamp 2025"
        date="5 Dec 2025"
        venue="Twitter"
        price="free"
      />
      {/* Revenue Breakdown */}
      <div className="revenueContainer">
        <RevenueChart />
        <TicketSales />
      </div>
      <div className="quikactions">
      <QuickActions />
      </div>
      <div className="summary">
        <RecentFeeds />
        <SupportSummary />
      </div>
    </>
  );
};

export default DashboardOrganizer;
