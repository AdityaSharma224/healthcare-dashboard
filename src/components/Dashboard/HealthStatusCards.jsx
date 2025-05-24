import React from 'react';
import { healthStatusData } from '../../data/healthData';
import styles from '../../styles/Dashboard.module.css';

const HealthStatusCards = () => {
  return (
    <div className={styles.healthStatusCards}>
      {healthStatusData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className={styles.healthCard}>
            <div className={styles.healthCardHeader}>
              <div className={`${styles.healthIcon} ${
                item.status === 'healthy' ? styles.healthIconHealthy : styles.healthIconIssue
              }`}>
                <Icon className={item.status === 'healthy' ? styles.iconHealthy : styles.iconIssue} />
              </div>
              <div className={styles.healthInfo}>
                <h3>{item.organ}</h3>
                <p>{item.date}</p>
              </div>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={`${styles.progressFill} ${
                  item.status === 'healthy' ? styles.progressHealthy : styles.progressIssue
                }`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;