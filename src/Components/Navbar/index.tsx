import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { routesConstansts } from '../../common/constants/routesConstants';
import { useAppDispatch } from '../../core/redux';
import { selectOrgPopUpReducer } from '../../core/redux/slice/login';
import { clearLocalStorage } from '../../common/utility/localStorageHandlers';
import { loginChecker } from '../../common/utility/loginChecker';
import { logoutThunk } from '../../core/redux/thunk/login';

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, userDetails, slcOrg } = loginChecker();
  const navigate = useNavigate();

  const logoutHandler = (): void => {
    clearLocalStorage();
    dispatch(logoutThunk());
    navigate(routesConstansts.login);
  };

  const changeOrgHandler = (): void => {
    dispatch(selectOrgPopUpReducer(true));
  };

  if (!isLoggedIn) {
    return <></>;
  } else {
    return (
      <div className="header">
        <div className="header__inner">
          <div className="navbar-left">
            <h3 className="org__name">{slcOrg.name}</h3>
            <span className="change__org" onClick={changeOrgHandler}>
              Switch Organization
            </span>
          </div>
          <div className="navbar-right">
            <div className="astm-dropdown dropdown">
              <button
                type="button"
                className="btn astm-btn astm-link dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {`${userDetails.fName || ''} ${userDetails.lName || ''}`}
              </button>
              <div className="dropdown-menu">
                <span className="dropdown-item" onClick={logoutHandler}>
                  Sign out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default NavBar;
