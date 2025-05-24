import React from 'react';
import { upcomingAppointments } from '../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import styles from '../../styles/Dashboard.module.css';

const UpcomingSchedule = () => {
  return (
    <div className={styles.upcomingSchedule}>
      <h2 className={styles.scheduleTitle}>The Upcoming Schedule</h2>
      
      {upcomingAppointments.map((dayData, index) => (
        <div key={index} className={styles.daySection}>
          <h3 className={styles.dayTitle}>On {dayData.day}</h3>
          <div className={styles.appointmentGrid}>
            {dayData.appointments.map((appointment, appointmentIndex) => (
              <SimpleAppointmentCard key={appointmentIndex} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;