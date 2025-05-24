import React from 'react';
import styles from '../../styles/Dashboard.module.css';

const AnatomySection = () => {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.anatomyContent}>
        <div className={styles.humanBody}>
          <div className={styles.bodyShape}>
            <div className={`${styles.bodyPart} ${styles.head}`}></div>
            <div className={`${styles.bodyPart} ${styles.chest}`}></div>
            <div className={`${styles.bodyPart} ${styles.torso}`}></div>
            <div className={`${styles.bodyPart} ${styles.legs}`}></div>
          </div>
          
          <div className={`${styles.healthIndicator} ${styles.heartIndicator}`}>
            ❤️ Healthy Heart
          </div>
          <div className={`${styles.healthIndicator} ${styles.lungsIndicator}`}>
            🫁 Lungs
          </div>
          <div className={`${styles.healthIndicator} ${styles.teethIndicator}`}>
            🦷 Teeth
          </div>
          <div className={`${styles.healthIndicator} ${styles.boneIndicator}`}>
            🦴 Bone
          </div>
        </div>
      </div>
      
      <button className={styles.healthyLogButton}>
        Healthy Log
      </button>
    </div>
  );
};

export default AnatomySection;