import React from 'react';
import { NavLink } from 'react-router-dom';
import { sideNav } from '../../common/constants/sideNavContants';
import './style.scss';
import Logo from '../Logo';

const SideBar: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };
  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <div className={open ? 'drawer__nav' : 'drawer__nav docked'}>
      <div className="nav-inner">
        <div className="logo-section">
          <Logo className="logo-sidebar d-flex justify-content-start align-items-center" />
        </div>
        <ul className="list-group">
          <li
            className={
              open
                ? 'list-group-item d-flex justify-content-between align-items-center show'
                : 'list-group-item d-flex align-items-center'
            }>
            <span className="icon" onClick={handleDrawerOpen}>
              <i className="astm-icon far fa-bars"></i>
            </span>
            <label className="label flex-grow-1">Menu</label>
            <span className={open ? 'icon show' : 'icon hide'} onClick={handleDrawerClose}>
              <i className="astm-icon far fa-chevron-left"></i>
            </span>
          </li>
          {sideNav.map((item, i) => {
            return (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) => {
                  return isActive
                    ? 'list-group-item nav-item d-flex align-items-center nav-bar-link active'
                    : 'list-group-item nav-item d-flex align-items-center nav-bar-link';
                }}>
                <span className="icon">
                {/* <i className={Icon}></i> */}
                <i className={item.iconClass}></i>
                </span>
                <span className='nav__item__text'>{item.module}</span>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
