import React from 'react';
import { ChevronLeft, ChevronRight, User, Activity } from 'lucide-react';
import { calendarData } from '../../data/calendar';
import styles from '../../styles/Dashboard.module.css';

const CalendarView = () => {
  return (
    <div className={styles.calendarView}>
      <div className={styles.calendarHeader}>
        <h2 className={styles.calendarTitle}>{calendarData.month}</h2>
        <div className={styles.calendarNav}>
          <button className={styles.navButton}>
            <ChevronLeft className={styles.navIcon} />
          </button>
          <button className={styles.navButton}>
            <ChevronRight className={styles.navIcon} />
          </button>
        </div>
      </div>
      
      <div className={styles.calendarGrid}>
        {calendarData.days.map((day, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.dayLabel}>{day.day}</div>
            <div className={styles.dateNumber}>{day.date}</div>
            <div className={styles.appointments}>
              {day.appointments.map((time, timeIndex) => (
                <div key={timeIndex} className={styles.appointmentTime}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.todayAppointments}>
        <div className={`${styles.appointmentCard} ${styles.dentistCard}`}>
          <div className={styles.appointmentHeader}>
            <User className={styles.appointmentIcon} />
            <span className={styles.appointmentType}>Dentist</span>
          </div>
          <div className={styles.appointmentTime}>09:00-11:00</div>
          <div className={styles.doctorName}>Dr Cameron Williamson</div>
        </div>
        <div className={`${styles.appointmentCard} ${styles.physioCard}`}>
          <div className={styles.appointmentHeader}>
            <Activity className={styles.appointmentIcon} />
            <span className={styles.appointmentType}>Physiotherapy Appointment</span>
          </div>
          <div className={styles.appointmentTime}>11:00-12:00</div>
          <div className={styles.doctorName}>Dr Kevin Djeres</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;