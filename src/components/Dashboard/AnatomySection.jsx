import React from "react";
import styles from "../../styles/Dashboard.module.css";
import Human from "../../assets/human.png";

const AnatomySection = () => {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.anatomyContent}>
        <div className={styles.humanBody}>
          <img
            src={Human}
            alt="Human Anatomy"
            className={styles.humanImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
