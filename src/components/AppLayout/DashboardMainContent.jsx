import React from "react";
import AnatomySection from "../Dashboard/AnatomySection";
import HealthStatusCards from "../Dashboard/HealthStatusCards";
import CalendarView from "../Dashboard/CalendarView";
import UpcomingSchedule from "../Dashboard/UpcomingSchedule";
import ActivityFeed from "../Dashboard/ActivityFeed";
import styles from "../../styles/Dashboard.module.css";

const DashboardMainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>{"Dashboard"}</h1>
        <div className={styles.subtitle}>This Week</div>
      </div>

      <div className={styles.grid}>
        <AnatomySection />
        <HealthStatusCards />
        <CalendarView />
        <ActivityFeed />
        <UpcomingSchedule />
      </div>
    </main>
  );
};

export default DashboardMainContent;
