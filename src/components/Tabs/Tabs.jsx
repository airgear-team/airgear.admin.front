import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './styles.module.scss';

const Tabs = () => {
  return (
    <div className={style.tabs}>
      <NavLink
        to={'/users'}
        className={[style["tab"], style["active"]].join(" ")}
      // className={({ isActive }) => `${style.tab} ${isActive ? style.active : ''}`}
      >
        <span>USER</span>
      </NavLink>
      <NavLink
        to={'/users'}
        className={({ isActive }) => `${style.tab} ${isActive ? style.active : ''}`}
      >
        <span>GOODS</span>
      </NavLink>
      <NavLink
        to={'/users'}
        className={({ isActive }) => `${style.tab} ${isActive ? style.active : ''}`}
      >
        <span>MESSAGES</span>
      </NavLink>
    </div>
  );
};

export default Tabs;
