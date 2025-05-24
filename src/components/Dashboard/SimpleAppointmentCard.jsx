import React from 'react';
import styles from '../../styles/Dashboard.module.css';

const SimpleAppointmentCard = ({ appointment }) => {
  const Icon = appointment.icon;
  
  return (
    <div className={styles.simpleAppointmentCard}>
      <div className={styles.appointmentContent}>
        <div className={styles.appointmentDetails}>
          <h4>{appointment.title}</h4>
          <p>{appointment.time}</p>
        </div>
        <Icon className={styles.appointmentCardIcon} />
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;