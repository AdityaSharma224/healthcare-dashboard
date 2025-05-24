import React from "react";
import {
  navigationItemsGeneral,
  navigationItemsTools,
} from "../../data/navLinks";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.navigationSection}>
        <h1 className={styles.logo}>
          <span className={styles.logoHighlight}>{"Health"}</span>
          {"care."}
        </h1>
        <h3 className={styles.sectionTitle}>{"General"}</h3>
        <nav className={styles.navigation}>
          {navigationItemsGeneral.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`${styles.navItem} ${
                  item.active ? styles.navItemActive : styles.navItemInactive
                }`}
              >
                <Icon className={styles.navIcon} />
                <span className={styles.navLabel}>{item.label}</span>
              </a>
            );
          })}
        </nav>
        <h3 className={styles.sectionTitle}>{"Tools"}</h3>
        <nav className={styles.navigation}>
          {navigationItemsTools.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`${styles.navItem} ${
                  item.active ? styles.navItemActive : styles.navItemInactive
                }`}
              >
                <Icon className={styles.navIcon} />
                <span className={styles.navLabel}>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
