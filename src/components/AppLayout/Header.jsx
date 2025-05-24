import React from 'react';
import { Search, Bell, Plus, User } from 'lucide-react';
import styles from '../../styles/Header.module.css';
import Notification from '../../assets/notification-bell.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <img src={Notification} className={styles.notificationIcon} />
        </div>
      </div>
      <div className={styles.rightSection}>
        
        <div className={styles.avatar}>
          <User className={styles.avatarIcon} />
        </div>
        <button className={styles.addButton}>
          <Plus className={styles.addIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;