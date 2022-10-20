import React from 'react';
import { Navigate } from 'react-router-dom';
import { routesConstansts } from '../../common/constants/routesConstants';
import { loginChecker } from '../../common/utility/loginChecker';

interface IPublicRouteProps {
  Component: React.FC;
}

const PublicRoute: React.FC<IPublicRouteProps> = (props) => {
  const { Component } = props;

  const { isLoggedIn, slcOrg } = loginChecker();

  if (isLoggedIn && slcOrg.id) {
    return <Navigate to={routesConstansts.dashboard} />;
  } else {
    return (
      <div>
        <Component />
      </div>
    );
  }
};
export default PublicRoute;
