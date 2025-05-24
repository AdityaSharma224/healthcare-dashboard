import React from 'react';
import { activityData } from '../../data/healthData';
import styles from '../../styles/Dashboard.module.css';

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.map(item => item.value));
  
  return (
    <div className={styles.activityFeed}>
      <h2 className={styles.activityTitle}>
        {'Activity'}
      </h2>
      <p className={styles.activitySubtitle}>{'3 appointments on this week'}</p>
      
      <div className={styles.chartContainer}>
        {activityData.map((item, index) => (
          <div key={index} className={styles.chartBar}>
            <div 
              className={styles.bar}
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span className={styles.dayLabel}>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;