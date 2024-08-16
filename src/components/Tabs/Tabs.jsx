import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <NavLink
        to="/users"
        className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
      >
        USERS
      </NavLink>
      <NavLink
        to="/goods"
        className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
      >
        GOODS
      </NavLink>
      <NavLink
        to="/messages"
        className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
      >
        MESSAGES
      </NavLink>
    </div>
  );
};

export default Tabs;
