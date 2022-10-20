import React from 'react';
import { Navigate } from 'react-router-dom';
import { routesConstansts } from '../../common/constants/routesConstants';
import SideBar from '../../Components/SideBar';
import { loginChecker } from '../../common/utility/loginChecker';
import NavBar from '../../Components/Navbar';

interface IPrivateRouteProps {
  Component: React.FC;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
  const { Component } = props;
  const { isLoggedIn } = loginChecker();

  if (isLoggedIn) {
    return (
      <>
        <div className="d-flex">
          <SideBar />
          <div className="content__main">
            <NavBar />
            <Component />
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to={routesConstansts.login} />;
  }
};
export default PrivateRoute;
